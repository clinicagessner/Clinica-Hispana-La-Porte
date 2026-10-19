import { SITE_CONFIG } from "@/lib/constants";
import type { Locale } from "@/types";

export function localePrefix(locale: Locale): string {
  return locale === "en" ? "/en" : "";
}

/** URL absoluta para un path interno en un locale (es sin prefijo). */
export function absoluteUrl(path: string, locale: Locale): string {
  const clean = path === "/" ? "" : path;
  return `${SITE_CONFIG.baseUrl}${localePrefix(locale)}${clean}`;
}

/**
 * Bloque alternates para generateMetadata: canonical del locale actual
 * + hreflang es / en / x-default. El español nunca lleva prefijo.
 */
export function buildAlternates(path: string, locale: Locale) {
  const clean = path === "/" ? "" : path;
  return {
    canonical: absoluteUrl(path, locale),
    languages: {
      es: `${SITE_CONFIG.baseUrl}${clean}`,
      en: `${SITE_CONFIG.baseUrl}/en${clean}`,
      "x-default": `${SITE_CONFIG.baseUrl}${clean}`,
    },
  };
}

/**
 * openGraph + twitter por página. En Next el openGraph de una página reemplaza
 * entero al del layout, así que hay que repetir la imagen o se pierde.
 */
export function buildSocial({
  title,
  description,
  path,
  locale,
  image = SITE_CONFIG.ogImage,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  image?: string;
  type?: "website" | "article";
}) {
  return {
    openGraph: {
      type,
      title,
      description,
      url: absoluteUrl(path, locale),
      siteName: SITE_CONFIG.name,
      locale: locale === "en" ? "en_US" : "es_US",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
    },
  };
}

/**
 * <title> y meta de servicios que no son landing de Google Ads, cuando el H1 (`title`) no
 * sirve como título de búsqueda. El H1 y el texto de la página no cambian (análisis 2026-10-19).
 */
export const SERVICE_META: Record<
  string,
  Partial<Record<Locale, { title?: string; description?: string }>>
> = {
  "examenes-sangre": {
    es: { title: "Análisis de Sangre sin Cita en La Porte, TX | Laboratorio", description: "Exámenes y análisis de sangre sin cita en La Porte, TX: biometría, química, glucosa, colesterol y tiroides. Muestra en la clínica, resultados en español." },
    en: { title: "Walk-In Blood Tests in La Porte, TX | Lab Work", description: "Walk-in blood tests in La Porte, TX: CBC, chemistry, glucose, cholesterol and thyroid. Sample drawn at the clinic, results explained in your language." },
  },
  "sueros-vitaminados": {
    es: { title: "Sueros Vitaminados (Terapia IV) sin Cita en La Porte, TX", description: "Sueros vitaminados y terapia IV en La Porte, TX: hidratación y vitaminas por vía intravenosa, aplicadas por personal médico. Sin cita y en español." },
    en: { title: "IV Vitamin Therapy & IV Drips in La Porte, TX", description: "IV vitamin therapy and IV drips in La Porte, TX: hydration and vitamins given through a vein by our medical staff. Walk-ins welcome, Spanish spoken." },
  },
  "enfermedades-transmision-sexual": {
    es: { title: "Pruebas de ETS (STD) Confidenciales en La Porte, TX", description: "Pruebas de ETS/STD confidenciales y sin cita en La Porte, TX. Resultados y tratamiento explicados en español, con precios accesibles." },
    en: { title: "Confidential STD Testing in La Porte, TX | Walk-In", description: "Confidential walk-in STD testing in La Porte, TX. Results and treatment explained in Spanish or English, with affordable pricing." },
  },
  "ultrasonido": {
    es: { title: "Ultrasonido de Embarazo, Pélvico y Abdominal en La Porte" },
    en: { title: "Pregnancy, Pelvic & Abdominal Ultrasound in La Porte, TX" },
  },
};
