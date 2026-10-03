import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllServiceSlugs } from "@/lib/services";
import { getAllPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";

const BASE = SITE_CONFIG.baseUrl;

// Sin changefreq/priority: Google los ignora. Sí usa lastmod para decidir qué
// volver a rastrear. Las fechas deben reflejar cambios REALES de contenido:
// actualízalas solo cuando cambie algo visible en esa página.
const LASTMOD = {
  home: "2026-09-01", // nuevas promos en el carrusel (testosterona y chequeo mujer)
  walkIn: "2026-08-20",
  promociones: "2026-09-01", // promos de testosterona $79 y chequeo de la mujer $179
  landingComparacion: "2026-08-01",
  services: "2026-08-01", // FAQs y horario de domingo
  servicesIndex: "2026-08-01",
  blogIndex: "2026-08-18", // último post publicado
} as const;

// Servicios actualizados después de LASTMOD.services.
const SERVICE_LASTMOD: Record<string, string> = {
  "examen-fisico-escolar": "2026-08-26",
  // Contenido propio reescrito el 2026-09-07 (4 tandas), incluidas las 6 de la tanda final.
  "examenes-sangre": "2026-09-07",
  "vacunas": "2026-09-07",
  "prueba-tuberculosis": "2026-09-07",
  "enfermedades-transmision-sexual": "2026-09-07",
  "ultrasonido": "2026-09-07",
  "sueros-vitaminados": "2026-09-07",
  "ginecologia": "2026-09-07",
  "prueba-embarazo": "2026-09-07",
  "anticonceptivos": "2026-09-07",
  "condiciones-cronicas": "2026-09-07",
  "alergias": "2026-09-07",
  "enfermedades-respiratorias": "2026-09-07",
  "examen-heces": "2026-09-07",
  "prueba-strep": "2026-09-07",
  "electrocardiograma": "2026-09-07",
  "extraccion-implantes": "2026-09-07",
  "suturas-heridas": "2026-09-07",
  "curacion-heridas": "2026-09-07",
  "cirugias-menores": "2026-09-07",
  "drenaje-abscesos": "2026-09-07",
  "unas-encarnadas": "2026-09-07",
  "farmacia": "2026-09-07",
  "tiroides": "2026-09-07",
  "salud-hombre": "2026-09-07",
  "infecciones-urinarias": "2026-09-07",
  "examen-alcohol-drogas": "2026-09-07",
  "examenes-inmigracion": "2026-09-07",
  "examen-dot": "2026-09-07",
};

const localePath = (locale: string) => (locale === "es" ? "" : `/${locale}`);

// Cada idioma lleva su propia <url> con alternates recíprocos (formato que pide
// Google para hreflang en sitemaps). /privacy no va: tiene noindex.
function entries(path: string, lastModified: string): MetadataRoute.Sitemap {
  const clean = path === "/" ? "" : path;
  return locales.map((locale) => ({
    url: `${BASE}${localePath(locale)}${clean}`,
    lastModified,
    alternates: {
      languages: {
        es: `${BASE}${clean}`,
        en: `${BASE}/en${clean}`,
        "x-default": `${BASE}${clean}`,
      },
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entries("/", LASTMOD.home),
    ...entries("/services", LASTMOD.servicesIndex),
    ...entries("/promociones", LASTMOD.promociones),
    ...entries("/blog", LASTMOD.blogIndex),
    ...entries("/walk-in", LASTMOD.walkIn),
    ...entries("/landing/comparacion-clinicas-laporte", LASTMOD.landingComparacion),
    ...getAllServiceSlugs().flatMap((slug) =>
      entries(`/services/${slug}`, SERVICE_LASTMOD[slug] ?? LASTMOD.services),
    ),
    ...getAllPosts("es").flatMap((post) =>
      entries(`/blog/${post.slug}`, post.updated ?? post.date),
    ),
  ];
}
