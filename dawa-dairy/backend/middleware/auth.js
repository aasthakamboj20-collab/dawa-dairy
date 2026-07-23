const jwt = require('jsonwebtoken');
const db = require('../db');

function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Not signed in.' });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = db.prepare('SELECT id, name, email, family_code FROM users WHERE id = ?').get(payload.sub);
    if (!user) return res.status(401).json({ error: 'Session no longer valid.' });
    req.user = user;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Session expired or invalid.' });
  }
}

// Returns true if requester is allowed to see/edit patientId's data:
// either the requester IS the patient, or is a linked caregiver.
function canAccessPatient(requesterId, patientId) {
  if (requesterId === patientId) return true;
  const link = db.prepare(
    'SELECT id FROM family_links WHERE patient_id = ? AND caregiver_id = ?'
  ).get(patientId, requesterId);
  return !!link;
}

module.exports = { requireAuth, canAccessPatient };
