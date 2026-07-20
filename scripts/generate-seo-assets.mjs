/**
 * Generates per-page Open Graph images and apple-touch-icon.
 * Run: node scripts/generate-seo-assets.mjs
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");

const cards = [
  {
    file: "og-about.png",
    eyebrow: "About",
    title: "Joel Tavarez",
    subtitle: "Product engineer · experience, stack, and work history",
  },
  {
    file: "og-projects.png",
    eyebrow: "Projects",
    title: "Selected work",
    subtitle: "Products and sites designed and built end to end",
  },
  {
    file: "og-contact.png",
    eyebrow: "Contact",
    title: "Get in touch",
    subtitle: "Opportunities, collaboration, and product engineering",
  },
];

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function cardSvg({ eyebrow, title, subtitle }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="55%" stop-color="#eef2ff"/>
      <stop offset="100%" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#334155"/>
      <stop offset="50%" stop-color="#1d4ed8"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1040" cy="90" r="180" fill="#3b82f6" fill-opacity="0.08"/>
  <circle cx="160" cy="540" r="220" fill="#64748b" fill-opacity="0.08"/>
  <rect x="64" y="64" width="1072" height="502" rx="28" fill="#ffffff" fill-opacity="0.72" stroke="#cbd5e1" stroke-width="2"/>
  <text x="108" y="180" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="28" font-weight="600" letter-spacing="4" fill="#475569">${escapeXml(
    eyebrow.toUpperCase()
  )}</text>
  <text x="108" y="290" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="72" font-weight="700" fill="url(#accent)">${escapeXml(
    title
  )}</text>
  <text x="108" y="360" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="30" font-weight="500" fill="#64748b">${escapeXml(
    subtitle
  )}</text>
  <text x="108" y="500" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif" font-size="24" font-weight="600" fill="#334155">joeltavarez.dev</text>
</svg>`;
}

async function main() {
  await mkdir(imagesDir, { recursive: true });

  for (const card of cards) {
    const outPath = path.join(imagesDir, card.file);
    await sharp(Buffer.from(cardSvg(card)))
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(outPath);
    console.log(`Wrote ${outPath}`);
  }

  const logoPath = path.join(imagesDir, "logo.png");
  const applePath = path.join(imagesDir, "apple-touch-icon.png");
  await sharp(logoPath)
    .resize(180, 180, { fit: "cover" })
    .png()
    .toFile(applePath);
  console.log(`Wrote ${applePath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
