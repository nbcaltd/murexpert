import { NextRequest, NextResponse } from "next/server";

// Store valid codes in memory (in production, use Redis or DB)
const validCodes = new Map<string, { expires: number }>();

function generateCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendToDiscord(message: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: message,
      username: "MurExpert SEO",
      avatar_url: "https://murexpert.fr/favicon.png",
    }),
  });
}

// POST /api/seo/auth — request a code or verify a code
export async function POST(request: NextRequest) {
  const body = await request.json();

  // Action: request a new code
  if (body.action === "request-code") {
    const code = generateCode();
    const expires = Date.now() + 5 * 60 * 1000; // 5 minutes
    validCodes.set(code, { expires });

    // Clean expired codes
    for (const [k, v] of validCodes) {
      if (v.expires < Date.now()) validCodes.delete(k);
    }

    // Send code to Discord
    await sendToDiscord(
      `🔐 **Code d'acces SEO Dashboard**\n\nCode : **${code}**\nExpire dans 5 minutes.\n\nDemande depuis : ${body.userAgent || "inconnu"}`
    );

    return NextResponse.json({ ok: true, message: "Code envoye sur Discord" });
  }

  // Action: verify a code
  if (body.action === "verify-code") {
    const code = body.code?.toString();
    if (!code) {
      return NextResponse.json({ valid: false, error: "Code requis" }, { status: 400 });
    }

    const entry = validCodes.get(code);
    if (!entry) {
      return NextResponse.json({ valid: false, error: "Code invalide" }, { status: 401 });
    }

    if (entry.expires < Date.now()) {
      validCodes.delete(code);
      return NextResponse.json({ valid: false, error: "Code expire" }, { status: 401 });
    }

    // Code is valid — delete it (single use)
    validCodes.delete(code);

    // Generate a session token (valid 24h)
    const token = crypto.randomUUID();
    const tokenExpires = Date.now() + 24 * 60 * 60 * 1000;
    validCodes.set(`session:${token}`, { expires: tokenExpires });

    await sendToDiscord(`✅ **Connexion SEO Dashboard reussie**\nSession active pour 24h.`);

    return NextResponse.json({ valid: true, token });
  }

  // Action: verify session token
  if (body.action === "verify-session") {
    const token = body.token;
    if (!token) {
      return NextResponse.json({ valid: false }, { status: 401 });
    }

    const entry = validCodes.get(`session:${token}`);
    if (!entry || entry.expires < Date.now()) {
      if (entry) validCodes.delete(`session:${token}`);
      return NextResponse.json({ valid: false }, { status: 401 });
    }

    return NextResponse.json({ valid: true });
  }

  return NextResponse.json({ error: "Action inconnue" }, { status: 400 });
}
