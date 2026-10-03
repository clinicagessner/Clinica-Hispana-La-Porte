// Fecha de la última revisión de contenido de cada servicio. La usan el
// sitemap (lastmod), la caja de revisión médica y `MedicalWebPage.lastReviewed`
// de la página del servicio, para que las tres fechas no diverjan.
// Actualízala solo cuando cambie algo visible del servicio (texto, FAQ,
// features o metadatos).

/** Revisión base del catálogo; las excepciones van en SERVICE_DATES. */
export const SERVICES_LAST_REVIEWED = "2026-08-01"; // FAQs y horario de domingo

const B3_TANDAS = "2026-09-07"; // contenido propio reescrito en 4 tandas
const B1_RED = "2026-10-03"; // B1: farmacia (§9), plazos de resultados, metas y enlaces

export const SERVICE_DATES: Record<string, string> = {
  "examen-fisico-escolar": B1_RED,
  "examenes-sangre": B1_RED,
  vacunas: B3_TANDAS,
  "prueba-tuberculosis": B3_TANDAS,
  "enfermedades-transmision-sexual": B1_RED,
  ultrasonido: B3_TANDAS,
  "sueros-vitaminados": B3_TANDAS,
  ginecologia: B1_RED,
  "prueba-embarazo": B1_RED,
  anticonceptivos: B1_RED,
  "condiciones-cronicas": B1_RED,
  alergias: B1_RED,
  "enfermedades-respiratorias": B1_RED,
  "examen-heces": B1_RED,
  "prueba-strep": B1_RED,
  electrocardiograma: B3_TANDAS,
  "extraccion-implantes": B3_TANDAS,
  "suturas-heridas": B3_TANDAS,
  "curacion-heridas": B1_RED,
  "cirugias-menores": B3_TANDAS,
  "drenaje-abscesos": B1_RED,
  "unas-encarnadas": B3_TANDAS,
  farmacia: B1_RED,
  tiroides: B1_RED,
  "salud-hombre": B1_RED,
  "infecciones-urinarias": B1_RED,
  "examen-alcohol-drogas": B3_TANDAS,
  "examenes-inmigracion": B1_RED,
  "examen-dot": B3_TANDAS,
};

export function serviceLastReviewed(slug: string): string {
  return SERVICE_DATES[slug] ?? SERVICES_LAST_REVIEWED;
}
