import type {
  NavLink,
  Service,
  ServiceCategory,
  Testimonial,
} from "@/types";

// Normaliza la URL del sitio: añade https:// si falta el esquema y quita la
// barra final. Evita que un valor mal puesto en la env (p. ej.
// "clinicahispananslaporte.com" sin https) rompa `new URL()` en el build.
function normalizeBaseUrl(raw: string): string {
  const trimmed = raw.trim();
  const withScheme = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  return withScheme.replace(/\/+$/, "");
}

const SITE_URL = normalizeBaseUrl(
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.clinicahispananslaporte.com",
);

export const SITE_CONFIG = {
  name: "Clínica Hispana Nueva Salud La Porte",
  shortName: "Nueva Salud La Porte",
  tagline: "Atención médica profesional 100% en español",
  taglineEn: "Professional healthcare 100% in Spanish",
  description:
    "Clínica hispana en La Porte, TX, en el área de Houston. Centro médico con atención 100% en español, sin cita previa y precios accesibles. No necesitas seguro médico. Medicina familiar, laboratorio, exámenes de inmigración y más.",
  descriptionEn:
    "Hispanic clinic in La Porte, TX, in the Houston area. Medical center with care 100% in Spanish, walk-ins welcome and affordable pricing. No insurance needed. Family medicine, lab work, immigration exams and more.",
  baseUrl: SITE_URL,
  locale: "es-MX",
  logoUrl: "/logo-nueva-salud.webp",
  ogImage: "/images/og/og-default.png",
} as const;

export const CONTACT_INFO = {
  address: "9606 Spencer Hwy Ste D",
  city: "La Porte",
  state: "TX",
  zip: "77571",
  phone: "+13462221006",
  phoneFormatted: "+1 (346) 222-1006",
  phoneDisplay: "(346) 222-1006",
  // WhatsApp — número EXCLUSIVO para chat (no recibe llamadas). Nunca usarlo
  // en tel:, NAP, schema ni listados; el teléfono oficial sigue siendo `phone`
  // y el swap de CallRail solo aplica sobre ese.
  whatsapp: "13462221006", // E.164 sin "+", listo para wa.me
  whatsappDisplay: "(346) 222-1006",
  email: "clinicaporte@chnuevasalud.com",
  hours: "Lunes a Sábado: 9:00 AM - 9:00 PM · Domingo: 9:00 AM - 7:00 PM",
  hoursEn: "Monday to Saturday: 9:00 AM - 9:00 PM · Sunday: 9:00 AM - 7:00 PM",
  hoursWeekday: "Lunes a Viernes: 9:00 AM - 9:00 PM",
  hoursWeekend: "Sábado: 9:00 AM - 9:00 PM · Domingo: 9:00 AM - 7:00 PM",
  // Coordenadas exactas (Google Places API) de 9606 Spencer Hwy Ste D, La Porte TX.
  coordinates: { lat: 29.6639431, lng: -95.0883054 },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Hispana+Nueva+Salud+La+Porte+9606+Spencer+Hwy+La+Porte+TX+77571&query_place_id=ChIJTYg9oFCfQIYRpivfyh6yP1Q",
  // Enlace directo al diálogo de "escribir reseña" de Google (usa el Place ID).
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJTYg9oFCfQIYRpivfyh6yP1Q",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=9606+Spencer+Hwy+Ste+D,+La+Porte,+TX+77571&t=m&z=16&ie=UTF8&iwloc=&output=embed",
} as const;

// Horario estructurado para JSON-LD (openingHoursSpecification).
export const OPENING_HOURS = [
  { day: "Monday", opens: "09:00", closes: "21:00" },
  { day: "Tuesday", opens: "09:00", closes: "21:00" },
  { day: "Wednesday", opens: "09:00", closes: "21:00" },
  { day: "Thursday", opens: "09:00", closes: "21:00" },
  { day: "Friday", opens: "09:00", closes: "21:00" },
  { day: "Saturday", opens: "09:00", closes: "21:00" },
  { day: "Sunday", opens: "09:00", closes: "19:00" },
] as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/clinicahispanaporte",
  instagram: "https://www.instagram.com/clinicanuevasaludporte",
} as const;

// Fallback de build para rating/reseñas. La data en vivo la trae
// getGooglePlaceData() cuando hay GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID.
export const GOOGLE_REVIEWS_DATA = {
  averageRating: 4.9,
  totalReviews: 259,
} as const;

// Navbar (header): sin "Sin cita".
export const NAV_LINKS: NavLink[] = [
  { key: "services", href: "/services" },
  { key: "promotions", href: "/promociones" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/#contacto" },
];

// Footer: incluye "Sin cita" (walk-in).
export const FOOTER_NAV_LINKS: NavLink[] = [
  { key: "services", href: "/services" },
  { key: "promotions", href: "/promociones" },
  { key: "blog", href: "/blog" },
  { key: "walkIn", href: "/walk-in" },
  { key: "contact", href: "/#contacto" },
];

// Promociones. El flyer (imagen 4:5, 1080x1350) vive en
// public/images/promotions/<slug>.webp y el texto descriptivo (title, blurb,
// includes, price) se renderiza en la página /promociones para SEO y los flyers
// se muestran en el carrusel de la home. Para agregar una: nuevo objeto aquí +
// flyer con el mismo slug. `price` = null cuando el flyer no muestra precio.
export interface Promotion {
  slug: string;
  title: string;
  titleEn: string;
  price: string | null;
  blurb: string;
  blurbEn: string;
  includes: string[];
  includesEn: string[];
  alt: string;
  altEn: string;
}

export const PROMOTIONS: Promotion[] = [
  {
    slug: "chequeo-general-completo",
    title: "Chequeo general completo",
    titleEn: "Complete general checkup",
    price: "$99",
    blurb:
      "Cuídate hoy y vive mejor mañana: chequeo general completo con examen general de sangre, A1C (hemoglobina glicosilada), examen general de orina y consulta médica gratis. Valor regular $250, por solo $99.",
    blurbEn:
      "Take care of yourself today and live better tomorrow: complete general checkup with a full blood panel, A1C (glycated hemoglobin), general urine test and a free medical consultation. Regular value $250, for only $99.",
    includes: [
      "Examen general de sangre",
      "A1C (hemoglobina glicosilada)",
      "Examen general de orina",
      "Consulta médica gratis",
      "Resultados rápidos",
    ],
    includesEn: [
      "Complete blood panel",
      "A1C (glycated hemoglobin)",
      "General urine test",
      "Free medical consultation",
      "Fast results",
    ],
    alt: "Promoción de chequeo general completo por $99 (valor regular $250) con examen de sangre, A1C, examen de orina y consulta gratis en Clínica Hispana Nueva Salud La Porte, TX",
    altEn:
      "Complete general checkup promotion for $99 (regular value $250) with blood panel, A1C, urine test and free consultation at Clínica Hispana Nueva Salud La Porte, TX",
  },
  {
    slug: "sangre-b12",
    title: "Examen general de sangre + Vitamina B12",
    titleEn: "Complete blood panel + Vitamin B12",
    price: "$99",
    blurb:
      "Cuida tu salud con nuestra promoción especial: un examen general de sangre completo más una inyección de vitamina B12 para apoyar tu energía y bienestar. Conoce cómo está tu cuerpo y date un impulso, todo por solo $99.",
    blurbEn:
      "Take care of your health with our special promotion: a complete blood panel plus a vitamin B12 shot to support your energy and wellbeing. Find out how your body is doing and give yourself a boost, all for only $99.",
    includes: [
      "Examen general de sangre completo",
      "Inyección de vitamina B12",
      "Apoyo a tu energía y bienestar",
      "Atención en español",
    ],
    includesEn: [
      "Complete blood panel",
      "Vitamin B12 injection",
      "Support for your energy and wellbeing",
      "Care in Spanish",
    ],
    alt: "Promoción de examen general de sangre con inyección de vitamina B12 por $99 en Clínica Hispana Nueva Salud La Porte, TX",
    altEn:
      "Complete blood panel with vitamin B12 injection for $99 promotion at Clínica Hispana Nueva Salud La Porte, TX",
  },
  {
    slug: "salud-intima-femenina",
    title: "Salud íntima femenina",
    titleEn: "Women's intimate health",
    price: "$69",
    blurb:
      "¿Picazón, flujo o mal olor? No lo ignores: pueden ser señales de una infección. Nuestra promoción de salud íntima femenina incluye cultivo íntimo, consulta médica y examen de orina gratis, con atención confidencial. Todo por solo $69.",
    blurbEn:
      "Itching, discharge or odor? Don't ignore it — these can be signs of an infection. Our women's intimate health promotion includes an intimate culture, a medical consultation and a free urine test, with confidential care. All for only $69.",
    includes: [
      "Cultivo íntimo",
      "Consulta médica",
      "Examen de orina gratis",
      "Atención confidencial",
      "Resultados rápidos",
    ],
    includesEn: [
      "Intimate culture test",
      "Medical consultation",
      "Free urine test",
      "Confidential care",
      "Fast results",
    ],
    alt: "Promoción de salud íntima femenina por $69 en Clínica Hispana Nueva Salud La Porte, TX",
    altEn:
      "Women's intimate health promotion for $69 at Clínica Hispana Nueva Salud La Porte, TX",
  },
  {
    slug: "perfil-hormonal-hombres",
    title: "Perfil hormonal para hombres",
    titleEn: "Hormone panel for men",
    price: "$200",
    blurb:
      "¿Cansancio, irritabilidad, pérdida de masa muscular o baja libido? Pueden ser señales de un desequilibrio hormonal. Nuestro perfil hormonal masculino evalúa tu salud hormonal con exámenes confiables y resultados precisos, con atención profesional en español. Por solo $200.",
    blurbEn:
      "Fatigue, irritability, loss of muscle mass or low libido? These can be signs of a hormonal imbalance. Our male hormone panel evaluates your hormonal health with reliable tests and precise results, with professional care in Spanish. For only $200.",
    includes: [
      "Evalúa desequilibrios hormonales",
      "Energía, sueño y estado de ánimo",
      "Masa muscular y libido",
      "Exámenes confiables y resultados precisos",
    ],
    includesEn: [
      "Evaluates hormonal imbalances",
      "Energy, sleep and mood",
      "Muscle mass and libido",
      "Reliable tests and precise results",
    ],
    alt: "Promoción de perfil hormonal masculino por $200 en Clínica Hispana Nueva Salud La Porte, TX",
    altEn:
      "Male hormone panel promotion for $200 at Clínica Hispana Nueva Salud La Porte, TX",
  },
  {
    slug: "examen-testosterona",
    title: "Revisa tu testosterona",
    titleEn: "Check your testosterone",
    price: "$79",
    blurb:
      "¿Cansancio, poca energía, menos deseo sexual o dificultad con la erección? Pueden ser señales de testosterona baja. Nuestra promoción incluye examen de testosterona, examen de orina y consulta médica gratis. Precio regular $220, ahora por solo $79.",
    blurbEn:
      "Fatigue, low energy, less sex drive or trouble with erections? These can be signs of low testosterone. Our promotion includes a testosterone test, a urine test and a free medical consultation. Regular price $220, now for only $79.",
    includes: [
      "Examen de testosterona",
      "Examen de orina",
      "Consulta médica gratis",
      "Atención en español",
    ],
    includesEn: [
      "Testosterone test",
      "Urine test",
      "Free medical consultation",
      "Care in Spanish",
    ],
    alt: "Promoción de examen de testosterona por $79 (precio regular $220) con examen de orina y consulta médica gratis en Clínica Hispana Nueva Salud La Porte, TX",
    altEn:
      "Testosterone test promotion for $79 (regular price $220) with urine test and free medical consultation at Clínica Hispana Nueva Salud La Porte, TX",
  },
  {
    slug: "chequeo-completo-mujer",
    title: "Chequeo completo de la mujer",
    titleEn: "Complete women's checkup",
    price: "$179",
    blurb:
      "Cuida tu salud con nuestro chequeo completo de la mujer: ultrasonido pélvico, papanicolaou, examen de orina y consulta médica gratis, con atención privada en español. Precio regular $300, ahora por solo $179.",
    blurbEn:
      "Take care of your health with our complete women's checkup: pelvic ultrasound, Pap smear, urine test and a free medical consultation, with private care in Spanish. Regular price $300, now for only $179.",
    includes: [
      "Ultrasonido pélvico",
      "Papanicolaou",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Pelvic ultrasound",
      "Pap smear",
      "Urine test",
      "Free medical consultation",
    ],
    alt: "Promoción de chequeo completo de la mujer por $179 (precio regular $300) con ultrasonido pélvico, papanicolaou, examen de orina y consulta médica gratis en Clínica Hispana Nueva Salud La Porte, TX",
    altEn:
      "Complete women's checkup promotion for $179 (regular price $300) with pelvic ultrasound, Pap smear, urine test and free medical consultation at Clínica Hispana Nueva Salud La Porte, TX",
  },
];

export const SERVICE_CATEGORIES: {
  value: ServiceCategory;
  label: string;
  labelEn: string;
}[] = [
  { value: "medicina-general", label: "Medicina general", labelEn: "General medicine" },
  { value: "salud-mujer", label: "Salud de la mujer", labelEn: "Women's health" },
  { value: "examenes", label: "Exámenes y certificados", labelEn: "Exams & certificates" },
  { value: "laboratorio", label: "Laboratorio y pruebas", labelEn: "Lab & testing" },
  { value: "tratamientos", label: "Tratamientos", labelEn: "Treatments" },
];

// Bloques de copy reutilizados (marca Nueva Salud + La Porte).
const WHY_ES = `## ¿Por qué elegir Clínica Hispana Nueva Salud La Porte?

En Clínica Hispana Nueva Salud La Porte somos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.`;

const WHY_EN = `## Why choose Clínica Hispana Nueva Salud La Porte?

At Clínica Hispana Nueva Salud La Porte we are a Hispanic and Latino clinic caring for you 100% in Spanish, with no appointment needed and with affordable pricing, no insurance required. We are located at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. Our team treats every patient with respect, time and clear explanations.`;

const PAYMENT_ES = `## Formas de pago

No es necesario tener seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.`;

const PAYMENT_EN = `## Payment

You don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.`;

const AREAS_ES = `## Áreas que servimos

Somos un centro médico cerca de ti en La Porte, TX, y atendemos a pacientes de toda el área de Houston: Deer Park, Pasadena, Shoreacres, Morgan's Point, Lomax, Bayshore y comunidades cercanas.`;

const AREAS_EN = `## Areas we serve

We are a medical center near you in La Porte, TX, serving patients across the greater Houston area: Deer Park, Pasadena, Shoreacres, Morgan's Point, Lomax, Bayshore and surrounding communities.`;


export const SERVICES: Service[] = [
  {
    slug: "condiciones-cronicas",
    order: 1,
    category: "medicina-general",
    icon: "Activity",
    highlighted: true,
    title: "Control de Diabetes, Hipertensión y Colesterol",
    titleEn: "Diabetes, Hypertension & Cholesterol Care",
    shortDescription:
      "Exámenes y control de diabetes, presión alta y dislipidemias (colesterol y triglicéridos), con seguimiento cercano.",
    shortDescriptionEn:
      "Testing and management of diabetes, high blood pressure and dyslipidemia (cholesterol and triglycerides), with close follow-up.",
    description:
      "Control de diabetes, hipertensión y dislipidemias en La Porte, TX. Laboratorio y seguimiento en español, con precios accesibles.",
    descriptionEn:
      "Diabetes, hypertension and dyslipidemia management in La Porte, TX. Lab work and follow-up in Spanish, with affordable pricing.",
    keywords: [
      "control de diabetes la porte",
      "doctor diabetes español la porte",
      "control de presion alta la porte",
      "colesterol alto tratamiento la porte",
    ],
    keywordsEn: [
      "diabetes management la porte",
      "high blood pressure doctor la porte",
      "cholesterol management la porte",
      "chronic disease clinic la porte",
    ],
    features: [
      "Diagnóstico y monitoreo de laboratorio",
      "Control de glucosa, presión y colesterol",
      "Ajuste de medicamentos",
      "Plan de alimentación y hábitos",
    ],
    featuresEn: [
      "Diagnosis and lab monitoring",
      "Glucose, blood pressure and cholesterol control",
      "Medication adjustment",
      "Nutrition and lifestyle plan",
    ],
    longDescription: `Las enfermedades crónicas como la diabetes, la hipertensión y las dislipidemias (colesterol y triglicéridos altos) se controlan mejor con seguimiento constante. En Clínica Hispana Nueva Salud La Porte diseñamos un plan claro y te acompañamos paso a paso, en español.

## ¿Qué incluye?

- Evaluación inicial y exámenes de laboratorio
- Monitoreo de glucosa, presión arterial, colesterol y triglicéridos
- Ajuste de medicamentos según tu evolución
- Plan de alimentación y actividad física
- Educación sobre tu condición en tu idioma

## Por qué es importante el control

Una diabetes, presión o colesterol mal controlados dañan con el tiempo el corazón, los riñones, los ojos y los nervios. Un buen seguimiento previene complicaciones y mejora tu calidad de vida.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Chronic conditions like diabetes, hypertension and dyslipidemia (high cholesterol and triglycerides) are best controlled with consistent follow-up. At Clínica Hispana Nueva Salud La Porte we design a clear plan and support you every step of the way, in Spanish.

## What's included?

- Initial evaluation and lab work
- Monitoring of glucose, blood pressure, cholesterol and triglycerides
- Medication adjustment based on your progress
- Nutrition and physical-activity plan
- Education about your condition in your language

## Why control matters

Poorly managed diabetes, blood pressure or cholesterol damage the heart, kidneys, eyes and nerves over time. Good follow-up prevents complications and improves your quality of life.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "tiroides",
    order: 2,
    category: "medicina-general",
    icon: "Thermometer",
    title: "Examen de Tiroides (TSH, T3, T4) y Tratamiento sin Cita",
    titleEn: "Thyroid Test (TSH, T3, T4) & Treatment, Walk-In",
    shortDescription:
      "Diagnóstico y tratamiento de enfermedades de la tiroides (hipotiroidismo e hipertiroidismo) con seguimiento en español.",
    shortDescriptionEn:
      "Diagnosis and treatment of thyroid conditions (hypothyroidism and hyperthyroidism) with follow-up in Spanish.",
    description:
      "Examen de tiroides en La Porte, TX sin cita: TSH, T3 y T4 en nuestro laboratorio, diagnóstico y tratamiento de hipo e hipertiroidismo. En español, sin seguro y con precios accesibles.",
    descriptionEn:
      "Walk-in thyroid test in La Porte, TX: TSH, T3 and T4 in our own lab, diagnosis and treatment of hypo- and hyperthyroidism. In Spanish, no insurance needed, affordable pricing.",
    keywords: [
      "tiroides la porte",
      "examen de tiroides la porte",
      "hipotiroidismo tratamiento la porte",
      "doctor tiroides español la porte",
    ],
    keywordsEn: [
      "thyroid testing la porte",
      "thyroid doctor la porte",
      "hypothyroidism treatment la porte",
      "thyroid clinic la porte",
    ],
    features: [
      "Pruebas de función tiroidea (TSH, T3, T4)",
      "Diagnóstico de hipo e hipertiroidismo",
      "Tratamiento y ajuste de medicamentos",
      "Seguimiento en español",
    ],
    featuresEn: [
      "Thyroid function tests (TSH, T3, T4)",
      "Diagnosis of hypo- and hyperthyroidism",
      "Treatment and medication adjustment",
      "Follow-up in Spanish",
    ],
    longDescription: `La tiroides regula tu energía, tu peso y tu ánimo. Cuando funciona de más o de menos aparecen síntomas que afectan tu día a día. En Clínica Hispana Nueva Salud La Porte evaluamos tu tiroides con análisis de laboratorio y te damos el tratamiento adecuado.

## ¿Qué incluye?

- Evaluación de síntomas
- Pruebas de función tiroidea (TSH, T3, T4)
- Diagnóstico de hipotiroidismo o hipertiroidismo
- Inicio y ajuste del tratamiento
- Seguimiento periódico

## Síntomas frecuentes

Cansancio, cambios de peso sin explicación, caída del cabello, frío o calor excesivo, nerviosismo o tristeza. Si los notas, una prueba sencilla puede dar la respuesta.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `The thyroid regulates your energy, weight and mood. When it works too much or too little, symptoms appear that affect your daily life. At Clínica Hispana Nueva Salud La Porte we evaluate your thyroid with lab work and provide the right treatment.

## What's included?

- Symptom evaluation
- Thyroid function tests (TSH, T3, T4)
- Diagnosis of hypothyroidism or hyperthyroidism
- Treatment start and adjustment
- Periodic follow-up

## Common symptoms

Fatigue, unexplained weight changes, hair loss, feeling too cold or too hot, nervousness or sadness. If you notice them, a simple test can give the answer.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "alergias",
    order: 3,
    category: "medicina-general",
    icon: "Leaf",
    title: "Exámenes y Tratamiento de Alergias",
    titleEn: "Allergy Testing & Treatment",
    shortDescription:
      "Evaluación y tratamiento de alergias estacionales, respiratorias y de la piel, con atención en español.",
    shortDescriptionEn:
      "Evaluation and treatment of seasonal, respiratory and skin allergies, with care in Spanish.",
    description:
      "Exámenes y tratamiento de alergias en La Porte, TX. Diagnóstico y manejo en español, con precios accesibles.",
    descriptionEn:
      "Allergy testing and treatment in La Porte, TX. Diagnosis and management in Spanish, with affordable pricing.",
    keywords: [
      "alergias la porte",
      "tratamiento de alergias la porte",
      "doctor de alergias español la porte",
      "examen de alergias la porte",
    ],
    keywordsEn: [
      "allergy treatment la porte",
      "allergy testing la porte",
      "allergy doctor la porte",
      "allergy clinic la porte",
    ],
    features: [
      "Evaluación de síntomas y desencadenantes",
      "Tratamiento de alergias respiratorias y de piel",
      "Manejo de rinitis y congestión",
      "Atención en español",
    ],
    featuresEn: [
      "Evaluation of symptoms and triggers",
      "Treatment of respiratory and skin allergies",
      "Management of rhinitis and congestion",
      "Care in Spanish",
    ],
    longDescription: `Las alergias pueden afectar tu respiración, tu piel y tu descanso. En Clínica Hispana Nueva Salud La Porte identificamos qué las provoca y te ayudamos a controlarlas para que recuperes tu bienestar.

## ¿Qué incluye?

- Evaluación de síntomas y posibles desencadenantes
- Tratamiento de alergias estacionales y respiratorias
- Manejo de rinitis, estornudos y congestión
- Atención de alergias en la piel (ronchas, comezón)
- Recomendaciones para evitar las crisis

## Cuándo consultar

Estornudos frecuentes, ojos llorosos, comezón, ronchas o congestión que no mejora son señales de alergia. Un tratamiento adecuado marca la diferencia.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Allergies can affect your breathing, your skin and your rest. At Clínica Hispana Nueva Salud La Porte we identify what triggers them and help you control them so you feel well again.

## What's included?

- Evaluation of symptoms and possible triggers
- Treatment of seasonal and respiratory allergies
- Management of rhinitis, sneezing and congestion
- Care for skin allergies (hives, itching)
- Recommendations to avoid flare-ups

## When to seek care

Frequent sneezing, watery eyes, itching, hives or congestion that won't improve are signs of allergy. The right treatment makes the difference.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "enfermedades-respiratorias",
    order: 4,
    category: "medicina-general",
    icon: "Wind",
    title: "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    titleEn: "Flu & COVID Testing and Respiratory Illness Care",
    shortDescription:
      "Pruebas de detección de influenza (flu) y COVID, y tratamiento de gripe, tos y enfermedades respiratorias.",
    shortDescriptionEn:
      "Influenza (flu) and COVID detection testing, plus treatment of flu, cough and respiratory illnesses.",
    description:
      "Pruebas de flu y COVID y tratamiento de enfermedades respiratorias en La Porte, TX. Sin cita previa, en español.",
    descriptionEn:
      "Flu and COVID testing and respiratory illness treatment in La Porte, TX. Walk-ins welcome, in Spanish.",
    keywords: [
      "prueba de covid la porte",
      "prueba de flu la porte",
      "tratamiento gripe la porte",
      "enfermedades respiratorias la porte",
    ],
    keywordsEn: [
      "covid test la porte",
      "flu test la porte",
      "flu treatment la porte",
      "respiratory illness la porte",
    ],
    features: [
      "Prueba rápida de flu y COVID",
      "Diagnóstico el mismo día",
      "Tratamiento de gripe, tos y bronquitis",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "Rapid flu and COVID testing",
      "Same-day diagnosis",
      "Treatment of flu, cough and bronchitis",
      "Walk-in care in Spanish",
    ],
    longDescription: `Cuando empiezan la fiebre, la tos o el malestar, saber si es flu o COVID ayuda a tratarte a tiempo. En Clínica Hispana Nueva Salud La Porte hacemos pruebas rápidas y te damos tratamiento el mismo día, sin cita.

## ¿Qué incluye?

- Prueba rápida de influenza (flu)
- Prueba de COVID-19
- Evaluación de síntomas respiratorios
- Tratamiento de gripe, tos, bronquitis e infecciones de garganta
- Indicaciones de recuperación y cuidado

## No dejes que avance

Si la fiebre es alta, la tos no mejora o cuesta respirar, es mejor evaluarte. Un diagnóstico oportuno acorta la enfermedad y evita complicaciones.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `When fever, cough or discomfort begin, knowing whether it's flu or COVID helps treat you in time. At Clínica Hispana Nueva Salud La Porte we run rapid tests and provide same-day treatment, no appointment needed.

## What's included?

- Rapid influenza (flu) test
- COVID-19 test
- Respiratory symptom evaluation
- Treatment of flu, cough, bronchitis and throat infections
- Recovery and care instructions

## Don't let it progress

If the fever is high, the cough won't improve or breathing is hard, it's best to get evaluated. Timely diagnosis shortens the illness and prevents complications.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examen-fisico-escolar",
    order: 5,
    category: "examenes",
    icon: "ClipboardList",
    title: "Examen Físico Escolar, Deportivo y General sin Cita",
    titleEn: "School, Sports & General Physical Exam, Walk-In",
    shortDescription:
      "Exámenes físicos para la escuela, deportes, trabajo o chequeo anual. Sin cita, sin seguro, con formularios completados el mismo día.",
    shortDescriptionEn:
      "Physical exams for school, sports, work or your annual checkup. No appointment, no insurance needed, forms completed the same day.",
    description:
      "Examen físico en La Porte, TX sin cita: escolar, deportivo, para el trabajo o chequeo anual con análisis de sangre. En español, sin seguro y con precios accesibles.",
    descriptionEn:
      "Walk-in physical exam in La Porte, TX: school, sports, work or annual checkup with blood work. In Spanish, no insurance needed, affordable pricing.",
    keywords: [
      "examen fisico cerca de mi",
      "examen fisico escolar la porte",
      "examen fisico para el trabajo la porte",
      "physical para la escuela la porte",
      "examen deportivo la porte",
      "examen fisico sin cita",
    ],
    keywordsEn: [
      "physical exam near me walk in",
      "school physical la porte",
      "sports physical la porte",
      "annual physical la porte tx",
      "blood work and physical near me",
      "kids physical la porte",
    ],
    features: [
      "Examen físico completo para niños y adultos",
      "Signos vitales: presión, peso, talla, pulso",
      "Formularios de escuela, equipo o trabajo llenados",
      "Análisis de sangre y orina el mismo día si los necesitas",
    ],
    featuresEn: [
      "Complete physical exam for kids and adults",
      "Vitals: blood pressure, weight, height, pulse",
      "School, team or employer forms completed",
      "Same-day blood and urine tests if needed",
    ],
    longDescription: `¿Buscas un examen físico cerca de ti sin cita? En Clínica Hispana Nueva Salud La Porte hacemos exámenes físicos para niños, jóvenes y adultos: para la escuela, para practicar deportes, para el trabajo o simplemente como chequeo anual. Rápido, en español y con todos los formularios listos.

## ¿Qué incluye?

- Examen físico general con el médico
- Revisión de signos vitales (presión, pulso, peso, talla)
- Evaluación de visión y audición
- Llenado de los formularios requeridos por la escuela, el equipo o el empleador
- Recomendaciones de salud y, si hace falta, receta o tratamiento

## Para la escuela y el deporte

Cumple los requisitos de inscripción escolar y la evaluación para practicar deportes con seguridad. Trae el formulario de tu escuela o equipo y lo completamos durante la visita.

## Examen físico para adultos y para el trabajo

Si tu empleador te pide un chequeo médico o un formulario de aptitud, lo completamos el mismo día. Si tu trabajo también requiere prueba de drogas, revisa nuestro [examen de alcohol y drogas](/services/examen-alcohol-drogas). Los conductores comerciales necesitan el [examen físico DOT](/services/examen-dot), que es un examen certificado aparte.

## Chequeo anual con laboratorio

Un físico anual es la forma más sencilla de detectar a tiempo presión alta, diabetes, colesterol o problemas de tiroides. Podemos completarlo con [análisis de sangre](/services/examenes-sangre) y orina en nuestro propio laboratorio, con resultados rápidos. Pregunta por nuestro [chequeo general completo por $99](/promociones).

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Looking for a walk-in physical exam near you? At Clínica Hispana Nueva Salud La Porte we do physical exams for kids, teens and adults: for school, for sports, for work or simply as an annual checkup. Fast, in Spanish, with all the forms ready.

## What's included?

- General physical exam with the provider
- Vital-signs check (blood pressure, pulse, weight, height)
- Vision and hearing screening
- Completion of the forms required by the school, team or employer
- Health recommendations and, if needed, a prescription or treatment

## For school and sports

Meet school enrollment requirements and the evaluation to play sports safely. Bring your school or team form and we'll complete it during the visit.

## Physical exam for adults and for work

If your employer requires a medical checkup or a fitness form, we complete it the same day. If your job also requires a drug test, see our [alcohol and drug testing](/en/services/examen-alcohol-drogas). Commercial drivers need the [DOT physical exam](/en/services/examen-dot), a separate certified exam.

## Annual checkup with lab work

An annual physical is the simplest way to catch high blood pressure, diabetes, cholesterol or thyroid problems early. We can complete it with [blood work](/en/services/examenes-sangre) and urine tests in our own lab, with fast results. Ask about our [$99 complete general checkup](/en/promociones).

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "ginecologia",
    order: 6,
    category: "salud-mujer",
    icon: "Flower2",
    highlighted: true,
    title: "Atención Ginecológica: Papanicolaou y Cultivos",
    titleEn: "Gynecology Care: Pap Smear & Cultures",
    shortDescription:
      "Papanicolaou, cultivos vaginales y tratamiento de infecciones vaginales, con privacidad y en español.",
    shortDescriptionEn:
      "Pap smear, vaginal cultures and treatment of vaginal infections, with privacy and in Spanish.",
    description:
      "Atención ginecológica en La Porte, TX: papanicolaou, cultivos vaginales y tratamiento de infecciones. En español, con precios accesibles.",
    descriptionEn:
      "Gynecology care in La Porte, TX: Pap smear, vaginal cultures and infection treatment. In Spanish, with affordable pricing.",
    keywords: [
      "ginecologo la porte español",
      "papanicolaou la porte",
      "cultivo vaginal la porte",
      "infeccion vaginal tratamiento la porte",
    ],
    keywordsEn: [
      "gynecologist la porte spanish",
      "pap smear la porte",
      "vaginal culture la porte",
      "vaginal infection treatment la porte",
    ],
    features: [
      "Papanicolaou y chequeo ginecológico",
      "Cultivos vaginales",
      "Tratamiento de infecciones vaginales",
      "Atención privada en español",
    ],
    featuresEn: [
      "Pap smear and gynecological checkup",
      "Vaginal cultures",
      "Treatment of vaginal infections",
      "Private care in Spanish",
    ],
    longDescription: `Tu salud como mujer merece un espacio de confianza. En Clínica Hispana Nueva Salud La Porte ofrecemos atención ginecológica en español, con la privacidad y el respeto que mereces.

## Papanicolaou: cuándo y cómo

El papanicolaou detecta cambios en el cuello del útero antes de que se conviertan en cáncer. Se recomienda a partir de los 21 años y hasta los 65, cada 3 años si el resultado es normal, o cada 5 años cuando se combina con la prueba de VPH después de los 30. Si nunca te lo has hecho o llevas años sin hacerlo, no pasa nada: lo importante es empezar hoy.

La toma dura menos de 10 minutos. Para un resultado confiable, evita relaciones sexuales, duchas vaginales, óvulos y cremas durante las 48 horas previas, y procura no venir en los días de sangrado abundante. El resultado tarda de 1 a 2 semanas; si sale alterado, te lo explicamos con calma y organizamos el seguimiento o la referencia a colposcopia.

## Infecciones vaginales: cultivo y tratamiento

Comezón, ardor, flujo con color u olor distinto o molestias al tener relaciones suelen deberse a candidiasis (hongos), vaginosis bacteriana o tricomoniasis. Cada una se trata diferente, y usar óvulos de farmacia una y otra vez sin saber cuál tienes es la razón por la que muchas infecciones regresan. Con el cultivo identificamos la causa y en la mayoría de los casos empiezas el tratamiento el mismo día.

Nuestra promoción de [salud íntima femenina por $69](/promociones) incluye cultivo, consulta médica y examen de orina. Si el síntoma principal es ardor al orinar, puede tratarse de una [infección urinaria](/services/infecciones-urinarias), y si hubo una relación de riesgo conviene agregar [pruebas de ETS](/services/enfermedades-transmision-sexual).

## También en tu visita ginecológica

- Orientación e inicio de [anticonceptivos](/services/anticonceptivos)
- [Prueba de embarazo](/services/prueba-embarazo) en orina o sangre
- [Ultrasonido pélvico](/services/ultrasonido) para quistes, miomas o dolor
- Consulta por sangrado irregular, dolor pélvico, cólicos intensos o síntomas de menopausia
- [Chequeo completo de la mujer por $179](/promociones), con laboratorio incluido

## Cómo es la consulta

Te atendemos en un consultorio privado, con puerta cerrada, y el médico te explica cada paso antes de hacerlo. Puedes venir acompañada si así lo prefieres. Trae la fecha de tu última regla, la lista de medicamentos o anticonceptivos que usas y, si tienes papanicolaou o estudios anteriores, tráelos para compararlos. Ven con ropa cómoda.

## Ginecología en una clínica hispana cerca de ti

Si buscas atención ginecológica en español en La Porte, TX, no necesitas cita ni seguro médico. Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, y abrimos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM, para que puedas venir después del trabajo o el fin de semana. Atendemos a mujeres de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point, con precios accesibles que te informamos antes de la consulta.`,
    longDescriptionEn: `Your health as a woman deserves a space of trust. At Clínica Hispana Nueva Salud La Porte we offer gynecology care in Spanish, with the privacy and respect you deserve.

## Pap smear: when and how

A Pap smear detects changes in the cervix before they turn into cancer. It is recommended from age 21 to 65, every 3 years if the result is normal, or every 5 years when combined with HPV testing after 30. If you have never had one or it has been years, that is fine: what matters is starting today.

The test takes less than 10 minutes. For a reliable result, avoid intercourse, douching, vaginal suppositories and creams for the 48 hours before, and try not to come on heavy bleeding days. Results take 1 to 2 weeks; if something is abnormal, we explain it calmly and arrange follow-up or a colposcopy referral.

## Vaginal infections: culture and treatment

Itching, burning, discharge with an unusual color or odor, or discomfort during sex are usually caused by yeast (candidiasis), bacterial vaginosis or trichomoniasis. Each is treated differently, and using over-the-counter suppositories again and again without knowing which one you have is why many infections keep coming back. A culture identifies the cause, and in most cases you start treatment the same day.

Our [women's intimate health promotion for $69](/en/promociones) includes the culture, a medical consultation and a urine test. If the main symptom is burning when urinating, it may be a [urinary tract infection](/en/services/infecciones-urinarias), and if there was a risky encounter it is worth adding [STD testing](/en/services/enfermedades-transmision-sexual).

## Also during your gynecology visit

- Guidance on and starting [birth control](/en/services/anticonceptivos)
- [Pregnancy test](/en/services/prueba-embarazo) in urine or blood
- [Pelvic ultrasound](/en/services/ultrasonido) for cysts, fibroids or pain
- Consultation for irregular bleeding, pelvic pain, severe cramps or menopause symptoms
- [Complete women's checkup for $179](/en/promociones), with lab work included

## What the visit is like

You are seen in a private exam room with the door closed, and the physician explains each step before doing it. You are welcome to bring someone with you. Bring the date of your last period, the list of medications or contraceptives you use and, if you have previous Pap smears or studies, bring them for comparison. Wear comfortable clothing.

## Gynecology at a Hispanic clinic near you

If you are looking for gynecology care in Spanish in La Porte, TX, you need neither an appointment nor health insurance. We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM, so you can come after work or on the weekend. We care for women from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point, with affordable prices we tell you before the visit.`,
  },
  {
    slug: "prueba-embarazo",
    order: 7,
    category: "salud-mujer",
    icon: "Baby",
    title: "Examen y Diagnóstico de Embarazo",
    titleEn: "Pregnancy Testing & Confirmation",
    shortDescription:
      "Pruebas de embarazo confiables y orientación sobre tus siguientes pasos, en español.",
    shortDescriptionEn:
      "Reliable pregnancy tests and guidance on your next steps, in Spanish.",
    description:
      "Examen y diagnóstico de embarazo en La Porte, TX. Pruebas confiables y orientación en español, con precios accesibles.",
    descriptionEn:
      "Pregnancy testing and confirmation in La Porte, TX. Reliable tests and guidance in Spanish, with affordable pricing.",
    keywords: [
      "prueba de embarazo la porte",
      "examen de embarazo la porte",
      "confirmar embarazo la porte",
      "test de embarazo español la porte",
    ],
    keywordsEn: [
      "pregnancy test la porte",
      "pregnancy confirmation la porte",
      "confirm pregnancy la porte",
      "pregnancy testing la porte",
    ],
    features: [
      "Prueba de embarazo confiable",
      "Confirmación médica",
      "Orientación sobre próximos pasos",
      "Atención en español",
    ],
    featuresEn: [
      "Reliable pregnancy test",
      "Medical confirmation",
      "Guidance on next steps",
      "Care in Spanish",
    ],
    longDescription: `¿Tienes un retraso y quieres salir de la duda hoy? En Clínica Hispana Nueva Salud La Porte hacemos pruebas de embarazo en orina y en sangre sin cita, con el resultado explicado por personal médico y en español. Sea cual sea el resultado, te acompañamos con información clara y sin juicios.

## Prueba de orina o prueba de sangre

La **prueba de orina** da resultado en minutos y es confiable desde el primer día de retraso; funciona mejor con la primera orina de la mañana, cuando la hormona está más concentrada. La **prueba de sangre** (hCG cuantitativa) detecta el embarazo antes, entre 7 y 10 días después de la concepción, y además mide el nivel exacto de la hormona, lo que sirve para dar seguimiento a un embarazo muy temprano o cuando hay dolor o sangrado que preocupa. El médico te recomienda cuál conviene según tu caso y cuántos días de retraso tienes.

## Confirmación con ultrasonido

Si la prueba es positiva, a partir de la sexta semana un [ultrasonido](/services/ultrasonido) permite ver el saco gestacional, escuchar el latido y calcular la fecha probable de parto. Lo hacemos en la misma clínica, sin tener que ir a otro lugar.

## Si el resultado es positivo

- Calculamos las semanas de embarazo y la fecha probable de parto
- Te explicamos lo básico para empezar bien: ácido fólico, vitaminas prenatales, qué alimentos y medicamentos evitar
- Podemos hacer los [análisis de sangre](/services/examenes-sangre) iniciales: tipo de sangre y Rh, hemoglobina, glucosa y pruebas de infecciones
- Te orientamos sobre las opciones de control prenatal en el área y te damos la referencia que necesites

## Si el resultado es negativo

Un retraso no siempre es embarazo. El estrés, los cambios de peso, los problemas de [tiroides](/services/tiroides), el ovario poliquístico o el cambio de anticonceptivo también alteran el ciclo. Si la regla no llega en una semana, repetimos la prueba; si los retrasos se repiten, lo evaluamos en la consulta de [ginecología](/services/ginecologia). Y si no buscas un embarazo, podemos revisar juntas la opción de [anticonceptivos](/services/anticonceptivos) que mejor te funcione.

## Privacidad y respeto

La prueba se hace en un consultorio privado y el resultado solo se comparte contigo. Como pagas directamente, sin seguro, no llega ningún documento a tu casa. Puedes venir sola o acompañada por quien tú decidas.

## Prueba de embarazo en La Porte, hoy mismo

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, y abrimos los 7 días: de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. No necesitas cita ni seguro médico; el precio de la prueba es accesible y te lo decimos por teléfono. Atendemos a mujeres de La Porte, Deer Park, Pasadena y Shoreacres.`,
    longDescriptionEn: `Is your period late and you want an answer today? At Clínica Hispana Nueva Salud La Porte we perform urine and blood pregnancy tests with no appointment, with the result explained by medical staff in Spanish or English. Whatever the result, we support you with clear information and no judgment.

## Urine test or blood test

The **urine test** gives a result in minutes and is reliable from the first day of a missed period; it works best with the first urine of the morning, when the hormone is most concentrated. The **blood test** (quantitative hCG) detects pregnancy earlier, 7 to 10 days after conception, and also measures the exact hormone level, which is useful for following a very early pregnancy or when there is worrying pain or bleeding. The physician recommends the right one for your situation and how many days late you are.

## Confirmation with ultrasound

If the test is positive, from the sixth week an [ultrasound](/en/services/ultrasonido) shows the gestational sac, lets you hear the heartbeat and calculates your due date. We do it in the same clinic, no need to go anywhere else.

## If the result is positive

- We calculate how many weeks along you are and your due date
- We explain the basics for a healthy start: folic acid, prenatal vitamins, which foods and medications to avoid
- We can run the initial [blood work](/en/services/examenes-sangre): blood type and Rh, hemoglobin, glucose and infection screening
- We guide you on prenatal-care options in the area and provide any referral you need

## If the result is negative

A late period is not always pregnancy. Stress, weight changes, [thyroid](/en/services/tiroides) problems, polycystic ovaries or switching contraceptives can also disrupt your cycle. If your period does not arrive within a week, we repeat the test; if delays keep happening, we evaluate them in a [gynecology](/en/services/ginecologia) visit. And if you are not trying to get pregnant, we can go over the [birth control](/en/services/anticonceptivos) option that works best for you.

## Privacy and respect

The test is done in a private exam room and the result is shared only with you. Because you pay directly, without insurance, no paperwork is mailed to your home. Come alone or with whoever you choose.

## Pregnancy test in La Porte, today

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open 7 days a week: Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. No appointment or health insurance needed; the test is affordably priced and we can tell you the cost by phone. We care for women from La Porte, Deer Park, Pasadena and Shoreacres.`,
  },
  {
    slug: "anticonceptivos",
    order: 8,
    category: "salud-mujer",
    icon: "Tablets",
    title: "Tratamientos Anticonceptivos",
    titleEn: "Contraceptive Methods",
    shortDescription:
      "Orientación y métodos anticonceptivos (pastillas, inyección y más) para decidir con información, en español.",
    shortDescriptionEn:
      "Guidance and contraceptive methods (pills, injection and more) to decide with clear information, in Spanish.",
    description:
      "Tratamientos anticonceptivos en La Porte, TX: orientación, pastillas e inyección. En español, con precios accesibles.",
    descriptionEn:
      "Contraceptive methods in La Porte, TX: guidance, pills and injection. In Spanish, with affordable pricing.",
    keywords: [
      "anticonceptivos la porte",
      "metodos anticonceptivos la porte",
      "inyeccion anticonceptiva la porte",
      "pastillas anticonceptivas la porte",
    ],
    keywordsEn: [
      "birth control la porte",
      "contraception clinic la porte",
      "birth control shot la porte",
      "birth control pills la porte",
    ],
    features: [
      "Orientación personalizada",
      "Pastillas e inyección anticonceptiva",
      "Inicio y seguimiento del método",
      "Atención en español",
    ],
    featuresEn: [
      "Personalized guidance",
      "Birth control pills and injection",
      "Method start and follow-up",
      "Care in Spanish",
    ],
    longDescription: `Decidir cuándo y cómo formar tu familia es tu derecho. En Clínica Hispana Nueva Salud La Porte te damos información clara y sin juicios para que elijas el método anticonceptivo que mejor se adapta a ti.

## ¿Qué incluye?

- Consulta de orientación personalizada
- Información sobre los distintos métodos
- Pastillas anticonceptivas e inyección
- Inicio y seguimiento del método elegido
- Resolución de dudas y efectos secundarios

## Una decisión informada

Cada cuerpo y cada vida es distinta. Te ayudamos a comparar opciones según tu salud, tus planes y tu comodidad para que tomes la mejor decisión.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Deciding when and how to build your family is your right. At Clínica Hispana Nueva Salud La Porte we give you clear, judgment-free information so you can choose the contraceptive method that best fits you.

## What's included?

- Personalized guidance visit
- Information about the different methods
- Birth control pills and injection
- Starting and following up on the chosen method
- Answers to questions and side effects

## An informed decision

Every body and every life is different. We help you compare options based on your health, your plans and your comfort so you make the best decision.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "extraccion-implantes",
    order: 9,
    category: "salud-mujer",
    icon: "Bandage",
    title: "Extracción de Implantes Subdérmicos",
    titleEn: "Subdermal Implant Removal",
    shortDescription:
      "Retiro seguro de implantes anticonceptivos subdérmicos del brazo, por personal capacitado.",
    shortDescriptionEn:
      "Safe removal of subdermal arm contraceptive implants by trained staff.",
    description:
      "Extracción de implantes subdérmicos en La Porte, TX, procedimiento seguro y en español. Con precios accesibles.",
    descriptionEn:
      "Subdermal implant removal in La Porte, TX, a safe procedure in Spanish. With affordable pricing.",
    keywords: [
      "extraccion de implante subdermico la porte",
      "quitar implante del brazo la porte",
      "retiro de implante anticonceptivo la porte",
      "remover implante la porte",
    ],
    keywordsEn: [
      "subdermal implant removal la porte",
      "arm implant removal la porte",
      "contraceptive implant removal la porte",
      "birth control implant removal la porte",
    ],
    features: [
      "Procedimiento ambulatorio",
      "Anestesia local",
      "Personal capacitado",
      "Cuidado posterior explicado",
    ],
    featuresEn: [
      "Outpatient procedure",
      "Local anesthesia",
      "Trained staff",
      "After-care explained",
    ],
    longDescription: `Si llegó el momento de retirar tu implante subdérmico —porque caducó o porque deseas cambiar de método— en Clínica Hispana Nueva Salud La Porte lo hacemos de forma segura, rápida y con cuidado.

## ¿Qué incluye?

- Evaluación y localización del implante
- Extracción ambulatoria con anestesia local
- Indicaciones claras de cuidado posterior
- Orientación sobre tus próximos pasos de planificación

## Un procedimiento sencillo

El retiro suele tomar pocos minutos y se realiza con una pequeña incisión. Te explicamos cada paso en español para que estés tranquila.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `If it's time to remove your subdermal implant —because it expired or you want to switch methods— at Clínica Hispana Nueva Salud La Porte we do it safely, quickly and with care.

## What's included?

- Evaluation and location of the implant
- Outpatient removal with local anesthesia
- Clear after-care instructions
- Guidance on your next family-planning steps

## A simple procedure

Removal usually takes only a few minutes through a small incision. We explain every step in Spanish so you feel at ease.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "salud-hombre",
    order: 10,
    category: "medicina-general",
    icon: "Mars",
    highlighted: true,
    title: "Exámenes del Hombre: PSA y Testosterona",
    titleEn: "Men's Health Exams: PSA & Testosterone",
    shortDescription:
      "Exámenes de salud del hombre: antígeno prostático (PSA), testosterona y chequeo general, en español.",
    shortDescriptionEn:
      "Men's health exams: prostate antigen (PSA), testosterone and general checkup, in Spanish.",
    description:
      "Exámenes del hombre en La Porte, TX: PSA y testosterona. Laboratorio y atención en español, con precios accesibles.",
    descriptionEn:
      "Men's health exams in La Porte, TX: PSA and testosterone. Lab work and care in Spanish, with affordable pricing.",
    keywords: [
      "examen del hombre la porte",
      "chequeo general del hombre",
      "prueba psa la porte",
      "examen de prostata la porte",
      "examen de testosterona la porte",
    ],
    keywordsEn: [
      "mens health la porte",
      "annual physical for men la porte",
      "psa test la porte",
      "prostate exam la porte",
      "testosterone test la porte",
    ],
    features: [
      "Antígeno prostático (PSA)",
      "Nivel de testosterona",
      "Chequeo general del hombre",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "Prostate antigen (PSA)",
      "Testosterone level",
      "General men's checkup",
      "Results explained in Spanish",
    ],
    longDescription: `La salud del hombre muchas veces se posterga. En Clínica Hispana Nueva Salud La Porte facilitamos los exámenes que ayudan a detectar a tiempo cambios importantes, con resultados explicados en español.

## ¿Qué incluye?

- Examen de antígeno prostático (PSA)
- Medición del nivel de testosterona
- Chequeo general y de signos vitales
- Evaluación de síntomas urinarios o de energía
- Referencia a especialista si se requiere

## Por qué es importante

El PSA ayuda a vigilar la salud de la próstata y la testosterona influye en la energía, el ánimo y la salud general. Un control sencillo te da tranquilidad.

## Combínalo con tu chequeo anual

Aprovecha la visita para hacerte el [examen físico general](/services/examen-fisico-escolar) y los [análisis de sangre](/services/examenes-sangre) de rutina: presión, glucosa, colesterol y tiroides. Todo sin cita y en una sola visita.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Men's health is often postponed. At Clínica Hispana Nueva Salud La Porte we make it easy to get the exams that help catch important changes early, with results explained in Spanish.

## What's included?

- Prostate antigen (PSA) test
- Testosterone level measurement
- General checkup and vital signs
- Evaluation of urinary or energy symptoms
- Referral to a specialist if needed

## Why it matters

PSA helps monitor prostate health, and testosterone influences energy, mood and overall health. A simple check gives you peace of mind.

## Combine it with your annual checkup

Make the most of your visit with a [general physical exam](/en/services/examen-fisico-escolar) and routine [blood work](/en/services/examenes-sangre): blood pressure, glucose, cholesterol and thyroid. All walk-in, in a single visit.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examenes-sangre",
    order: 11,
    category: "laboratorio",
    icon: "FlaskConical",
    highlighted: true,
    title: "Análisis de Sangre y Laboratorio",
    titleEn: "Blood Tests & Lab Work",
    shortDescription:
      "Análisis de sangre completos con resultados rápidos e interpretación en español, sin cita previa.",
    shortDescriptionEn:
      "Complete blood work with fast results and results explained in Spanish, no appointment needed.",
    description:
      "Análisis de sangre en La Porte, TX: biometría, química, glucosa, colesterol y más. Resultados en español, con precios accesibles.",
    descriptionEn:
      "Blood tests in La Porte, TX: CBC, chemistry, glucose, cholesterol and more. Results in Spanish, with affordable pricing.",
    keywords: [
      "examenes de sangre la porte",
      "analisis de sangre la porte",
      "laboratorio la porte",
      "laboratorio cerca de mi la porte",
    ],
    keywordsEn: [
      "blood test la porte",
      "blood work la porte",
      "lab near me la porte",
      "clinical lab la porte",
    ],
    features: [
      "Biometría y química sanguínea",
      "Glucosa, colesterol y triglicéridos",
      "Pruebas de tiroides, hígado y riñón",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "CBC and blood chemistry",
      "Glucose, cholesterol and triglycerides",
      "Thyroid, liver and kidney tests",
      "Results explained in Spanish",
    ],
    longDescription: `¿Necesitas análisis de sangre cerca de ti sin esperar semanas por una cita? En Clínica Hispana Nueva Salud La Porte tomamos la muestra el mismo día que llegas, sin cita, y un médico te explica los resultados en español. Sales sabiendo qué significa cada valor y qué hacer después.

## Pruebas de laboratorio que realizamos

- Biometría hemática completa (CBC): detecta anemia, infecciones y problemas de plaquetas
- Química sanguínea y panel metabólico: glucosa, electrolitos, función renal y hepática
- Perfil de lípidos: colesterol total, HDL, LDL y triglicéridos
- Hemoglobina glicosilada (A1C) para diagnosticar y controlar la diabetes
- Perfil tiroideo con [TSH, T3 y T4](/services/tiroides)
- Pruebas hormonales: testosterona, estrógenos, progesterona y prolactina
- Vitamina B12, vitamina D, hierro y ferritina
- [Prueba de embarazo en sangre](/services/prueba-embarazo) (hCG cuantitativa)
- [Pruebas de infecciones de transmisión sexual](/services/enfermedades-transmision-sexual)
- Tipo de sangre y factor Rh

Si tu médico o tu empleador te dio una orden con pruebas específicas, tráela y la seguimos al pie de la letra.

## ¿Cuándo conviene hacerse un análisis de sangre?

- Cansancio constante, mareos, caída de cabello o cambios de peso sin explicación
- Antecedentes familiares de diabetes, colesterol alto o problemas de tiroides
- Control de una [condición crónica](/services/condiciones-cronicas) como diabetes o presión alta
- Chequeo anual aunque te sientas bien: la diabetes y el colesterol alto no dan síntomas al principio
- Requisito de trabajo, escuela o algún trámite

## Cómo prepararte

Para glucosa, colesterol y triglicéridos necesitas entre 8 y 12 horas de ayuno; puedes tomar agua. Si solo te vas a hacer A1C, tiroides, B12 o pruebas hormonales, no hace falta ayunar. No suspendas tus medicamentos a menos que un médico te lo indique. Como abrimos a las 9 de la mañana, puedes venir temprano, sacarte la sangre y desayunar después. Trae tu lista de medicamentos y, si tienes resultados de otro laboratorio, tráelos también para compararlos.

## Resultados explicados, no solo un papel

La mayoría de las pruebas de rutina están listas en 24 a 48 horas y algunas el mismo día. Cuando llegan, un médico los revisa contigo: qué está bien, qué está fuera de rango y qué significa para ti. Si algo necesita atención, iniciamos tratamiento o seguimiento en esa misma visita, sin mandarte a otro lugar. También te entregamos tu copia impresa para que la lleves a donde la necesites.

## Paquetes con precio fijo

- [Chequeo general completo por $99](/promociones): examen general de sangre, A1C, examen de orina y consulta médica incluida
- Examen general de sangre más inyección de vitamina B12 por $99
- Revisa tu testosterona por $79
- Chequeo completo de la mujer por $179
- Perfil hormonal para hombres por $200

Cualquier prueba también se puede hacer por separado. Te decimos el precio exacto antes de tomar la muestra.

## Laboratorio en La Porte, sin seguro y en español

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, a pocos minutos de Deer Park, Pasadena y Shoreacres. Abrimos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM, así que puedes venir saliendo del trabajo o el fin de semana. No necesitas seguro médico: pagas en efectivo o con tarjeta, con el precio informado por adelantado.`,
    longDescriptionEn: `Need blood work near you without waiting weeks for an appointment? At Clínica Hispana Nueva Salud La Porte we draw your sample the same day you walk in, no appointment needed, and a physician explains your results in Spanish or English. You leave knowing what each value means and what to do next.

## Lab tests we perform

- Complete blood count (CBC): detects anemia, infections and platelet problems
- Blood chemistry and metabolic panel: glucose, electrolytes, kidney and liver function
- Lipid panel: total cholesterol, HDL, LDL and triglycerides
- Hemoglobin A1C to diagnose and monitor diabetes
- Thyroid panel with [TSH, T3 and T4](/en/services/tiroides)
- Hormone tests: testosterone, estrogen, progesterone and prolactin
- Vitamin B12, vitamin D, iron and ferritin
- [Blood pregnancy test](/en/services/prueba-embarazo) (quantitative hCG)
- [Sexually transmitted infection testing](/en/services/enfermedades-transmision-sexual)
- Blood type and Rh factor

If your doctor or employer gave you an order with specific tests, bring it and we follow it exactly.

## When should you get blood work?

- Constant fatigue, dizziness, hair loss or unexplained weight changes
- Family history of diabetes, high cholesterol or thyroid problems
- Monitoring a [chronic condition](/en/services/condiciones-cronicas) such as diabetes or high blood pressure
- An annual checkup even if you feel fine: diabetes and high cholesterol show no symptoms at first
- A requirement for work, school or paperwork

## How to prepare

Glucose, cholesterol and triglycerides require 8 to 12 hours of fasting; water is fine. If you are only having A1C, thyroid, B12 or hormone tests, no fasting is needed. Do not stop your medications unless a physician tells you to. Since we open at 9 AM, you can come early, get your blood drawn and have breakfast afterward. Bring your medication list and, if you have results from another lab, bring those too so we can compare.

## Results explained, not just a printout

Most routine tests are ready in 24 to 48 hours, and some the same day. When they arrive, a physician goes over them with you: what is normal, what is out of range and what it means for you. If something needs attention, we start treatment or follow-up during that same visit, without sending you somewhere else. You also get a printed copy to take wherever you need it.

## Flat-price packages

- [Complete general checkup for $99](/en/promociones): full blood panel, A1C, urine test and medical consultation included
- Full blood panel plus a vitamin B12 shot for $99
- Check your testosterone for $79
- Complete women's checkup for $179
- Hormone panel for men for $200

Any test can also be ordered on its own. We tell you the exact price before drawing your sample.

## A lab in La Porte, no insurance needed, in Spanish

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, a few minutes from Deer Park, Pasadena and Shoreacres. We are open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM, so you can come after work or on the weekend. No health insurance needed: pay with cash or card, with the price quoted up front.`,
  },
  {
    slug: "infecciones-urinarias",
    order: 12,
    category: "tratamientos",
    icon: "Droplet",
    title: "Examen de Orina y Tratamiento de Infecciones Urinarias",
    titleEn: "Urinalysis & Urinary Infection Treatment",
    shortDescription:
      "Examen de orina y tratamiento de infecciones urinarias el mismo día, en español.",
    shortDescriptionEn:
      "Urinalysis and same-day urinary infection treatment, in Spanish.",
    description:
      "Examen de orina y tratamiento de infecciones urinarias en La Porte, TX, el mismo día. En español, con precios accesibles.",
    descriptionEn:
      "Urinalysis and urinary infection treatment in La Porte, TX, same day. In Spanish, with affordable pricing.",
    keywords: [
      "examen de orina la porte",
      "infeccion urinaria la porte",
      "tratamiento infeccion urinaria la porte",
      "doctor infeccion de orina la porte",
    ],
    keywordsEn: [
      "urinalysis la porte",
      "urinary tract infection la porte",
      "uti treatment la porte",
      "uti doctor la porte",
    ],
    features: [
      "Examen de orina en la clínica",
      "Diagnóstico de infección urinaria",
      "Tratamiento el mismo día",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Same-day treatment",
      "Walk-in care in Spanish",
    ],
    longDescription: `El examen de orina ayuda a detectar infecciones urinarias y otras condiciones. En Clínica Hispana Nueva Salud La Porte te hacemos la prueba y, si hay infección, empezamos el tratamiento el mismo día.

## ¿Qué incluye?

- Examen general de orina (urianálisis)
- Evaluación de síntomas
- Diagnóstico de infección urinaria
- Tratamiento adecuado el mismo día
- Indicaciones para evitar que regrese

## Síntomas frecuentes

Ardor al orinar, ganas constantes de ir al baño, orina turbia o con mal olor y dolor en la parte baja del abdomen. No esperes: una infección sin tratar puede llegar a los riñones.

## Tratamiento de infecciones urinarias en una clínica hispana cerca de ti

Si tienes síntomas de infección urinaria en La Porte, TX, ven a nuestra clínica hispana sin cita: te hacemos el examen de orina y sales con tu tratamiento el mismo día.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `A urine test helps detect urinary infections and other conditions. At Clínica Hispana Nueva Salud La Porte we run the test and, if there's an infection, we start treatment the same day.

## What's included?

- General urinalysis
- Symptom evaluation
- Diagnosis of urinary infection
- Appropriate same-day treatment
- Tips to prevent it from coming back

## Common symptoms

Burning when urinating, a constant urge to go, cloudy or foul-smelling urine and lower-abdomen pain. Don't wait: an untreated infection can reach the kidneys.

## Urinary infection treatment at a Hispanic clinic near you

If you have urinary infection symptoms in La Porte, TX, walk into our Hispanic clinic with no appointment: we'll run your urine test and you'll leave with treatment the same day.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examen-heces",
    order: 13,
    category: "laboratorio",
    icon: "TestTubes",
    title: "Exámenes de Heces Fecales",
    titleEn: "Stool Tests",
    shortDescription:
      "Análisis de heces fecales para detectar infecciones y problemas digestivos, en español.",
    shortDescriptionEn:
      "Stool analysis to detect infections and digestive problems, in Spanish.",
    description:
      "Exámenes de heces fecales en La Porte, TX. Detección de parásitos e infecciones, en español, con precios accesibles.",
    descriptionEn:
      "Stool tests in La Porte, TX. Detection of parasites and infections, in Spanish, with affordable pricing.",
    keywords: [
      "examen de heces la porte",
      "analisis de heces fecales la porte",
      "examen de parasitos la porte",
      "laboratorio heces la porte",
    ],
    keywordsEn: [
      "stool test la porte",
      "stool analysis la porte",
      "parasite test la porte",
      "stool lab la porte",
    ],
    features: [
      "Análisis de heces fecales",
      "Detección de parásitos e infecciones",
      "Evaluación de síntomas digestivos",
      "Resultados explicados en español",
    ],
    featuresEn: [
      "Stool analysis",
      "Detection of parasites and infections",
      "Digestive symptom evaluation",
      "Results explained in Spanish",
    ],
    longDescription: `Los problemas digestivos a veces tienen una causa que solo un análisis de heces puede revelar. En Clínica Hispana Nueva Salud La Porte realizamos exámenes de heces fecales para encontrar el origen y darte el tratamiento correcto.

## ¿Qué incluye?

- Análisis general de heces fecales
- Detección de parásitos
- Identificación de infecciones intestinales
- Evaluación de sangre oculta cuando se requiere
- Resultados explicados en español

## Cuándo es útil

Diarrea persistente, dolor abdominal, gases, cambios en las evacuaciones o pérdida de peso sin explicación. El examen ayuda a un diagnóstico preciso.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Digestive problems sometimes have a cause that only a stool test can reveal. At Clínica Hispana Nueva Salud La Porte we perform stool tests to find the source and give you the right treatment.

## What's included?

- General stool analysis
- Parasite detection
- Identification of intestinal infections
- Occult-blood evaluation when needed
- Results explained in Spanish

## When it helps

Persistent diarrhea, abdominal pain, gas, changes in bowel movements or unexplained weight loss. The test helps with an accurate diagnosis.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "prueba-strep",
    order: 14,
    category: "laboratorio",
    icon: "TestTube",
    title: "Prueba de Estreptococo (Strep Test)",
    titleEn: "Strep Test",
    shortDescription:
      "Prueba rápida de estreptococo (strep) para el dolor de garganta, con resultado el mismo día.",
    shortDescriptionEn:
      "Rapid strep test for sore throat, with same-day result.",
    description:
      "Prueba de estreptococo (strep test) en La Porte, TX. Resultado rápido y tratamiento en español, con precios accesibles.",
    descriptionEn:
      "Strep test in La Porte, TX. Fast result and treatment in Spanish, with affordable pricing.",
    keywords: [
      "prueba de estreptococo la porte",
      "strep test la porte",
      "prueba de garganta la porte",
      "dolor de garganta doctor la porte",
    ],
    keywordsEn: [
      "strep test la porte",
      "rapid strep test la porte",
      "sore throat test la porte",
      "strep throat doctor la porte",
    ],
    features: [
      "Prueba rápida de estreptococo",
      "Resultado el mismo día",
      "Tratamiento si es positivo",
      "Atención sin cita en español",
    ],
    featuresEn: [
      "Rapid strep test",
      "Same-day result",
      "Treatment if positive",
      "Walk-in care in Spanish",
    ],
    longDescription: `No todo dolor de garganta es igual: la faringitis por estreptococo necesita tratamiento específico. En Clínica Hispana Nueva Salud La Porte hacemos la prueba rápida de strep y te damos el resultado y el tratamiento el mismo día.

## ¿Qué incluye?

- Prueba rápida de estreptococo (hisopado de garganta)
- Resultado en pocos minutos
- Evaluación del dolor de garganta
- Tratamiento adecuado si el resultado es positivo
- Indicaciones de recuperación

## Cuándo hacerla

Dolor de garganta fuerte, fiebre, dificultad para tragar o placas blancas en las amígdalas, sobre todo en niños. La prueba evita tratamientos innecesarios.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Not every sore throat is the same: strep throat needs specific treatment. At Clínica Hispana Nueva Salud La Porte we run the rapid strep test and give you the result and treatment the same day.

## What's included?

- Rapid strep test (throat swab)
- Result in minutes
- Sore-throat evaluation
- Appropriate treatment if the result is positive
- Recovery instructions

## When to get it

Severe sore throat, fever, trouble swallowing or white patches on the tonsils, especially in children. The test avoids unnecessary treatments.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "prueba-tuberculosis",
    order: 15,
    category: "laboratorio",
    icon: "ShieldPlus",
    title: "Examen de Tuberculosis (TB)",
    titleEn: "Tuberculosis (TB) Test",
    shortDescription:
      "Prueba de tuberculosis (PPD) para trabajo, escuela o trámites, con lectura en español.",
    shortDescriptionEn:
      "Tuberculosis (PPD) test for work, school or paperwork, with reading in Spanish.",
    description:
      "Examen de tuberculosis (TB/PPD) en La Porte, TX. Para trabajo y escuela, en español, con precios accesibles.",
    descriptionEn:
      "Tuberculosis (TB/PPD) test in La Porte, TX. For work and school, in Spanish, with affordable pricing.",
    keywords: [
      "examen de tuberculosis la porte",
      "prueba ppd la porte",
      "prueba de tb la porte",
      "tb test español la porte",
    ],
    keywordsEn: [
      "tuberculosis test la porte",
      "ppd test la porte",
      "tb test la porte",
      "tb skin test la porte",
    ],
    features: [
      "Prueba cutánea de tuberculosis (PPD)",
      "Lectura del resultado",
      "Útil para trabajo y escuela",
      "Atención en español",
    ],
    featuresEn: [
      "Tuberculosis skin test (PPD)",
      "Result reading",
      "Useful for work and school",
      "Care in Spanish",
    ],
    longDescription: `¿Te piden una prueba de tuberculosis para el trabajo, la escuela o un trámite? En Clínica Hispana Nueva Salud La Porte aplicamos la prueba cutánea PPD sin cita, hacemos la lectura entre 48 y 72 horas después y te entregamos el resultado por escrito, todo explicado en español.

## Cómo funciona la prueba PPD

**Día 1, aplicación.** Colocamos una pequeña cantidad de tuberculina justo debajo de la piel del antebrazo. Tarda menos de cinco minutos y forma una ampollita que desaparece en unas horas. No la tapes con curita, no la rasques y báñate con normalidad.

**Día 3, lectura.** Regresas entre 48 y 72 horas después. Medimos en milímetros la induración, es decir, la zona endurecida, no el enrojecimiento. Con eso se define el resultado y te lo entregamos firmado, con fecha y número de lote, listo para tu empleador o escuela.

Si no regresas dentro de esa ventana, la prueba pierde validez y hay que repetirla desde el principio. Por eso te damos la fecha exacta de lectura antes de que te vayas.

## Quién suele necesitarla

- Personal de salud, cuidadores, asistentes de enfermería (CNA) y trabajadores de guarderías
- Estudiantes de enfermería, medicina y programas técnicos
- Maestros y personal escolar
- Trabajadores de plantas, construcción y alimentos cuando el empleador lo exige
- Voluntarios en refugios o iglesias
- Trámites que requieran constancia de no tener tuberculosis activa

Para el examen médico de inmigración (I-693) se utiliza una prueba de sangre específica en lugar de la cutánea; la coordinamos como parte de nuestros [exámenes de inmigración](/services/examenes-inmigracion).

## Prueba de dos pasos

Muchos hospitales y agencias de cuidado piden una PPD de dos pasos al ingresar: si la primera sale negativa, se repite entre una y tres semanas después. Te programamos las dos aplicaciones y las dos lecturas para que cumplas el requisito sin errores.

## ¿Y si sale positiva?

Un resultado positivo no significa que tengas tuberculosis activa. Puede tratarse de una infección latente, que no contagia, o de una reacción a la vacuna BCG que muchas personas recibieron de niños en México y Centroamérica. En ese caso el médico revisa tus síntomas, te refiere para una radiografía de tórax y te explica qué documento entregar mientras tanto. Si tuviste la vacuna BCG, dínoslo desde el inicio para orientarte mejor.

## Prueba de TB en La Porte, 7 días a la semana

Como abrimos todos los días, es fácil cuadrar la lectura: si te la aplicas el lunes, la leemos el miércoles o jueves; si vienes el jueves, la leemos el sábado o el domingo. Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. No necesitas seguro médico y el precio es fijo; pregúntalo por teléfono antes de venir.`,
    longDescriptionEn: `Do you need a tuberculosis test for work, school or paperwork? At Clínica Hispana Nueva Salud La Porte we place the PPD skin test with no appointment, read it 48 to 72 hours later and give you the written result, all explained in Spanish or English.

## How the PPD test works

**Day 1, placement.** We inject a small amount of tuberculin just under the skin of your forearm. It takes less than five minutes and forms a tiny bubble that fades in a few hours. Do not cover it with a bandage, do not scratch it, and shower as usual.

**Day 3, reading.** You come back 48 to 72 hours later. We measure the induration in millimeters, meaning the firm area, not the redness. That determines the result, which we hand you signed, with the date and lot number, ready for your employer or school.

If you do not return within that window, the test is no longer valid and has to be repeated from the start. That is why we give you the exact reading date before you leave.

## Who usually needs it

- Healthcare workers, caregivers, nursing assistants (CNAs) and daycare staff
- Nursing, medical and technical-program students
- Teachers and school staff
- Plant, construction and food-service workers when the employer requires it
- Volunteers at shelters or churches
- Paperwork that requires proof you do not have active tuberculosis

The immigration medical exam (I-693) uses a specific blood test instead of the skin test; we coordinate it as part of our [immigration exams](/en/services/examenes-inmigracion).

## Two-step testing

Many hospitals and home-care agencies require a two-step PPD at hiring: if the first test is negative, it is repeated one to three weeks later. We schedule both placements and both readings so you meet the requirement without mistakes.

## What if it comes back positive?

A positive result does not mean you have active tuberculosis. It may be a latent infection, which is not contagious, or a reaction to the BCG vaccine that many people received as children in Mexico and Central America. In that case the physician reviews your symptoms, refers you for a chest X-ray and explains what document to submit in the meantime. If you had the BCG vaccine, tell us at the start so we can guide you better.

## TB testing in La Porte, 7 days a week

Because we are open every day, the reading is easy to fit in: placed on Monday, read on Wednesday or Thursday; placed on Thursday, read on Saturday or Sunday. We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. No health insurance needed and the price is flat; call us for it before you come.`,
  },
  {
    slug: "enfermedades-transmision-sexual",
    order: 16,
    category: "laboratorio",
    icon: "ShieldCheck",
    title: "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    titleEn: "Sexually Transmitted Disease (STD) Testing",
    shortDescription:
      "Pruebas de enfermedades de transmisión sexual confidenciales y sin juicios, con tratamiento.",
    shortDescriptionEn:
      "Confidential, judgment-free sexually transmitted disease testing, with treatment.",
    description:
      "Pruebas de ETS/STD confidenciales en La Porte, TX. Resultados y tratamiento en español, con precios accesibles.",
    descriptionEn:
      "Confidential STD testing in La Porte, TX. Results and treatment in Spanish, with affordable pricing.",
    keywords: [
      "prueba std la porte",
      "examen de transmision sexual la porte",
      "prueba ets confidencial la porte",
      "clinica std español la porte",
    ],
    keywordsEn: [
      "std testing la porte",
      "std test near me la porte",
      "confidential std clinic la porte",
      "sti testing la porte",
    ],
    features: [
      "Pruebas confidenciales y sin juicios",
      "Evaluación de síntomas y riesgo",
      "Tratamiento disponible",
      "Atención en español",
    ],
    featuresEn: [
      "Confidential, judgment-free testing",
      "Symptom and risk assessment",
      "Treatment available",
      "Care in Spanish",
    ],
    longDescription: `Hacerte una prueba de enfermedades de transmisión sexual no tiene por qué ser incómodo. En Clínica Hispana Nueva Salud La Porte te atendemos sin cita, en un consultorio privado, con personal que habla tu idioma y no juzga. El resultado es solo tuyo.

## Qué infecciones detectamos

- Clamidia y gonorrea, con muestra de orina o hisopado
- Sífilis, con prueba de sangre
- VIH, con prueba de sangre
- Hepatitis B y C, con prueba de sangre
- Tricomoniasis, vaginosis bacteriana y candidiasis, con cultivo
- Herpes genital cuando hay lesiones visibles

Puedes pedir el panel completo o solo las pruebas que te preocupan. El médico te ayuda a decidir según tu situación.

## Cuándo hacerte la prueba

- Tuviste relaciones sin protección o con una pareja nueva
- Tienes síntomas: ardor al orinar, flujo o secreción distinta, llagas, verrugas, comezón o dolor pélvico
- A tu pareja le diagnosticaron una infección
- Estás embarazada o planeas estarlo
- Tienes varias parejas y quieres un chequeo periódico, idealmente cada 3 a 6 meses

Ten en cuenta que la clamidia, la gonorrea y el VIH en su fase inicial muchas veces no dan ningún síntoma. La única forma de saberlo es con la prueba.

## El periodo ventana

Cada infección tarda un tiempo distinto en detectarse después del contacto: clamidia y gonorrea de 1 a 2 semanas, sífilis de 3 a 6 semanas y VIH de 2 a 6 semanas según el tipo de prueba. Si el contacto fue hace pocos días, te hacemos las pruebas que ya son válidas y te decimos exactamente cuándo repetir las demás.

## Tratamiento el mismo día

Si una prueba sale positiva, en la mayoría de los casos iniciamos el tratamiento con antibióticos en esa misma visita y te lo puedes llevar de nuestra [farmacia](/services/farmacia). Te explicamos cuánto tiempo evitar relaciones y cómo tratar también a tu pareja para que no se repita la infección. Si se trata de VIH o hepatitis, te referimos con un especialista y te acompañamos en el proceso.

El ardor al orinar también puede deberse a una [infección urinaria](/services/infecciones-urinarias); con el examen de orina lo diferenciamos. Las mujeres con flujo o molestias pueden completar su revisión en [ginecología](/services/ginecologia), y los hombres en [salud del hombre](/services/salud-hombre).

## Privacidad de verdad

La consulta es en un consultorio cerrado y solo hablamos del resultado contigo. Como pagas directamente, sin seguro, no llega ninguna carta de la aseguradora a tu casa explicando qué pruebas te hiciste. Puedes venir solo o acompañado, como te sientas más cómodo.

## Pruebas de ETS en La Porte, sin cita

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, abiertos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. Vienen pacientes de La Porte, Deer Park, Pasadena, Baytown y Shoreacres porque pueden hacerse la prueba en la tarde o el fin de semana sin faltar al trabajo. Precio fijo, sin seguro; pregúntalo por teléfono.`,
    longDescriptionEn: `Getting tested for sexually transmitted diseases does not have to be uncomfortable. At Clínica Hispana Nueva Salud La Porte we see you with no appointment, in a private exam room, with staff who speak your language and do not judge. The result is yours alone.

## Infections we test for

- Chlamydia and gonorrhea, with a urine sample or swab
- Syphilis, with a blood test
- HIV, with a blood test
- Hepatitis B and C, with a blood test
- Trichomoniasis, bacterial vaginosis and yeast infections, with a culture
- Genital herpes when there are visible lesions

You can request the full panel or only the tests you are concerned about. The physician helps you decide based on your situation.

## When to get tested

- You had unprotected sex or a new partner
- You have symptoms: burning when urinating, unusual discharge, sores, warts, itching or pelvic pain
- Your partner was diagnosed with an infection
- You are pregnant or planning to be
- You have multiple partners and want routine screening, ideally every 3 to 6 months

Keep in mind that chlamydia, gonorrhea and early-stage HIV often cause no symptoms at all. Testing is the only way to know.

## The window period

Each infection takes a different amount of time to become detectable after exposure: chlamydia and gonorrhea 1 to 2 weeks, syphilis 3 to 6 weeks and HIV 2 to 6 weeks depending on the test. If the exposure was only a few days ago, we run the tests that are already valid and tell you exactly when to repeat the others.

## Same-day treatment

If a test is positive, in most cases we start antibiotic treatment during that same visit and you can pick it up from our [pharmacy](/en/services/farmacia). We explain how long to avoid sex and how to treat your partner too so the infection does not come back. For HIV or hepatitis, we refer you to a specialist and support you through the process.

Burning when urinating can also be a [urinary tract infection](/en/services/infecciones-urinarias); the urine test tells them apart. Women with discharge or discomfort can complete their checkup in [gynecology](/en/services/ginecologia), and men in [men's health](/en/services/salud-hombre).

## Real privacy

The visit takes place in a closed exam room and we discuss the result only with you. Because you pay directly, without insurance, no letter from an insurer arrives at your home listing the tests you had. Come alone or with someone, whichever feels more comfortable.

## STD testing in La Porte, no appointment needed

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. Patients come from La Porte, Deer Park, Pasadena, Baytown and Shoreacres because they can get tested in the evening or on the weekend without missing work. Flat price, no insurance; call us for it.`,
  },
  {
    slug: "examen-alcohol-drogas",
    order: 17,
    category: "examenes",
    icon: "Beaker",
    title: "Exámenes de Alcohol y Drogas",
    titleEn: "Alcohol & Drug Testing",
    shortDescription:
      "Pruebas de alcohol y drogas para trabajo y trámites, rápidas y con documentación.",
    shortDescriptionEn:
      "Alcohol and drug testing for work and paperwork, fast and with documentation.",
    description:
      "Exámenes de alcohol y drogas en La Porte, TX. Para empleo y trámites, en español, con precios accesibles.",
    descriptionEn:
      "Alcohol and drug testing in La Porte, TX. For employment and paperwork, in Spanish, with affordable pricing.",
    keywords: [
      "examen de drogas la porte",
      "prueba de alcohol y drogas la porte",
      "examen de drogas para trabajo la porte",
      "examen pre empleo la porte",
      "drug test la porte español",
    ],
    keywordsEn: [
      "drug test la porte",
      "pre employment drug test la porte",
      "pre employment physical la porte",
      "alcohol and drug test la porte",
      "drug screening la porte",
    ],
    features: [
      "Prueba de drogas para empleo",
      "Prueba de alcohol",
      "Proceso rápido",
      "Documentación del resultado",
    ],
    featuresEn: [
      "Drug test for employment",
      "Alcohol test",
      "Fast process",
      "Result documentation",
    ],
    longDescription: `Muchos empleos y trámites requieren una prueba de alcohol y drogas. En Clínica Hispana Nueva Salud La Porte la realizamos de forma rápida y te entregamos la documentación que necesitas.

## ¿Qué incluye?

- Prueba de detección de drogas
- Prueba de alcohol
- Proceso ágil y discreto
- Documentación del resultado para tu empleador o trámite

## Para trabajo y trámites

Atendemos solicitudes de empleo, requisitos laborales y trámites personales. Te explicamos el proceso en español para que llegues tranquilo.

## Examen pre-empleo completo

Si tu nuevo trabajo pide prueba de drogas y chequeo médico, podemos hacer ambos en la misma visita: la prueba y el [examen físico para el trabajo](/services/examen-fisico-escolar). Los choferes comerciales pueden combinarla con el [examen físico DOT](/services/examen-dot).

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Many jobs and processes require an alcohol and drug test. At Clínica Hispana Nueva Salud La Porte we perform it quickly and give you the documentation you need.

## What's included?

- Drug screening test
- Alcohol test
- Quick, discreet process
- Result documentation for your employer or paperwork

## For work and paperwork

We handle job applications, workplace requirements and personal paperwork. We explain the process in Spanish so you arrive with peace of mind.

## Complete pre-employment screening

If your new job requires a drug test and a medical checkup, we can do both in the same visit: the test plus the [work physical exam](/en/services/examen-fisico-escolar). Commercial drivers can combine it with the [DOT physical exam](/en/services/examen-dot).

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "electrocardiograma",
    order: 18,
    category: "laboratorio",
    icon: "HeartPulse",
    title: "Electrocardiograma (EKG)",
    titleEn: "Electrocardiogram (EKG)",
    shortDescription:
      "Electrocardiograma (EKG) rápido y sin dolor para evaluar la salud de tu corazón, en español.",
    shortDescriptionEn:
      "Fast, painless electrocardiogram (EKG) to evaluate your heart health, in Spanish.",
    description:
      "Electrocardiograma EKG en La Porte, TX, rápido y sin dolor. Resultados y atención en español, con precios accesibles.",
    descriptionEn:
      "Electrocardiogram EKG in La Porte, TX, fast and painless. Results and care in Spanish, with affordable pricing.",
    keywords: [
      "electrocardiograma la porte",
      "ekg la porte español",
      "examen del corazon la porte",
      "ecg la porte",
    ],
    keywordsEn: [
      "electrocardiogram la porte",
      "ekg la porte",
      "heart test la porte",
      "ecg la porte spanish",
    ],
    features: [
      "Estudio rápido y sin dolor",
      "Evaluación del ritmo cardiaco",
      "Útil para exámenes médicos",
      "Resultados en español",
    ],
    featuresEn: [
      "Fast and painless test",
      "Heart-rhythm evaluation",
      "Useful for medical exams",
      "Results in Spanish",
    ],
    longDescription: `El electrocardiograma (EKG) registra la actividad eléctrica de tu corazón en pocos minutos y sin ninguna molestia. En Clínica Hispana Nueva Salud La Porte lo realizamos como parte de chequeos y exámenes médicos.

## ¿Qué incluye?

- Estudio del ritmo y la actividad del corazón
- Interpretación por personal médico
- Útil para exámenes de trabajo, deporte o cirugía
- Resultados explicados en español

## Cuándo se recomienda

Si tienes palpitaciones, presión alta, dolor en el pecho o necesitas un examen médico completo, el EKG aporta información valiosa sobre tu corazón.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `The electrocardiogram (EKG) records your heart's electrical activity in just a few minutes with no discomfort. At Clínica Hispana Nueva Salud La Porte we perform it as part of checkups and medical exams.

## What's included?

- Study of your heart's rhythm and activity
- Interpretation by medical staff
- Useful for work, sports or surgery exams
- Results explained in Spanish

## When it's recommended

If you have palpitations, high blood pressure, chest discomfort or need a complete medical exam, the EKG provides valuable information about your heart.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "ultrasonido",
    order: 19,
    category: "laboratorio",
    icon: "ScanLine",
    title: "Ultrasonido y Ecografía",
    titleEn: "Ultrasound & Sonography",
    shortDescription:
      "Ultrasonidos diagnósticos y de embarazo con equipo moderno y atención en español.",
    shortDescriptionEn:
      "Diagnostic and pregnancy ultrasounds with modern equipment and care in Spanish.",
    description:
      "Ultrasonido y ecografía en La Porte, TX: abdominal, pélvico y de embarazo. En español, con precios accesibles.",
    descriptionEn:
      "Ultrasound and sonography in La Porte, TX: abdominal, pelvic and pregnancy. In Spanish, with affordable pricing.",
    keywords: [
      "ultrasonido la porte",
      "ecografia la porte español",
      "ultrasonido de embarazo la porte",
      "sonograma la porte",
    ],
    keywordsEn: [
      "ultrasound la porte",
      "sonogram la porte",
      "pregnancy ultrasound la porte",
      "abdominal ultrasound la porte",
    ],
    features: [
      "Ultrasonido abdominal y pélvico",
      "Ultrasonido de embarazo",
      "Equipo moderno",
      "Atención en español",
    ],
    featuresEn: [
      "Abdominal and pelvic ultrasound",
      "Pregnancy ultrasound",
      "Modern equipment",
      "Care in Spanish",
    ],
    longDescription: `¿Buscas un ultrasonido cerca de ti sin esperar semanas por una cita? En Clínica Hispana Nueva Salud La Porte hacemos ultrasonidos diagnósticos y de embarazo en la misma clínica, con precio fijo sin seguro y un médico que te explica lo que se ve en pantalla, en español.

## Tipos de ultrasonido que realizamos

- **Abdominal:** hígado, vesícula (piedras), páncreas, bazo y riñones; útil ante dolor abdominal, náuseas después de comer o análisis de hígado alterados
- **Renal y vías urinarias:** cálculos, dilatación o infecciones que se repiten
- **Pélvico:** útero y ovarios; quistes, miomas, sangrado irregular o dolor pélvico
- **Obstétrico:** confirmación de embarazo, latido, edad gestacional y seguimiento
- **Tiroides:** nódulos o crecimiento del cuello, complementando el [perfil tiroideo](/services/tiroides)
- **Tejidos blandos:** bultos, masas o [abscesos](/services/drenaje-abscesos) para decidir el tratamiento

## Cómo prepararte

- Ultrasonido abdominal: 6 a 8 horas de ayuno para que la vesícula se vea bien; agua sí
- Ultrasonido pélvico o de embarazo temprano: vejiga llena; toma 3 o 4 vasos de agua una hora antes y no orines
- Tiroides y tejidos blandos: sin preparación
- Ven con ropa cómoda de dos piezas para descubrir solo la zona a revisar

El estudio dura entre 15 y 30 minutos. Se aplica un gel frío sobre la piel y se desliza el transductor; no duele y no usa radiación, por eso se puede repetir las veces que haga falta y es seguro durante el embarazo.

## Ultrasonido de embarazo

A partir de la sexta semana suele verse el saco gestacional y poco después el latido. Con la medición del embrión calculamos las semanas y la fecha probable de parto. Si acabas de hacerte una [prueba de embarazo](/services/prueba-embarazo) positiva, el ultrasonido es el siguiente paso para confirmar que todo va bien. También hacemos ultrasonidos de seguimiento durante el embarazo. Puedes venir acompañada y, si lo deseas, te entregamos imágenes impresas. El ultrasonido no sustituye el control prenatal completo; te orientamos para iniciarlo.

## Resultados en la misma visita

El médico interpreta el estudio en el momento, te muestra las imágenes y te entrega un reporte escrito. Si el hallazgo requiere un especialista, te damos la referencia con el reporte y las imágenes para que no tengas que repetir el estudio. Si traes ultrasonidos anteriores, los comparamos.

## Ultrasonido sin seguro en La Porte

No necesitas orden médica ni seguro. Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, y abrimos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. Atendemos a pacientes de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point. Llámanos para conocer el precio del estudio que necesitas antes de venir.`,
    longDescriptionEn: `Looking for an ultrasound near you without waiting weeks for an appointment? At Clínica Hispana Nueva Salud La Porte we perform diagnostic and pregnancy ultrasounds right in the clinic, at a flat self-pay price, with a physician who explains what you see on the screen, in Spanish or English.

## Types of ultrasound we perform

- **Abdominal:** liver, gallbladder (stones), pancreas, spleen and kidneys; useful for abdominal pain, nausea after meals or abnormal liver tests
- **Kidney and urinary tract:** stones, dilation or recurring infections
- **Pelvic:** uterus and ovaries; cysts, fibroids, irregular bleeding or pelvic pain
- **Obstetric:** pregnancy confirmation, heartbeat, gestational age and follow-up
- **Thyroid:** nodules or neck swelling, complementing the [thyroid panel](/en/services/tiroides)
- **Soft tissue:** lumps, masses or [abscesses](/en/services/drenaje-abscesos) to decide on treatment

## How to prepare

- Abdominal ultrasound: fast 6 to 8 hours so the gallbladder shows clearly; water is fine
- Pelvic or early-pregnancy ultrasound: full bladder; drink 3 or 4 glasses of water one hour before and do not urinate
- Thyroid and soft tissue: no preparation
- Wear comfortable two-piece clothing so only the area being examined is uncovered

The exam takes 15 to 30 minutes. A cool gel is applied to the skin and the probe glides over it; it does not hurt and uses no radiation, so it can be repeated as often as needed and is safe during pregnancy.

## Pregnancy ultrasound

From about the sixth week the gestational sac is usually visible, and the heartbeat shortly after. Measuring the embryo lets us calculate the weeks and the due date. If you just had a positive [pregnancy test](/en/services/prueba-embarazo), an ultrasound is the next step to confirm everything is going well. We also do follow-up ultrasounds during pregnancy. You are welcome to bring someone with you and, if you wish, we give you printed images. An ultrasound does not replace full prenatal care; we help you get it started.

## Results during the same visit

The physician interprets the study on the spot, shows you the images and gives you a written report. If the finding requires a specialist, we provide the referral with the report and images so you do not have to repeat the exam. If you bring previous ultrasounds, we compare them.

## Ultrasound without insurance in La Porte

No doctor's order or insurance needed. We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. We serve patients from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point. Call us for the price of the exam you need before you come.`,
  },
  {
    slug: "examen-dot",
    order: 20,
    category: "examenes",
    icon: "Truck",
    highlighted: true,
    title: "Examen Físico DOT - Licencia CDL",
    titleEn: "DOT Physical Exam - CDL License",
    shortDescription:
      "Examen físico DOT para conductores comerciales (CDL), sin cita y con certificado el mismo día.",
    shortDescriptionEn:
      "DOT physical exam for commercial drivers (CDL), walk-in, with same-day certificate.",
    description:
      "Examen físico DOT cerca de ti en La Porte, TX: sin cita, certificado médico CDL el mismo día y en español. Precios accesibles, sin seguro.",
    descriptionEn:
      "DOT physical exam near you in La Porte, TX: walk-in, same-day CDL medical certificate, in Spanish. Affordable pricing, no insurance needed.",
    keywords: [
      "examen dot near me",
      "examen dot la porte",
      "examen fisico dot la porte español",
      "examen cdl la porte",
      "examen dot sin cita",
    ],
    keywordsEn: [
      "dot physical near me",
      "dot physical la porte tx",
      "dot exam la porte",
      "cdl physical la porte",
      "dot medical exam walk in",
    ],
    features: [
      "Certificado DOT el mismo día",
      "Sin cita, 7 días a la semana",
      "Para obtener o renovar la licencia CDL",
      "Atención en español y precio fijo sin seguro",
    ],
    featuresEn: [
      "Same-day DOT certificate",
      "Walk-ins welcome, 7 days a week",
      "To obtain or renew your CDL license",
      "Care in Spanish, flat self-pay price",
    ],
    longDescription: `Si manejas vehículos comerciales necesitas tu examen físico DOT vigente. En Clínica Hispana Nueva Salud La Porte lo realizamos de forma rápida y te entregamos tu certificado el mismo día.

## ¿Qué incluye?

- Revisión de visión y audición
- Toma de presión arterial
- Examen físico requerido por el DOT
- Revisión de historial médico
- Certificado médico DOT el mismo día

## Para conductores comerciales

El examen es obligatorio para obtener o renovar tu licencia CDL. Te explicamos cada paso en español y agilizamos el proceso para que vuelvas pronto a la carretera. Ven sin cita: atendemos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM.

## Qué traer

Licencia de conducir vigente, lentes o audífonos si los usas y la lista de medicamentos que tomas. Si tienes presión alta, diabetes o apnea del sueño, trae tus últimos resultados o notas de tu médico para agilizar el certificado. Si tu empresa también pide [prueba de drogas](/services/examen-alcohol-drogas), la hacemos en la misma visita.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `If you drive commercial vehicles you need a current DOT physical exam. At Clínica Hispana Nueva Salud La Porte we perform it quickly and give you your certificate the same day.

## What's included?

- Vision and hearing screening
- Blood-pressure check
- DOT-required physical exam
- Medical-history review
- Same-day DOT medical certificate

## For commercial drivers

The exam is required to obtain or renew your CDL license. We explain every step in Spanish and speed up the process so you get back on the road soon. No appointment needed: we're open Monday to Saturday 9 AM to 9 PM and Sunday 9 AM to 7 PM.

## What to bring

A valid driver's license, glasses or hearing aids if you use them, and the list of medications you take. If you have high blood pressure, diabetes or sleep apnea, bring your latest results or doctor's notes to speed up the certificate. If your company also requires a [drug test](/en/services/examen-alcohol-drogas), we do it in the same visit.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examenes-inmigracion",
    order: 21,
    category: "examenes",
    icon: "ClipboardCheck",
    title: "Examen Médico de Inmigración I-693",
    titleEn: "Immigration Medical Exam I-693",
    shortDescription:
      "Examen médico de inmigración con médico autorizado por USCIS y el Formulario I-693 sellado.",
    shortDescriptionEn:
      "Immigration medical exam with a USCIS-authorized physician and the sealed Form I-693.",
    description:
      "Examen médico de inmigración I-693 en La Porte, TX con médico autorizado por USCIS: examen físico, pruebas, vacunas y formulario sellado. En español.",
    descriptionEn:
      "I-693 immigration medical exam in La Porte, TX with a USCIS-authorized physician: physical exam, tests, vaccines and sealed form. In Spanish.",
    keywords: [
      "examen de inmigracion la porte",
      "examen fisico para inmigracion",
      "examen medico i-693 la porte",
      "civil surgeon la porte español",
      "medico autorizado uscis la porte",
    ],
    keywordsEn: [
      "immigration medical exam la porte",
      "immigration physical near me",
      "i-693 exam la porte",
      "civil surgeon la porte",
      "uscis authorized doctor la porte",
    ],
    features: [
      "Médico autorizado (civil surgeon)",
      "Formulario I-693 sellado",
      "Vacunas requeridas disponibles",
      "Proceso explicado en español",
    ],
    featuresEn: [
      "Authorized civil surgeon",
      "Sealed Form I-693",
      "Required vaccines available",
      "Process explained in Spanish",
    ],
    longDescription: `El examen médico de inmigración (Formulario I-693) es un requisito para el ajuste de estatus. En Clínica Hispana Nueva Salud La Porte lo realizamos con un médico autorizado por USCIS (civil surgeon) y te entregamos el formulario sellado listo para enviar.

## ¿Qué incluye?

- Revisión de historial médico y de vacunas
- Examen físico completo
- Pruebas requeridas por USCIS (incluida la de tuberculosis)
- Aplicación de las vacunas que te falten
- Formulario I-693 completado y sellado en sobre oficial

## Qué traer a tu cita

Identificación con foto, registro de vacunas si lo tienes y cualquier documento médico relevante. Te explicamos todo el proceso en español para que llegues tranquilo.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `The immigration medical exam (Form I-693) is required for adjustment of status. At Clínica Hispana Nueva Salud La Porte we perform it with a USCIS-authorized physician (civil surgeon) and give you the sealed form ready to submit.

## What's included?

- Review of medical and vaccination history
- Complete physical exam
- USCIS-required tests (including tuberculosis)
- Administration of any missing vaccines
- Form I-693 completed and sealed in the official envelope

## What to bring

Photo ID, your vaccination record if you have it and any relevant medical documents. We explain the entire process in Spanish so you arrive with peace of mind.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "vacunas",
    order: 22,
    category: "tratamientos",
    icon: "Syringe",
    title: "Vacunas contra la Influenza y Toxoide Tetánico",
    titleEn: "Flu and Tetanus (Tdap) Vaccines",
    shortDescription:
      "Vacuna contra la influenza (flu) y toxoide tetánico, aplicadas por personal médico, en español.",
    shortDescriptionEn:
      "Influenza (flu) vaccine and tetanus toxoid, administered by medical staff, in Spanish.",
    description:
      "Vacunas de flu y toxoide tetánico en La Porte, TX. Aplicación por personal médico en español, con precios accesibles.",
    descriptionEn:
      "Flu and tetanus vaccines in La Porte, TX. Administered by medical staff in Spanish, with affordable pricing.",
    keywords: [
      "vacuna de la flu la porte",
      "vacuna contra la influenza la porte",
      "toxoide tetanico la porte",
      "vacuna del tetano la porte",
    ],
    keywordsEn: [
      "flu shot la porte",
      "flu vaccine la porte",
      "tetanus shot la porte",
      "tdap vaccine la porte",
    ],
    features: [
      "Vacuna contra la influenza (flu)",
      "Toxoide tetánico",
      "Aplicación por personal médico",
      "Atención en español",
    ],
    featuresEn: [
      "Influenza (flu) vaccine",
      "Tetanus toxoid",
      "Administered by medical staff",
      "Care in Spanish",
    ],
    longDescription: `En Clínica Hispana Nueva Salud La Porte aplicamos la vacuna contra la influenza y el toxoide tetánico sin cita, en español y con precio fijo. Llegas, te evaluamos en unos minutos y sales protegido, con tu comprobante de vacunación si lo necesitas para el trabajo o la escuela.

## Vacuna contra la influenza (flu)

En el área de Houston la temporada de gripe suele empezar en octubre y alcanza su punto más alto entre diciembre y febrero. El mejor momento para vacunarte es septiembre u octubre, pero la vacuna sigue siendo útil hasta la primavera. El cuerpo tarda unas dos semanas en generar protección, y cada año la vacuna se actualiza según las cepas que circulan, por eso hay que repetirla anualmente.

Está recomendada a partir de los 6 meses de edad y es especialmente importante para:

- Personas mayores de 65 años
- Mujeres embarazadas
- Quienes viven con diabetes, asma, EPOC o problemas del corazón
- Quienes cuidan a bebés o adultos mayores en casa
- Trabajadores de plantas, refinerías, puerto, escuelas, restaurantes y tiendas, donde el contacto con mucha gente es diario

## Toxoide tetánico y Tdap

El refuerzo contra el tétanos se recomienda cada 10 años. Si te cortaste con metal oxidado, un clavo, una herramienta sucia o sufriste una mordedura y han pasado más de 5 años desde tu última dosis, conviene ponerte el refuerzo dentro de las primeras 48 horas. La vacuna Tdap protege además contra difteria y tosferina, y se recomienda en cada embarazo entre las semanas 27 y 36, así como para quienes van a cuidar a un recién nacido.

Si venimos atendiendo tu herida en la clínica, ya sea con [suturas](/services/suturas-heridas) o [curación](/services/curacion-heridas), revisamos tu estado de vacunación en esa misma visita.

## Cómo es la visita

- Preguntas breves: alergias, fiebre en este momento, embarazo, reacciones a vacunas anteriores
- Aplicación en el brazo por personal médico
- Diez a quince minutos de observación si es tu primera vez con esa vacuna
- Comprobante de vacunación con fecha y lote

Los efectos más comunes son dolor en el brazo, cansancio leve o unas décimas de fiebre durante uno o dos días. La vacuna de la influenza no contiene virus vivo, así que no te puede dar gripe.

## Qué traer

Una identificación, tu cartilla de vacunación si la tienes y el formulario de tu empleador o escuela si necesitas que lo llenemos. Los menores deben venir acompañados por su padre, madre o tutor.

## Vacunas sin seguro en La Porte

No necesitas seguro médico ni cita. Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM, para que puedas vacunarte al salir del trabajo. Atendemos a familias de La Porte, Deer Park, Pasadena, Morgan's Point y Shoreacres. Pregúntanos el precio por teléfono antes de venir.`,
    longDescriptionEn: `At Clínica Hispana Nueva Salud La Porte we give the influenza vaccine and tetanus toxoid with no appointment, in Spanish or English and at a flat price. You walk in, we check you in a few minutes and you leave protected, with a vaccination record if you need one for work or school.

## Influenza (flu) vaccine

In the Houston area, flu season usually starts in October and peaks between December and February. The best time to get vaccinated is September or October, but the shot is still worthwhile through spring. Your body takes about two weeks to build protection, and the vaccine is updated every year for the strains in circulation, which is why it has to be repeated annually.

It is recommended from 6 months of age and is especially important for:

- Adults over 65
- Pregnant women
- People living with diabetes, asthma, COPD or heart disease
- Anyone caring for babies or older adults at home
- Plant, refinery, port, school, restaurant and retail workers, who are in contact with many people every day

## Tetanus toxoid and Tdap

A tetanus booster is recommended every 10 years. If you cut yourself on rusty metal, a nail or a dirty tool, or were bitten, and more than 5 years have passed since your last dose, you should get the booster within the first 48 hours. The Tdap vaccine also protects against diphtheria and whooping cough, and is recommended during every pregnancy between weeks 27 and 36, as well as for anyone who will care for a newborn.

If we are already treating your wound at the clinic, whether with [stitches](/en/services/suturas-heridas) or [wound care](/en/services/curacion-heridas), we check your vaccination status during that same visit.

## What the visit is like

- A few quick questions: allergies, current fever, pregnancy, reactions to previous vaccines
- Injection in the arm by medical staff
- Ten to fifteen minutes of observation if it is your first time with that vaccine
- Vaccination record with date and lot number

The most common side effects are a sore arm, mild tiredness or a slight fever for a day or two. The flu vaccine contains no live virus, so it cannot give you the flu.

## What to bring

An ID, your vaccination card if you have one, and your employer or school form if you need us to fill it out. Minors must come with a parent or legal guardian.

## Vaccines without insurance in La Porte

No health insurance or appointment needed. We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM, so you can get vaccinated after work. We serve families from La Porte, Deer Park, Pasadena, Morgan's Point and Shoreacres. Call us for the price before you come.`,
  },
  {
    slug: "sueros-vitaminados",
    order: 23,
    category: "tratamientos",
    icon: "Droplets",
    title: "Sueros Vitaminados (Terapia IV)",
    titleEn: "Vitamin IV Therapy",
    shortDescription:
      "Sueros vitaminados intravenosos para hidratación y energía, aplicados por personal médico.",
    shortDescriptionEn:
      "Intravenous vitamin drips for hydration and energy, administered by medical staff.",
    description:
      "Sueros vitaminados (terapia IV) en La Porte, TX. Hidratación y vitaminas en español, con precios accesibles.",
    descriptionEn:
      "Vitamin IV therapy in La Porte, TX. Hydration and vitamins in Spanish, with affordable pricing.",
    keywords: [
      "sueros vitaminados la porte",
      "terapia iv la porte",
      "suero de vitaminas la porte",
      "hidratacion intravenosa la porte",
    ],
    keywordsEn: [
      "vitamin iv therapy la porte",
      "iv drip la porte",
      "iv hydration la porte",
      "vitamin drip la porte",
    ],
    features: [
      "Hidratación intravenosa",
      "Vitaminas y minerales",
      "Aplicación por personal médico",
      "Atención en español",
    ],
    featuresEn: [
      "Intravenous hydration",
      "Vitamins and minerals",
      "Administered by medical staff",
      "Care in Spanish",
    ],
    longDescription: `Los sueros vitaminados, también llamados terapia IV, llevan líquidos, vitaminas y minerales directamente a la sangre, así que el cuerpo los aprovecha de inmediato en lugar de perder parte en la digestión. En Clínica Hispana Nueva Salud La Porte los aplica personal médico después de revisar tu presión y tu historial, en un cubículo cómodo y sin cita.

## Para qué se usan

- Deshidratación por vómito, diarrea o golpe de calor, algo frecuente en los veranos de La Porte para quienes trabajan al aire libre, en plantas o en la construcción
- Cansancio acumulado por jornadas largas o turnos rotativos
- Recuperación después de una gripe o infección viral
- Malestar por resaca o cruda
- Refuerzo durante la temporada de gripe
- Dolores de cabeza relacionados con deshidratación
- Niveles bajos de vitamina B12 u otras vitaminas, como explicamos en nuestra [guía sobre la vitamina B12](/blog/vitamina-b12-beneficios-inyecciones-laporte)

## Qué contienen

La base es una solución salina que rehidrata. Sobre ella el médico ajusta los componentes según tu caso: complejo B para energía, vitamina B12, vitamina C, magnesio y zinc. Si tienes náuseas, se puede agregar medicamento para controlarlas. No usamos fórmulas genéricas iguales para todos: lo que va en tu suero depende de lo que necesitas.

## Cómo es la sesión

1. Evaluación breve: presión arterial, pulso y algunas preguntas sobre tu salud y medicamentos
2. Colocación de un catéter delgado en el brazo, similar a una toma de sangre
3. Entre 30 y 60 minutos sentado mientras pasa el suero; puedes usar el celular o descansar
4. Retiro del catéter y unos minutos de observación antes de irte

Durante la infusión es normal sentir un poco de frío en el brazo o un sabor metálico pasajero. Después puedes seguir con tus actividades normales.

## Quién debe consultarlo antes

Las personas con insuficiencia renal, insuficiencia cardíaca o alergias a alguna vitamina deben evaluarse con el médico antes de recibir un suero, y las mujeres embarazadas deben comentarlo. Por eso la evaluación previa es parte del servicio. El suero es un apoyo, no un sustituto de una alimentación adecuada ni del tratamiento de una enfermedad.

## ¿Prefieres una inyección?

Si solo necesitas vitamina B12, la inyección intramuscular es rápida y económica. Pregunta por nuestra promoción de [examen general de sangre más inyección de B12 por $99](/promociones), ideal para saber primero cómo están tus niveles.

## Sueros vitaminados en La Porte, sin cita

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, abiertos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. No necesitas seguro médico; el precio es fijo y te lo confirmamos por teléfono. Atendemos a pacientes de La Porte, Deer Park, Pasadena y comunidades cercanas.`,
    longDescriptionEn: `Vitamin drips, also called IV therapy, deliver fluids, vitamins and minerals straight into your bloodstream, so your body uses them right away instead of losing part of them in digestion. At Clínica Hispana Nueva Salud La Porte they are administered by medical staff after checking your blood pressure and history, in a comfortable bay and with no appointment.

## What they are used for

- Dehydration from vomiting, diarrhea or heat exhaustion, common in La Porte summers for people who work outdoors, in plants or in construction
- Built-up fatigue from long days or rotating shifts
- Recovery after the flu or a viral infection
- Hangover relief
- A boost during flu season
- Headaches linked to dehydration
- Low vitamin B12 or other vitamin levels, as we explain in our [vitamin B12 guide](/en/blog/vitamina-b12-beneficios-inyecciones-laporte)

## What is in them

The base is a saline solution that rehydrates. On top of it the physician adjusts the ingredients to your case: B-complex for energy, vitamin B12, vitamin C, magnesium and zinc. If you feel nauseous, anti-nausea medication can be added. We do not use one generic formula for everyone: what goes in your drip depends on what you need.

## What the session is like

1. A brief evaluation: blood pressure, pulse and a few questions about your health and medications
2. A thin catheter is placed in your arm, similar to a blood draw
3. 30 to 60 minutes seated while the drip runs; you can use your phone or rest
4. The catheter is removed and you are observed for a few minutes before leaving

During the infusion it is normal to feel a little coolness in the arm or a brief metallic taste. Afterward you can go on with your normal activities.

## Who should check first

People with kidney failure, heart failure or allergies to any vitamin should be evaluated by the physician before receiving a drip, and pregnant women should mention it. That is why the pre-evaluation is part of the service. A drip is a support, not a substitute for proper nutrition or for treating an illness.

## Prefer a shot?

If you only need vitamin B12, an intramuscular injection is quick and inexpensive. Ask about our [complete blood panel plus B12 shot for $99](/en/promociones), a good way to check your levels first.

## Vitamin IV drips in La Porte, no appointment needed

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. No health insurance needed; the price is flat and we confirm it by phone. We serve patients from La Porte, Deer Park, Pasadena and nearby communities.`,
  },
  {
    slug: "suturas-heridas",
    order: 24,
    category: "tratamientos",
    icon: "Scissors",
    title: "Suturas de Heridas",
    titleEn: "Wound Suturing",
    shortDescription:
      "Suturas (puntos) para cerrar heridas de forma segura, sin cita previa y en español.",
    shortDescriptionEn:
      "Sutures (stitches) to close wounds safely, walk-ins welcome and in Spanish.",
    description:
      "Suturas de heridas en La Porte, TX. Cierre de cortes y heridas en español, con precios accesibles.",
    descriptionEn:
      "Wound suturing in La Porte, TX. Closing cuts and wounds in Spanish, with affordable pricing.",
    keywords: [
      "suturas la porte",
      "puntos para herida la porte",
      "cerrar herida la porte",
      "doctor para cortadas la porte",
    ],
    keywordsEn: [
      "wound suturing la porte",
      "stitches la porte",
      "laceration repair la porte",
      "cut treatment la porte",
    ],
    features: [
      "Cierre de heridas con suturas",
      "Limpieza y desinfección",
      "Atención sin cita previa",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Wound closure with sutures",
      "Cleaning and disinfection",
      "Walk-ins welcome",
      "After-care instructions",
    ],
    longDescription: `Una herida que no cierra bien puede infectarse o dejar cicatriz. En Clínica Hispana Nueva Salud La Porte cerramos cortes y heridas con suturas de forma segura, sin cita y con atención en español.

## ¿Qué incluye?

- Evaluación y limpieza de la herida
- Cierre con suturas (puntos)
- Aplicación de anestesia local
- Indicaciones de cuidado y signos de alarma
- Retiro de puntos cuando corresponde

## Cuándo acudir

Cortes profundos, heridas que sangran o no cierran solas, o que tienen bordes abiertos. Atender pronto reduce el riesgo de infección y mejora la cicatrización.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `A wound that doesn't close well can get infected or leave a scar. At Clínica Hispana Nueva Salud La Porte we close cuts and wounds with sutures safely, no appointment needed and with care in Spanish.

## What's included?

- Wound evaluation and cleaning
- Closure with sutures (stitches)
- Local anesthesia
- Care instructions and warning signs
- Suture removal when appropriate

## When to come in

Deep cuts, wounds that bleed or won't close on their own, or that have open edges. Treating them promptly reduces the risk of infection and improves healing.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "curacion-heridas",
    order: 25,
    category: "tratamientos",
    icon: "Bandage",
    title: "Cura y Curación de Heridas",
    titleEn: "Wound Care",
    shortDescription:
      "Limpieza, curación y cambio de vendajes de heridas para una buena cicatrización, en español.",
    shortDescriptionEn:
      "Cleaning, wound care and dressing changes for proper healing, in Spanish.",
    description:
      "Cura y curación de heridas en La Porte, TX. Limpieza y vendajes en español, con precios accesibles.",
    descriptionEn:
      "Wound care in La Porte, TX. Cleaning and dressings in Spanish, with affordable pricing.",
    keywords: [
      "curacion de heridas la porte",
      "cura de heridas la porte",
      "cambio de vendaje la porte",
      "limpieza de herida la porte",
    ],
    keywordsEn: [
      "wound care la porte",
      "wound dressing la porte",
      "dressing change la porte",
      "wound cleaning la porte",
    ],
    features: [
      "Limpieza y desinfección",
      "Cambio de vendajes",
      "Seguimiento de la cicatrización",
      "Atención en español",
    ],
    featuresEn: [
      "Cleaning and disinfection",
      "Dressing changes",
      "Healing follow-up",
      "Care in Spanish",
    ],
    longDescription: `Una buena curación evita infecciones y ayuda a que la herida sane más rápido. En Clínica Hispana Nueva Salud La Porte limpiamos, curamos y vendamos tus heridas, y te seguimos hasta que cicatricen.

## ¿Qué incluye?

- Limpieza y desinfección de la herida
- Aplicación de apósitos y vendajes
- Cambio periódico de vendajes
- Vigilancia de signos de infección
- Indicaciones de cuidado en casa

## Para todo tipo de heridas

Heridas postoperatorias, úlceras, quemaduras leves o heridas que tardan en sanar. Te ayudamos con curaciones regulares para una mejor recuperación.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Good wound care prevents infections and helps the wound heal faster. At Clínica Hispana Nueva Salud La Porte we clean, treat and dress your wounds, and follow you until they heal.

## What's included?

- Wound cleaning and disinfection
- Application of dressings and bandages
- Periodic dressing changes
- Monitoring for signs of infection
- Home-care instructions

## For all kinds of wounds

Post-surgical wounds, ulcers, minor burns or wounds that are slow to heal. We help with regular dressing changes for a better recovery.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "cirugias-menores",
    order: 26,
    category: "tratamientos",
    icon: "Stethoscope",
    title: "Cirugías Menores",
    titleEn: "Minor Surgery",
    shortDescription:
      "Procedimientos de cirugía menor ambulatoria (lunares, quistes, lipomas) con anestesia local.",
    shortDescriptionEn:
      "Minor outpatient surgical procedures (moles, cysts, lipomas) with local anesthesia.",
    description:
      "Cirugías menores en La Porte, TX: lunares, quistes y lipomas. Procedimiento ambulatorio en español, con precios accesibles.",
    descriptionEn:
      "Minor surgery in La Porte, TX: moles, cysts and lipomas. Outpatient procedure in Spanish, with affordable pricing.",
    keywords: [
      "cirugia menor la porte",
      "quitar lunar la porte",
      "extraccion de quiste la porte",
      "cirugia ambulatoria la porte",
    ],
    keywordsEn: [
      "minor surgery la porte",
      "mole removal la porte",
      "cyst removal la porte",
      "lipoma removal la porte",
    ],
    features: [
      "Procedimientos ambulatorios",
      "Anestesia local",
      "Extracción de lunares, quistes y lipomas",
      "Cuidado posterior explicado",
    ],
    featuresEn: [
      "Outpatient procedures",
      "Local anesthesia",
      "Removal of moles, cysts and lipomas",
      "After-care explained",
    ],
    longDescription: `Muchos problemas de piel y tejidos blandos se resuelven con un procedimiento sencillo. En Clínica Hispana Nueva Salud La Porte realizamos cirugías menores ambulatorias con anestesia local, en un mismo día.

## ¿Qué incluye?

- Evaluación del lunar, quiste o lesión
- Procedimiento ambulatorio con anestesia local
- Extracción de lunares, quistes y lipomas
- Indicaciones claras de cuidado posterior
- Retiro de puntos cuando corresponde

## Rápido y seguro

La mayoría de estos procedimientos toman poco tiempo y no requieren hospitalización. Te explicamos cada paso en español para que estés tranquilo.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Many skin and soft-tissue problems are solved with a simple procedure. At Clínica Hispana Nueva Salud La Porte we perform minor outpatient surgery with local anesthesia, in a single day.

## What's included?

- Evaluation of the mole, cyst or lesion
- Outpatient procedure with local anesthesia
- Removal of moles, cysts and lipomas
- Clear after-care instructions
- Suture removal when appropriate

## Fast and safe

Most of these procedures take little time and don't require hospitalization. We explain every step in Spanish so you feel at ease.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "drenaje-abscesos",
    order: 27,
    category: "tratamientos",
    icon: "Droplet",
    title: "Drenaje de Abscesos",
    titleEn: "Abscess Drainage",
    shortDescription:
      "Drenaje de abscesos e infecciones de piel para aliviar el dolor y favorecer la curación.",
    shortDescriptionEn:
      "Drainage of abscesses and skin infections to relieve pain and promote healing.",
    description:
      "Drenaje de abscesos en La Porte, TX. Tratamiento de infecciones de piel en español, con precios accesibles.",
    descriptionEn:
      "Abscess drainage in La Porte, TX. Treatment of skin infections in Spanish, with affordable pricing.",
    keywords: [
      "drenaje de absceso la porte",
      "drenar absceso la porte",
      "infeccion de piel la porte",
      "tratamiento de absceso la porte",
    ],
    keywordsEn: [
      "abscess drainage la porte",
      "drain abscess la porte",
      "skin infection la porte",
      "boil treatment la porte",
    ],
    features: [
      "Drenaje del absceso",
      "Limpieza y desinfección",
      "Anestesia local",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Abscess drainage",
      "Cleaning and disinfection",
      "Local anesthesia",
      "After-care instructions",
    ],
    longDescription: `Un absceso es una acumulación de pus que causa dolor e hinchazón y necesita drenarse. En Clínica Hispana Nueva Salud La Porte lo tratamos de forma segura para aliviar la molestia y prevenir que la infección avance.

## ¿Qué incluye?

- Evaluación del absceso o infección de piel
- Drenaje con anestesia local
- Limpieza y desinfección de la zona
- Tratamiento de la infección cuando se requiere
- Indicaciones de cuidado y seguimiento

## No lo dejes pasar

Un bulto rojo, caliente y doloroso, a veces con fiebre, necesita atención. Drenarlo a tiempo evita complicaciones y alivia el dolor rápidamente.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `An abscess is a buildup of pus that causes pain and swelling and needs to be drained. At Clínica Hispana Nueva Salud La Porte we treat it safely to relieve the discomfort and prevent the infection from spreading.

## What's included?

- Evaluation of the abscess or skin infection
- Drainage with local anesthesia
- Cleaning and disinfection of the area
- Treatment of the infection when needed
- Care and follow-up instructions

## Don't let it go

A red, warm, painful lump, sometimes with fever, needs attention. Draining it in time prevents complications and relieves pain quickly.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "unas-encarnadas",
    order: 28,
    category: "tratamientos",
    icon: "Footprints",
    title: "Extracción de Uñas Encarnadas",
    titleEn: "Ingrown Toenail Removal",
    shortDescription:
      "Tratamiento de uñas encarnadas para aliviar el dolor y prevenir infecciones, en español.",
    shortDescriptionEn:
      "Ingrown toenail treatment to relieve pain and prevent infection, in Spanish.",
    description:
      "Extracción de uñas encarnadas en La Porte, TX. Procedimiento con anestesia local en español, con precios accesibles.",
    descriptionEn:
      "Ingrown toenail removal in La Porte, TX. Procedure with local anesthesia in Spanish, with affordable pricing.",
    keywords: [
      "uña encarnada la porte",
      "extraccion de uña encarnada la porte",
      "tratamiento uña encarnada la porte",
      "doctor para uña encarnada la porte",
    ],
    keywordsEn: [
      "ingrown toenail la porte",
      "ingrown toenail removal la porte",
      "ingrown nail treatment la porte",
      "toenail doctor la porte",
    ],
    features: [
      "Tratamiento de la uña encarnada",
      "Anestesia local",
      "Alivio del dolor",
      "Indicaciones de cuidado posterior",
    ],
    featuresEn: [
      "Ingrown toenail treatment",
      "Local anesthesia",
      "Pain relief",
      "After-care instructions",
    ],
    longDescription: `Una uña encarnada puede doler mucho e infectarse si no se trata. En Clínica Hispana Nueva Salud La Porte la atendemos con un procedimiento sencillo y anestesia local para aliviarte el mismo día.

## ¿Qué incluye?

- Evaluación de la uña y el dedo
- Procedimiento con anestesia local
- Extracción de la porción encarnada de la uña
- Tratamiento de la infección si la hay
- Indicaciones de cuidado para evitar que regrese

## Cuándo acudir

Dolor, enrojecimiento, hinchazón o pus alrededor de la uña, sobre todo del dedo gordo del pie. Atenderla pronto evita una infección mayor.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `An ingrown toenail can hurt a lot and get infected if untreated. At Clínica Hispana Nueva Salud La Porte we treat it with a simple procedure and local anesthesia to relieve you the same day.

## What's included?

- Evaluation of the nail and toe
- Procedure with local anesthesia
- Removal of the ingrown portion of the nail
- Treatment of the infection if present
- Care instructions to prevent recurrence

## When to come in

Pain, redness, swelling or pus around the nail, especially the big toe. Treating it promptly prevents a larger infection.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "farmacia",
    order: 29,
    category: "tratamientos",
    icon: "Pill",
    title: "Farmacia",
    titleEn: "Pharmacy",
    shortDescription:
      "Recoge tus medicamentos al terminar la consulta, sin ir a otra farmacia.",
    shortDescriptionEn:
      "Pick up your medications right after your visit — no second stop.",
    description:
      "Farmacia en La Porte, TX dentro de la clínica. Surtimos tu receta al terminar la consulta, atención en español.",
    descriptionEn:
      "Pharmacy in La Porte, TX inside the clinic. We fill your prescription right after your visit, service in Spanish.",
    keywords: [
      "farmacia en la porte",
      "farmacia hispana la porte",
      "farmacia cerca de mí la porte",
      "surtir receta la porte",
    ],
    keywordsEn: [
      "pharmacy la porte",
      "hispanic pharmacy la porte",
      "pharmacy near me la porte",
      "fill prescription la porte",
    ],
    features: [
      "Surtido de tu receta al instante",
      "Medicamentos de marca y genéricos",
      "Medicamentos de venta libre (OTC)",
      "Asesoría sobre tus medicamentos en español",
    ],
    featuresEn: [
      "Prescriptions filled on the spot",
      "Brand-name and generic medications",
      "Over-the-counter (OTC) medications",
      "Guidance about your medications in Spanish",
    ],
    longDescription: `Al terminar tu consulta en Clínica Hispana Nueva Salud La Porte puedes recoger tus medicamentos en nuestra propia farmacia, sin tener que ir a otro lugar. Es la comodidad de resolver todo en una sola visita, con atención en español.

## ¿Qué incluye?

- Surtido de tu receta justo al terminar la consulta
- Medicamentos de marca y genéricos
- Medicamentos de venta libre (OTC) para gripe, dolor, alergias y más
- Asesoría del personal sobre cómo tomar tus medicamentos
- Resurtido de recetas

## ¿Por qué usar nuestra farmacia?

Te ahorras una segunda parada: el médico te atiende, te receta y recoges tu medicamento en el mismo lugar. Te explicamos en español la dosis, los horarios y los cuidados.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `After your visit at Clínica Hispana Nueva Salud La Porte you can pick up your medications at our own pharmacy, without going anywhere else. It's the convenience of getting everything done in a single visit, with service in Spanish.

## What's included?

- Your prescription filled right after your visit
- Brand-name and generic medications
- Over-the-counter (OTC) medications for colds, pain, allergies and more
- Staff guidance on how to take your medications
- Prescription refills

## Why use our pharmacy?

You skip the second stop: the doctor sees you, writes your prescription, and you pick up your medication in the same place. We explain the dosage, schedule and precautions in Spanish.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
];

// Testimonios de respaldo para el carrusel cuando no hay data en vivo de Google.
export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    author: "María G.",
    rating: 5,
    text: "Excelente atención y todo en español. Me explicaron cada paso de mi examen. Muy recomendados.",
    textEn: "Excellent care and everything in Spanish. They explained every step of my exam. Highly recommended.",
    relativeTime: "Hace 2 semanas",
  },
  {
    author: "José R.",
    rating: 5,
    text: "Llegué sin cita por una infección y me atendieron rápido. El doctor muy amable y los precios accesibles.",
    textEn: "I walked in without an appointment for an infection and was seen quickly. The doctor was very kind and the prices affordable.",
    relativeTime: "Hace 1 mes",
  },
  {
    author: "Carmen L.",
    rating: 5,
    text: "Llevo mi control de diabetes aquí y me siento muy bien cuidada. El seguimiento es muy bueno.",
    textEn: "I manage my diabetes here and feel very well cared for. The follow-up is excellent.",
    relativeTime: "Hace 1 mes",
  },
  {
    author: "Luis M.",
    rating: 5,
    text: "Hice mi examen DOT y salí el mismo día con mi certificado. Proceso rápido y sin complicaciones.",
    textEn: "I did my DOT exam and left the same day with my certificate. Fast process with no complications.",
    relativeTime: "Hace 2 meses",
  },
  {
    author: "Ana P.",
    rating: 5,
    text: "Una clínica donde te tratan con respeto y cariño. El laboratorio entregó mis resultados muy rápido.",
    textEn: "A clinic where they treat you with respect and care. The lab delivered my results very fast.",
    relativeTime: "Hace 3 meses",
  },
];
