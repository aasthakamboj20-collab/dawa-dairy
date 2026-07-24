require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const prescriptionRoutes = require('./routes/prescriptions');
const familyRoutes = require('./routes/family');
const adherenceRoutes = require('./routes/adherence');

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
// Prescription images are base64 — allow a generous body size
app.use(express.json({ limit: '15mb' }));

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.use('/api/auth', authRoutes);
app.use('/api/prescriptions', prescriptionRoutes);
app.use('/api/family', familyRoutes);
app.use('/api/adherence', adherenceRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong on the server.' });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Dawa Dairy API running on http://localhost:${PORT}`);
  if (!process.env.GEMINI_API_KEY) {
    console.warn('WARNING: GEMINI_API_KEY is not set — prescription extraction will fail until you add it to backend/.env');
  }
  if (!process.env.JWT_SECRET || process.env.JWT_SECRET === 'replace_this_with_a_long_random_string') {
    console.warn('WARNING: Set a real JWT_SECRET in backend/.env before deploying.');
  }
});
