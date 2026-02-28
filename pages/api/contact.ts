import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { PHONE_PATTERN } from "../../lib/phone";

const TO_EMAIL = "joeldtavarez@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  captchaToken?: string;
};

type VerifyResult = {
  ok: boolean;
  error?: string;
};

const verifyRecaptcha = async (
  token: string,
  remoteIp?: string
): Promise<VerifyResult> => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return { ok: false, error: "reCAPTCHA secret is not configured." };
  }

  const params = new URLSearchParams();
  params.append("secret", secret);
  params.append("response", token);
  if (remoteIp) {
    params.append("remoteip", remoteIp);
  }

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      body: params,
    }
  );
  const result = (await response.json()) as { success?: boolean };

  if (!response.ok || !result.success) {
    return {
      ok: false,
      error: "Verification failed. Please verify you're human again.",
    };
  }

  return { ok: true };
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  const { name, email, phone, message, captchaToken } =
    (req.body as ContactRequestBody) || {};
  const safeName = typeof name === "string" ? name.trim() : "";
  const safeEmail = typeof email === "string" ? email.trim() : "";
  const safePhone = typeof phone === "string" ? phone.trim() : "";
  const safeMessage = typeof message === "string" ? message.trim() : "";

  if (!safeName || safeName.length > 120) {
    res.status(400).json({ error: "Please provide your name." });
    return;
  }
  if (!EMAIL_PATTERN.test(safeEmail)) {
    res.status(400).json({ error: "Please provide a valid email." });
    return;
  }
  if (!PHONE_PATTERN.test(safePhone)) {
    res.status(400).json({ error: "Please provide a valid phone number." });
    return;
  }
  if (!safeMessage || safeMessage.length > 4000) {
    res.status(400).json({ error: "Please provide your message." });
    return;
  }
  if (!captchaToken || typeof captchaToken !== "string") {
    res.status(400).json({ error: "Captcha is required." });
    return;
  }

  const remoteIp = req.headers["x-forwarded-for"]
    ? String(req.headers["x-forwarded-for"]).split(",")[0].trim()
    : undefined;
  const captcha = await verifyRecaptcha(captchaToken, remoteIp);
  if (!captcha.ok) {
    res.status(400).json({ error: captcha.error });
    return;
  }

  if (!process.env.RESEND_API_KEY) {
    res.status(500).json({ error: "Email service is not configured." });
    return;
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "Portfolio Contact <onboarding@resend.dev>",
      to: [TO_EMAIL],
      replyTo: safeEmail,
      subject: `Portfolio contact: ${safeName}`,
      text: [
        "New contact form submission",
        "",
        `Name: ${safeName}`,
        `Email: ${safeEmail}`,
        `Phone: ${safePhone}`,
        "",
        "Message:",
        safeMessage,
      ].join("\n"),
    });

    res.status(200).json({ ok: true });
    return;
  } catch {
    res.status(500).json({ error: "Failed to send email." });
    return;
  }
};

export default handler;
