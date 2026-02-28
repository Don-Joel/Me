import dynamic from "next/dynamic";
import { useRef, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheck, FiShield } from "react-icons/fi";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const PHONE_PATTERN = /^\+?[0-9\s().-]{7,20}$/;

const inputBase =
  "w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white/80 dark:bg-slate-800/60 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 font-general-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:ring-offset-0 focus:border-blue-500 dark:focus:border-blue-400";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const recaptchaRef = useRef(null);

  const isCaptchaConfigured = useMemo(
    () => Boolean(RECAPTCHA_SITE_KEY),
    []
  );

  const handleVerifyHuman = async () => {
    if (!recaptchaRef.current || !isCaptchaConfigured) return;
    setError("");
    setIsVerifying(true);
    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();
      if (token) {
        setCaptchaToken(token);
      } else {
        setError("Verification failed. Please try again.");
      }
    } catch {
      setError("Verification failed. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  const handlePhoneChange = (value) => {
    const sanitized = value.replace(/[^0-9+()\-.\s]/g, "").slice(0, 20);
    setPhone(sanitized);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!PHONE_PATTERN.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (!captchaToken) {
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

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload?.error || "Unable to send message.");
      }

      setSent(true);
    } catch (submitError) {
      setError(submitError.message || "Unable to send message.");
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
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => handlePhoneChange(e.target.value)}
          placeholder="+1 (555) 555-5555"
          className={inputBase}
          autoComplete="tel"
          pattern="^\+?[0-9\s().-]{7,20}$"
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What's on your mind?"
          rows={5}
          className={`${inputBase} resize-none`}
          required
        />
      </div>
      <div className="space-y-2">
        {isCaptchaConfigured ? (
          <>
            <div className="absolute left-[-9999px] w-px h-px overflow-hidden" aria-hidden>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                size="invisible"
              />
            </div>
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
        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.35)" }}
        whileTap={{ scale: 0.98 }}
        disabled={isSubmitting || !isCaptchaConfigured || !captchaToken}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-slate-700 to-blue-700 hover:from-slate-600 hover:to-blue-600 dark:from-slate-600 dark:to-blue-600 dark:hover:from-slate-500 dark:hover:to-blue-500 text-white font-general-semibold rounded-xl shadow-lg shadow-blue-600/20 dark:shadow-blue-600/15 hover:shadow-xl hover:shadow-blue-600/25 transition-shadow duration-300 disabled:opacity-50 disabled:pointer-events-none"
      >
        <motion.span
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        >
          <FiSend className="w-5 h-5" />
        </motion.span>
        {isSubmitting ? "Sending..." : "Send message"}
      </motion.button>
    </motion.form>
  );
}
