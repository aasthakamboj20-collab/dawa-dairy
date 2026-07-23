const express = require('express');
const { nanoid } = require('nanoid');
const db = require('../db');
const { requireAuth, canAccessPatient } = require('../middleware/auth');

const router = express.Router();

// Get adherence records for a patient, optionally within a date range
router.get('/', requireAuth, (req, res) => {
  const patientId = req.query.patientId || req.user.id;
  if (!canAccessPatient(req.user.id, patientId)) {
    return res.status(403).json({ error: 'Not allowed to view this patient.' });
  }
  const { from, to } = req.query;
  let rows;
  if (from && to) {
    rows = db.prepare('SELECT medicine_id, date, taken FROM adherence WHERE patient_id = ? AND date BETWEEN ? AND ?')
      .all(patientId, from, to);
  } else {
    rows = db.prepare('SELECT medicine_id, date, taken FROM adherence WHERE patient_id = ?').all(patientId);
  }
  res.json({ adherence: rows });
});

// Toggle / set whether a dose was taken on a given date
router.post('/', requireAuth, (req, res) => {
  const { patientId, medicineId, date, taken } = req.body || {};
  const targetPatient = patientId || req.user.id;
  if (!canAccessPatient(req.user.id, targetPatient)) {
    return res.status(403).json({ error: 'Not allowed to update this patient.' });
  }
  if (!medicineId || !date) return res.status(400).json({ error: 'medicineId and date are required.' });

  const existing = db.prepare('SELECT id FROM adherence WHERE medicine_id = ? AND date = ?').get(medicineId, date);
  if (existing) {
    db.prepare('UPDATE adherence SET taken = ? WHERE id = ?').run(taken ? 1 : 0, existing.id);
  } else {
    db.prepare('INSERT INTO adherence (id, patient_id, medicine_id, date, taken) VALUES (?,?,?,?,?)')
      .run(nanoid(), targetPatient, medicineId, date, taken ? 1 : 0);
  }
  res.json({ ok: true });
});

module.exports = router;
