import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function cleanText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Please submit a valid form." },
      { status: 400 },
    );
  }

  // Simple honeypot: silently accept automated submissions without emailing.
  if (cleanText(body.website)) {
    return NextResponse.json({
      message: "Thanks! Your message has been received.",
    });
  }

  const name = cleanText(body.name);
  const email = cleanText(body.email);
  const subject = cleanText(body.subject);
  const message = cleanText(body.message);

  if (
    name.length < 2 ||
    name.length > 100 ||
    !validEmail(email) ||
    email.length > 254 ||
    subject.length < 3 ||
    subject.length > 150 ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { message: "Please check your details and try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Contact form environment variables are not configured.");
    return NextResponse.json(
      {
        message:
          "The contact form is not configured yet. Please contact me through LinkedIn.",
      },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Portfolio inquiry: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend email error:", error);
      return NextResponse.json(
        { message: "Email delivery failed. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "Thanks! Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form send error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }
}
