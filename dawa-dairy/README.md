# Dawa Dairy

A real front-end + back-end version of the prototype: Node/Express + SQLite API,
and a static HTML/JS frontend that talks to it over REST. Login is real (separate
accounts for patient and caregiver), and the AI extraction call now happens on the
server so your Gemini API key is never exposed in the browser.

```
dawa-dairy/
├── backend/     Express API + SQLite database
└── frontend/    Static HTML/CSS/JS (no build step)
```

## 1. Backend setup

Requires **Node.js 22.5 or newer** (the backend uses Node's built-in `node:sqlite`
module, so there's no native database driver to compile — nothing needs Python,
Visual Studio Build Tools, or any other native toolchain). Check your version with
`node --version`; if it's older than 22.5, update Node first.

```bash
cd backend
npm install
```

A `.env` file is already included with a random `JWT_SECRET` pre-generated. Open
`backend/.env` and fill in just one thing:
- `GEMINI_API_KEY` — from https://aistudio.google.com/apikey

(Leave `PORT` and `CORS_ORIGIN` as-is unless you're changing where things run.)

Then start it:

```bash
npm start
```

You should see `Dawa Dairy API running on http://localhost:4000`.
A `data.sqlite` file will be created automatically on first run — that's your database.

## 2. Frontend setup

The frontend has no build step and no external dependencies — it's plain HTML/CSS/JS
served by a tiny built-in static server, so `npm install` works the same way it does
for the backend (there's just nothing to download).

```bash
cd frontend
npm install
npm start
```

You should see `Frontend running on http://localhost:5500`. Open that URL in your browser.

If your frontend runs on a different port, update `CORS_ORIGIN` in `backend/.env` to match, and restart the backend.

If your backend runs somewhere other than `localhost:4000`, update `window.API_BASE` in `frontend/config.js`.

## 3. Using it

1. Open the frontend URL, create an account (this is the "patient" account).
2. Upload a prescription photo → Extract with AI → review/edit every line → confirm.
3. Check off doses on the **Today** tab, see the week at a glance on **This Week**.
4. On the **Family** tab, copy your family code. On a second account (open the app
   in an incognito window and register as the "caregiver"), paste that code under
   "Link to someone else's schedule." The caregiver can then switch to the patient's
   schedule from the dropdown at the top and check off doses on their behalf.
5. Settings → Browser reminders turns on foreground notifications while the tab is open.

## What's real vs. simplified

**Real:**
- Actual accounts (bcrypt-hashed passwords, JWT sessions)
- Actual persistence in SQLite (via Node's built-in `node:sqlite` — no native driver to compile) — nothing is lost on refresh
- The AI extraction call happens server-side; your API key stays private
- Family linking is a real relationship in the database, checked server-side on every request
- Deleting a report or a family link is a real DELETE against the database

**Simplified, worth upgrading before a real launch:**
- **Push notifications:** the "Browser reminders" toggle uses the in-page `Notification` API,
  which only fires while that browser tab is open. Real background push (so a reminder
  arrives even with the app closed) needs a service worker + the Web Push API + VAPID keys,
  or a native mobile app with push notification support.
- **Voice reminders** use the browser's built-in `speechSynthesis` — quality depends on
  which Hindi voice the user's OS/browser has installed. A production app would likely
  use a proper TTS API for consistent, higher-quality Hindi audio.
- **Image storage:** prescription photos are stored as base64 text directly in SQLite for
  simplicity. At scale, store files in disk/S3 and keep just a URL in the database.
- **Doctor-facing view:** not built yet (you'd flagged it as a later phase) — the schema
  already supports it, since a doctor account could be added as a third role with
  read-only access to a patient's adherence, gated by patient consent.
- **Password reset / email verification:** not implemented — logins are just email + password.

## Deploying beyond "locally"

- Backend: any Node host (Render, Railway, Fly.io, a VPS). SQLite is fine for a single
  small instance; move to Postgres if you expect concurrent writers or multiple server instances.
- Frontend: any static host (Netlify, Vercel, GitHub Pages, S3+CloudFront). Just make sure
  `frontend/config.js` points at your deployed backend's URL, and `CORS_ORIGIN` on the
  backend matches your deployed frontend's URL.
- Always keep `GEMINI_API_KEY` and `JWT_SECRET` as server-side environment variables —
  never commit `.env` or ship the key to the frontend.
