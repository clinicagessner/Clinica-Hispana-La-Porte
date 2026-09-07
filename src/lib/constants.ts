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
    longDescription: `La diabetes, la presión alta y el colesterol elevado no duelen, y por eso muchas personas en La Porte llevan años sin saber que los tienen o sin controlarlos. En Clínica Hispana Nueva Salud La Porte te hacemos el diagnóstico con laboratorio propio, te damos un plan que puedas cumplir y te vemos con regularidad, en español y sin cita.

## Diabetes tipo 2 y prediabetes

Diagnosticamos con glucosa en ayunas y hemoglobina glicosilada (A1C), que muestra el promedio de azúcar de los últimos 3 meses. Una A1C entre 5.7 y 6.4 indica prediabetes, y desde 6.5 diabetes. Si ya tienes el diagnóstico, buscamos mantener la A1C por debajo de 7 en la mayoría de los casos, con revisión cada 3 meses hasta estabilizar y luego cada 6. Ajustamos metformina u otros medicamentos según tus resultados, revisamos los pies y los riñones una vez al año y te ayudamos a leer tu glucómetro.

## Presión arterial alta

Una presión igual o mayor a 130/80 en varias mediciones ya es hipertensión. Te tomamos la presión correctamente, sentado y en reposo, y si hace falta te pedimos que la midas en casa unos días para confirmar. El tratamiento combina medicamentos, menos sal y actividad física, y revisamos la función renal y los electrolitos antes de ajustar dosis. Si además tienes dolor de pecho o palpitaciones, hacemos un [electrocardiograma](/services/electrocardiograma) en la misma visita.

## Colesterol y triglicéridos

El perfil de lípidos mide colesterol total, LDL (el que tapa las arterias), HDL (el protector) y triglicéridos. Las metas dependen de tu riesgo: quien tiene diabetes o ya tuvo un infarto necesita un LDL más bajo que alguien sano. Cuando la dieta no alcanza, iniciamos estatinas y revisamos hígado y lípidos entre 6 y 12 semanas después. Los triglicéridos altos responden mucho a reducir azúcar, refrescos y alcohol.

## Qué incluye el seguimiento

- [Análisis de sangre](/services/examenes-sangre) en la clínica: glucosa, A1C, lípidos, función renal y hepática, con resultados en 24 a 48 horas
- Revisión de [tiroides](/services/tiroides) cuando el peso o el colesterol no se explican de otra forma
- Receta y surtido de medicamentos en nuestra [farmacia](/services/farmacia), con opciones económicas
- Plan de alimentación adaptado a la comida que realmente comes en casa, no una dieta genérica
- Copia de tus resultados para llevar un registro y compararlo en cada visita

## Cuándo venir aunque te sientas bien

Si tienes más de 35 años, sobrepeso, familiares con diabetes o presión alta, o tuviste diabetes en el embarazo, conviene revisarte una vez al año. El [chequeo general completo por $99](/promociones) incluye examen de sangre, A1C, examen de orina y consulta médica, y es la forma más sencilla de saber en qué punto estás.

## Control de enfermedades crónicas en La Porte, sin seguro

Muchos de nuestros pacientes perdieron el seguimiento al cambiar de trabajo o de seguro. Aquí no lo necesitas: la consulta y el laboratorio tienen precio fijo que te informamos antes. Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, abiertos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM, para que puedas venir a tu control sin faltar al trabajo. Atendemos a pacientes de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point.`,
    longDescriptionEn: `Diabetes, high blood pressure and high cholesterol do not hurt, which is why many people in La Porte go years without knowing they have them or without controlling them. At Clínica Hispana Nueva Salud La Porte we make the diagnosis with our own lab, give you a plan you can actually follow and see you regularly, in Spanish or English and with no appointment.

## Type 2 diabetes and prediabetes

We diagnose with fasting glucose and hemoglobin A1C, which shows your average blood sugar over the last 3 months. An A1C between 5.7 and 6.4 indicates prediabetes, and 6.5 or higher means diabetes. If you already have the diagnosis, we aim to keep A1C below 7 in most cases, with checks every 3 months until stable and then every 6. We adjust metformin or other medications based on your results, check your feet and kidneys once a year and help you read your glucose meter.

## High blood pressure

A reading of 130/80 or higher on several occasions is already hypertension. We measure your pressure properly, seated and at rest, and if needed ask you to check it at home for a few days to confirm. Treatment combines medication, less salt and physical activity, and we check kidney function and electrolytes before adjusting doses. If you also have chest pain or palpitations, we do an [electrocardiogram](/en/services/electrocardiograma) during the same visit.

## Cholesterol and triglycerides

The lipid panel measures total cholesterol, LDL (the kind that clogs arteries), HDL (the protective kind) and triglycerides. Targets depend on your risk: someone with diabetes or a previous heart attack needs a lower LDL than a healthy person. When diet is not enough, we start statins and recheck liver and lipids 6 to 12 weeks later. High triglycerides respond strongly to cutting sugar, sodas and alcohol.

## What follow-up includes

- [Blood work](/en/services/examenes-sangre) in the clinic: glucose, A1C, lipids, kidney and liver function, with results in 24 to 48 hours
- [Thyroid](/en/services/tiroides) testing when weight or cholesterol cannot be explained otherwise
- Prescriptions filled at our [pharmacy](/en/services/farmacia), with low-cost options
- A meal plan adapted to the food you actually eat at home, not a generic diet
- A copy of your results so you can keep a record and compare at each visit

## When to come even if you feel fine

If you are over 35, overweight, have relatives with diabetes or high blood pressure, or had diabetes during pregnancy, a yearly check makes sense. The [complete general checkup for $99](/en/promociones) includes a blood panel, A1C, urine test and medical consultation, and is the simplest way to know where you stand.

## Chronic disease care in La Porte, no insurance needed

Many of our patients lost their follow-up when they changed jobs or insurance. Here you do not need it: the visit and lab work have a flat price we tell you up front. We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM, so you can come for your checkup without missing work. We serve patients from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point.`,
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
    longDescription: `En la zona de La Porte las alergias no dan tregua: polen de roble y cedro en invierno y primavera, pasto en verano, ambrosía en otoño, y humedad y moho todo el año. En Clínica Hispana Nueva Salud La Porte identificamos qué te está afectando y te damos un tratamiento que te deje respirar y dormir bien, en español y sin cita.

## Alergias respiratorias

Estornudos en serie, nariz que gotea o se tapa, comezón en ojos y paladar, ojos rojos y llorosos, y esa sensación de estar resfriado durante semanas sin fiebre. La rinitis alérgica también provoca dolor de cabeza, ronquidos y cansancio por dormir mal. Cuando la inflamación baja al pecho aparecen tos seca, silbidos y falta de aire, sobre todo de noche o al hacer ejercicio; en ese caso evaluamos si hay asma y tratamos las dos cosas.

## Alergias en la piel

Ronchas (urticaria) que aparecen y desaparecen, dermatitis con comezón y resequedad en pliegues, reacciones a detergentes, joyería o plantas, y picaduras de insectos que se inflaman más de lo normal. Revisamos la piel, buscamos el desencadenante y te damos tratamiento para cortar la comezón desde el primer día.

## Cómo hacemos el diagnóstico

La mayoría de las alergias se identifican con una buena historia clínica: en qué época del año empeoran, si son peores en casa o en el trabajo, si hay mascotas, alfombras o humedad, y qué has probado. Cuando hace falta, complementamos con [análisis de sangre](/services/examenes-sangre) para medir IgE y detectar los alérgenos más frecuentes. Si un síntoma respiratorio viene con fiebre, primero descartamos [flu, COVID o una infección](/services/enfermedades-respiratorias), porque el tratamiento es distinto.

## Tratamiento

- Antihistamínicos de nueva generación que no dan sueño
- Spray nasal con corticoide para la congestión persistente, el tratamiento más efectivo para la rinitis
- Gotas para los ojos con comezón
- Inhaladores cuando hay tos o silbidos en el pecho
- Cremas y antihistamínicos para la piel; en crisis intensas, una inyección que alivia en minutos
- Todo se puede surtir en nuestra [farmacia](/services/farmacia)

Te explicamos cuáles son de uso diario en temporada y cuáles solo cuando hay síntomas, para que no gastes en medicamentos que no necesitas.

## Cómo reducir las crisis en casa

Cierra ventanas en los días de mucho polen, báñate y cambia de ropa al llegar del trabajo, lava las sábanas con agua caliente cada semana, usa deshumidificador si hay moho y mantén a las mascotas fuera del dormitorio. Con estos cambios más el tratamiento correcto, la mayoría de los pacientes nota la diferencia en una o dos semanas.

## Cuándo es una emergencia

Hinchazón de labios, lengua o garganta, dificultad para respirar o mareo después de comer algo o de una picadura son señales de una reacción grave: llama al 911. Después de un episodio así, ven a verte para que te indiquemos un plan y un autoinyector de epinefrina si lo necesitas.

## Tratamiento de alergias en La Porte

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, abiertos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. No necesitas seguro ni cita; la consulta tiene precio fijo que te decimos antes. Atendemos a familias de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point.`,
    longDescriptionEn: `Allergies never let up in the La Porte area: oak and cedar pollen in winter and spring, grass in summer, ragweed in fall, and humidity and mold all year long. At Clínica Hispana Nueva Salud La Porte we identify what is affecting you and give you treatment that lets you breathe and sleep well, in Spanish or English and with no appointment.

## Respiratory allergies

Sneezing fits, a runny or stuffy nose, itchy eyes and palate, red watery eyes, and that feeling of having a cold for weeks without a fever. Allergic rhinitis also causes headaches, snoring and tiredness from poor sleep. When the inflammation moves down to the chest you get a dry cough, wheezing and shortness of breath, especially at night or with exercise; in that case we evaluate for asthma and treat both.

## Skin allergies

Hives that come and go, itchy dry dermatitis in skin folds, reactions to detergents, jewelry or plants, and insect bites that swell more than normal. We examine your skin, look for the trigger and give you treatment to stop the itching from day one.

## How we make the diagnosis

Most allergies are identified with a good history: what time of year they get worse, whether they are worse at home or at work, whether there are pets, carpets or dampness, and what you have tried. When needed, we add [blood work](/en/services/examenes-sangre) to measure IgE and detect the most common allergens. If a respiratory symptom comes with fever, we first rule out [flu, COVID or an infection](/en/services/enfermedades-respiratorias), because the treatment is different.

## Treatment

- Newer-generation antihistamines that do not cause drowsiness
- Steroid nasal spray for persistent congestion, the most effective treatment for rhinitis
- Eye drops for itchy eyes
- Inhalers when there is cough or wheezing
- Creams and antihistamines for the skin; for severe flare-ups, an injection that brings relief in minutes
- Everything can be filled at our [pharmacy](/en/services/farmacia)

We explain which ones to use daily during the season and which only when symptoms appear, so you do not spend on medication you do not need.

## Reducing flare-ups at home

Keep windows closed on high-pollen days, shower and change clothes when you get home from work, wash sheets in hot water weekly, use a dehumidifier if there is mold and keep pets out of the bedroom. With these changes plus the right treatment, most patients notice the difference within one or two weeks.

## When it is an emergency

Swelling of the lips, tongue or throat, trouble breathing or dizziness after eating something or after a sting are signs of a severe reaction: call 911. After an episode like that, come see us so we can set up a plan and an epinephrine auto-injector if you need one.

## Allergy treatment in La Porte

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. No insurance or appointment needed; the visit has a flat price we tell you beforehand. We serve families from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point.`,
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
    longDescription: `Fiebre, dolor de cuerpo, tos y garganta irritada pueden ser influenza, COVID, un resfriado fuerte o una bronquitis, y cada una se trata distinto. En Clínica Hispana Nueva Salud La Porte te hacemos las pruebas rápidas y te damos el diagnóstico y el tratamiento en la misma visita, sin cita, en español y también los fines de semana.

## Pruebas rápidas de flu y COVID

Con un hisopado nasal obtenemos el resultado de influenza A y B y de COVID-19 en unos 15 minutos. Lo ideal es hacerte la prueba en los primeros 2 a 3 días de síntomas, cuando es más precisa y cuando los antivirales todavía funcionan. Si tu empleador o la escuela de tus hijos pide constancia del resultado, te la entregamos por escrito.

Si el dolor de garganta es lo principal, con fiebre y sin tos, agregamos la [prueba de estreptococo](/services/prueba-strep) para saber si necesitas antibiótico.

## Qué tratamos

- Influenza: antivirales cuando estás dentro de las primeras 48 horas o perteneces a un grupo de riesgo, más control de fiebre y tos
- COVID-19: evaluación de oxigenación, tratamiento de síntomas y, en pacientes de riesgo, orientación sobre antivirales
- Resfriado común y sinusitis
- Bronquitis aguda con tos persistente
- Faringitis y amigdalitis
- Crisis de asma o de [alergia respiratoria](/services/alergias) que se confunden con infección

Los antibióticos no sirven para virus. Solo los indicamos cuando la evaluación muestra una infección bacteriana, como sinusitis prolongada, estreptococo o una neumonía inicial, y los puedes surtir en nuestra [farmacia](/services/farmacia).

## Cuándo no debes esperar

Ven el mismo día si tienes fiebre de más de 39 °C que no baja, dificultad para respirar, dolor en el pecho, labios morados, confusión o si llevas más de 10 días sin mejorar. También si el enfermo es un bebé, una persona mayor de 65 años, una mujer embarazada o alguien con diabetes, asma, EPOC o problemas del corazón, porque en ellos la gripe se complica más rápido. Si detectamos signos de neumonía o de oxigenación baja, te referimos de inmediato a urgencias.

## Recuperación en casa

Líquidos abundantes, reposo, paracetamol o ibuprofeno para la fiebre y el dolor, miel para la tos en mayores de un año y ambiente húmedo por la noche. Quédate en casa hasta llevar 24 horas sin fiebre sin medicamento; en el caso del COVID, usa mascarilla los días siguientes si convives con personas de riesgo. La mejor forma de evitar el próximo episodio es la [vacuna contra la influenza](/services/vacunas) cada otoño.

## Constancias para el trabajo

Si necesitas justificante de la consulta o del reposo, te lo entregamos en la misma visita con las fechas indicadas por el médico.

## Pruebas de flu y COVID en La Porte, 7 días a la semana

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, abiertos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. Cuando la fiebre empieza un sábado por la noche, no tienes que esperar al lunes ni pagar una sala de urgencias. No necesitas seguro; la consulta y las pruebas tienen precio fijo. Atendemos a familias de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point.`,
    longDescriptionEn: `Fever, body aches, cough and a sore throat can be influenza, COVID, a bad cold or bronchitis, and each is treated differently. At Clínica Hispana Nueva Salud La Porte we run the rapid tests and give you the diagnosis and treatment during the same visit, no appointment needed, in Spanish or English and on weekends too.

## Rapid flu and COVID tests

A nasal swab gives us the result for influenza A and B and for COVID-19 in about 15 minutes. The best time to test is within the first 2 to 3 days of symptoms, when the test is most accurate and antivirals still work. If your employer or your children's school needs proof of the result, we give it to you in writing.

If a sore throat is the main symptom, with fever and no cough, we add a [strep test](/en/services/prueba-strep) to find out whether you need an antibiotic.

## What we treat

- Influenza: antivirals when you are within the first 48 hours or in a risk group, plus fever and cough control
- COVID-19: oxygen-level check, symptom treatment and, for at-risk patients, guidance on antivirals
- Common cold and sinusitis
- Acute bronchitis with a lingering cough
- Pharyngitis and tonsillitis
- Asthma or [respiratory allergy](/en/services/alergias) flare-ups that get mistaken for infection

Antibiotics do not work on viruses. We prescribe them only when the evaluation shows a bacterial infection, such as prolonged sinusitis, strep or early pneumonia, and you can fill them at our [pharmacy](/en/services/farmacia).

## When not to wait

Come the same day if you have a fever above 102 °F that will not come down, trouble breathing, chest pain, bluish lips, confusion, or if you have gone more than 10 days without improving. Also if the patient is a baby, an adult over 65, a pregnant woman or someone with diabetes, asthma, COPD or heart disease, because the flu gets complicated faster in them. If we detect signs of pneumonia or low oxygen, we refer you to the emergency room right away.

## Recovering at home

Plenty of fluids, rest, acetaminophen or ibuprofen for fever and pain, honey for cough in children over one year, and a humid room at night. Stay home until you have gone 24 hours fever-free without medication; with COVID, wear a mask for the following days if you live with at-risk people. The best way to avoid the next episode is the [flu vaccine](/en/services/vacunas) every fall.

## Work notes

If you need a note for the visit or for time off, we give it to you during the same visit with the dates indicated by the physician.

## Flu and COVID testing in La Porte, 7 days a week

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. When the fever starts on a Saturday night, you do not have to wait until Monday or pay for an emergency room. No insurance needed; the visit and tests have a flat price. We serve families from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point.`,
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
    longDescription: `Decidir cuándo y cómo formar tu familia es tu derecho. En Clínica Hispana Nueva Salud La Porte te damos información clara y sin juicios para que elijas el método anticonceptivo que mejor se adapta a ti, y te lo iniciamos en la misma visita, sin cita.

## Métodos que manejamos en la clínica

**Pastillas anticonceptivas.** Se toman todos los días a la misma hora. Hay combinadas (estrógeno y progestina) y de solo progestina, que sirven si estás amamantando, fumas o tienes migrañas con aura. Bien tomadas, su efectividad supera el 99 %; con olvidos frecuentes baja a alrededor del 93 %.

**Inyección anticonceptiva.** Una aplicación cada 3 meses (12 a 13 semanas). No tienes que acordarte a diario y no contiene estrógeno. Es común que la regla se vuelva escasa o desaparezca mientras la usas. Al suspenderla, la fertilidad puede tardar varios meses en regresar, algo a considerar si planeas embarazarte pronto.

Si te interesa un método de larga duración como el implante o el DIU, te explicamos cómo funcionan y te orientamos sobre dónde colocarlo. Si ya tienes un implante que caducó, hacemos la [extracción del implante subdérmico](/services/extraccion-implantes) aquí mismo.

## Cómo es la consulta

- Revisamos tu historial: presión arterial, migrañas, tabaquismo, coágulos previos, lactancia y medicamentos, porque algunos métodos no se recomiendan en ciertos casos
- Hacemos una [prueba de embarazo](/services/prueba-embarazo) antes de iniciar cualquier método
- Comparamos opciones según tu rutina, tu salud y tus planes
- Iniciamos el método ese mismo día cuando es seguro hacerlo
- Te explicamos los efectos que puedes notar las primeras semanas y cuándo consultar

Puedes venir sola o acompañada. Las menores de edad deben venir con su madre, padre o tutor.

## Seguimiento y cambio de método

Con las pastillas, revisamos a los 3 meses cómo te sientes y tu presión arterial. Con la inyección, te damos la fecha exacta de la siguiente dosis; si te pasas de las 13 semanas, usa condón y ven lo antes posible, quizá necesites una prueba de embarazo antes de aplicarla. Si un método no te sienta bien, cambiarlo es normal: no tienes que aguantar sangrados irregulares, dolores de cabeza o cambios de ánimo que te molesten.

## Lo que los anticonceptivos no hacen

Ni las pastillas ni la inyección protegen contra las infecciones de transmisión sexual. Si tienes una pareja nueva o varias parejas, combínalos con condón y hazte [pruebas de ETS](/services/enfermedades-transmision-sexual) periódicamente. Y si tuviste una relación sin protección en los últimos días, pregúntanos por la anticoncepción de emergencia lo antes posible.

## Anticonceptivos en La Porte, sin seguro y en español

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, y abrimos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. No necesitas seguro médico ni receta previa: la consulta y el método tienen precio fijo que te confirmamos por teléfono. Atendemos a mujeres de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point.`,
    longDescriptionEn: `Deciding when and how to build your family is your right. At Clínica Hispana Nueva Salud La Porte we give you clear, judgment-free information so you can choose the birth control method that fits you best, and we start it during the same visit, no appointment needed.

## Methods we offer at the clinic

**Birth control pills.** Taken every day at the same time. There are combined pills (estrogen and progestin) and progestin-only pills, which work if you are breastfeeding, smoke or have migraines with aura. Taken correctly, their effectiveness is over 99 %; with frequent missed pills it drops to around 93 %.

**Birth control shot.** One injection every 3 months (12 to 13 weeks). Nothing to remember daily and no estrogen. It is common for periods to become light or stop while you use it. After stopping, fertility can take several months to return, something to consider if you plan to get pregnant soon.

If you are interested in a long-acting method such as the implant or IUD, we explain how they work and guide you on where to get one placed. If you already have an expired implant, we do [subdermal implant removal](/en/services/extraccion-implantes) right here.

## What the visit is like

- We review your history: blood pressure, migraines, smoking, previous blood clots, breastfeeding and medications, because some methods are not recommended in certain cases
- We run a [pregnancy test](/en/services/prueba-embarazo) before starting any method
- We compare options based on your routine, your health and your plans
- We start the method that same day when it is safe to do so
- We explain the effects you may notice in the first weeks and when to check in

You can come alone or with someone. Minors must come with a parent or legal guardian.

## Follow-up and switching methods

With the pill, we check how you feel and your blood pressure at 3 months. With the shot, we give you the exact date of your next dose; if you go past 13 weeks, use condoms and come as soon as possible, since you may need a pregnancy test before the injection. If a method does not agree with you, switching is normal: you do not have to put up with irregular bleeding, headaches or mood changes that bother you.

## What birth control does not do

Neither the pill nor the shot protects against sexually transmitted infections. If you have a new partner or several partners, combine them with condoms and get [STD testing](/en/services/enfermedades-transmision-sexual) regularly. And if you had unprotected sex in the last few days, ask us about emergency contraception as soon as possible.

## Birth control in La Porte, no insurance needed, in Spanish

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. No health insurance or prior prescription needed: the visit and the method have a flat price we confirm by phone. We care for women from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point.`,
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
    longDescription: `El implante anticonceptivo del brazo dura 3 años (en algunos casos hasta 5, según indicación médica) y después hay que retirarlo, ya sea para colocar uno nuevo, cambiar de método o buscar un embarazo. En Clínica Hispana Nueva Salud La Porte lo extraemos con anestesia local en un procedimiento de unos 15 minutos, sin cita, en español y a un precio fijo sin seguro.

## Cuándo retirarlo

- Cumplió su tiempo de uso: después de la fecha de caducidad ya no es confiable como anticonceptivo
- Quieres quedar embarazada: la fertilidad regresa rápido, en la mayoría de los casos el primer mes
- Efectos que no toleras: sangrado irregular o continuo, dolores de cabeza, cambios de ánimo, acné o aumento de peso
- Prefieres cambiar a [pastillas o inyección](/services/anticonceptivos), o a otro método
- Tu médico te lo indicó por alguna condición de salud

## Cómo es el procedimiento

1. Localizamos el implante palpando el brazo y marcamos el extremo más cercano a la piel
2. Limpiamos la zona y aplicamos anestesia local con una aguja fina; es el único piquete que sientes
3. Hacemos una incisión de 2 a 3 milímetros sobre el extremo del implante
4. Lo extraemos con una pinza y te lo mostramos para que confirmes que salió completo
5. Cerramos con cintas adhesivas, sin puntos, y colocamos un vendaje compresivo

Todo el proceso toma entre 10 y 20 minutos. Si deseas un nuevo implante, te orientamos sobre dónde colocarlo; si prefieres pastillas o inyección, las iniciamos en la misma visita para que no quedes sin protección.

## Si el implante no se palpa

En pocos casos el implante queda más profundo y no se siente bajo la piel. Extraerlo a ciegas puede lesionar nervios o vasos, así que en esa situación no lo intentamos: te hacemos un [ultrasonido](/services/ultrasonido) para ubicarlo y, si está muy profundo, te referimos con un especialista. Trae la tarjeta o el registro de colocación si lo tienes: nos dice el tipo de implante y dónde se puso.

## Cuidados después

Mantén el vendaje compresivo 24 horas para evitar un moretón grande, y las cintas adhesivas de 3 a 5 días hasta que se caigan solas. Puedes bañarte al día siguiente sin remojar la zona. Es normal tener un moretón, algo de dolor y una pequeña cicatriz que se aclara con los meses. Ven o llámanos si hay enrojecimiento que se extiende, pus, fiebre o dolor que aumenta después de 48 horas.

Recuerda que la protección anticonceptiva termina el mismo día de la extracción. Si no quieres un embarazo, usa condón desde ese momento o inicia otro método.

## Extracción de implantes en La Porte, sin seguro

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, abiertos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. No necesitas cita ni seguro médico; el procedimiento tiene precio fijo que te confirmamos por teléfono. Atendemos a mujeres de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point.`,
    longDescriptionEn: `The contraceptive arm implant lasts 3 years (in some cases up to 5, per medical guidance) and then has to be removed, whether to place a new one, switch methods or try for a pregnancy. At Clínica Hispana Nueva Salud La Porte we remove it under local anesthesia in a procedure of about 15 minutes, with no appointment, in Spanish or English and at a flat self-pay price.

## When to have it removed

- It reached its expiration: after that date it is no longer reliable as birth control
- You want to get pregnant: fertility returns quickly, in most cases within the first month
- Side effects you cannot tolerate: irregular or continuous bleeding, headaches, mood changes, acne or weight gain
- You prefer to switch to the [pill or the shot](/en/services/anticonceptivos), or to another method
- Your doctor recommended it because of a health condition

## What the procedure is like

1. We locate the implant by feeling your arm and mark the end closest to the skin
2. We clean the area and apply local anesthesia with a fine needle; that is the only poke you feel
3. We make a 2 to 3 millimeter incision over the tip of the implant
4. We remove it with forceps and show it to you so you can confirm it came out whole
5. We close with adhesive strips, no stitches, and apply a pressure bandage

The whole process takes 10 to 20 minutes. If you want a new implant, we guide you on where to get it placed; if you prefer the pill or the shot, we start them during the same visit so you are not left unprotected.

## If the implant cannot be felt

In a few cases the implant sits deeper and cannot be felt under the skin. Removing it blindly can injure nerves or blood vessels, so in that situation we do not attempt it: we do an [ultrasound](/en/services/ultrasonido) to locate it and, if it is very deep, refer you to a specialist. Bring the card or placement record if you have it: it tells us the type of implant and where it was placed.

## Aftercare

Keep the pressure bandage on for 24 hours to avoid a large bruise, and the adhesive strips for 3 to 5 days until they fall off on their own. You can shower the next day without soaking the area. Some bruising, mild soreness and a small scar that fades over months are normal. Come in or call us if there is spreading redness, pus, fever or pain that gets worse after 48 hours.

Remember that contraceptive protection ends the same day the implant is removed. If you do not want a pregnancy, use condoms from that moment or start another method.

## Implant removal in La Porte, no insurance needed

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. No appointment or health insurance needed; the procedure has a flat price we confirm by phone. We care for women from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point.`,
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
    longDescription: `Diarrea que no se quita, dolor de estómago, gases, sangre en las evacuaciones o un niño que no sube de peso: muchas veces la respuesta está en un examen de heces. En Clínica Hispana Nueva Salud La Porte lo procesamos en nuestro laboratorio, te explicamos el resultado en español y te damos el tratamiento en la misma clínica.

## Tipos de examen que realizamos

- **Coproparasitoscópico:** busca parásitos y sus huevos, como giardia, amebas, áscaris y oxiuros; se recomienda en serie de tres muestras de días distintos para mayor precisión
- **Coprocultivo:** identifica bacterias que causan diarrea infecciosa, como salmonela, shigella, campylobacter y E. coli
- **Sangre oculta en heces:** detecta sangrado que no se ve a simple vista, útil ante anemia sin causa clara o como tamizaje a partir de los 45 años
- **Examen general de heces:** consistencia, moco, restos de alimento sin digerir y grasa, que orientan sobre mala absorción
- **Antígeno de Helicobacter pylori en heces:** la bacteria relacionada con gastritis y úlceras, sin necesidad de endoscopia

## Cómo recoger la muestra

Te entregamos un frasco estéril con las instrucciones. Evacúa sobre papel limpio o un recipiente seco, sin que la muestra toque el agua del inodoro ni la orina, y toma con la cucharilla del frasco una porción del tamaño de una nuez, incluyendo las partes con moco o sangre si las hay. Tráela el mismo día, idealmente en menos de 2 horas; si no puedes, guárdala en el refrigerador, nunca en el congelador. Para el estudio de parásitos en serie, recoge una muestra por día durante tres días.

Avísanos si tomaste antibióticos, antidiarreicos, laxantes o antiácidos en las últimas dos semanas, porque pueden alterar el resultado.

## Cuándo pedirlo

- Diarrea de más de 3 días, o de cualquier duración si hay fiebre o sangre
- Dolor abdominal recurrente, inflamación o gases excesivos
- Comezón anal por la noche, típica de oxiuros en niños
- Pérdida de peso o anemia sin explicación
- Después de un viaje o de comer algo en mal estado
- Chequeo de parásitos para la familia, sobre todo si hay niños pequeños o mascotas

## Resultados y tratamiento

El examen general y el de parásitos suelen estar listos en 24 a 48 horas; el coprocultivo tarda 2 a 3 días. El médico revisa contigo el resultado y, si hay parásitos o bacterias, te da el tratamiento para ti y, cuando aplica, para toda la familia, disponible en nuestra [farmacia](/services/farmacia). Si la causa parece intolerancia, colon irritable o algo que requiere estudios más amplios, completamos con [análisis de sangre](/services/examenes-sangre) o un [ultrasonido abdominal](/services/ultrasonido) y te referimos si hace falta.

Si la diarrea viene con vómito y no puedes retener líquidos, también podemos hidratarte con [suero intravenoso](/services/sueros-vitaminados) en la clínica.

## Examen de heces en La Porte, sin cita

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, abiertos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. Puedes pasar por el frasco un día y traer la muestra al siguiente, sin cita. No necesitas seguro médico; el precio es fijo y te lo confirmamos por teléfono. Atendemos a familias de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point.`,
    longDescriptionEn: `Diarrhea that will not go away, stomach pain, gas, blood in your stool or a child who is not gaining weight: very often the answer is in a stool test. At Clínica Hispana Nueva Salud La Porte we process it in our lab, explain the result in Spanish or English and give you treatment in the same clinic.

## Types of stool tests we perform

- **Ova and parasite exam:** looks for parasites and their eggs, such as giardia, amoebas, roundworms and pinworms; a series of three samples from different days is recommended for better accuracy
- **Stool culture:** identifies bacteria that cause infectious diarrhea, such as salmonella, shigella, campylobacter and E. coli
- **Fecal occult blood:** detects bleeding not visible to the naked eye, useful with unexplained anemia or as screening from age 45
- **General stool exam:** consistency, mucus, undigested food and fat, which point to malabsorption
- **Helicobacter pylori stool antigen:** the bacterium linked to gastritis and ulcers, without needing an endoscopy

## How to collect the sample

We give you a sterile container with instructions. Have the bowel movement onto clean paper or a dry container, without the sample touching toilet water or urine, and use the container's scoop to take a walnut-sized portion, including any parts with mucus or blood. Bring it the same day, ideally within 2 hours; if you cannot, keep it in the refrigerator, never the freezer. For the parasite series, collect one sample per day for three days.

Let us know if you took antibiotics, anti-diarrheals, laxatives or antacids in the last two weeks, because they can affect the result.

## When to request it

- Diarrhea lasting more than 3 days, or of any length if there is fever or blood
- Recurring abdominal pain, bloating or excessive gas
- Anal itching at night, typical of pinworms in children
- Unexplained weight loss or anemia
- After a trip or after eating something spoiled
- A parasite check for the family, especially with small children or pets at home

## Results and treatment

The general exam and parasite exam are usually ready in 24 to 48 hours; the stool culture takes 2 to 3 days. The physician reviews the result with you and, if there are parasites or bacteria, gives you treatment for yourself and, when appropriate, for the whole family, available at our [pharmacy](/en/services/farmacia). If the cause looks like an intolerance, irritable bowel or something that needs broader studies, we complete the workup with [blood work](/en/services/examenes-sangre) or an [abdominal ultrasound](/en/services/ultrasonido) and refer you if needed.

If the diarrhea comes with vomiting and you cannot keep fluids down, we can also rehydrate you with an [IV drip](/en/services/sueros-vitaminados) at the clinic.

## Stool testing in La Porte, no appointment needed

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can pick up the container one day and bring the sample the next, with no appointment. No health insurance needed; the price is flat and we confirm it by phone. We serve families from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point.`,
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
    longDescription: `Un dolor de garganta que aparece de golpe, con fiebre y sin tos, puede ser estreptococo, y esa sí necesita antibiótico. En Clínica Hispana Nueva Salud La Porte hacemos la prueba rápida en la misma visita, te damos el resultado en 10 minutos y, si sale positiva, sales con el tratamiento. Sin cita, en español y también los fines de semana.

## Cómo saber si puede ser estreptococo

La faringitis por estreptococo del grupo A es más frecuente en niños de 5 a 15 años, pero también afecta a adultos, sobre todo a padres y maestros. Las señales que la distinguen de una gripe común son:

- Dolor de garganta intenso que empezó en pocas horas
- Fiebre de 38 °C o más
- Amígdalas rojas e inflamadas, a veces con placas blancas
- Puntitos rojos en el paladar
- Ganglios del cuello inflamados y dolorosos
- Ausencia de tos, mocos o ronquera, que son más típicos de los virus
- En niños, dolor de estómago, náusea o un sarpullido áspero en el cuerpo (escarlatina)

Si tu síntoma principal es tos, congestión o dolor de cuerpo, lo más probable es un virus, y entonces conviene la [prueba de flu y COVID](/services/enfermedades-respiratorias).

## Cómo es la prueba

Pasamos un hisopo por el fondo de la garganta y las amígdalas durante unos segundos. Es incómodo pero no duele, y en niños lo hacemos rápido y con calma. El resultado de la prueba rápida está en unos 10 minutos. Si sale negativa pero los síntomas son muy sugestivos, sobre todo en niños, podemos enviar un cultivo de garganta que confirma en 24 a 48 horas, porque la prueba rápida a veces no detecta casos leves.

## Tratamiento

Si la prueba es positiva, el médico indica un antibiótico, generalmente penicilina o amoxicilina durante 10 días, que puedes surtir en nuestra [farmacia](/services/farmacia). El dolor y la fiebre mejoran en 24 a 48 horas, pero es importante terminar todo el tratamiento para evitar complicaciones como la fiebre reumática o problemas en los riñones. Para el dolor recomendamos paracetamol o ibuprofeno, líquidos frescos, paletas de hielo y gárgaras con agua tibia y sal.

Después de 24 horas de antibiótico ya no contagias y puedes volver a la escuela o al trabajo si te sientes bien. Cambia el cepillo de dientes al terminar el tratamiento.

## Si se repite mucho

Algunas personas tienen varios episodios al año. En esos casos revisamos si hay portadores en casa, evaluamos la técnica de tratamiento y, si son más de 5 o 6 episodios anuales, te referimos al otorrinolaringólogo para valorar las amígdalas.

## Constancia para la escuela o el trabajo

Te entregamos el resultado por escrito y un justificante con los días de reposo indicados.

## Prueba de estreptococo en La Porte, sin cita

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, abiertos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. Cuando el niño amanece con la garganta cerrada un domingo, aquí lo atendemos sin pasar por urgencias. No necesitas seguro médico; la consulta y la prueba tienen precio fijo. Atendemos a familias de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point.`,
    longDescriptionEn: `A sore throat that comes on suddenly, with fever and no cough, may be strep, and that one does need an antibiotic. At Clínica Hispana Nueva Salud La Porte we run the rapid test during the same visit, give you the result in 10 minutes and, if it is positive, you leave with treatment. No appointment, in Spanish or English, and on weekends too.

## How to tell if it might be strep

Group A strep pharyngitis is most common in children ages 5 to 15, but it also affects adults, especially parents and teachers. The signs that set it apart from a common cold are:

- Intense sore throat that started within a few hours
- Fever of 100.4 °F or higher
- Red, swollen tonsils, sometimes with white patches
- Tiny red spots on the roof of the mouth
- Swollen, tender neck glands
- No cough, runny nose or hoarseness, which are more typical of viruses
- In children, stomach pain, nausea or a rough rash on the body (scarlet fever)

If your main symptom is cough, congestion or body aches, a virus is more likely, and then the [flu and COVID test](/en/services/enfermedades-respiratorias) makes more sense.

## What the test is like

We run a swab across the back of the throat and tonsils for a few seconds. It is uncomfortable but not painful, and with children we do it quickly and calmly. The rapid test result is ready in about 10 minutes. If it is negative but symptoms strongly suggest strep, especially in children, we can send a throat culture that confirms in 24 to 48 hours, because the rapid test sometimes misses mild cases.

## Treatment

If the test is positive, the physician prescribes an antibiotic, usually penicillin or amoxicillin for 10 days, which you can fill at our [pharmacy](/en/services/farmacia). Pain and fever improve in 24 to 48 hours, but it is important to finish the full course to avoid complications such as rheumatic fever or kidney problems. For pain we recommend acetaminophen or ibuprofen, cool liquids, ice pops and warm salt-water gargles.

After 24 hours on the antibiotic you are no longer contagious and can return to school or work if you feel well. Replace your toothbrush when you finish treatment.

## If it keeps coming back

Some people have several episodes a year. In those cases we check for carriers at home, review how treatment was taken and, if there are more than 5 or 6 episodes a year, refer you to an ENT specialist to evaluate the tonsils.

## Note for school or work

We give you the written result and a note with the recommended days off.

## Strep testing in La Porte, no appointment needed

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. When your child wakes up on a Sunday with a throat that feels closed, we see them here without a trip to the ER. No health insurance needed; the visit and the test have a flat price. We serve families from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point.`,
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
    longDescription: `El electrocardiograma (EKG o ECG) registra la actividad eléctrica del corazón en unos 5 minutos, sin dolor y sin radiación. En Clínica Hispana Nueva Salud La Porte lo hacemos sin cita y el médico lo interpreta en el momento, así que sales de la clínica sabiendo cómo está tu ritmo cardiaco, en español.

## Para qué sirve

- Detectar arritmias: latidos irregulares, muy rápidos o muy lentos
- Identificar señales de un infarto previo o de falta de riego al corazón
- Ver si la presión alta ya está engrosando el músculo cardiaco
- Revisar alteraciones por potasio o calcio fuera de rango
- Evaluar el corazón antes de una cirugía o de empezar ciertos medicamentos
- Completar exámenes médicos de trabajo, deportivos o de [inmigración](/services/examenes-inmigracion) cuando lo piden

## Cuándo conviene hacerlo

Ven a hacerte un EKG si sientes palpitaciones, el corazón que se salta latidos, mareos o desmayos, falta de aire al hacer esfuerzo, o dolor u opresión en el pecho que va y viene. También si tienes [presión alta, diabetes o colesterol elevado](/services/condiciones-cronicas), si fumas, si en tu familia hubo infartos antes de los 55 años o si tienes más de 40 y nunca te lo has hecho. Para los trabajadores de las plantas y refinerías de la zona, el EKG suele formar parte del examen médico periódico.

**Importante:** si en este momento tienes dolor fuerte en el pecho, sudor frío, dolor que se va al brazo o la mandíbula, o mucha dificultad para respirar, no vengas a la clínica: llama al 911. Esos síntomas se atienden en un hospital.

## Cómo es el estudio

Te recuestas en la camilla y colocamos 10 electrodos adhesivos en el pecho, los brazos y las piernas. El equipo registra la señal durante unos segundos mientras respiras normal y te quedas quieto. No pasa electricidad hacia tu cuerpo; solo la lee. Ven con ropa de dos piezas que sea fácil de subir o quitar, evita cremas o aceites en el pecho ese día y, si tienes mucho vello, quizá sea necesario rasurar pequeñas zonas para que los electrodos peguen bien. Antes del estudio no tomes café ni fumes durante una hora.

## Resultados y siguientes pasos

El médico lee el trazo en la misma visita y te explica qué significa. Si el EKG es normal pero los síntomas continúan, o si muestra una alteración, complementamos con [análisis de sangre](/services/examenes-sangre), como electrolitos, tiroides o perfil de lípidos, y te referimos con un cardiólogo con el trazo impreso para que no tengas que repetirlo. Un EKG normal no descarta todo; por eso siempre lo valoramos junto con tus síntomas y tu historial.

## Electrocardiograma sin seguro en La Porte

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, abiertos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. No necesitas orden médica ni seguro: el EKG con interpretación tiene precio fijo que te confirmamos por teléfono. Atendemos a pacientes de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point.`,
    longDescriptionEn: `An electrocardiogram (EKG or ECG) records the heart's electrical activity in about 5 minutes, with no pain and no radiation. At Clínica Hispana Nueva Salud La Porte we do it with no appointment and the physician interprets it on the spot, so you leave the clinic knowing how your heart rhythm is, in Spanish or English.

## What it is for

- Detecting arrhythmias: irregular, very fast or very slow heartbeats
- Identifying signs of a previous heart attack or poor blood flow to the heart
- Seeing whether high blood pressure is already thickening the heart muscle
- Checking for changes caused by potassium or calcium out of range
- Evaluating the heart before surgery or before starting certain medications
- Completing work, sports or [immigration](/en/services/examenes-inmigracion) medical exams when required

## When it makes sense

Come for an EKG if you feel palpitations, skipped beats, dizziness or fainting, shortness of breath with exertion, or chest pain or pressure that comes and goes. Also if you have [high blood pressure, diabetes or high cholesterol](/en/services/condiciones-cronicas), if you smoke, if there were heart attacks in your family before age 55, or if you are over 40 and have never had one. For workers at the area's plants and refineries, an EKG is often part of the periodic medical exam.

**Important:** if right now you have severe chest pain, cold sweat, pain spreading to your arm or jaw, or serious trouble breathing, do not come to the clinic: call 911. Those symptoms are handled in a hospital.

## What the test is like

You lie down on the exam table and we place 10 adhesive electrodes on your chest, arms and legs. The machine records the signal for a few seconds while you breathe normally and stay still. No electricity goes into your body; it only reads it. Wear two-piece clothing that is easy to lift or remove, avoid creams or oils on your chest that day and, if you have a lot of chest hair, small areas may need to be shaved so the electrodes stick well. Do not drink coffee or smoke for an hour before the test.

## Results and next steps

The physician reads the tracing during the same visit and explains what it means. If the EKG is normal but symptoms continue, or if it shows an abnormality, we complete the workup with [blood work](/en/services/examenes-sangre), such as electrolytes, thyroid or a lipid panel, and refer you to a cardiologist with the printed tracing so you do not have to repeat it. A normal EKG does not rule out everything; that is why we always assess it together with your symptoms and history.

## EKG without insurance in La Porte

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. No doctor's order or insurance needed: the EKG with interpretation has a flat price we confirm by phone. We serve patients from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point.`,
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
    longDescription: `Un corte en la cocina, una caída de la bicicleta, una herida con una herramienta en el trabajo: si los bordes están abiertos y no dejan de sangrar, necesita puntos, y cuanto antes mejor. En Clínica Hispana Nueva Salud La Porte suturamos heridas sin cita, con anestesia local y en español, los 7 días de la semana, a una fracción de lo que cuesta una sala de urgencias.

## Cuándo una herida necesita puntos

- Los bordes se separan y se ve la grasa o el tejido de abajo
- Sigue sangrando después de 10 minutos de presión firme
- Mide más de 1 o 2 centímetros, sobre todo en cara, manos o articulaciones
- Está en una zona que se mueve mucho (rodilla, codo, dedos) y se abriría al moverse
- Es un corte limpio con cuchillo, vidrio o lámina de metal

Las heridas deben cerrarse dentro de las primeras 6 a 8 horas; en la cara se puede extender hasta 24 horas. Pasado ese tiempo el riesgo de infección aumenta y quizá no se puedan suturar. Por eso conviene venir el mismo día.

## Cómo es el procedimiento

1. Revisamos la herida, cuánto sangra y si hay daño en tendones o nervios, y preguntamos cómo pasó y cuándo fue tu última vacuna del tétanos
2. Aplicamos anestesia local: es el único piquete que sientes
3. Lavamos la herida a fondo y retiramos tierra, vidrio o restos
4. Cerramos con puntos; en niños o heridas pequeñas de la cara a veces usamos pegamento quirúrgico o cintas adhesivas, sin aguja
5. Cubrimos con un vendaje y te explicamos los cuidados

Todo toma entre 20 y 40 minutos según el tamaño. Si tu última dosis de tétanos fue hace más de 5 años y la herida está sucia, o hace más de 10 años en cualquier caso, te aplicamos el [refuerzo del tétanos](/services/vacunas) en la misma visita. Si la herida fue por mordedura o está muy contaminada, además indicamos antibiótico, disponible en nuestra [farmacia](/services/farmacia).

## Cuidados en casa

Mantén el vendaje seco y limpio las primeras 24 a 48 horas; después puedes ducharte dejando que el agua corra sobre la herida, sin remojarla ni tallarla. Seca con toques suaves y cambia el vendaje una vez al día. No apliques alcohol, agua oxigenada ni remedios caseros. Evita la piscina, la bahía y los baños de tina hasta retirar los puntos. Ven o llámanos si aparece enrojecimiento que se extiende, calor, pus, fiebre o dolor que aumenta en lugar de mejorar.

## Retiro de puntos

Regresas a que te los quitemos según la zona: cara de 5 a 7 días, cuero cabelludo y tronco de 7 a 10 días, brazos y piernas de 10 a 14 días, y articulaciones hasta 14 días. El retiro dura pocos minutos y está incluido. Después usa protector solar sobre la cicatriz durante varios meses para que se aclare mejor.

## Heridas de trabajo

Si te lastimaste en el trabajo, dínoslo al llegar: documentamos la lesión y te entregamos la constancia médica para tu empleador. Cuando regreses a tus actividades, protege la zona con un vendaje adecuado.

## Suturas en La Porte, sin cita y sin seguro

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, abiertos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. No necesitas seguro médico; el procedimiento tiene precio fijo que te decimos antes de empezar. Atendemos a familias y trabajadores de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point. Si la herida es muy profunda, no deja de sangrar a chorro, hay un hueso expuesto o la persona se desmayó, llama al 911.`,
    longDescriptionEn: `A kitchen cut, a fall off a bike, a wound from a tool at work: if the edges are open and it will not stop bleeding, it needs stitches, and the sooner the better. At Clínica Hispana Nueva Salud La Porte we suture wounds with no appointment, under local anesthesia and in Spanish or English, 7 days a week, at a fraction of what an emergency room costs.

## When a wound needs stitches

- The edges pull apart and you can see fat or tissue underneath
- It keeps bleeding after 10 minutes of firm pressure
- It is longer than half an inch, especially on the face, hands or joints
- It is in an area that moves a lot (knee, elbow, fingers) and would open with movement
- It is a clean cut from a knife, glass or sheet metal

Wounds should be closed within the first 6 to 8 hours; on the face that can stretch to 24 hours. After that, the risk of infection rises and stitching may no longer be possible. That is why coming in the same day matters.

## What the procedure is like

1. We examine the wound, how much it bleeds and whether tendons or nerves are damaged, and ask how it happened and when your last tetanus shot was
2. We apply local anesthesia: that is the only poke you feel
3. We wash the wound thoroughly and remove dirt, glass or debris
4. We close it with stitches; in children or small facial wounds we sometimes use skin glue or adhesive strips, no needle
5. We cover it with a dressing and explain the aftercare

The whole thing takes 20 to 40 minutes depending on size. If your last tetanus dose was more than 5 years ago and the wound is dirty, or more than 10 years ago in any case, we give you the [tetanus booster](/en/services/vacunas) during the same visit. If the wound was from a bite or is heavily contaminated, we also prescribe an antibiotic, available at our [pharmacy](/en/services/farmacia).

## Care at home

Keep the dressing dry and clean for the first 24 to 48 hours; after that you can shower letting water run over the wound, without soaking or scrubbing it. Pat dry and change the dressing once a day. Do not apply alcohol, hydrogen peroxide or home remedies. Stay out of pools, the bay and bathtubs until the stitches are out. Come in or call us if you notice spreading redness, warmth, pus, fever or pain that gets worse instead of better.

## Stitch removal

You come back to have them removed depending on the area: face 5 to 7 days, scalp and trunk 7 to 10 days, arms and legs 10 to 14 days, and joints up to 14 days. Removal takes a few minutes and is included. Afterward, use sunscreen on the scar for several months so it fades better.

## Work injuries

If you were hurt at work, tell us when you arrive: we document the injury and give you a medical note for your employer. When you return to your duties, protect the area with a proper dressing.

## Stitches in La Porte, no appointment and no insurance

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. No health insurance needed; the procedure has a flat price we tell you before starting. We serve families and workers from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point. If the wound is very deep, is spurting blood, bone is exposed or the person fainted, call 911.`,
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
    longDescription: `Hay heridas que no se resuelven con una curita: la incisión después de una cirugía, una quemadura con aceite o vapor, una llaga en el pie de una persona con diabetes o un raspón grande que se infectó. En Clínica Hispana Nueva Salud La Porte hacemos curaciones profesionales y damos seguimiento hasta que la herida cierre, sin cita y en español.

## Heridas que atendemos

- Heridas postoperatorias: revisión de la incisión, limpieza, cambio de apósito y retiro de puntos o grapas cuando tu cirujano lo indica
- Quemaduras de primer y segundo grado superficiales por aceite, agua caliente, vapor, plancha o sol; las de la cocina y las de las plantas industriales son las más comunes que vemos
- Úlceras del pie diabético y heridas que llevan semanas sin cerrar
- Raspones y heridas por caídas, con o sin infección
- Heridas infectadas con enrojecimiento, pus o mal olor
- Ampollas, heridas por fricción y lesiones en trabajadores que usan botas o equipo pesado

Si el corte está abierto y es reciente, lo que necesitas son [suturas](/services/suturas-heridas); si el problema es un bulto con pus, revisa el [drenaje de abscesos](/services/drenaje-abscesos).

## Qué hacemos en cada curación

Retiramos el vendaje anterior, medimos y fotografiamos la herida para comparar su avance, la lavamos con solución estéril, retiramos el tejido muerto si lo hay (desbridamiento) con anestesia local cuando hace falta, aplicamos el apósito adecuado y vendamos. Al final te entregamos un plan por escrito: cada cuántos días volver, qué hacer en casa y qué señales vigilar. Si la herida muestra infección, el médico indica antibiótico que puedes surtir en nuestra [farmacia](/services/farmacia), y revisamos tu [vacuna del tétanos](/services/vacunas).

## Apósitos según la herida

No todas las heridas se curan igual. Las secas necesitan humedad controlada para que el tejido nuevo crezca; las que supuran necesitan apósitos que absorban; las quemaduras se benefician de apósitos con plata o hidrogel para evitar infección y dolor al cambiarlos. Elegimos el material según cada etapa, y te decimos qué comprar si prefieres hacer algunos cambios en casa entre visitas.

## Pie diabético: no esperes

Si tienes diabetes y notas una llaga, una ampolla o un cambio de color en el pie, aunque no duela, ven ese mismo día. La falta de sensibilidad hace que las heridas avancen sin que te des cuenta, y una curación temprana evita hospitalizaciones. Aprovechamos la visita para revisar tu [glucosa y A1C](/services/condiciones-cronicas), porque una herida no cierra bien con el azúcar descontrolada.

## Cuándo volver antes de la fecha

Fiebre, enrojecimiento que se extiende más allá del borde, líneas rojas que suben por la piel, pus abundante, mal olor, dolor que aumenta o un vendaje que se empapa en pocas horas. Ante cualquiera de estas señales, ven sin esperar tu siguiente cita.

## Curación de heridas en La Porte, sin seguro

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, abiertos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM, lo que facilita mantener el ritmo de curaciones sin faltar al trabajo. No necesitas seguro; cada curación tiene precio fijo y te lo decimos antes. Atendemos a pacientes de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point.`,
    longDescriptionEn: `Some wounds cannot be handled with a bandage: the incision after surgery, a burn from oil or steam, a sore on the foot of someone with diabetes, or a large scrape that got infected. At Clínica Hispana Nueva Salud La Porte we provide professional wound care and follow up until the wound closes, with no appointment and in Spanish or English.

## Wounds we treat

- Post-surgical wounds: incision check, cleaning, dressing change and removal of stitches or staples when your surgeon indicates it
- First-degree and superficial second-degree burns from oil, hot water, steam, an iron or the sun; kitchen and industrial-plant burns are the most common ones we see
- Diabetic foot ulcers and wounds that have gone weeks without closing
- Scrapes and wounds from falls, with or without infection
- Infected wounds with redness, pus or a bad smell
- Blisters, friction wounds and injuries in workers who wear boots or heavy gear

If the cut is open and recent, what you need is [stitches](/en/services/suturas-heridas); if the problem is a lump filled with pus, see [abscess drainage](/en/services/drenaje-abscesos).

## What we do at each visit

We remove the old dressing, measure and photograph the wound to track progress, wash it with sterile solution, remove dead tissue if present (debridement) under local anesthesia when needed, apply the right dressing and bandage it. At the end you get a written plan: how often to come back, what to do at home and which signs to watch for. If the wound shows infection, the physician prescribes an antibiotic you can fill at our [pharmacy](/en/services/farmacia), and we check your [tetanus vaccine](/en/services/vacunas).

## Dressings matched to the wound

Not all wounds heal the same way. Dry wounds need controlled moisture so new tissue can grow; draining wounds need absorbent dressings; burns benefit from silver or hydrogel dressings to prevent infection and pain at changes. We choose the material for each stage, and tell you what to buy if you prefer to do some changes at home between visits.

## Diabetic foot: do not wait

If you have diabetes and notice a sore, a blister or a color change on your foot, even if it does not hurt, come that same day. Loss of sensation lets wounds progress without you noticing, and early care prevents hospital stays. We use the visit to check your [glucose and A1C](/en/services/condiciones-cronicas), because a wound will not heal well with uncontrolled blood sugar.

## When to come back early

Fever, redness spreading beyond the edge, red streaks running up the skin, heavy pus, bad odor, increasing pain or a dressing that soaks through within hours. With any of these signs, come in without waiting for your next visit.

## Wound care in La Porte, no insurance needed

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM, which makes it easy to keep up with dressing changes without missing work. No insurance needed; each visit has a flat price we tell you beforehand. We serve patients from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point.`,
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
    longDescription: `Ese lunar que roza con el cinturón, el quiste en la espalda que se inflama cada tanto o la bolita blanda en el brazo que lleva años creciendo se pueden quitar en una sola visita, con anestesia local y sin hospital. En Clínica Hispana Nueva Salud La Porte hacemos cirugías menores ambulatorias sin cita, en español y con precio fijo sin seguro.

## Procedimientos que realizamos

- **Lunares y verrugas:** extirpación por rasurado o con incisión pequeña cuando molestan, sangran o cambiaron de forma o color
- **Quistes sebáceos y epidérmicos:** extracción completa de la cápsula para que no vuelvan a salir, muy comunes en espalda, cuello y cuero cabelludo
- **Lipomas:** retiro de las bolitas de grasa bajo la piel, cuando duelen, crecen o molestan estéticamente
- **Fibromas blandos (acrocordones):** los colgajitos de piel del cuello, axilas e ingles, que se retiran en minutos
- **Cuerpos extraños:** astillas, vidrios, espinas o anzuelos incrustados en la piel
- **Biopsias de piel:** toma de una muestra pequeña para analizar una lesión sospechosa
- Retiro de [uñas encarnadas](/services/unas-encarnadas) y [drenaje de abscesos](/services/drenaje-abscesos), que tienen su propia página

## Cómo es la visita

Primero el médico revisa la lesión y te dice si se puede tratar en la clínica o si conviene un especialista, por ejemplo cuando un lunar tiene características que requieren estudio dermatológico. Si procede, hacemos el procedimiento en ese momento o te damos fecha si necesitas prepararte. Se limpia la zona, se aplica anestesia local, se retira la lesión y se cierra con puntos o cintas adhesivas. La mayoría toma entre 15 y 45 minutos. Cuando la lesión lo amerita, enviamos el tejido a patología y te avisamos el resultado.

## Antes del procedimiento

Come con normalidad, no hace falta ayuno. Avísanos si tomas anticoagulantes o aspirina, si eres alérgico a la anestesia o al látex, si tienes diabetes o si tienes marcapasos. Ven con ropa cómoda que deje accesible la zona y, si es posible, acompañado si el procedimiento es en una zona que dificulte manejar.

## Después

Puedes volver a casa de inmediato y a la mayoría de los trabajos al día siguiente; evita esfuerzos con la zona operada durante una semana si hubo puntos. Mantén el vendaje seco 24 horas y luego dúchate sin remojar la herida. El [retiro de puntos](/services/suturas-heridas) se hace entre 7 y 14 días después y está incluido. Queda una cicatriz pequeña que se aclara con los meses; usa protector solar para que sea menos visible.

## Lo que no hacemos aquí

Lesiones grandes o profundas, tumores que requieran estudio de imagen previo, procedimientos que necesiten anestesia general o cirugía estética. En esos casos te orientamos y te referimos con el especialista adecuado.

## Cirugía menor en La Porte, sin seguro

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, abiertos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. No necesitas seguro médico; el precio depende del procedimiento y te lo confirmamos en la evaluación, antes de empezar. Atendemos a pacientes de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point.`,
    longDescriptionEn: `That mole that rubs on your belt, the cyst on your back that flares up every so often, or the soft lump on your arm that has been growing for years can be removed in a single visit, under local anesthesia and without a hospital. At Clínica Hispana Nueva Salud La Porte we perform outpatient minor surgery with no appointment, in Spanish or English and at a flat self-pay price.

## Procedures we perform

- **Moles and warts:** removal by shaving or with a small incision when they bother you, bleed or have changed shape or color
- **Sebaceous and epidermal cysts:** complete removal of the capsule so they do not come back, very common on the back, neck and scalp
- **Lipomas:** removal of fatty lumps under the skin when they hurt, grow or are cosmetically bothersome
- **Skin tags:** the small flaps of skin on the neck, armpits and groin, removed in minutes
- **Foreign bodies:** splinters, glass, thorns or fishhooks embedded in the skin
- **Skin biopsies:** taking a small sample to analyze a suspicious lesion
- [Ingrown toenail](/en/services/unas-encarnadas) removal and [abscess drainage](/en/services/drenaje-abscesos), which have their own pages

## What the visit is like

First the physician examines the lesion and tells you whether it can be treated at the clinic or whether a specialist is better, for example when a mole has features that require dermatological study. If appropriate, we do the procedure right then or give you a date if you need to prepare. The area is cleaned, local anesthesia is applied, the lesion is removed and closed with stitches or adhesive strips. Most take 15 to 45 minutes. When the lesion warrants it, we send the tissue to pathology and let you know the result.

## Before the procedure

Eat normally, no fasting needed. Tell us if you take blood thinners or aspirin, if you are allergic to anesthesia or latex, if you have diabetes or a pacemaker. Wear comfortable clothing that leaves the area accessible and, if possible, bring someone with you if the procedure is in an area that would make driving difficult.

## Afterward

You can go home right away and back to most jobs the next day; avoid straining the operated area for a week if there were stitches. Keep the dressing dry for 24 hours and then shower without soaking the wound. [Stitch removal](/en/services/suturas-heridas) happens 7 to 14 days later and is included. A small scar remains and fades over months; use sunscreen so it is less visible.

## What we do not do here

Large or deep lesions, tumors that require prior imaging, procedures that need general anesthesia, or cosmetic surgery. In those cases we guide you and refer you to the right specialist.

## Minor surgery in La Porte, no insurance needed

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. No health insurance needed; the price depends on the procedure and we confirm it during the evaluation, before starting. We serve patients from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point.`,
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
    longDescription: `Un bulto rojo, caliente, duro y cada vez más doloroso, a veces con un punto blanco en el centro, es casi siempre un absceso: una bolsa de pus que el cuerpo no puede eliminar solo. Los antibióticos por sí solos no lo curan; hay que drenarlo. En Clínica Hispana Nueva Salud La Porte lo hacemos el mismo día que llegas, con anestesia local, sin cita y en español.

## Dónde aparecen y por qué

Los abscesos se forman cuando bacterias, casi siempre estafilococo, entran por un folículo, un raspón, una picadura o una zona de roce. Son frecuentes en axilas, ingles, glúteos, muslos, espalda, cuello y cara, y también en la zona del coxis (quiste pilonidal) o en la línea del bikini después de depilarse. El calor y la humedad de La Porte, el sudor bajo la ropa de trabajo y la diabetes aumentan el riesgo. Un forúnculo pequeño puede resolverse con compresas tibias, pero si crece más de 1 centímetro, duele mucho o lleva varios días sin abrir, necesita drenaje.

## Cómo es el procedimiento

1. El médico revisa el absceso, su tamaño y si hay fiebre o signos de que la infección se extiende
2. Se limpia la piel y se aplica anestesia local alrededor de la zona
3. Se hace una pequeña incisión y se drena todo el pus; el alivio es inmediato porque baja la presión
4. Se lava la cavidad y, si es grande, se deja una gasa o mecha para que siga drenando
5. Se cubre con un vendaje y te explicamos los cuidados

Todo toma entre 15 y 30 minutos. Si el pus se manda a cultivo, sabremos en unos días qué bacteria es y si necesita un antibiótico específico. Cuando hay celulitis alrededor, fiebre, diabetes o el absceso está en la cara, indicamos antibiótico, disponible en nuestra [farmacia](/services/farmacia).

## Después del drenaje

Regresas en 24 a 48 horas para retirar la mecha y revisar la cavidad; a veces hacen falta una o dos [curaciones](/services/curacion-heridas) más. En casa cambia el vendaje una vez al día, puedes ducharte después de 24 horas y toma analgésico si lo necesitas. La herida cierra sola desde adentro en 1 a 2 semanas; no se sutura, porque cerrarla atraparía la infección. Lava las manos antes y después de tocar la zona, no compartas toallas ni rasuradoras y lava la ropa que estuvo en contacto con agua caliente.

## Cuándo es urgente

Fiebre alta con escalofríos, líneas rojas que se extienden desde el bulto, absceso en la cara cerca de los ojos o la nariz, hinchazón que crece en horas, o si tienes diabetes descontrolada o defensas bajas. Si además te sientes muy mal o confundido, ve a urgencias o llama al 911.

## Si se repiten

Cuando los abscesos vuelven una y otra vez, revisamos tu [glucosa](/services/condiciones-cronicas), evaluamos si eres portador de estafilococo y te indicamos un plan de descolonización con jabones y ungüentos específicos, además de recomendaciones para la piel y la ropa de trabajo.

## Drenaje de abscesos en La Porte, sin cita

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, abiertos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. No necesitas seguro médico; el drenaje tiene precio fijo que te informamos antes de empezar. Atendemos a pacientes de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point.`,
    longDescriptionEn: `A red, hot, firm and increasingly painful lump, sometimes with a white spot in the center, is almost always an abscess: a pocket of pus the body cannot clear on its own. Antibiotics alone do not cure it; it has to be drained. At Clínica Hispana Nueva Salud La Porte we do it the same day you walk in, under local anesthesia, with no appointment and in Spanish or English.

## Where they appear and why

Abscesses form when bacteria, almost always staph, enter through a hair follicle, a scrape, a bite or an area of friction. They are common in the armpits, groin, buttocks, thighs, back, neck and face, and also near the tailbone (pilonidal cyst) or along the bikini line after shaving. La Porte's heat and humidity, sweat under work clothes and diabetes all raise the risk. A small boil may resolve with warm compresses, but if it grows past half an inch, hurts a lot or has gone several days without opening, it needs drainage.

## What the procedure is like

1. The physician examines the abscess, its size and whether there is fever or signs that the infection is spreading
2. The skin is cleaned and local anesthesia is applied around the area
3. A small incision is made and all the pus is drained; relief is immediate because the pressure drops
4. The cavity is rinsed and, if it is large, a gauze wick is left in so it keeps draining
5. It is covered with a dressing and we explain the aftercare

The whole thing takes 15 to 30 minutes. If the pus is sent for culture, in a few days we will know which bacterium it is and whether it needs a specific antibiotic. When there is surrounding cellulitis, fever, diabetes or the abscess is on the face, we prescribe an antibiotic, available at our [pharmacy](/en/services/farmacia).

## After drainage

You come back in 24 to 48 hours to remove the wick and check the cavity; sometimes one or two more [wound-care visits](/en/services/curacion-heridas) are needed. At home, change the dressing once a day, shower after 24 hours and take a pain reliever if needed. The wound closes on its own from the inside in 1 to 2 weeks; it is not stitched, because closing it would trap the infection. Wash your hands before and after touching the area, do not share towels or razors, and wash clothing that touched it in hot water.

## When it is urgent

High fever with chills, red streaks spreading from the lump, an abscess on the face near the eyes or nose, swelling that grows within hours, or if you have uncontrolled diabetes or a weakened immune system. If you also feel very ill or confused, go to the emergency room or call 911.

## If they keep coming back

When abscesses return again and again, we check your [blood sugar](/en/services/condiciones-cronicas), evaluate whether you carry staph and set up a decolonization plan with specific soaps and ointments, plus recommendations for your skin and work clothing.

## Abscess drainage in La Porte, no appointment needed

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. No health insurance needed; drainage has a flat price we tell you before starting. We serve patients from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point.`,
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
    longDescription: `Cuando el borde de la uña del dedo gordo se clava en la piel, cada paso duele, el zapato de seguridad se vuelve un castigo y el dedo se pone rojo, hinchado y a veces con pus. En Clínica Hispana Nueva Salud La Porte tratamos la uña encarnada con anestesia local en una sola visita, sin cita y en español, para que salgas caminando con alivio.

## Por qué se encarna la uña

- Cortar la uña demasiado corta o redondeando las esquinas
- Zapatos estrechos o botas con puntera de acero que aprietan los dedos durante toda la jornada
- Golpes repetidos, como en fútbol o al patear
- Sudor y humedad constantes dentro del calzado
- Uñas naturalmente curvas o gruesas, por herencia o por hongos
- Diabetes o mala circulación, que además hacen que se infecte más rápido

## Qué hacemos según la etapa

**Inicio (dolor y enrojecimiento leve, sin pus):** levantamos el borde de la uña, colocamos un pequeño separador y te enseñamos baños tibios con sal y cómo cortar la uña. Muchas veces basta con esto.

**Infección o dolor intenso:** hacemos una **matricectomía parcial**: con anestesia local en la base del dedo, retiramos solo la franja lateral de la uña que se está clavando (2 a 3 milímetros), no la uña completa. Si el problema se ha repetido, aplicamos un producto químico (fenol) sobre la raíz de esa franja para que no vuelva a crecer por ese lado. El procedimiento dura entre 15 y 20 minutos, y la uña conserva un aspecto casi normal.

**Absceso o pus abundante:** drenamos la infección, retiramos la porción de uña y, si hay celulitis alrededor o tienes diabetes, indicamos antibiótico de nuestra [farmacia](/services/farmacia).

## Después del procedimiento

Puedes irte caminando de la clínica; conviene traer una sandalia o un zapato abierto porque el dedo va vendado. La anestesia dura unas 2 horas y después el dolor se controla con paracetamol o ibuprofeno. Al día siguiente empieza con baños de agua tibia y sal durante 10 minutos, dos veces al día, y cambia el vendaje. Puedes volver a la mayoría de los trabajos en 1 o 2 días; si usas bota de seguridad, es mejor esperar 3 a 5 días o usar una protección. La zona cicatriza en 2 a 3 semanas. Te revisamos en una semana para confirmar que todo va bien.

## Para que no regrese

Corta la uña recta, sin redondear las esquinas, y no demasiado corta. Usa calzado con espacio para los dedos y calcetines que absorban el sudor; cámbialos si se mojan. Si eres diabético, revisa tus pies todos los días y ven ante el primer signo de enrojecimiento. Si las uñas son gruesas o amarillas por hongos, trata el hongo, porque deforma la uña y favorece que se encarne.

## Cuándo no esperar

Si tienes diabetes, mala circulación o el dedo está muy hinchado, con pus o líneas rojas que suben por el pie, ven el mismo día. En estos casos una uña encarnada puede convertirse en una infección seria.

## Tratamiento de uñas encarnadas en La Porte, sin cita

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, abiertos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM, para que puedas venir al salir del turno. No necesitas seguro médico; el procedimiento tiene precio fijo que te informamos antes. Atendemos a trabajadores y familias de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point.`,
    longDescriptionEn: `When the edge of your big toenail digs into the skin, every step hurts, your safety boot becomes a punishment and the toe turns red, swollen and sometimes full of pus. At Clínica Hispana Nueva Salud La Porte we treat ingrown toenails under local anesthesia in a single visit, with no appointment and in Spanish or English, so you walk out with relief.

## Why toenails become ingrown

- Cutting the nail too short or rounding the corners
- Narrow shoes or steel-toe boots that squeeze the toes all shift long
- Repeated impact, such as in soccer or from kicking
- Constant sweat and moisture inside footwear
- Naturally curved or thick nails, from heredity or fungus
- Diabetes or poor circulation, which also make infection set in faster

## What we do depending on the stage

**Early (pain and mild redness, no pus):** we lift the nail edge, place a small spacer and teach you warm salt soaks and how to trim the nail. Often that is enough.

**Infection or severe pain:** we perform a **partial matricectomy**: with local anesthesia at the base of the toe, we remove only the side strip of nail that is digging in (2 to 3 millimeters), not the whole nail. If the problem has recurred, we apply a chemical (phenol) to the root of that strip so it does not grow back on that side. The procedure takes 15 to 20 minutes, and the nail keeps an almost normal appearance.

**Abscess or heavy pus:** we drain the infection, remove the nail portion and, if there is surrounding cellulitis or you have diabetes, prescribe an antibiotic from our [pharmacy](/en/services/farmacia).

## After the procedure

You can walk out of the clinic; bring a sandal or open shoe because the toe will be bandaged. The anesthesia lasts about 2 hours and afterward the pain is controlled with acetaminophen or ibuprofen. The next day, start warm salt-water soaks for 10 minutes twice a day and change the dressing. You can return to most jobs in 1 or 2 days; if you wear safety boots, it is better to wait 3 to 5 days or use a protector. The area heals in 2 to 3 weeks. We check you in a week to confirm everything is going well.

## Keeping it from coming back

Cut the nail straight across, without rounding the corners, and not too short. Wear footwear with room for your toes and socks that absorb sweat; change them if they get wet. If you are diabetic, check your feet every day and come at the first sign of redness. If your nails are thick or yellow from fungus, treat the fungus, because it deforms the nail and encourages ingrowth.

## When not to wait

If you have diabetes, poor circulation, or the toe is very swollen, with pus or red streaks running up the foot, come the same day. In these cases an ingrown toenail can turn into a serious infection.

## Ingrown toenail treatment in La Porte, no appointment needed

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM, so you can come after your shift. No health insurance needed; the procedure has a flat price we tell you beforehand. We serve workers and families from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point.`,
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
    longDescription: `Cuando terminas la consulta ya te sientes mal, es tarde o vienes con niños; lo último que quieres es manejar a otra farmacia, hacer fila y descubrir que no tienen tu medicamento. En Clínica Hispana Nueva Salud La Porte surtimos tu receta en la misma clínica, en minutos, con explicación en español de cómo tomarla y a precios accesibles sin seguro.

## Qué encuentras en nuestra farmacia

- **Antibióticos** para infecciones de garganta, oído, [orina](/services/infecciones-urinarias), piel y [transmisión sexual](/services/enfermedades-transmision-sexual)
- **Medicamentos para condiciones crónicas:** metformina, medicamentos para la presión y el colesterol, [levotiroxina](/services/tiroides), con opciones genéricas económicas para tu [control mensual](/services/condiciones-cronicas)
- **Alivio de síntomas:** antigripales, jarabes para la tos, antihistamínicos para [alergias](/services/alergias), analgésicos y antiinflamatorios
- **Salud de la mujer:** [pastillas anticonceptivas](/services/anticonceptivos), tratamientos para infecciones vaginales, vitaminas prenatales y ácido fólico
- **Inyectables y vitaminas:** vitamina B12, complejo B, antiinflamatorios inyectables aplicados en la clínica
- **Productos de venta libre:** termómetros, sueros orales para deshidratación, material de curación, glucómetros y tiras reactivas

Si algo no está en existencia, te lo conseguimos o te damos la receta impresa para surtirla donde prefieras; nunca te vas sin opciones.

## Cómo funciona

El médico envía la receta directamente a la farmacia mientras terminas la consulta. Cuando pasas a recoger, el personal revisa contigo cada medicamento: para qué es, cuántas veces al día, con o sin comida, cuántos días y qué efectos puedes notar. Todo en español, y por escrito en la etiqueta para que no se te olvide en casa. Si tomas otros medicamentos, revisamos que no haya interacciones.

## Resurtidos

Para tratamientos continuos, como diabetes, presión o tiroides, puedes pasar a resurtir tu receta sin volver a pagar consulta mientras esté vigente. Cuando la receta esté por vencer, te avisamos para programar el control con el médico y ajustar la dosis si hace falta.

## Precios sin seguro

Trabajamos sobre todo con genéricos, que tienen el mismo principio activo que la marca a una fracción del precio. Te decimos el costo antes de despachar y, si hay una alternativa más económica igual de efectiva, el médico la considera. No necesitas seguro médico; aceptamos efectivo y tarjetas.

## Lo que la farmacia no puede hacer

No surtimos sustancias controladas ni recetas de médicos externos que no podamos verificar. Si necesitas un medicamento que no manejamos, te orientamos sobre dónde conseguirlo.

## Farmacia en La Porte, dentro de la clínica

Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, sobre Spencer Hwy, con el mismo horario de la clínica: lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. Es una de las pocas farmacias abiertas hasta las 9 de la noche en La Porte y con atención en español. Atendemos a familias de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point.`,
    longDescriptionEn: `By the time you finish your visit you already feel sick, it is late or you have the kids with you; the last thing you want is to drive to another pharmacy, wait in line and find out they do not have your medication. At Clínica Hispana Nueva Salud La Porte we fill your prescription right in the clinic, in minutes, with an explanation in Spanish or English of how to take it and at affordable self-pay prices.

## What you will find at our pharmacy

- **Antibiotics** for throat, ear, [urinary](/en/services/infecciones-urinarias), skin and [sexually transmitted](/en/services/enfermedades-transmision-sexual) infections
- **Medications for chronic conditions:** metformin, blood pressure and cholesterol medications, [levothyroxine](/en/services/tiroides), with low-cost generic options for your [monthly follow-up](/en/services/condiciones-cronicas)
- **Symptom relief:** cold remedies, cough syrups, antihistamines for [allergies](/en/services/alergias), pain relievers and anti-inflammatories
- **Women's health:** [birth control pills](/en/services/anticonceptivos), treatments for vaginal infections, prenatal vitamins and folic acid
- **Injectables and vitamins:** vitamin B12, B-complex, injectable anti-inflammatories administered at the clinic
- **Over-the-counter products:** thermometers, oral rehydration solutions, wound-care supplies, glucose meters and test strips

If something is out of stock, we get it for you or give you the printed prescription to fill wherever you prefer; you never leave without options.

## How it works

The physician sends the prescription directly to the pharmacy while you finish your visit. When you come to pick it up, the staff goes over each medication with you: what it is for, how many times a day, with or without food, for how many days and what effects you may notice. All in your language, and in writing on the label so you do not forget at home. If you take other medications, we check for interactions.

## Refills

For ongoing treatments, such as diabetes, blood pressure or thyroid, you can come in to refill your prescription without paying for another visit while it is valid. When the prescription is about to expire, we let you know so you can schedule a follow-up with the physician and adjust the dose if needed.

## Self-pay prices

We work mostly with generics, which have the same active ingredient as the brand at a fraction of the price. We tell you the cost before dispensing and, if there is a cheaper alternative that is just as effective, the physician considers it. No health insurance needed; we accept cash and cards.

## What the pharmacy cannot do

We do not dispense controlled substances or prescriptions from outside doctors that we cannot verify. If you need a medication we do not carry, we guide you on where to get it.

## Pharmacy in La Porte, inside the clinic

We are at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, on Spencer Hwy, with the same hours as the clinic: Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. It is one of the few pharmacies open until 9 at night in La Porte with service in Spanish. We serve families from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point.`,
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
