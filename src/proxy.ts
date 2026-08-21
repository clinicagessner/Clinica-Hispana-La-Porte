import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "@/i18n/routing";

// Next 16 renombró middleware.ts → proxy.ts. next-intl maneja la
// negociación de locale y los prefijos de ruta (as-needed).
const intl = createMiddleware(routing);

// Restos del WordPress que vivía antes en este dominio (posts de demo del
// tema y rutas propias de WP). Nunca tuvieron contenido real, así que no se
// redirigen: se responde 410 Gone para que Google deje de reintentarlos.
const WP_REMNANTS =
  /^\/(?:hello-world|news-aggregation-app-initech-raises-100-million-from-existing-investors|the-biggest-shifts-and-trends-driving-short-and-long-term-growth-in-the-future|credit-bank-which-offers-loans-to-people-without-credit-score-has-raised-15m|category(?:\/.*)?|tag(?:\/.*)?|author(?:\/.*)?|feed|wp-admin(?:\/.*)?|wp-content(?:\/.*)?|wp-includes(?:\/.*)?|wp-login)\/?$/;

export default function proxy(request: NextRequest) {
  if (WP_REMNANTS.test(request.nextUrl.pathname)) {
    return new Response(null, { status: 410 });
  }
  return intl(request);
}

export const config = {
  // Excluye api, archivos internos de Next/Vercel y rutas con extensión.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
