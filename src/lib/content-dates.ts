// Fecha de la última revisión de contenido de cada servicio. La usan el
// sitemap (lastmod), la caja de revisión médica y `MedicalWebPage.lastReviewed`
// de la página del servicio, para que las tres fechas no diverjan.
// Actualízala solo cuando cambie algo visible del servicio (texto, FAQ,
// features o metadatos).

/** Revisión base del catálogo; las excepciones van en SERVICE_DATES. */
export const SERVICES_LAST_REVIEWED = "2026-08-01"; // FAQs y horario de domingo

const B3_TANDAS = "2026-09-07"; // contenido propio reescrito en 4 tandas
const B1_RED = "2026-10-03";
const FARMACIA_CLINICA = "2026-10-15"; // farmacia en la clínica: el paciente compra ahí lo recetado (dueños) // B1 y B3: farmacia y plazos (§9), firma "equipo médico", FAQ y promos propias

export const SERVICE_DATES: Record<string, string> = {
  "examen-fisico-escolar": B1_RED,
  "examenes-sangre": B1_RED,
  vacunas: B3_TANDAS,
  "prueba-tuberculosis": B1_RED,
  "enfermedades-transmision-sexual": FARMACIA_CLINICA,
  ultrasonido: B1_RED,
  "sueros-vitaminados": B1_RED,
  ginecologia: B1_RED,
  "prueba-embarazo": B1_RED,
  anticonceptivos: B1_RED,
  "condiciones-cronicas": FARMACIA_CLINICA,
  alergias: FARMACIA_CLINICA,
  "enfermedades-respiratorias": FARMACIA_CLINICA,
  "examen-heces": B1_RED,
  "prueba-strep": FARMACIA_CLINICA,
  electrocardiograma: B1_RED,
  "extraccion-implantes": B3_TANDAS,
  "suturas-heridas": B3_TANDAS,
  "curacion-heridas": FARMACIA_CLINICA,
  "cirugias-menores": B1_RED,
  "drenaje-abscesos": B1_RED,
  "unas-encarnadas": B3_TANDAS,
  farmacia: FARMACIA_CLINICA,
  tiroides: B1_RED,
  "salud-hombre": B1_RED,
  "infecciones-urinarias": FARMACIA_CLINICA,
  "examen-alcohol-drogas": B3_TANDAS,
  "examenes-inmigracion": B1_RED,
  "examen-dot": B1_RED,
};

export function serviceLastReviewed(slug: string): string {
  return SERVICE_DATES[slug] ?? SERVICES_LAST_REVIEWED;
}
