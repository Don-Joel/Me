# Portfolio - Joel Tavarez

A modern, responsive portfolio website built with Next.js and Tailwind CSS.

## About

This is my website featuring my skills and professional experience. The site is built with modern web technologies and designed to be fast, accessible, and visually appealing.

## Tech Stack

- **Framework**: Next.js 13
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons, React Social Icons
- **Other**: React CountUp

## Features

- Responsive design that works on all devices
- Dark/light theme support
- Smooth animations and transitions
- SEO optimized
- Fast performance with Next.js

## Getting Started

### Prerequisites

- Node.js >= 24.0.0
- npm >= 10.0.0

### Installation

1. Clone the repository (if you have permission)
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

Copy `.env.example` to `.env.local` and set the following. All are required for the contact form except where noted.

| Variable | API / Service | Description |
| -------- | ------------- | ----------- |
| `RESEND_API_KEY` | [Resend](https://resend.com) | API key for sending contact form emails. |
| `CONTACT_FROM_EMAIL` | Resend | "From" address for contact emails (e.g. `Portfolio Contact <onboarding@resend.dev>`). |
| `RECAPTCHA_SECRET_KEY` | [Google reCAPTCHA](https://www.google.com/recaptcha) | Server-side secret for reCAPTCHA v2. |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Google reCAPTCHA | Public site key for the reCAPTCHA widget (exposed to the client). |
| `UPSTASH_REDIS_REST_URL` | [Upstash Redis](https://upstash.com) | REST URL for the Redis instance. **Optional.** |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis | REST token for the Redis instance. **Optional.** |

#### New: Upstash Redis (rate limiting)

**Variables:** `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`

The contact form uses **Upstash Redis** with `@upstash/ratelimit` to limit how many submissions each IP can send per hour (e.g. 5 per hour). This is needed because the app runs on **Vercel**: each request can hit a different serverless instance, so in-memory counters are not shared and would not enforce a global limit. Upstash provides Redis over HTTP, so every instance can read and update the same counters and the limit applies across all requests. If these env vars are unset, the contact API still works; rate limiting is simply skipped.

### Build for Production

```bash
npm run build
npm start
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

Copyright (c) 2024 Joel Tavarez. All Rights Reserved.

This project and its source code are proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited without the express written permission of the copyright owner.

See [LICENSE](LICENSE) file for full details.

## Contact

For inquiries about this portfolio or my work, please reach out through the contact information provided on the website.
