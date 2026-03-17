import { NextRequest, NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || "";

const NOTIFY_EMAIL = "contact@murexpert.fr";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, city, problemType, description, source } = body;

    const fullName = `${firstName || ""} ${lastName || ""}`.trim() || "Inconnu";

    // Build Discord embed
    const fields = [
      { name: "Nom", value: fullName, inline: true },
      { name: "Email", value: email || "\u2014", inline: true },
      { name: "Telephone", value: phone || "\u2014", inline: true },
      { name: "Ville", value: city || "\u2014", inline: true },
      { name: "Type de probleme", value: problemType || "\u2014", inline: true },
      { name: "Source", value: source || "Formulaire diagnostic", inline: true },
      { name: "Description", value: description || "\u2014", inline: false },
    ];

    const embed = {
      title: "Nouvelle demande de diagnostic humidite",
      color: 0x1e3a5f,
      fields,
      footer: { text: `MurExpert | Copie a envoyer a ${NOTIFY_EMAIL}` },
      timestamp: new Date().toISOString(),
    };

    // Send to Discord webhook
    const discordRes = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "MurExpert",
        content: `Nouvelle demande de diagnostic de **${fullName}** (${email}) - ${city || "Ville non renseignee"} - Probleme: ${problemType || "Non precise"}`,
        embeds: [embed],
      }),
    });

    if (!discordRes.ok) {
      console.error("Discord webhook error:", await discordRes.text());
    }

    console.log(
      `[DIAGNOSTIC] Email copy should be sent to ${NOTIFY_EMAIL}`,
      JSON.stringify({ fullName, email, phone, city, problemType, description, source }, null, 2)
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Erreur lors du traitement de la demande" },
      { status: 500 }
    );
  }
}
