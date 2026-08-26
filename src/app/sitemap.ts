import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllServiceSlugs } from "@/lib/services";
import { getAllPosts } from "@/lib/blog";

const BASE = SITE_CONFIG.baseUrl;

// Google ignora changefreq/priority pero sí usa lastmod para decidir qué
// volver a rastrear. Las fechas deben reflejar cambios REALES de contenido:
// actualízalas solo cuando cambie algo visible en esa página.
const LASTMOD = {
  home: "2026-08-20", // titles/H1 sin cita, sin seguro, 7 días
  walkIn: "2026-08-20",
  promociones: "2026-08-26", // title con precios
  landingComparacion: "2026-08-01",
  services: "2026-08-01", // FAQs y horario de domingo
  servicesIndex: "2026-08-01",
  blogIndex: "2026-08-18", // último post publicado
  privacy: "2026-06-08",
} as const;

// Servicios actualizados después de LASTMOD.services.
const SERVICE_LASTMOD: Record<string, string> = {
  "examen-fisico-escolar": "2026-08-26",
  "examen-dot": "2026-08-26",
  "examenes-inmigracion": "2026-08-26",
  "examen-alcohol-drogas": "2026-08-26",
  "salud-hombre": "2026-08-26",
  tiroides: "2026-08-26",
};

function entry(
  path: string,
  lastModified: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap[number] {
  const clean = path === "/" ? "" : path;
  return {
    url: `${BASE}${clean}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: {
        es: `${BASE}${clean}`,
        en: `${BASE}/en${clean}`,
        "x-default": `${BASE}${clean}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: MetadataRoute.Sitemap = [
    entry("/", LASTMOD.home, "weekly", 1),
    entry("/services", LASTMOD.servicesIndex, "weekly", 0.9),
    entry("/promociones", LASTMOD.promociones, "weekly", 0.8),
    entry("/blog", LASTMOD.blogIndex, "weekly", 0.7),
    entry("/walk-in", LASTMOD.walkIn, "monthly", 0.8),
    entry(
      "/landing/comparacion-clinicas-laporte",
      LASTMOD.landingComparacion,
      "monthly",
      0.7,
    ),
    entry("/privacy", LASTMOD.privacy, "yearly", 0.3),
  ];

  const services: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) =>
    entry(
      `/services/${slug}`,
      SERVICE_LASTMOD[slug] ?? LASTMOD.services,
      "monthly",
      0.8,
    ),
  );

  const posts: MetadataRoute.Sitemap = getAllPosts("es").map((post) =>
    entry(`/blog/${post.slug}`, post.updated ?? post.date, "monthly", 0.6),
  );

  return [...staticPaths, ...services, ...posts];
}
