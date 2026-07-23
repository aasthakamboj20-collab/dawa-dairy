const express = require('express');
const { nanoid } = require('nanoid');
const db = require('../db');
const { requireAuth, canAccessPatient } = require('../middleware/auth');
const { extractPrescription } = require('../utils/gemini');

const router = express.Router();

// Step 1: read a prescription image and return a DRAFT extraction (nothing saved yet)
router.post('/extract', requireAuth, async (req, res) => {
  const { imageBase64, mediaType } = req.body || {};
  if (!imageBase64 || !mediaType) {
    return res.status(400).json({ error: 'imageBase64 and mediaType are required.' });
  }
  try {
    const result = await extractPrescription(imageBase64, mediaType);
    res.json(result);
  } catch (e) {
    console.error('Extraction failed:', e.message);
    res.status(502).json({ error: e.message || 'Extraction failed. Please try again.' });
  }
});

// Step 2: save a CONFIRMED prescription (after the human review screen)
router.post('/', requireAuth, (req, res) => {
  const { patientId, imageData, lowConfidence, medicines, instructions } = req.body || {};
  const targetPatient = patientId || req.user.id;

  if (!canAccessPatient(req.user.id, targetPatient)) {
    return res.status(403).json({ error: 'Not allowed to add prescriptions for this patient.' });
  }
  if (!imageData || !Array.isArray(medicines) || medicines.length === 0) {
    return res.status(400).json({ error: 'imageData and at least one medicine are required.' });
  }

  const rxId = nanoid();
  const insertRx = db.prepare(
    'INSERT INTO prescriptions (id, patient_id, image_data, low_confidence) VALUES (?,?,?,?)'
  );
  const insertMed = db.prepare(`
    INSERT INTO medicines (id, prescription_id, name_en, name_hi, dosage, frequency_per_day, slots, food_relation, duration_days, notes)
    VALUES (?,?,?,?,?,?,?,?,?,?)
  `);
  const insertInstr = db.prepare(
    'INSERT INTO instructions (id, prescription_id, type, text_en, text_hi) VALUES (?,?,?,?,?)'
  );

  const tx = db.transaction(() => {
    insertRx.run(rxId, targetPatient, imageData, lowConfidence ? 1 : 0);
    medicines.forEach((m) => {
      insertMed.run(
        nanoid(), rxId, m.name_en || '', m.name_hi || '', m.dosage || '',
        m.frequency_per_day || 1, JSON.stringify(m.slots || ['morning']),
        m.food_relation || 'none', m.duration_days || null, m.notes || ''
      );
    });
    (instructions || []).forEach((i) => {
      insertInstr.run(nanoid(), rxId, i.type || 'other', i.text_en || '', i.text_hi || '');
    });
  });
  tx();

  res.json(getFullPrescription(rxId));
});

// List all confirmed prescriptions for a patient (self, or a linked caregiver viewing them)
router.get('/', requireAuth, (req, res) => {
  const patientId = req.query.patientId || req.user.id;
  if (!canAccessPatient(req.user.id, patientId)) {
    return res.status(403).json({ error: 'Not allowed to view this patient.' });
  }
  const rows = db.prepare('SELECT id FROM prescriptions WHERE patient_id = ? ORDER BY created_at DESC').all(patientId);
  res.json({ prescriptions: rows.map((r) => getFullPrescription(r.id)) });
});

router.delete('/:id', requireAuth, (req, res) => {
  const rx = db.prepare('SELECT * FROM prescriptions WHERE id = ?').get(req.params.id);
  if (!rx) return res.status(404).json({ error: 'Not found.' });
  if (!canAccessPatient(req.user.id, rx.patient_id)) {
    return res.status(403).json({ error: 'Not allowed to delete this.' });
  }
  db.prepare('DELETE FROM prescriptions WHERE id = ?').run(req.params.id); // cascades to medicines/instructions/adherence
  res.json({ ok: true });
});

function getFullPrescription(id) {
  const rx = db.prepare('SELECT * FROM prescriptions WHERE id = ?').get(id);
  const medicines = db.prepare('SELECT * FROM medicines WHERE prescription_id = ?').all(id)
    .map((m) => ({ ...m, slots: JSON.parse(m.slots || '[]') }));
  const instructions = db.prepare('SELECT * FROM instructions WHERE prescription_id = ?').all(id);
  return {
    id: rx.id,
    patientId: rx.patient_id,
    imageData: rx.image_data,
    lowConfidence: !!rx.low_confidence,
    createdAt: rx.created_at,
    medicines,
    instructions,
  };
}

module.exports = router;
