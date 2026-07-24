// Point this at wherever the backend server is running.
// Default assumes you started it locally with `npm start` inside /backend.
window.API_BASE = window.location.hostname === 'localhost' 
  ? 'http://localhost:4000/api' 
  : 'https://dawa-dairy-backend.onrender.com/api';
