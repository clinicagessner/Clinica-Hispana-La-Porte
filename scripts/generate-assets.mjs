// Genera assets placeholder de marca (favicon, iconos PWA, OG) con sharp.
// El cliente entregará el logo real; reemplazar después y volver a correr:
//   node scripts/generate-assets.mjs
import sharp from "sharp";
import fs from "node:fs";

const BLUE = "#1565c0";
const BLUE_DEEP = "#0b2a4a";
const TEAL = "#0e9aa7";
const RED = "#d32f2f";

// Insignia: corazón blanco + cruz roja sobre cuadro azul (motivo del logo).
function iconSVG(size) {
  const r = Math.round(size * 0.22);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
    <rect width="100" height="100" rx="${(r / size) * 100}" fill="${BLUE}"/>
    <path d="M50 82C50 82 16 62 16 38 16 26.9 24.8 18 35.6 18c6.4 0 12 3.2 14.4 8 2.4-4.8 8-8 14.4-8C75.2 18 84 26.9 84 38c0 24-34 44-34 44Z" fill="#ffffff" opacity="0.96"/>
    <path d="M45 32h10v9h9v10h-9v9H45v-9h-9V41h9z" fill="${RED}"/>
  </svg>`;
}

function ogSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${BLUE_DEEP}"/>
        <stop offset="1" stop-color="${BLUE}"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#g)"/>
    <circle cx="1050" cy="120" r="220" fill="${TEAL}" opacity="0.22"/>
    <circle cx="170" cy="560" r="180" fill="${RED}" opacity="0.16"/>
    <g transform="translate(90,210)">
      <rect width="150" height="150" rx="34" fill="${BLUE}"/>
      <g transform="translate(11,11) scale(1.28)">
        <path d="M50 82C50 82 16 62 16 38 16 26.9 24.8 18 35.6 18c6.4 0 12 3.2 14.4 8 2.4-4.8 8-8 14.4-8C75.2 18 84 26.9 84 38c0 24-34 44-34 44Z" fill="#ffffff" opacity="0.96"/>
        <path d="M45 32h10v9h9v10h-9v9H45v-9h-9V41h9z" fill="${RED}"/>
      </g>
    </g>
    <text x="280" y="270" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="700" fill="#9fd0ff" letter-spacing="3">CLÍNICA HISPANA</text>
    <text x="280" y="345" font-family="Arial, Helvetica, sans-serif" font-size="86" font-weight="800" fill="#ffffff">Nueva Salud</text>
    <text x="280" y="410" font-family="Arial, Helvetica, sans-serif" font-size="44" font-weight="700" fill="#7fe3ec">La Porte, TX</text>
    <text x="90" y="540" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#cfe2f6">Atención médica 100% en español · Sin cita · Con o sin seguro</text>
  </svg>`;
}

async function png(svg, out, w, h) {
  await sharp(Buffer.from(svg)).resize(w, h).png().toFile(out);
  console.log("wrote", out);
}

await png(iconSVG(512), "src/app/icon.png", 512, 512);
await png(iconSVG(180), "src/app/apple-icon.png", 180, 180);
await png(iconSVG(192), "public/web-app-manifest-192x192.png", 192, 192);
await png(iconSVG(512), "public/web-app-manifest-512x512.png", 512, 512);
await png(ogSVG(), "public/images/og/og-default.png", 1200, 630);

// favicon.ico (Next usa icon.png como favicon; generamos también .ico 48x48)
await sharp(Buffer.from(iconSVG(48))).resize(48, 48).png().toFile("src/app/favicon.ico");
console.log("wrote src/app/favicon.ico");
fs.writeFileSync("/tmp/assets-done.txt", "ok");
