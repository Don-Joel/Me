import { lazy, Suspense, useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheck, FiShield } from "react-icons/fi";
import { PHONE_PATTERN, formatPhoneDisplay } from "../../lib/phone";

const ReCAPTCHALoader = lazy(() => import("./ReCAPTCHALoader"));

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const inputBase =
  "w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/80 dark:bg-slate-800/60 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 font-general-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-0 focus:border-blue-500 dark:focus:border-blue-400";

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
          const base = payload?.error ?? "Too many attempts. Please try again later.";
          const minutes =
            payload?.retryAfter != null
              ? Math.ceil(payload.retryAfter / 60)
              : 0;
          setError(
            minutes > 0
              ? `${base} You can try again in ${minutes} minute${minutes === 1 ? "" : "s"}.`
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
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="p-6 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="inline-flex p-4 rounded-2xl bg-emerald-100/80 dark:bg-emerald-900/40 mb-6 ring-2 ring-emerald-500/20"
        >
          <FiCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
        </motion.div>
        <h3 className="text-xl font-general-semibold text-slate-900 dark:text-slate-100 mb-2">
          Message sent
        </h3>
        <p className="text-slate-600 dark:text-slate-400 font-general-medium text-sm">
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
              <motion.button
                type="button"
                onClick={handleVerifyHuman}
                disabled={isVerifying}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-general-semibold hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors disabled:opacity-60"
              >
                <FiShield className="w-5 h-5" />
                {isVerifying ? "Verifying..." : "Verify I'm human"}
              </motion.button>
            ) : (
              <p className="text-sm text-emerald-600 dark:text-emerald-400 font-general-medium inline-flex items-center gap-2">
                <FiCheck className="w-4 h-4 flex-shrink-0" />
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
      <motion.button
        type="submit"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.35)",
        }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting || (isCaptchaConfigured && !captchaToken)}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-slate-700 to-blue-700 hover:from-slate-600 hover:to-blue-600 dark:from-slate-600 dark:to-blue-600 dark:hover:from-slate-500 dark:hover:to-blue-500 text-white font-general-semibold rounded-xl shadow-lg shadow-blue-600/20 dark:shadow-blue-600/15 hover:shadow-xl hover:shadow-blue-600/25 transition-shadow duration-300 disabled:opacity-50 disabled:pointer-events-none"
      >
        <motion.span whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
          <FiSend className="w-5 h-5" />
        </motion.span>
        {isSubmitting ? "Sending..." : "Send message"}
      </motion.button>
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
