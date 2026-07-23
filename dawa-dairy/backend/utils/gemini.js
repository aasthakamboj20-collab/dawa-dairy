const SYSTEM_PROMPT = `You are a careful transcription assistant reading a photo of a handwritten or printed medical prescription or discharge summary from India. Your ONLY job is to transcribe what is written — never invent, correct, or suggest dosages, never diagnose, never add medicines that are not visibly written. If a field is illegible, leave it as an empty string rather than guessing. Respond with ONLY valid JSON, no markdown fences, no preamble, in exactly this shape:
{
  "medicines": [
    {
      "name_en": "string, English/pharma name as best read",
      "name_hi": "string, common Hindi transliteration of this medicine name written in Devanagari script",
      "dosage": "string e.g. '1 tablet' or '5ml'",
      "frequency_per_day": number,
      "slots": ["morning","afternoon","evening","night"],
      "food_relation": "before_food" | "after_food" | "none",
      "duration_days": number or null,
      "notes": "string, any other handwritten note about this medicine"
    }
  ],
  "instructions": [
    { "type": "walk"|"stretch"|"breathing"|"diet"|"other", "text_en": "string", "text_hi": "string in Devanagari" }
  ],
  "low_confidence": boolean,
  "raw_notes": "anything unclear or hard to read, in plain English"
}`;

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

async function extractPrescription(base64, mediaType) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY is not set on the server. Add it to backend/.env');
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`;

  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: SYSTEM_PROMPT }],
      },
      contents: [
        {
          role: 'user',
          parts: [
            { inline_data: { mime_type: mediaType, data: base64 } },
            { text: 'Transcribe this prescription. Return only the JSON object described in your instructions.' },
          ],
        },
      ],
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.1,
      },
    }),
  });

  if (!resp.ok) {
    const errBody = await resp.json().catch(() => ({}));
    const msg = errBody?.error?.message || `Gemini API error (${resp.status})`;
    throw new Error(msg);
  }

  const data = await resp.json();
  const candidate = data.candidates && data.candidates[0];
  const textPart = candidate?.content?.parts?.find((p) => typeof p.text === 'string');

  if (!textPart) {
    if (candidate?.finishReason && candidate.finishReason !== 'STOP') {
      throw new Error(`Gemini stopped early (${candidate.finishReason}). Try a clearer photo.`);
    }
    throw new Error('No text response from Gemini.');
  }

  let clean = textPart.text.trim();
  clean = clean.replace(/```json/gi, '').replace(/```/g, '').trim();

  try {
    return JSON.parse(clean);
  } catch (e) {
    throw new Error('Could not parse the Gemini response as JSON.');
  }
}

module.exports = { extractPrescription };
