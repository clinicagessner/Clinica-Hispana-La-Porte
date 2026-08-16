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
  whatsapp: "18328314016", // E.164 sin "+", listo para wa.me
  whatsappDisplay: "(832) 831-4016",
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
    title: "Exámenes y Tratamiento de la Tiroides",
    titleEn: "Thyroid Testing & Treatment",
    shortDescription:
      "Diagnóstico y tratamiento de enfermedades de la tiroides (hipotiroidismo e hipertiroidismo) con seguimiento en español.",
    shortDescriptionEn:
      "Diagnosis and treatment of thyroid conditions (hypothyroidism and hyperthyroidism) with follow-up in Spanish.",
    description:
      "Exámenes y tratamiento de la tiroides en La Porte, TX. Pruebas de laboratorio y control en español, con precios accesibles.",
    descriptionEn:
      "Thyroid testing and treatment in La Porte, TX. Lab tests and follow-up in Spanish, with affordable pricing.",
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
    title: "Chequeos Físicos Escolares y Deportivos",
    titleEn: "School & Sports Physical Exams",
    shortDescription:
      "Exámenes físicos para la escuela y los deportes, rápidos y con los formularios completados.",
    shortDescriptionEn:
      "Physical exams for school and sports, fast and with the forms completed.",
    description:
      "Chequeos físicos escolares y deportivos en La Porte, TX. Rápidos, en español y con precios accesibles.",
    descriptionEn:
      "School and sports physical exams in La Porte, TX. Fast, in Spanish, with affordable pricing.",
    keywords: [
      "examen fisico escolar la porte",
      "physical para la escuela la porte",
      "examen deportivo la porte",
      "chequeo escolar la porte",
    ],
    keywordsEn: [
      "school physical la porte",
      "sports physical la porte",
      "school physical exam la porte",
      "kids physical la porte",
    ],
    features: [
      "Examen físico completo",
      "Revisión de signos vitales",
      "Formularios escolares y deportivos llenados",
      "Atención en español",
    ],
    featuresEn: [
      "Complete physical exam",
      "Vital-signs check",
      "School and sports forms completed",
      "Care in Spanish",
    ],
    longDescription: `Antes de inscribirse en la escuela o practicar un deporte, los niños y jóvenes necesitan un chequeo físico. En Clínica Hispana Nueva Salud La Porte lo hacemos de forma rápida y completa, con todos los formularios listos.

## ¿Qué incluye?

- Examen físico general
- Revisión de signos vitales (peso, talla, presión)
- Evaluación de visión y audición
- Llenado de los formularios requeridos
- Recomendaciones de salud

## Para la escuela y el deporte

Cumple los requisitos de inscripción escolar y la evaluación para practicar deportes con seguridad. Trae el formulario de tu escuela o equipo y lo completamos.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Before enrolling in school or playing a sport, children and teens need a physical exam. At Clínica Hispana Nueva Salud La Porte we do it quickly and thoroughly, with all the forms ready.

## What's included?

- General physical exam
- Vital-signs check (weight, height, blood pressure)
- Vision and hearing screening
- Completion of required forms
- Health recommendations

## For school and sports

Meet school enrollment requirements and the evaluation to play sports safely. Bring your school or team form and we'll complete it.

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

## ¿Qué incluye?

- Papanicolaou y chequeo ginecológico
- Cultivos vaginales para identificar infecciones
- Tratamiento de infecciones vaginales (hongos, bacterias)
- Evaluación de molestias y flujo anormal
- Referencias cuando se necesita un especialista

## No te quedes con la duda

Comezón, ardor, flujo diferente o mal olor son señales de que algo necesita atención. Un cultivo permite un diagnóstico correcto y un tratamiento que sí resuelve.

## Ginecología en una clínica hispana cerca de ti

Si buscas atención ginecológica en español en La Porte, TX, no necesitas cita: visita nuestra clínica hispana y te atendemos el mismo día, con precios accesibles y en tu idioma.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Your health as a woman deserves a space of trust. At Clínica Hispana Nueva Salud La Porte we offer gynecology care in Spanish, with the privacy and respect you deserve.

## What's included?

- Pap smear and gynecological checkup
- Vaginal cultures to identify infections
- Treatment of vaginal infections (yeast, bacteria)
- Evaluation of discomfort and abnormal discharge
- Referrals when a specialist is needed

## Don't stay in doubt

Itching, burning, unusual discharge or odor are signs that something needs attention. A culture allows an accurate diagnosis and treatment that truly resolves it.

## Gynecology at a Hispanic clinic near you

If you're looking for gynecology care in Spanish in La Porte, TX, no appointment is needed: visit our Hispanic clinic and we'll see you the same day, with affordable pricing and in your language.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
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
    longDescription: `Si crees que podrías estar embarazada, una prueba confiable te da tranquilidad y claridad. En Clínica Hispana Nueva Salud La Porte realizamos pruebas de embarazo y te orientamos sobre lo que sigue, en español y sin juicios.

## ¿Qué incluye?

- Prueba de embarazo (orina o sangre)
- Confirmación médica del resultado
- Orientación sobre tus siguientes pasos
- Información sobre control prenatal y referencias

## Con confianza y respeto

Te explicamos el resultado con claridad y te acompañamos en la decisión que tomes, siempre con respeto y privacidad.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `If you think you might be pregnant, a reliable test gives you peace of mind and clarity. At Clínica Hispana Nueva Salud La Porte we perform pregnancy tests and guide you on what comes next, in Spanish and without judgment.

## What's included?

- Pregnancy test (urine or blood)
- Medical confirmation of the result
- Guidance on your next steps
- Information on prenatal care and referrals

## With trust and respect

We explain the result clearly and support you in whatever decision you make, always with respect and privacy.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
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
      "prueba psa la porte",
      "examen de prostata la porte",
      "examen de testosterona la porte",
    ],
    keywordsEn: [
      "mens health la porte",
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
    longDescription: `Un buen diagnóstico empieza con un buen laboratorio. En Clínica Hispana Nueva Salud La Porte tomamos tus muestras en el momento y te explicamos los resultados en español, sin tecnicismos.

## ¿Qué incluye?

- Biometría hemática completa (conteo de células)
- Química sanguínea (glucosa, colesterol, triglicéridos)
- Pruebas de tiroides, hígado y riñón
- Paneles para chequeo general o seguimiento
- Resultados rápidos en la mayoría de los casos

## Para qué sirven

Los análisis ayudan a detectar problemas antes de que den síntomas, dar seguimiento a una condición crónica o completar un examen de trabajo o escuela.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `A good diagnosis starts with a good lab. At Clínica Hispana Nueva Salud La Porte we draw your samples on the spot and explain your results in Spanish, without the jargon.

## What's included?

- Complete blood count (CBC)
- Blood chemistry (glucose, cholesterol, triglycerides)
- Thyroid, liver and kidney tests
- Panels for general checkups or follow-up
- Fast results in most cases

## Why they matter

Blood tests help detect problems before symptoms appear, follow up on a chronic condition or complete a work or school exam.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
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
    longDescription: `Muchos trabajos y escuelas piden una prueba de tuberculosis al día. En Clínica Hispana Nueva Salud La Porte la aplicamos y leemos el resultado, con todo explicado en español.

## ¿Qué incluye?

- Prueba cutánea de tuberculosis (PPD)
- Cita de lectura del resultado (48–72 horas después)
- Documentación del resultado para tu trámite
- Orientación si el resultado requiere seguimiento

## Para qué la piden

Empleos de salud, escuelas, trámites y voluntariado suelen requerir una prueba de TB vigente. Te ayudamos a cumplir el requisito sin complicaciones.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Many jobs and schools require an up-to-date tuberculosis test. At Clínica Hispana Nueva Salud La Porte we administer it and read the result, with everything explained in Spanish.

## What's included?

- Tuberculosis skin test (PPD)
- Result-reading appointment (48–72 hours later)
- Documentation of the result for your paperwork
- Guidance if the result needs follow-up

## Why it's required

Healthcare jobs, schools, paperwork and volunteering often require a current TB test. We help you meet the requirement without hassle.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
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
    longDescription: `Cuidar tu salud sexual es un acto de responsabilidad. En Clínica Hispana Nueva Salud La Porte ofrecemos pruebas de enfermedades de transmisión sexual de forma confidencial y respetuosa, con tratamiento cuando es necesario.

## ¿Qué incluye?

- Evaluación de síntomas y factores de riesgo
- Pruebas de las infecciones más comunes
- Análisis de laboratorio
- Tratamiento y orientación si el resultado es positivo
- Total confidencialidad

## Cuándo hacerte la prueba

Si tuviste contacto de riesgo, tienes síntomas o simplemente quieres estar tranquilo, hacerte la prueba es la mejor decisión. La detección temprana facilita el tratamiento.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Taking care of your sexual health is an act of responsibility. At Clínica Hispana Nueva Salud La Porte we offer confidential, respectful testing for sexually transmitted diseases, with treatment when needed.

## What's included?

- Symptom and risk-factor assessment
- Testing for the most common infections
- Laboratory analysis
- Treatment and guidance if the result is positive
- Complete confidentiality

## When to get tested

If you had a risky encounter, have symptoms or simply want peace of mind, getting tested is the best decision. Early detection makes treatment easier.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
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
      "drug test la porte español",
      "examen de drogas para trabajo la porte",
    ],
    keywordsEn: [
      "drug test la porte",
      "alcohol and drug test la porte",
      "employment drug test la porte",
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
    longDescription: `El ultrasonido es una herramienta segura y sin dolor que nos permite ver el interior de tu cuerpo para diagnosticar con precisión. En Clínica Hispana Nueva Salud La Porte contamos con equipo moderno y personal que te explica todo en español.

## ¿Qué incluye?

- Ultrasonido abdominal (hígado, vesícula, riñones)
- Ultrasonido pélvico
- Ultrasonido de embarazo (control y seguimiento)
- Evaluación de tiroides y tejidos blandos

## Sin radiación y sin dolor

A diferencia de los rayos X, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo. El estudio es rápido y no requiere preparación complicada.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Ultrasound is a safe, painless tool that lets us see inside your body for an accurate diagnosis. At Clínica Hispana Nueva Salud La Porte we have modern equipment and staff who explain everything in Spanish.

## What's included?

- Abdominal ultrasound (liver, gallbladder, kidneys)
- Pelvic ultrasound
- Pregnancy ultrasound (monitoring and follow-up)
- Thyroid and soft-tissue evaluation

## No radiation, no pain

Unlike X-rays, ultrasound uses no radiation, so it's safe even during pregnancy. The study is quick and requires little preparation.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
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
      "Examen físico DOT para conductores comerciales (CDL), con certificado el mismo día.",
    shortDescriptionEn:
      "DOT physical exam for commercial drivers (CDL), with same-day certificate.",
    description:
      "Examen físico DOT en La Porte, TX para licencia CDL, certificado el mismo día y en español. Con precios accesibles.",
    descriptionEn:
      "DOT physical exam in La Porte, TX for CDL license, same-day certificate, in Spanish. With affordable pricing.",
    keywords: [
      "examen dot la porte",
      "examen fisico dot la porte español",
      "examen cdl la porte",
      "dot physical la porte español",
    ],
    keywordsEn: [
      "dot physical la porte",
      "dot exam la porte",
      "cdl physical la porte",
      "dot medical exam la porte",
    ],
    features: [
      "Certificado DOT el mismo día",
      "Para licencia CDL",
      "Proceso rápido",
      "Atención en español",
    ],
    featuresEn: [
      "Same-day DOT certificate",
      "For CDL license",
      "Fast process",
      "Care in Spanish",
    ],
    longDescription: `Si manejas vehículos comerciales necesitas tu examen físico DOT vigente. En Clínica Hispana Nueva Salud La Porte lo realizamos de forma rápida y te entregamos tu certificado el mismo día.

## ¿Qué incluye?

- Revisión de visión y audición
- Toma de presión arterial
- Examen físico requerido por el DOT
- Revisión de historial médico
- Certificado médico DOT el mismo día

## Para conductores comerciales

El examen es obligatorio para obtener o renovar tu licencia CDL. Te explicamos cada paso en español y agilizamos el proceso para que vuelvas pronto a la carretera.

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

The exam is required to obtain or renew your CDL license. We explain every step in Spanish and speed up the process so you get back on the road soon.

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
      "Examen médico de inmigración I-693 en La Porte, TX con médico autorizado por USCIS. Vacunas y formulario sellado.",
    descriptionEn:
      "I-693 immigration medical exam in La Porte, TX with a USCIS-authorized physician. Vaccines and sealed form.",
    keywords: [
      "examen de inmigracion la porte",
      "examen medico i-693 la porte",
      "civil surgeon la porte español",
      "medico autorizado uscis la porte",
    ],
    keywordsEn: [
      "immigration medical exam la porte",
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
    longDescription: `Las vacunas son una de las formas más sencillas de cuidar tu salud. En Clínica Hispana Nueva Salud La Porte aplicamos la vacuna contra la influenza y el toxoide tetánico de forma segura y rápida.

## ¿Qué incluye?

- Vacuna anual contra la influenza (flu)
- Toxoide tetánico (refuerzo del tétanos)
- Aplicación por personal médico
- Orientación sobre cuándo aplicar refuerzos
- Atención en español

## Por qué vacunarte

La vacuna de la flu reduce el riesgo de enfermarte de gravedad en temporada de gripe, y el toxoide tetánico te protege ante cortes y heridas. Pregúntanos cuál te conviene.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Vaccines are one of the simplest ways to protect your health. At Clínica Hispana Nueva Salud La Porte we administer the influenza vaccine and tetanus toxoid safely and quickly.

## What's included?

- Annual influenza (flu) vaccine
- Tetanus toxoid (tetanus booster)
- Administered by medical staff
- Guidance on when boosters are due
- Care in Spanish

## Why get vaccinated

The flu vaccine lowers your risk of getting seriously ill during flu season, and the tetanus toxoid protects you from cuts and wounds. Ask us which one you need.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
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
    longDescription: `Los sueros vitaminados aportan hidratación, vitaminas y minerales directamente a tu organismo. En Clínica Hispana Nueva Salud La Porte los aplicamos con personal médico y en un ambiente cómodo y seguro.

## ¿Qué incluye?

- Evaluación breve para elegir el suero adecuado
- Hidratación intravenosa
- Vitaminas y minerales
- Aplicación y monitoreo por personal médico
- Atención en español

## Cuándo pueden ayudar

Después de un periodo de cansancio, deshidratación o malestar, un suero vitaminado puede ayudarte a recuperar energía. Te orientamos sobre si es adecuado para ti.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Vitamin IV drips deliver hydration, vitamins and minerals directly into your body. At Clínica Hispana Nueva Salud La Porte we administer them with medical staff in a comfortable, safe setting.

## What's included?

- A brief evaluation to choose the right drip
- Intravenous hydration
- Vitamins and minerals
- Administration and monitoring by medical staff
- Care in Spanish

## When they can help

After a period of fatigue, dehydration or feeling unwell, a vitamin drip can help you recover energy. We advise you on whether it's right for you.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
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
