import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  name?: string;
  phone?: string;
  course?: string;
}

export async function POST(request: NextRequest) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const name = payload.name?.trim();
  const phone = payload.phone?.trim();
  const course = payload.course?.trim();

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required" },
      { status: 400 }
    );
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json(
      { ok: false, error: "Telegram env vars are not configured" },
      { status: 500 }
    );
  }

  const message = [
    "📥 New trial lesson lead",
    `👤 Name: ${name}`,
    `📞 Phone: ${phone}`,
    `📘 Course: ${course || "Not specified"}`
  ].join("\n");

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        }),
        cache: "no-store"
      }
    );

    if (!telegramResponse.ok) {
      return NextResponse.json(
        { ok: false, error: "Failed to send Telegram message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Unexpected error while sending lead" },
      { status: 500 }
    );
  }
}
