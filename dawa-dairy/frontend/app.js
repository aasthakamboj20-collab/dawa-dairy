/* ============================= I18N ============================= */
const STR = {
  en: {
    tagline: "Your prescriptions, organised — not diagnosed",
    disclaimer: "This app helps you follow your doctor's instructions. Always consult your doctor before changing any medicine or exercise routine.",
    tabs: { upload: "Upload", review: "Review", today: "Today", week: "This Week", family: "Family", settings: "Settings" },
    up_title: "Add a prescription",
    up_hint: "Upload a photo, scan or PDF of a prescription or discharge summary. Nothing is added to the schedule until it's reviewed and confirmed.",
    up_cta: "Choose a file",
    up_drag: "or drop an image here",
    up_extract: "Extract with AI",
    up_extracting: "Reading prescription…",
    up_disclaimer: "AI extraction can make mistakes, especially with handwriting. Every line is reviewed before it becomes the schedule.",
    rev_title: "Confirm what we read",
    rev_hint: "Check each medicine against the original. Edit anything that looks wrong — nothing is saved until confirmed.",
    rev_original: "Show original prescription",
    rev_hide_original: "Hide original",
    rev_confirm: "Confirm & build schedule",
    rev_addmed: "Add a medicine manually",
    rev_food_before: "Before food", rev_food_after: "After food", rev_food_none: "No food instruction",
    rev_instr_title: "Exercise / lifestyle instructions found",
    today_title: "Today",
    week_title: "This week's adherence",
    week_hint: "A gentle overview — not a scorecard.",
    fam_title: "Family & caregiver mode",
    fam_hint: "Share this code with a family member so they can be linked to your schedule and get the same reminders.",
    fam_copy: "Copy code",
    fam_join_title: "Link to someone else's schedule",
    fam_join_placeholder: "Enter their family code",
    fam_join_btn: "Join",
    fam_members: "People you've linked",
    fam_view_schedule: "View schedule", fam_hide_schedule: "Hide schedule",
    fam_delete: "Remove",
    fam_caregiver_note: "Linked caregivers see the same daily schedule and weekly adherence — no separate setup needed.",
    fam_switch: "Viewing schedule for",
    fam_switch_self: "Myself",
    settings_title: "Settings",
    settings_lang: "App language",
    settings_voice: "Voice reminders (Hindi)",
    settings_browser_reminders: "Browser reminders (this tab, while open)",
    settings_logout: "Log out",
    slot_morning: "Morning", slot_afternoon: "Afternoon", slot_evening: "Evening", slot_night: "Night",
    refill_title: "Refill coming up",
    refill_days: (n) => `Supply of ${n > 1 ? "these medicines" : "this medicine"} runs out in ${n} day${n === 1 ? "" : "s"}.`,
    empty_today: "No confirmed medicines yet. Upload a prescription to get started.",
    listen: "Listen in Hindi",
    exercise: "Exercise / physio instruction",
    duration: "Duration (days)",
    dosage: "Dosage", name_en: "Medicine name (English)", name_hi: "Medicine name (Hindi)",
    remove: "Remove",
    confirmed_banner: "Confirmed",
    week_days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    login: "Log in", register: "Create account",
    name_field: "Name", email_field: "Email", password_field: "Password",
    auth_switch_to_register: "New here? Create an account",
    auth_switch_to_login: "Already have an account? Log in",
    sure: "Sure?", yes: "Yes", no: "No", cancel: "Cancel",
    reset_note: "This is a real backend now — data persists in the SQLite database until you delete it yourself.",
  },
  hi: {
    tagline: "आपकी दवाइयाँ, व्यवस्थित — निदान नहीं",
    disclaimer: "यह ऐप आपको डॉक्टर के निर्देशों का पालन करने में मदद करता है। किसी भी दवा या व्यायाम में बदलाव से पहले हमेशा अपने डॉक्टर से सलाह लें।",
    tabs: { upload: "अपलोड करें", review: "समीक्षा करें", today: "आज", week: "इस सप्ताह", family: "परिवार", settings: "सेटिंग्स" },
    up_title: "पर्ची जोड़ें",
    up_hint: "पर्ची या डिस्चार्ज समरी की फोटो, स्कैन या PDF अपलोड करें। समीक्षा व पुष्टि से पहले कुछ भी शेड्यूल में नहीं जुड़ेगा।",
    up_cta: "फ़ाइल चुनें",
    up_drag: "या यहाँ इमेज खींचकर छोड़ें",
    up_extract: "AI से पढ़वाएँ",
    up_extracting: "पर्ची पढ़ी जा रही है…",
    up_disclaimer: "AI गलती कर सकता है, खासकर हाथ से लिखी पर्ची में। पुष्टि से पहले हर पंक्ति जाँची जाती है।",
    rev_title: "जो पढ़ा गया उसकी पुष्टि करें",
    rev_hint: "हर दवा को असली पर्ची से मिलाएँ। जो गलत लगे उसे बदलें — पुष्टि करने तक कुछ भी सेव नहीं होगा।",
    rev_original: "असली पर्ची देखें",
    rev_hide_original: "असली पर्ची छिपाएँ",
    rev_confirm: "पुष्टि करें और शेड्यूल बनाएं",
    rev_addmed: "मैन्युअल रूप से दवा जोड़ें",
    rev_food_before: "खाने से पहले", rev_food_after: "खाने के बाद", rev_food_none: "कोई निर्देश नहीं",
    rev_instr_title: "मिली व्यायाम / जीवनशैली सम्बन्धी सलाह",
    today_title: "आज",
    week_title: "इस सप्ताह का पालन",
    week_hint: "एक हल्की झलक — कोई स्कोरकार्ड नहीं।",
    fam_title: "परिवार व देखभालकर्ता मोड",
    fam_hint: "यह कोड परिवार के किसी सदस्य के साथ साझा करें ताकि वे आपके शेड्यूल से जुड़ सकें।",
    fam_copy: "कोड कॉपी करें",
    fam_join_title: "किसी और के शेड्यूल से जुड़ें",
    fam_join_placeholder: "उनका परिवार कोड डालें",
    fam_join_btn: "जुड़ें",
    fam_members: "जुड़े हुए लोग",
    fam_view_schedule: "शेड्यूल देखें", fam_hide_schedule: "शेड्यूल छिपाएं",
    fam_delete: "हटाएं",
    fam_caregiver_note: "जुड़े देखभालकर्ताओं को वही दैनिक शेड्यूल और साप्ताहिक पालन दिखता है — अलग सेटअप की ज़रूरत नहीं।",
    fam_switch: "शेड्यूल देखा जा रहा है",
    fam_switch_self: "स्वयं",
    settings_title: "सेटिंग्स",
    settings_lang: "ऐप की भाषा",
    settings_voice: "आवाज़ में रिमाइंडर (हिंदी)",
    settings_browser_reminders: "ब्राउज़र रिमाइंडर (यह टैब खुला रहने पर)",
    settings_logout: "लॉग आउट",
    slot_morning: "सुबह", slot_afternoon: "दोपहर", slot_evening: "शाम", slot_night: "रात",
    refill_title: "दवा जल्द खत्म होगी",
    refill_days: (n) => `दवा ${n} दिन में खत्म हो जाएगी।`,
    empty_today: "अभी कोई पुष्टि की गई दवा नहीं है। शुरू करने के लिए पर्ची अपलोड करें।",
    listen: "हिंदी में सुनें",
    exercise: "व्यायाम / फिज़ियो निर्देश",
    duration: "अवधि (दिन)",
    dosage: "मात्रा", name_en: "दवा का नाम (अंग्रेज़ी)", name_hi: "दवा का नाम (हिंदी)",
    remove: "हटाएं",
    confirmed_banner: "पुष्टि हुई",
    week_days: ["सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि", "रवि"],
    login: "लॉग इन", register: "खाता बनाएं",
    name_field: "नाम", email_field: "ईमेल", password_field: "पासवर्ड",
    auth_switch_to_register: "नए हैं? खाता बनाएं",
    auth_switch_to_login: "पहले से खाता है? लॉग इन करें",
    sure: "पक्का?", yes: "हाँ", no: "नहीं", cancel: "रद्द करें",
    reset_note: "अब यह एक असली बैकएंड है — डेटा SQLite डेटाबेस में तब तक रहेगा जब तक आप खुद न मिटाएं।",
  }
};
function t() { return STR[state.lang]; }

/* ============================= STATE ============================= */
const state = {
  token: localStorage.getItem('pt_token') || null,
  user: JSON.parse(localStorage.getItem('pt_user') || 'null'),
  lang: localStorage.getItem('pt_lang') || 'en',
  authMode: 'login',
  authError: null,
  authLoading: false,

  tab: 'upload',
  draft: null,
  loadingExtract: false,
  extractError: null,
  showOriginalInReview: true,

  prescriptions: [],
  adherence: {},
  loadingData: false,

  patients: [],
  viewingPatientId: null,
  familyCode: null,
  members: [],
  joinCodeInput: '',
  joinError: null,

  pendingDeleteMemberId: null,
  pendingDeleteRxId: null,
  expandedMemberId: null,
  voiceOn: true,
  browserReminders: false,
  notifiedToday: new Set(),
};

/* ============================= API HELPER ============================= */
async function api(path, opts = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (state.token) headers.Authorization = `Bearer ${state.token}`;
  const resp = await fetch(window.API_BASE + path, {
    method: opts.method || 'GET',
    headers,
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  let data = {};
  try { data = await resp.json(); } catch (e) { /* no body */ }
  if (!resp.ok) throw new Error(data.error || `Request failed (${resp.status})`);
  return data;
}

/* ============================= HELPERS ============================= */
function uid() { return Math.random().toString(36).slice(2, 10); }
function todayKey(d = new Date()) { return d.toISOString().slice(0, 10); }
function escAttr(s) { return (s || '').toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;'); }
function fileToBase64(file) {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(file);
  });
}
function slotIcon(slot) {
  const icons = {
    morning: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="17" r="5" stroke="#fff" stroke-width="2"/><path d="M12 3v3M4 17H2M22 17h-2M5 10l1.5 1.5M19 10l-1.5 1.5" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`,
    afternoon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="#fff" stroke-width="2"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`,
    evening: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 14.5A7.5 7.5 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></svg>`,
    night: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 14.5A7.5 7.5 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" stroke="#fff" stroke-width="2" stroke-linejoin="round"/><circle cx="17" cy="6" r="1" fill="#fff"/><circle cx="19.5" cy="9" r=".7" fill="#fff"/></svg>`
  };
  return icons[slot] || '';
}
function slotColor(slot) { return { morning: '#F0B15C', afternoon: '#5FAFA0', evening: '#EF9686', night: '#9B93D9' }[slot]; }
function instrIcon(type) { return { walk: '🚶', stretch: '🤸', breathing: '🫁', diet: '🥗', other: '✅' }[type] || '✅'; }
function slotLabel(slot) { return t()[`slot_${slot}`]; }
function foodLabel(fr) {
  if (fr === 'before_food') return t().rev_food_before;
  if (fr === 'after_food') return t().rev_food_after;
  return t().rev_food_none;
}
function speakHindi(text) {
  if (!('speechSynthesis' in window) || !text) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'hi-IN'; u.rate = 0.92;
  const voices = window.speechSynthesis.getVoices();
  const hv = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('hi'));
  if (hv) u.voice = hv;
  window.speechSynthesis.speak(u);
}
function allMedicines() {
  const meds = [];
  state.prescriptions.forEach(p => {
    p.medicines.forEach(m => meds.push({ ...m, prescriptionId: p.id, startedAt: p.createdAt }));
  });
  return meds;
}
function allInstructions() {
  const list = [];
  state.prescriptions.forEach(p => (p.instructions || []).forEach(i => list.push(i)));
  return list;
}
function daysLeft(med) {
  if (!med.duration_days) return null;
  const start = new Date(med.startedAt);
  const end = new Date(start.getTime() + med.duration_days * 86400000);
  return Math.ceil((end - new Date()) / 86400000);
}
function isSelf() { return !state.viewingPatientId || state.viewingPatientId === state.user.id; }

/* ============================= AUTH ============================= */
function saveSession(token, user) {
  state.token = token; state.user = user;
  localStorage.setItem('pt_token', token);
  localStorage.setItem('pt_user', JSON.stringify(user));
  state.familyCode = user.familyCode || null;
}
function clearSession() {
  state.token = null; state.user = null;
  localStorage.removeItem('pt_token'); localStorage.removeItem('pt_user');
  state.prescriptions = []; state.adherence = {}; state.patients = []; state.members = [];
  state.viewingPatientId = null; state.tab = 'upload';
}
async function login(email, password) {
  state.authLoading = true; state.authError = null; render();
  try {
    const data = await api('/auth/login', { method: 'POST', body: { email, password } });
    saveSession(data.token, data.user);
    await afterLogin();
  } catch (e) { state.authError = e.message; }
  state.authLoading = false; render();
}
async function register(name, email, password) {
  state.authLoading = true; state.authError = null; render();
  try {
    const data = await api('/auth/register', { method: 'POST', body: { name, email, password } });
    saveSession(data.token, data.user);
    await afterLogin();
  } catch (e) { state.authError = e.message; }
  state.authLoading = false; render();
}
function logout() { clearSession(); render(); }

async function afterLogin() {
  state.viewingPatientId = state.user.id;
  await Promise.all([loadFamilyCode(), loadMembers(), loadMyPatients()]);
  await loadPatientData(state.viewingPatientId);
}

/* ============================= DATA LOADING ============================= */
async function loadFamilyCode() {
  try { const d = await api('/family/code', { method: 'POST' }); state.familyCode = d.familyCode; } catch (e) { /* ignore */ }
}
async function loadMembers() {
  try { const d = await api('/family/members'); state.members = d.members; } catch (e) { /* ignore */ }
}
async function loadMyPatients() {
  try { const d = await api('/family/my-patients'); state.patients = d.patients; } catch (e) { /* ignore */ }
}
async function loadPatientData(patientId) {
  state.loadingData = true; render();
  try {
    const [rxData, adhData] = await Promise.all([
      api('/prescriptions?patientId=' + encodeURIComponent(patientId)),
      api('/adherence?patientId=' + encodeURIComponent(patientId)),
    ]);
    state.prescriptions = rxData.prescriptions;
    const map = {};
    adhData.adherence.forEach(r => {
      map[r.date] = map[r.date] || {};
      map[r.date][r.medicine_id] = !!r.taken;
    });
    state.adherence = map;
  } catch (e) { console.error(e); }
  state.loadingData = false; render();
}
async function switchPatient(patientId) {
  state.viewingPatientId = patientId;
  state.expandedMemberId = null;
  await loadPatientData(patientId);
}

/* ============================= UPLOAD / EXTRACT / REVIEW ============================= */
async function onFileSelected(file) {
  if (!file) return;
  const mediaType = file.type || 'image/jpeg';
  const dataUrl = await fileToBase64(file);
  const base64 = dataUrl.split(',')[1];
  state.draft = {
    id: uid(), imageData: dataUrl, mediaType, base64,
    medicines: [], instructions: [], extracted: false, lowConfidence: false,
  };
  state.extractError = null;
  render();
}
async function runExtraction() {
  if (!state.draft) return;
  state.loadingExtract = true; state.extractError = null; render();
  try {
    const result = await api('/prescriptions/extract', {
      method: 'POST', body: { imageBase64: state.draft.base64, mediaType: state.draft.mediaType }
    });
    state.draft.medicines = (result.medicines || []).map(m => ({
      id: uid(), name_en: m.name_en || '', name_hi: m.name_hi || '',
      dosage: m.dosage || '', frequency_per_day: m.frequency_per_day || 1,
      slots: (m.slots && m.slots.length) ? m.slots : ['morning'],
      food_relation: m.food_relation || 'none', duration_days: m.duration_days || null,
      notes: m.notes || '', edited: false,
    }));
    state.draft.instructions = (result.instructions || []).map(i => ({ id: uid(), ...i }));
    state.draft.extracted = true;
    state.draft.lowConfidence = !!result.low_confidence;
    state.tab = 'review';
  } catch (e) {
    state.extractError = e.message;
  }
  state.loadingExtract = false;
  render();
}
function updateMed(id, field, value) {
  const m = state.draft.medicines.find(x => x.id === id);
  if (!m) return;
  m[field] = value; m.edited = true;
  render();
}
function toggleSlot(id, slot) {
  const m = state.draft.medicines.find(x => x.id === id);
  if (!m) return;
  m.slots = m.slots.includes(slot) ? m.slots.filter(s => s !== slot) : [...m.slots, slot];
  m.edited = true;
  render();
}
function removeMed(id) { state.draft.medicines = state.draft.medicines.filter(x => x.id !== id); render(); }
function addManualMed() {
  state.draft.medicines.push({
    id: uid(), name_en: '', name_hi: '', dosage: '', frequency_per_day: 1,
    slots: ['morning'], food_relation: 'none', duration_days: null, notes: '', edited: true
  });
  render();
}
async function confirmDraft() {
  const targetPatient = state.viewingPatientId || state.user.id;
  try {
    const saved = await api('/prescriptions', {
      method: 'POST',
      body: {
        patientId: targetPatient,
        imageData: state.draft.imageData,
        lowConfidence: state.draft.lowConfidence,
        medicines: state.draft.medicines,
        instructions: state.draft.instructions,
      }
    });
    state.prescriptions.unshift(saved);
    state.draft = null;
    state.tab = 'today';
    render();
  } catch (e) {
    state.extractError = e.message;
    render();
  }
}

/* ============================= ADHERENCE ============================= */
async function toggleTaken(medId) {
  const key = todayKey();
  const patientId = state.viewingPatientId || state.user.id;
  state.adherence[key] = state.adherence[key] || {};
  const newVal = !state.adherence[key][medId];
  state.adherence[key][medId] = newVal;
  render();
  try {
    await api('/adherence', { method: 'POST', body: { patientId, medicineId: medId, date: key, taken: newVal } });
  } catch (e) {
    state.adherence[key][medId] = !newVal; // revert on failure
    render();
  }
}

/* ============================= FAMILY ============================= */
async function joinFamily() {
  state.joinError = null;
  const code = (state.joinCodeInput || '').trim();
  if (!code) return;
  try {
    await api('/family/join', { method: 'POST', body: { code } });
    state.joinCodeInput = '';
    await loadMyPatients();
    render();
  } catch (e) { state.joinError = e.message; render(); }
}
function requestDeleteMember(linkId) { state.pendingDeleteMemberId = linkId; render(); }
function cancelDeleteMember() { state.pendingDeleteMemberId = null; render(); }
async function confirmDeleteMember(linkId) {
  try {
    await api('/family/members/' + linkId, { method: 'DELETE' });
    state.members = state.members.filter(m => m.linkId !== linkId);
    state.pendingDeleteMemberId = null;
    render();
  } catch (e) { state.pendingDeleteMemberId = null; render(); }
}
function toggleMemberSchedule(linkId) {
  state.expandedMemberId = state.expandedMemberId === linkId ? null : linkId;
  render();
}

/* ============================= REPORT DELETE ============================= */
function requestDeleteRx(id) { state.pendingDeleteRxId = id; render(); }
function cancelDeleteRx() { state.pendingDeleteRxId = null; render(); }
async function confirmDeleteRx(id) {
  try {
    await api('/prescriptions/' + id, { method: 'DELETE' });
    state.prescriptions = state.prescriptions.filter(p => p.id !== id);
    state.pendingDeleteRxId = null;
    render();
  } catch (e) { state.pendingDeleteRxId = null; render(); }
}

/* ============================= BROWSER REMINDERS (foreground only) ============================= */
const SLOT_HOURS = { morning: 8, afternoon: 13, evening: 19, night: 21 };
function checkReminders() {
  if (!state.browserReminders || !('Notification' in window) || Notification.permission !== 'granted') return;
  const now = new Date();
  const key = todayKey();
  const takenMap = state.adherence[key] || {};
  allMedicines().forEach(m => {
    m.slots.forEach(slot => {
      const hour = SLOT_HOURS[slot];
      if (now.getHours() < hour) return;
      if (takenMap[m.id]) return;
      const flag = `${key}:${m.id}:${slot}`;
      if (state.notifiedToday.has(flag)) return;
      state.notifiedToday.add(flag);
      const name = state.lang === 'hi' ? (m.name_hi || m.name_en) : m.name_en;
      new Notification('Dawa Dairy', {
        body: `${name} — ${slotLabel(slot)}${m.food_relation === 'after_food' ? ' · after food' : m.food_relation === 'before_food' ? ' · before food' : ''}. A gentle reminder whenever you get a moment.`,
      });
    });
  });
}
setInterval(checkReminders, 60000);

/* ============================= RENDER ============================= */
function render() {
  const root = document.getElementById('root');
  if (!state.token || !state.user) { root.innerHTML = renderAuth(); bindAuthEvents(); return; }

  const L = t();
  const langClass = state.lang === 'hi' ? 'hi' : '';
  root.innerHTML = `
    <div class="topbar">
      <div class="topbar-inner">
        <div class="brand">
          <div class="brand-mark"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 3h6v5.5l4.2 7.3A3 3 0 0 1 16.6 20H7.4a3 3 0 0 1-2.6-4.2L9 8.5V3Z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 14h8" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg></div>
          <div><div class="brand-name">Dawa Dairy</div><div class="brand-sub ${langClass}">${L.tagline}</div></div>
        </div>
        <div class="top-actions">
          <span class="user-chip">👋 ${escAttr(state.user.name)}</span>
          <div class="lang-toggle">
            <button class="${state.lang === 'en' ? 'active' : ''}" data-act="lang" data-val="en">EN</button>
            <button class="${state.lang === 'hi' ? 'active' : ''}" data-act="lang" data-val="hi">हिं</button>
          </div>
        </div>
      </div>
      <div style="max-width:960px;margin:0 auto;padding:0 18px;">
        <div class="disclaimer ${langClass}"><span>⚠️</span><span>${L.disclaimer}</span></div>
        <div class="tabs">
          ${['upload', 'review', 'today', 'week', 'family', 'settings'].map(tb => {
            if (tb === 'review' && !state.draft) return '';
            return `<button class="tab ${state.tab === tb ? 'active' : ''} ${langClass}" data-act="tab" data-val="${tb}">${L.tabs[tb]}</button>`;
          }).join('')}
        </div>
        ${state.patients.length ? renderSwitcher() : ''}
      </div>
    </div>
    <div class="app ${langClass}">
      ${state.loadingData ? `<div class="card empty">…</div>` : renderTab()}
      <div class="footer-note">${state.lang === 'hi' ? 'Dawa Dairy कोई दवा नहीं सुझाता — यह केवल आपके डॉक्टर के लिखे निर्देशों को व्यवस्थित करता है।' : 'Dawa Dairy never suggests medicines — it only organises what your doctor already wrote.'}</div>
    </div>
  `;
  bindEvents();
  checkReminders();
}

function renderSwitcher() {
  const L = t();
  const options = [`<option value="${state.user.id}" ${isSelf() ? 'selected' : ''}>${L.fam_switch_self}</option>`]
    .concat(state.patients.map(p => `<option value="${p.userId}" ${state.viewingPatientId === p.userId ? 'selected' : ''}>${escAttr(p.name)}</option>`));
  return `
    <div class="switcher">
      <span style="font-size:13px;color:var(--muted);">${L.fam_switch}:</span>
      <select id="patientSwitcher">${options.join('')}</select>
    </div>
  `;
}

function renderTab() {
  if (state.tab === 'upload') return renderUpload();
  if (state.tab === 'review') return state.draft ? renderReview() : renderUpload();
  if (state.tab === 'today') return renderToday();
  if (state.tab === 'week') return renderWeek();
  if (state.tab === 'family') return renderFamily();
  if (state.tab === 'settings') return renderSettings();
  return '';
}

function renderUpload() {
  const L = t();
  return `
    <div class="card">
      <h2>${L.up_title}</h2>
      <p class="hint">${L.up_hint}</p>
      <div class="dropzone" id="dropzone">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M12 16V4M12 4l-4 4M12 4l4 4" stroke="#5FAFA0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="#5FAFA0" stroke-width="1.8" stroke-linecap="round"/></svg>
        <div><button class="btn" id="filePickBtn">${L.up_cta}</button></div>
        <div style="color:var(--muted);font-size:12.5px;margin-top:10px;">${L.up_drag}</div>
        <input type="file" id="fileInput" accept="image/*" style="display:none">
      </div>
      ${state.draft ? renderDraftPreview() : ''}
      ${state.extractError ? `<div class="banner warn" style="margin-top:14px;"><div class="banner-icon">⚠️</div><div>${escAttr(state.extractError)}</div></div>` : ''}
    </div>
    ${state.prescriptions.length ? renderPastUploads() : ''}
  `;
}
function renderDraftPreview() {
  const L = t();
  return `
    <div class="rx-preview">
      <img class="rx-thumb" src="${state.draft.imageData}">
      <div class="rx-meta">
        <div style="font-weight:600;color:var(--ink);margin-bottom:6px;">${state.draft.extracted ? '✓ ' + (state.lang === 'hi' ? 'पढ़ा गया' : 'Read') : (state.lang === 'hi' ? 'अभी नहीं पढ़ा गया' : 'Not read yet')}</div>
        <p style="margin:0 0 12px;">${L.up_disclaimer}</p>
        <button class="btn" id="extractBtn" ${state.loadingExtract ? 'disabled' : ''}>
          ${state.loadingExtract ? `<span class="spinner"></span> ${L.up_extracting}` : L.up_extract}
        </button>
        ${state.draft.extracted ? `<button class="btn secondary" id="goReviewBtn" style="margin-left:8px;">${state.lang === 'hi' ? 'समीक्षा पर जाएं' : 'Go to review'}</button>` : ''}
      </div>
    </div>
  `;
}
function renderPastUploads() {
  const L = t();
  return `
    <div class="card">
      <h2 style="font-size:15px;">${state.lang === 'hi' ? 'पहले अपलोड की गई पर्चियाँ' : 'Previously uploaded prescriptions'}</h2>
      ${state.prescriptions.map(p => `
        <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-top:1px solid var(--line);">
          <img src="${p.imageData}" style="width:44px;height:54px;object-fit:cover;border-radius:6px;border:1px solid var(--line);">
          <div style="flex:1;">
            <div style="font-weight:600;font-size:13.5px;">${p.medicines.length} ${state.lang === 'hi' ? 'दवाएं' : 'medicines'}</div>
            <div style="font-size:12px;color:var(--muted);">${new Date(p.createdAt).toLocaleDateString()}</div>
          </div>
          ${state.pendingDeleteRxId === p.id ? `
            <span style="font-size:12px;color:var(--danger);font-weight:600;">${L.sure}</span>
            <button class="btn sm danger" data-act="confirmDelRx" data-id="${p.id}">${L.yes}</button>
            <button class="btn secondary sm" data-act="cancelDelRx">${L.no}</button>
          ` : `
            <span class="chip on">${L.confirmed_banner}</span>
            <button class="icon-btn danger" data-act="delRx" data-id="${p.id}" title="${L.remove}">✕</button>
          `}
        </div>
      `).join('')}
    </div>
  `;
}
function renderReview() {
  const L = t();
  const d = state.draft;
  return `
    <div class="card">
      <h2>${L.rev_title}</h2>
      <p class="hint">${L.rev_hint}</p>
      <button class="btn ghost" id="toggleOrigBtn">${state.showOriginalInReview ? L.rev_hide_original : L.rev_original} ${state.showOriginalInReview ? '▲' : '▼'}</button>
      ${state.showOriginalInReview ? `<div class="orig-view"><img src="${d.imageData}"></div>` : ''}
      ${d.lowConfidence ? `<div class="banner warn" style="margin-top:14px;"><div class="banner-icon">🔍</div><div>${state.lang === 'hi' ? 'यह पर्ची पढ़ने में कठिन थी — कृपया हर पंक्ति ध्यान से जाँचें।' : 'This prescription was hard to read — please check every line carefully.'}</div></div>` : ''}
    </div>
    <div class="card">
      <h2 style="font-size:16px;">${state.lang === 'hi' ? 'दवाएं' : 'Medicines'}</h2>
      ${d.medicines.map(m => renderMedRow(m)).join('') || `<p class="hint">${state.lang === 'hi' ? 'कोई दवा नहीं मिली।' : 'No medicines detected.'}</p>`}
      <button class="btn secondary sm" id="addMedBtn">+ ${L.rev_addmed}</button>
    </div>
    ${d.instructions.length ? `
    <div class="card">
      <h2 style="font-size:16px;">${L.rev_instr_title}</h2>
      ${d.instructions.map(i => `
        <div class="instr-item">
          <div class="instr-icon">${instrIcon(i.type)}</div>
          <div style="font-weight:600;font-size:13.5px;">${state.lang === 'hi' ? (i.text_hi || i.text_en) : (i.text_en || i.text_hi)}</div>
        </div>
      `).join('')}
    </div>` : ''}
    ${state.extractError ? `<div class="banner warn"><div class="banner-icon">⚠️</div><div>${escAttr(state.extractError)}</div></div>` : ''}
    <button class="btn saffron block" id="confirmBtn" ${d.medicines.length === 0 ? 'disabled' : ''}>✓ ${L.rev_confirm}</button>
  `;
}
function renderMedRow(m) {
  const L = t();
  const slots = ['morning', 'afternoon', 'evening', 'night'];
  return `
    <div class="med-row ${m.edited ? 'edited' : ''}" data-medid="${m.id}">
      <div class="med-row-top">
        <div><div class="med-name-en">${escAttr(m.name_en) || '—'}</div><div class="med-name-hi hi">${escAttr(m.name_hi)}</div></div>
        <button class="btn ghost sm" data-act="removeMed" data-id="${m.id}">${L.remove}</button>
      </div>
      <div class="field-grid">
        <div><label>${L.name_en}</label><input data-act="med" data-id="${m.id}" data-field="name_en" value="${escAttr(m.name_en)}"></div>
        <div><label>${L.name_hi}</label><input class="hi" data-act="med" data-id="${m.id}" data-field="name_hi" value="${escAttr(m.name_hi)}"></div>
        <div><label>${L.dosage}</label><input data-act="med" data-id="${m.id}" data-field="dosage" value="${escAttr(m.dosage)}"></div>
        <div><label>${L.duration}</label><input type="number" min="1" data-act="med" data-id="${m.id}" data-field="duration_days" value="${m.duration_days || ''}"></div>
      </div>
      <label style="font-size:11px;text-transform:uppercase;letter-spacing:.04em;color:var(--muted);display:block;margin-top:10px;">${state.lang === 'hi' ? 'कब लेनी है' : 'When to take'}</label>
      <div class="slot-chips">${slots.map(s => `<button class="chip ${m.slots.includes(s) ? 'on' : ''}" data-act="slot" data-id="${m.id}" data-slot="${s}">${slotLabel(s)}</button>`).join('')}</div>
      <label style="font-size:11px;text-transform:uppercase;letter-spacing:.04em;color:var(--muted);display:block;margin-top:10px;">${state.lang === 'hi' ? 'खाने से सम्बन्ध' : 'Food relation'}</label>
      <div class="slot-chips">${['before_food', 'after_food', 'none'].map(f => `<button class="chip ${m.food_relation === f ? 'on' : ''}" data-act="food" data-id="${m.id}" data-food="${f}">${foodLabel(f)}</button>`).join('')}</div>
      ${m.notes ? `<div style="margin-top:8px;font-size:12.5px;color:var(--muted);">📝 ${escAttr(m.notes)}</div>` : ''}
    </div>
  `;
}
function renderToday() {
  const L = t();
  const meds = allMedicines();
  const instructions = allInstructions();
  const key = todayKey();
  const takenMap = state.adherence[key] || {};
  const soon = meds.filter(m => { const dl = daysLeft(m); return dl !== null && dl <= 3 && dl >= 0; });

  if (meds.length === 0) {
    return `<div class="card empty"><p>${L.empty_today}</p><button class="btn" data-act="tab" data-val="upload">${L.up_cta}</button></div>`;
  }
  const slots = ['morning', 'afternoon', 'evening', 'night'];
  const slotTimes = { morning: '6–10 AM', afternoon: '12–3 PM', evening: '5–8 PM', night: '9–11 PM' };
  let html = `<div class="card"><h2>${L.today_title} · ${new Date().toLocaleDateString(state.lang === 'hi' ? 'hi-IN' : 'en-IN', { weekday: 'long', day: 'numeric', month: 'short' })}</h2>`;
  if (soon.length) {
    html += `<div class="banner warn"><div class="banner-icon">⏳</div><div><b>${L.refill_title}</b><br><span style="font-size:13px;">${L.refill_days(Math.min(...soon.map(daysLeft)))} — ${soon.map(m => state.lang === 'hi' ? (m.name_hi || m.name_en) : m.name_en).join(', ')}</span></div></div>`;
  }
  slots.forEach(slot => {
    const inSlot = meds.filter(m => m.slots.includes(slot));
    if (!inSlot.length) return;
    html += `<div class="slot-section"><div class="slot-head"><div class="slot-icon" style="background:${slotColor(slot)}">${slotIcon(slot)}</div><div><div class="slot-title">${slotLabel(slot)}</div><div class="slot-time">${slotTimes[slot]}</div></div></div>`;
    html += inSlot.map(m => {
      const on = !!takenMap[m.id];
      const foodTxt = m.food_relation !== 'none' ? ` · ${foodLabel(m.food_relation)}` : '';
      const speakTxt = `${m.name_hi || m.name_en} लें — ${slotLabel(slot)}${m.food_relation === 'after_food' ? ', खाने के बाद' : m.food_relation === 'before_food' ? ', खाने से पहले' : ''}`;
      return `<div class="dose-item ${on ? 'taken' : ''}">
        <button class="check ${on ? 'on' : ''}" data-act="take" data-id="${m.id}">${on ? '✓' : ''}</button>
        <div class="dose-body">
          <div class="dose-name">${state.lang === 'hi' ? (m.name_hi || m.name_en) : m.name_en}${m.name_hi && state.lang === 'en' ? ` <span class="hi" style="color:var(--muted);font-weight:400;">· ${m.name_hi}</span>` : ''}</div>
          <div class="dose-sub">${escAttr(m.dosage)}${foodTxt}</div>
        </div>
        <button class="voice-btn" data-act="speak" data-text="${escAttr(speakTxt)}" title="${L.listen}">🔊</button>
      </div>`;
    }).join('');
    html += `</div>`;
  });
  html += `</div>`;
  if (instructions.length) {
    html += `<div class="card"><h2 style="font-size:16px;">${L.exercise}</h2>${instructions.map(i => `
      <div class="instr-item"><div class="instr-icon">${instrIcon(i.type)}</div>
      <div style="flex:1;"><div style="font-weight:600;font-size:13.5px;">${state.lang === 'hi' ? (i.text_hi || i.text_en) : (i.text_en || i.text_hi)}</div></div>
      <button class="voice-btn" data-act="speak" data-text="${escAttr(i.text_hi || i.text_en)}">🔊</button></div>`).join('')}</div>`;
  }
  return html;
}
function renderWeek() {
  const L = t();
  const now = new Date();
  const monday = new Date(now); monday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
  const meds = allMedicines();
  const colorFor = (pct) => pct === null ? '#EAE4F6' : pct >= 80 ? '#83C09A' : pct >= 50 ? '#F0B15C' : '#EF9686';
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(monday); d.setDate(monday.getDate() + i);
    const key = todayKey(d);
    const takenMap = state.adherence[key] || {};
    const total = meds.length;
    const taken = meds.filter(m => takenMap[m.id]).length;
    days.push({ label: L.week_days[i], date: d.getDate(), pct: total ? Math.round(taken / total * 100) : null, isFuture: d > now, isToday: key === todayKey() });
  }
  return `
    <div class="card">
      <h2>${L.week_title}</h2><p class="hint">${L.week_hint}</p>
      <div class="week-grid">${days.map(d => `
        <div class="week-day" style="${d.isToday ? 'border-color:var(--teal);' : ''}">
          <div class="d">${d.label}</div><div class="n">${d.date}</div>
          <div class="week-bar"><div style="width:${d.isFuture ? 0 : (d.pct === null ? 0 : d.pct)}%; background:${d.isFuture ? '#E9E4D4' : colorFor(d.pct)}"></div></div>
          <div class="week-pct">${d.isFuture ? '·' : (d.pct === null ? '–' : d.pct + '%')}</div>
        </div>`).join('')}</div>
      <div class="legend">
        <div class="legend-item"><span class="legend-dot" style="background:#83C09A"></span>${state.lang === 'hi' ? 'ज़्यादातर ली गई' : 'Mostly on track'}</div>
        <div class="legend-item"><span class="legend-dot" style="background:#F0B15C"></span>${state.lang === 'hi' ? 'कुछ छूटी' : 'A few missed'}</div>
        <div class="legend-item"><span class="legend-dot" style="background:#EF9686"></span>${state.lang === 'hi' ? 'ध्यान चाहिए' : 'Could use a hand'}</div>
      </div>
    </div>
  `;
}
function renderMemberSchedulePeek() {
  // Only meaningful when viewing your own circle summary; shows current loaded (self) data as a preview.
  const L = t();
  const meds = allMedicines();
  const key = todayKey();
  const takenMap = state.adherence[key] || {};
  if (!meds.length) return `<div class="schedule-peek">${L.empty_today}</div>`;
  const taken = meds.filter(m => takenMap[m.id]).length;
  return `<div class="schedule-peek">
    <div style="font-weight:700;font-size:13px;margin-bottom:8px;">${L.today_title} — ${taken}/${meds.length} ${state.lang === 'hi' ? 'ली गई' : 'taken'}</div>
    ${meds.map(m => {
      const on = !!takenMap[m.id];
      return `<div class="dose-item ${on ? 'taken' : ''}" style="padding:8px 10px;margin-bottom:6px;">
        <div class="check ${on ? 'on' : ''}" style="width:20px;height:20px;">${on ? '✓' : ''}</div>
        <div class="dose-body"><div class="dose-name" style="font-size:13px;">${state.lang === 'hi' ? (m.name_hi || m.name_en) : m.name_en}</div>
        <div class="dose-sub">${m.slots.map(slotLabel).join(', ')} · ${escAttr(m.dosage)}</div></div>
      </div>`;
    }).join('')}
  </div>`;
}
function renderFamily() {
  const L = t();
  return `
    <div class="card">
      <h2>${L.fam_title}</h2>
      <p class="hint">${L.fam_hint}</p>
      ${state.familyCode ? `
        <div class="code-box">${state.familyCode.split('').join(' ')}</div>
        <div style="margin-top:10px;"><button class="btn secondary sm" id="copyCodeBtn">📋 ${L.fam_copy}</button></div>
        <h2 style="font-size:14px;margin-top:22px;">${L.fam_members}</h2>
        <p class="hint" style="margin-bottom:10px;">${L.fam_caregiver_note}</p>
        ${state.members.length ? state.members.map(m => `
          <div class="member-row">
            <div style="display:flex;align-items:center;gap:10px;">
              <div class="avatar">${escAttr(m.name[0])}</div>
              <div><div style="font-weight:600;font-size:13.5px;">${escAttr(m.name)}</div><div style="font-size:12px;color:var(--muted);">${escAttr(m.email)}</div></div>
            </div>
            <div class="member-actions">
              ${state.pendingDeleteMemberId === m.linkId ? `
                <span style="font-size:12px;color:var(--danger);font-weight:600;">${L.sure}</span>
                <button class="btn sm danger" data-act="confirmDelMember" data-id="${m.linkId}">${L.yes}</button>
                <button class="btn secondary sm" data-act="cancelDelMember">${L.no}</button>
              ` : `<button class="icon-btn danger" data-act="delMember" data-id="${m.linkId}" title="${L.fam_delete}">✕</button>`}
            </div>
          </div>
        `).join('') : `<p class="hint">${state.lang === 'hi' ? 'अभी कोई नहीं जुड़ा।' : 'No one has joined with your code yet.'}</p>`}
      ` : `<p class="hint">${state.lang === 'hi' ? 'कोड लोड हो रहा है…' : 'Loading your code…'}</p>`}
    </div>
    <div class="card">
      <h2 style="font-size:16px;">${L.fam_join_title}</h2>
      <div style="display:flex;gap:8px;">
        <input id="joinCodeInput" placeholder="${L.fam_join_placeholder}" value="${escAttr(state.joinCodeInput)}" style="flex:1;padding:9px 12px;border-radius:8px;border:1px solid var(--line);font-size:13.5px;text-transform:uppercase;">
        <button class="btn secondary sm" id="joinBtn">${L.fam_join_btn}</button>
      </div>
      ${state.joinError ? `<p class="error-text">${escAttr(state.joinError)}</p>` : ''}
      ${state.patients.length ? `<p class="hint" style="margin-top:12px;">${state.lang === 'hi' ? 'ऊपर "शेड्यूल देखा जा रहा है" ड्रॉपडाउन से किसी भी जुड़े व्यक्ति का शेड्यूल देखें।' : "Use the \"Viewing schedule for\" dropdown at the top to see a linked person's schedule."}</p>` : ''}
    </div>
  `;
}
function renderSettings() {
  const L = t();
  return `
    <div class="card">
      <h2>${L.settings_title}</h2>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--line);">
        <div style="font-weight:600;font-size:13.5px;">${L.settings_lang}</div>
        <div class="lang-toggle">
          <button class="${state.lang === 'en' ? 'active' : ''}" data-act="lang" data-val="en">EN</button>
          <button class="${state.lang === 'hi' ? 'active' : ''}" data-act="lang" data-val="hi">हिं</button>
        </div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--line);">
        <div style="font-weight:600;font-size:13.5px;">${L.settings_voice}</div>
        <button class="chip ${state.voiceOn ? 'on' : ''}" id="voiceToggle">${state.voiceOn ? 'ON' : 'OFF'}</button>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--line);">
        <div style="font-weight:600;font-size:13.5px;">${L.settings_browser_reminders}</div>
        <button class="chip ${state.browserReminders ? 'on' : ''}" id="browserRemToggle">${state.browserReminders ? 'ON' : 'OFF'}</button>
      </div>
      <div style="padding-top:16px;"><button class="btn secondary sm" id="logoutBtn">${L.settings_logout}</button></div>
    </div>
    <div class="banner info"><div class="banner-icon">ℹ️</div><div style="font-size:13px;">${L.reset_note}</div></div>
  `;
}

/* ============================= AUTH SCREEN ============================= */
function renderAuth() {
  const L = t();
  const isLogin = state.authMode === 'login';
  return `
    <div class="auth-wrap">
      <div class="auth-card">
        <div class="brand-mark" style="margin-bottom:10px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 3h6v5.5l4.2 7.3A3 3 0 0 1 16.6 20H7.4a3 3 0 0 1-2.6-4.2L9 8.5V3Z" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/></svg></div>
        <h1>Dawa Dairy</h1>
        <p style="color:var(--muted);font-size:13px;margin:0 0 6px;">${L.tagline}</p>
        <div class="auth-tabs">
          <button class="${isLogin ? 'active' : ''}" data-act="authMode" data-val="login">${L.login}</button>
          <button class="${!isLogin ? 'active' : ''}" data-act="authMode" data-val="register">${L.register}</button>
        </div>
        <form id="authForm">
          ${!isLogin ? `<div class="field"><label>${L.name_field}</label><input id="nameInput" required></div>` : ''}
          <div class="field"><label>${L.email_field}</label><input id="emailInput" type="email" required></div>
          <div class="field"><label>${L.password_field}</label><input id="passwordInput" type="password" required minlength="6"></div>
          ${state.authError ? `<div class="error-text">${escAttr(state.authError)}</div>` : ''}
          <button class="btn block" type="submit" ${state.authLoading ? 'disabled' : ''}>${state.authLoading ? `<span class="spinner"></span>` : (isLogin ? L.login : L.register)}</button>
        </form>
      </div>
    </div>
  `;
}
function bindAuthEvents() {
  document.querySelectorAll('[data-act="authMode"]').forEach(b => b.onclick = () => { state.authMode = b.dataset.val; state.authError = null; render(); });
  const form = document.getElementById('authForm');
  if (form) form.onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value.trim();
    const password = document.getElementById('passwordInput').value;
    if (state.authMode === 'login') login(email, password);
    else register(document.getElementById('nameInput').value.trim(), email, password);
  };
}

/* ============================= BIND EVENTS ============================= */
function bindEvents() {
  document.querySelectorAll('[data-act="lang"]').forEach(b => b.onclick = () => { state.lang = b.dataset.val; localStorage.setItem('pt_lang', state.lang); render(); });
  document.querySelectorAll('[data-act="tab"]').forEach(b => b.onclick = () => { state.tab = b.dataset.val; render(); });

  const switcher = document.getElementById('patientSwitcher');
  if (switcher) switcher.onchange = () => switchPatient(switcher.value);

  const fileBtn = document.getElementById('filePickBtn');
  const fileInput = document.getElementById('fileInput');
  const dz = document.getElementById('dropzone');
  if (fileBtn) fileBtn.onclick = () => fileInput.click();
  if (fileInput) fileInput.onchange = (e) => onFileSelected(e.target.files[0]);
  if (dz) {
    dz.ondragover = (e) => { e.preventDefault(); dz.classList.add('drag'); };
    dz.ondragleave = () => dz.classList.remove('drag');
    dz.ondrop = (e) => { e.preventDefault(); dz.classList.remove('drag'); onFileSelected(e.dataTransfer.files[0]); };
  }
  const extractBtn = document.getElementById('extractBtn');
  if (extractBtn) extractBtn.onclick = runExtraction;
  const goReview = document.getElementById('goReviewBtn');
  if (goReview) goReview.onclick = () => { state.tab = 'review'; render(); };

  const toggleOrig = document.getElementById('toggleOrigBtn');
  if (toggleOrig) toggleOrig.onclick = () => { state.showOriginalInReview = !state.showOriginalInReview; render(); };

  document.querySelectorAll('[data-act="med"]').forEach(inp => inp.onchange = () => updateMed(inp.dataset.id, inp.dataset.field, inp.dataset.field === 'duration_days' ? (parseInt(inp.value) || null) : inp.value));
  document.querySelectorAll('[data-act="slot"]').forEach(b => b.onclick = () => toggleSlot(b.dataset.id, b.dataset.slot));
  document.querySelectorAll('[data-act="food"]').forEach(b => b.onclick = () => { const m = state.draft.medicines.find(x => x.id === b.dataset.id); m.food_relation = b.dataset.food; m.edited = true; render(); });
  document.querySelectorAll('[data-act="removeMed"]').forEach(b => b.onclick = () => removeMed(b.dataset.id));
  const addMedBtn = document.getElementById('addMedBtn');
  if (addMedBtn) addMedBtn.onclick = addManualMed;
  const confirmBtn = document.getElementById('confirmBtn');
  if (confirmBtn) confirmBtn.onclick = confirmDraft;

  document.querySelectorAll('[data-act="take"]').forEach(b => b.onclick = () => toggleTaken(b.dataset.id));
  document.querySelectorAll('[data-act="speak"]').forEach(b => b.onclick = () => { if (state.voiceOn) speakHindi(b.dataset.text); });

  const copyCodeBtn = document.getElementById('copyCodeBtn');
  if (copyCodeBtn) copyCodeBtn.onclick = () => { navigator.clipboard && navigator.clipboard.writeText(state.familyCode); };
  const joinBtn = document.getElementById('joinBtn');
  const joinInput = document.getElementById('joinCodeInput');
  if (joinInput) joinInput.oninput = () => { state.joinCodeInput = joinInput.value; };
  if (joinBtn) joinBtn.onclick = joinFamily;

  document.querySelectorAll('[data-act="viewSched"]').forEach(b => b.onclick = () => toggleMemberSchedule(b.dataset.id));
  document.querySelectorAll('[data-act="delMember"]').forEach(b => b.onclick = () => requestDeleteMember(b.dataset.id));
  document.querySelectorAll('[data-act="confirmDelMember"]').forEach(b => b.onclick = () => confirmDeleteMember(b.dataset.id));
  document.querySelectorAll('[data-act="cancelDelMember"]').forEach(b => b.onclick = cancelDeleteMember);

  document.querySelectorAll('[data-act="delRx"]').forEach(b => b.onclick = () => requestDeleteRx(b.dataset.id));
  document.querySelectorAll('[data-act="confirmDelRx"]').forEach(b => b.onclick = () => confirmDeleteRx(b.dataset.id));
  document.querySelectorAll('[data-act="cancelDelRx"]').forEach(b => b.onclick = cancelDeleteRx);

  const voiceToggle = document.getElementById('voiceToggle');
  if (voiceToggle) voiceToggle.onclick = () => { state.voiceOn = !state.voiceOn; render(); };
  const browserRemToggle = document.getElementById('browserRemToggle');
  if (browserRemToggle) browserRemToggle.onclick = async () => {
    if (!state.browserReminders && 'Notification' in window && Notification.permission !== 'granted') {
      await Notification.requestPermission();
    }
    state.browserReminders = !state.browserReminders;
    render();
  };
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) logoutBtn.onclick = logout;
}

/* ============================= INIT ============================= */
if ('speechSynthesis' in window) { window.speechSynthesis.onvoiceschanged = () => {}; }
(async function init() {
  if (state.token && state.user) {
    try {
      const d = await api('/auth/me');
      state.user = d.user;
      await afterLogin();
    } catch (e) {
      clearSession();
      render();
    }
  } else {
    render();
  }
})();
