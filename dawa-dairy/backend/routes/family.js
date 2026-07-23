const express = require('express');
const { nanoid } = require('nanoid');
const db = require('../db');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

function genCode() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

// Get or create my own family code (I am the patient sharing access)
router.post('/code', requireAuth, (req, res) => {
  let code = req.user.family_code;
  if (!code) {
    code = genCode();
    db.prepare('UPDATE users SET family_code = ? WHERE id = ?').run(code, req.user.id);
  }
  res.json({ familyCode: code });
});

// Join a patient's circle using their code (I become a caregiver for them)
router.post('/join', requireAuth, (req, res) => {
  const { code } = req.body || {};
  if (!code) return res.status(400).json({ error: 'A family code is required.' });

  const patient = db.prepare('SELECT * FROM users WHERE family_code = ?').get(code.toUpperCase());
  if (!patient) return res.status(404).json({ error: 'No account found with that code.' });
  if (patient.id === req.user.id) return res.status(400).json({ error: "That's your own code." });

  const existing = db.prepare(
    'SELECT id FROM family_links WHERE patient_id = ? AND caregiver_id = ?'
  ).get(patient.id, req.user.id);
  if (existing) return res.status(409).json({ error: 'You are already linked to this person.' });

  db.prepare('INSERT INTO family_links (id, patient_id, caregiver_id) VALUES (?,?,?)')
    .run(nanoid(), patient.id, req.user.id);

  res.json({ patient: { id: patient.id, name: patient.name } });
});

// List caregivers linked to me (as a patient)
router.get('/members', requireAuth, (req, res) => {
  const rows = db.prepare(`
    SELECT fl.id as linkId, u.id as userId, u.name, u.email
    FROM family_links fl JOIN users u ON u.id = fl.caregiver_id
    WHERE fl.patient_id = ?
    ORDER BY fl.created_at ASC
  `).all(req.user.id);
  res.json({ members: rows });
});

// List patients I (as a caregiver) can view
router.get('/my-patients', requireAuth, (req, res) => {
  const rows = db.prepare(`
    SELECT fl.id as linkId, u.id as userId, u.name
    FROM family_links fl JOIN users u ON u.id = fl.patient_id
    WHERE fl.caregiver_id = ?
    ORDER BY fl.created_at ASC
  `).all(req.user.id);
  res.json({ patients: rows });
});

// Patient removes a caregiver link
router.delete('/members/:linkId', requireAuth, (req, res) => {
  const link = db.prepare('SELECT * FROM family_links WHERE id = ?').get(req.params.linkId);
  if (!link || link.patient_id !== req.user.id) {
    return res.status(404).json({ error: 'Link not found.' });
  }
  db.prepare('DELETE FROM family_links WHERE id = ?').run(req.params.linkId);
  res.json({ ok: true });
});

module.exports = router;
