const path = require('path');
const { DatabaseSync } = require('node:sqlite');

// Node's built-in SQLite module (stable since Node 22+) — no native
// compilation step, so nothing to build on install. Requires Node >= 22.5.
const db = new DatabaseSync(path.join(__dirname, 'data.sqlite'));

db.exec('PRAGMA journal_mode = WAL;');
db.exec('PRAGMA foreign_keys = ON;');

db.exec(`
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  family_code TEXT UNIQUE,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS family_links (
  id TEXT PRIMARY KEY,
  patient_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  caregiver_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(patient_id, caregiver_id)
);

CREATE TABLE IF NOT EXISTS prescriptions (
  id TEXT PRIMARY KEY,
  patient_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  image_data TEXT NOT NULL,
  low_confidence INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS medicines (
  id TEXT PRIMARY KEY,
  prescription_id TEXT NOT NULL REFERENCES prescriptions(id) ON DELETE CASCADE,
  name_en TEXT,
  name_hi TEXT,
  dosage TEXT,
  frequency_per_day INTEGER DEFAULT 1,
  slots TEXT NOT NULL DEFAULT '[]',
  food_relation TEXT DEFAULT 'none',
  duration_days INTEGER,
  notes TEXT
);

CREATE TABLE IF NOT EXISTS instructions (
  id TEXT PRIMARY KEY,
  prescription_id TEXT NOT NULL REFERENCES prescriptions(id) ON DELETE CASCADE,
  type TEXT,
  text_en TEXT,
  text_hi TEXT
);

CREATE TABLE IF NOT EXISTS adherence (
  id TEXT PRIMARY KEY,
  patient_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  medicine_id TEXT NOT NULL REFERENCES medicines(id) ON DELETE CASCADE,
  date TEXT NOT NULL,
  taken INTEGER NOT NULL DEFAULT 1,
  UNIQUE(medicine_id, date)
);
`);

// Small helper so route files can wrap multi-statement writes in a transaction,
// mirroring the ergonomics of better-sqlite3's db.transaction(fn).
db.transaction = function transaction(fn) {
  return function (...args) {
    db.exec('BEGIN');
    try {
      const result = fn(...args);
      db.exec('COMMIT');
      return result;
    } catch (e) {
      db.exec('ROLLBACK');
      throw e;
    }
  };
};

module.exports = db;

