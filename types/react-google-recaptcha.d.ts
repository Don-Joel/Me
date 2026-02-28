declare module "react-google-recaptcha" {
  import * as React from "react";

  export interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    size?: "compact" | "normal" | "invisible";
    theme?: "light" | "dark";
    badge?: "bottomright" | "bottomleft" | "inline";
    hl?: string;
    isolated?: boolean;
    tabindex?: number;
    className?: string;
    style?: React.CSSProperties;
    stoken?: string;
  }

  export default class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {
    executeAsync(): Promise<string | null>;
    reset(): void;
  }
}
