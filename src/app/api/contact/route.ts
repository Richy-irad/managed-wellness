import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let body: Record<string, string>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, subject, message, inspector } = body;

  if (inspector) {
    return NextResponse.json({ error: "Message not sent." }, { status: 400 });
  }

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Message not sent." }, { status: 400 });
  }

  try {
    const postmark = require("postmark"); // eslint-disable-line
    const postmarkApp = new postmark.ServerClient(
      process.env.POSTMARK_API_KEY as string
    );

    const messageInfo = `\n---\n>>>from: ${email}\n>>>name: ${name}`;

    const postmarkResponse = await postmarkApp.sendEmail({
      From: process.env.POSTMARK_FROM_EMAIL,
      To: process.env.POSTMARK_TO_EMAIL,
      Subject: subject,
      TextBody: message + messageInfo,
      MessageStream: "outbound",
    });

    if (!postmarkResponse.ErrorCode) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    return NextResponse.json({ error: "Message not sent." }, { status: 400 });
  } catch {
    return NextResponse.json({ error: "Message not sent." }, { status: 400 });
  }
}
