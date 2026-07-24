import { lazy, Suspense, useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheck, FiShield } from "react-icons/fi";
import { PHONE_PATTERN, formatPhoneDisplay } from "../../lib/phone";
import { primaryCtaClasses } from "../ui/cta";

const ReCAPTCHALoader = lazy(() => import("./ReCAPTCHALoader"));

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const inputBase =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 font-general-medium text-slate-900 placeholder-slate-400 transition-colors duration-200 focus:border-slate-400 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder-slate-500 dark:focus:border-slate-500";

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [loadCaptchaWidget, setLoadCaptchaWidget] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isCaptchaConfigured = Boolean(RECAPTCHA_SITE_KEY);

  const handleVerifyHuman = () => {
    if (!isCaptchaConfigured) return;
    setError("");
    setIsVerifying(true);
    setLoadCaptchaWidget(true);
  };

  const handleCaptchaToken = (token: string) => {
    setCaptchaToken(token);
    setIsVerifying(false);
  };

  const handleCaptchaError = () => {
    setError("Verification failed. Please try again.");
    setIsVerifying(false);
    setLoadCaptchaWidget(false);
  };

  const handlePhoneChange = (value: string) => {
    setPhone(formatPhoneDisplay(value));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!PHONE_PATTERN.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (isCaptchaConfigured && !captchaToken) {
      setError("Please verify you're human first.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          captchaToken,
        }),
      });

      const payload = (await response.json()) as {
        error?: string;
        retryAfter?: number;
      };
      if (!response.ok) {
        if (response.status === 429) {
          const base =
            payload?.error ?? "Too many attempts. Please try again later.";
          const minutes =
            payload?.retryAfter != null
              ? Math.ceil(payload.retryAfter / 60)
              : 0;
          setError(
            minutes > 0
              ? `${base} You can try again in ${minutes} minute${
                  minutes === 1 ? "" : "s"
                }.`
              : base
          );
        } else {
          setError(payload?.error ?? "Unable to send message.");
        }
        return;
      }

      setSent(true);
    } catch (submitError: unknown) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to send message."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="py-8 text-center"
      >
        <div className="mb-5 inline-flex rounded-full bg-slate-900 p-3 text-white dark:bg-white dark:text-slate-900">
          <FiCheck className="h-5 w-5" />
        </div>
        <p
          role="status"
          className="mb-2 text-xl font-general-semibold text-slate-900 dark:text-slate-100"
        >
          Message sent
        </p>
        <p className="text-sm font-general-medium text-slate-500 dark:text-slate-400">
          Thanks for reaching out. I will get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="space-y-1.5">
        <label
          htmlFor="name"
          className="block text-sm font-general-semibold text-slate-700 dark:text-slate-300"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder="Your name"
          className={inputBase}
          autoComplete="name"
        />
      </div>
      <div className="space-y-1.5">
        <label
          htmlFor="phone"
          className="block text-sm font-general-semibold text-slate-700 dark:text-slate-300"
        >
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          value={phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handlePhoneChange(e.target.value)
          }
          placeholder="(555) 555-5555"
          className={inputBase}
          autoComplete="tel"
          pattern={PHONE_PATTERN.source}
          title="Use digits and optional +, spaces, parentheses, dots, or dashes."
          required
        />
      </div>
      <div className="space-y-1.5">
        <label
          htmlFor="email"
          className="block text-sm font-general-semibold text-slate-700 dark:text-slate-300"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          placeholder="you@example.com"
          className={inputBase}
          autoComplete="email"
          required
        />
      </div>
      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="block text-sm font-general-semibold text-slate-700 dark:text-slate-300"
        >
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
          placeholder="What's on your mind?"
          rows={5}
          className={`${inputBase} resize-none`}
          required
        />
      </div>
      <div className="space-y-2">
        {isCaptchaConfigured ? (
          <>
            {mounted && loadCaptchaWidget && RECAPTCHA_SITE_KEY && (
              <Suspense fallback={null}>
                <ReCAPTCHALoader
                  sitekey={RECAPTCHA_SITE_KEY}
                  onToken={handleCaptchaToken}
                  onError={handleCaptchaError}
                />
              </Suspense>
            )}
            {!captchaToken ? (
              <button
                type="button"
                onClick={handleVerifyHuman}
                disabled={isVerifying}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3.5 font-general-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:bg-slate-900"
              >
                <FiShield className="h-4 w-4" />
                {isVerifying ? "Verifying..." : "Verify I'm human"}
              </button>
            ) : (
              <p className="inline-flex items-center gap-2 text-sm font-general-medium text-slate-600 dark:text-slate-400">
                <FiCheck className="h-4 w-4 flex-shrink-0" />
                Verified. You can send your message.
              </p>
            )}
          </>
        ) : (
          <p className="text-xs text-amber-600 dark:text-amber-400 font-general-medium">
            reCAPTCHA is not configured. Add NEXT_PUBLIC_RECAPTCHA_SITE_KEY.
          </p>
        )}
        {error ? (
          <p className="text-sm text-rose-600 dark:text-rose-400 font-general-medium">
            {error}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={isSubmitting || (isCaptchaConfigured && !captchaToken)}
        className={`${primaryCtaClasses} w-full gap-2 px-6 py-3.5 disabled:pointer-events-none disabled:opacity-50`}
      >
        <FiSend className="h-4 w-4" />
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      {isCaptchaConfigured && (
        <p className="mt-4 text-xs text-slate-400 dark:text-slate-500 font-general-medium text-center">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-600 dark:hover:text-slate-400"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-600 dark:hover:text-slate-400"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      )}
    </motion.form>
  );
};

export default ContactForm;
