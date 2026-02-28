"use client";

import { useRef, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export interface ReCAPTCHALoaderProps {
  sitekey: string;
  onToken: (token: string) => void;
  onError: () => void;
}

/**
 * Loads and runs invisible reCAPTCHA on mount. Used so the reCAPTCHA script
 * is only loaded when the user clicks "Verify I'm human", not on initial page load.
 */
const ReCAPTCHALoader = ({
  sitekey,
  onToken,
  onError,
}: ReCAPTCHALoaderProps) => {
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const onTokenRef = useRef(onToken);
  const onErrorRef = useRef(onError);
  onTokenRef.current = onToken;
  onErrorRef.current = onError;

  useEffect(() => {
    const recaptcha = recaptchaRef.current;
    if (!recaptcha) return;

    recaptcha
      .executeAsync()
      .then((token) => {
        recaptcha.reset();
        if (token) {
          onTokenRef.current(token);
        } else {
          onErrorRef.current();
        }
      })
      .catch(() => onErrorRef.current());
  }, []);

  return (
    <div
      className="absolute left-[-9999px] w-px h-px overflow-hidden"
      aria-hidden
    >
      <ReCAPTCHA ref={recaptchaRef} sitekey={sitekey} size="invisible" />
    </div>
  );
};

export default ReCAPTCHALoader;
