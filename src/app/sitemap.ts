import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllServiceSlugs } from "@/lib/services";
import { getAllPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";
import { serviceLastReviewed } from "@/lib/content-dates";

const BASE = SITE_CONFIG.baseUrl;

// Sin changefreq/priority: Google los ignora. Sí usa lastmod para decidir qué
// volver a rastrear. Las fechas deben reflejar cambios REALES de contenido:
// actualízalas solo cuando cambie algo visible en esa página. Los servicios
// salen de `content-dates.ts` (misma fecha que su caja de revisión médica) y
// los posts de `updated` / `date` de su frontmatter, por idioma.
const LASTMOD = {
  home: "2026-10-03", // B1: bloque "¿Qué es…?", WhatsApp de la ficha y meta propia
  walkIn: "2026-10-03", // B1: título y descripción
  promociones: "2026-10-03", // B1: título y descripción sin precios
  landingComparacion: "2026-10-03", // B0: reseñas reales y canonical; B1: plazos
  servicesIndex: "2026-08-01",
  blogIndex: "2026-08-18", // último post publicado
} as const;

const localePath = (locale: string) => (locale === "es" ? "" : `/${locale}`);

// Cada idioma lleva su propia <url> con alternates recíprocos (formato que pide
// Google para hreflang en sitemaps). /privacy no va: tiene noindex.
function entries(
  path: string,
  lastModified: string | ((locale: string) => string),
): MetadataRoute.Sitemap {
  const clean = path === "/" ? "" : path;
  return locales.map((locale) => ({
    url: `${BASE}${localePath(locale)}${clean}`,
    lastModified: typeof lastModified === "function" ? lastModified(locale) : lastModified,
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
  // Fecha de cada post por idioma: las traducciones no siempre cambian juntas.
  const postDates = new Map<string, string>(
    locales.flatMap((locale) =>
      getAllPosts(locale).map(
        (p) => [`${locale}:${p.slug}`, p.updated ?? p.date] as [string, string],
      ),
    ),
  );

  return [
    ...entries("/", LASTMOD.home),
    ...entries("/services", LASTMOD.servicesIndex),
    ...entries("/promociones", LASTMOD.promociones),
    ...entries("/blog", LASTMOD.blogIndex),
    ...entries("/walk-in", LASTMOD.walkIn),
    ...entries("/landing/comparacion-clinicas-laporte", LASTMOD.landingComparacion),
    ...getAllServiceSlugs().flatMap((slug) =>
      entries(`/services/${slug}`, serviceLastReviewed(slug)),
    ),
    ...getAllPosts("es").flatMap((post) =>
      entries(
        `/blog/${post.slug}`,
        (locale) => postDates.get(`${locale}:${post.slug}`) ?? post.updated ?? post.date,
      ),
    ),
  ];
}
