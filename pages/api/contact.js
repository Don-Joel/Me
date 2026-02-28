import { Resend } from "resend";
import { PHONE_PATTERN } from "../../lib/phone";

const ENABLE_RECAPTCHA = false;

const TO_EMAIL = "joeldtavarez@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const verifyRecaptcha = async (token, remoteIp) => {
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
  const result = await response.json();

  if (!response.ok || !result.success) {
    return {
      ok: false,
      error: "Verification failed. Please verify you're human again.",
    };
  }
  return { ok: true };
};

const handler = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed." });
  }

  const { name, email, phone, message, captchaToken } = req.body || {};
  const safeName = typeof name === "string" ? name.trim() : "";
  const safeEmail = typeof email === "string" ? email.trim() : "";
  const safePhone = typeof phone === "string" ? phone.trim() : "";
  const safeMessage = typeof message === "string" ? message.trim() : "";

  if (!safeName || safeName.length > 120) {
    return res.status(400).json({ error: "Please provide your name." });
  }
  if (!EMAIL_PATTERN.test(safeEmail)) {
    return res.status(400).json({ error: "Please provide a valid email." });
  }
  if (!PHONE_PATTERN.test(safePhone)) {
    return res
      .status(400)
      .json({ error: "Please provide a valid phone number." });
  }
  if (!safeMessage || safeMessage.length > 4000) {
    return res.status(400).json({ error: "Please provide your message." });
  }
  if (ENABLE_RECAPTCHA) {
    if (!captchaToken || typeof captchaToken !== "string") {
      return res.status(400).json({ error: "Captcha is required." });
    }
    const remoteIp = req.headers["x-forwarded-for"]
      ? String(req.headers["x-forwarded-for"]).split(",")[0].trim()
      : undefined;
    const captcha = await verifyRecaptcha(captchaToken, remoteIp);
    if (!captcha.ok) {
      return res.status(400).json({ error: captcha.error });
    }
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "Email service is not configured." });
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

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send email." });
  }
};

export default handler;
