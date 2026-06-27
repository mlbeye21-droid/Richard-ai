import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

// Nodemailer + googleapis ont besoin du runtime Node (pas Edge).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function welcomeHtml(name: string) {
  const hello = name ? `Bonjour ${name},` : "Bonjour,";
  return `<!doctype html>
<html lang="fr">
  <body style="margin:0;background:#0D1B18;font-family:Arial,Helvetica,sans-serif;color:#e5e7eb;">
    <div style="max-width:560px;margin:0 auto;padding:40px 28px;">
      <h1 style="color:#10B981;font-size:28px;margin:0 0 8px;">Richard AI</h1>
      <p style="color:#9ca3af;font-size:13px;letter-spacing:2px;text-transform:uppercase;margin:0 0 28px;">Programme testeurs</p>
      <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:28px;">
        <p style="font-size:16px;line-height:1.6;margin:0 0 16px;">${hello}</p>
        <p style="font-size:16px;line-height:1.6;margin:0 0 16px;">
          Merci de rejoindre le programme testeurs de <strong style="color:#10B981;">Richard AI</strong>,
          l'IA au service des métiers de la gestion en zone OHADA. Ton inscription est bien enregistrée. 🎉
        </p>
        <p style="font-size:16px;line-height:1.6;margin:0 0 16px;">
          Tu fais désormais partie des premiers à découvrir <strong>Le Documentaire</strong> et <strong>L'Interprète</strong> :
          accès instantané et fidèle aux Actes Uniformes, au SYSCOHADA révisé et aux textes fiscaux,
          avec explications pédagogiques.
        </p>
        <p style="font-size:16px;line-height:1.6;margin:0 0 16px;">
          Nous reviendrons très vite vers toi avec ton accès et les prochaines étapes.
        </p>
        <p style="font-size:16px;line-height:1.6;margin:24px 0 0;">À très bientôt,<br/>L'équipe Richard AI</p>
      </div>
      <p style="color:#6b7280;font-size:12px;text-align:center;margin:24px 0 0;">
        <a href="https://www.richardlecomptable.com" style="color:#10B981;text-decoration:none;">www.richardlecomptable.com</a>
      </p>
    </div>
  </body>
</html>`;
}

function welcomeText(name: string) {
  const hello = name ? `Bonjour ${name},` : "Bonjour,";
  return `${hello}

Merci de rejoindre le programme testeurs de Richard AI, l'IA au service des métiers de la gestion en zone OHADA. Ton inscription est bien enregistrée.

Tu fais partie des premiers à découvrir Le Documentaire et L'Interprète : accès instantané et fidèle aux Actes Uniformes, au SYSCOHADA révisé et aux textes fiscaux, avec explications pédagogiques.

Nous reviendrons très vite vers toi avec ton accès et les prochaines étapes.

À très bientôt,
L'équipe Richard AI
www.richardlecomptable.com`;
}

async function sendWelcomeEmail(name: string, email: string) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) throw new Error("GMAIL_USER / GMAIL_APP_PASSWORD manquants");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `Richard AI <${user}>`,
    to: email,
    subject: "Bienvenue dans le programme testeurs de Richard AI 🎉",
    text: welcomeText(name),
    html: welcomeHtml(name),
  });
}

async function appendToSheet(name: string, email: string) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  if (!spreadsheetId || !clientEmail || !privateKey) {
    throw new Error("Variables Google Sheets manquantes");
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "A:C",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [[new Date().toISOString(), name, email]],
    },
  });
}

export async function POST(request: Request) {
  let body: { name?: string; email?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const name = (body.name ?? "").toString().trim().slice(0, 120);
  const email = (body.email ?? "").toString().trim().toLowerCase().slice(0, 200);

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  // On tente l'envoi de l'e-mail et l'enregistrement dans le Sheet
  // indépendamment, pour ne pas tout perdre si l'un des deux échoue.
  const results = await Promise.allSettled([
    sendWelcomeEmail(name, email),
    appendToSheet(name, email),
  ]);

  const emailOk = results[0].status === "fulfilled";
  const sheetOk = results[1].status === "fulfilled";

  if (results[0].status === "rejected") {
    console.error("[register] e-mail échoué:", results[0].reason);
  }
  if (results[1].status === "rejected") {
    console.error("[register] Google Sheet échoué:", results[1].reason);
  }

  if (!emailOk && !sheetOk) {
    return NextResponse.json(
      { error: "Une erreur est survenue. Réessaie dans un instant." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, emailOk, sheetOk });
}
