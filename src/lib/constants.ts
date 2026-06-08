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
    "Clínica médica hispana en La Porte, TX. Atención profesional en español, sin cita previa, aceptamos pacientes con o sin seguro. Medicina familiar, exámenes de inmigración, laboratorio y más.",
  descriptionEn:
    "Hispanic medical clinic in La Porte, TX. Professional care in Spanish, walk-ins welcome, patients with or without insurance. Family medicine, immigration exams, lab work and more.",
  baseUrl: SITE_URL,
  locale: "es-MX",
  // Logo real lo entregará el cliente; por ahora ruta placeholder (el componente
  // Logo renderiza un wordmark SVG mientras tanto).
  logoUrl: "/logo-nueva-salud.png",
  ogImage: "/images/og/og-default.png",
} as const;

export const CONTACT_INFO = {
  address: "9606 Spencer Hwy Ste D",
  city: "La Porte",
  state: "TX",
  zip: "77571",
  phone: "+13462291150",
  phoneFormatted: "+1 (346) 229-1150",
  phoneDisplay: "(346) 229-1150",
  email: "clinicahispananuevasaludlaport@gmail.com",
  // ⏳ Horario por confirmar con el cliente (Google muestra "Abre 9 AM").
  hours: "Lunes a Domingo: 9:00 AM - 9:00 PM",
  hoursEn: "Monday to Sunday: 9:00 AM - 9:00 PM",
  hoursWeekday: "Lunes a Viernes: 9:00 AM - 9:00 PM",
  hoursWeekend: "Sábado y Domingo: 9:00 AM - 9:00 PM",
  // ⏳ Place ID pendiente (obtener vía Places API o pedir al cliente).
  placeId: "",
  placeIdChIJ: "",
  // Coordenadas aproximadas de 9606 Spencer Hwy, La Porte TX (confirmar).
  coordinates: { lat: 29.6585, lng: -95.0588 },
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Hispana+Nueva+Salud+La+Porte+9606+Spencer+Hwy+La+Porte+TX+77571",
  googleReviewUrl:
    "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Hispana+Nueva+Salud+La+Porte+9606+Spencer+Hwy+La+Porte+TX+77571",
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
  { day: "Sunday", opens: "09:00", closes: "21:00" },
] as const;

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/clinicahispanaporte",
  instagram: "https://www.instagram.com/clinicamedicasanjacinto",
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
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/#contacto" },
];

// Footer: incluye "Sin cita" (walk-in).
export const FOOTER_NAV_LINKS: NavLink[] = [
  { key: "services", href: "/services" },
  { key: "blog", href: "/blog" },
  { key: "walkIn", href: "/walk-in" },
  { key: "contact", href: "/#contacto" },
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

En Clínica Hispana Nueva Salud La Porte te atendemos 100% en español, sin cita previa y con o sin seguro. Estamos en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.`;

const WHY_EN = `## Why choose Clínica Hispana Nueva Salud La Porte?

At Clínica Hispana Nueva Salud La Porte we care for you 100% in Spanish, with no appointment needed and with or without insurance. We are located at ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.`;

const PAYMENT_ES = `## Seguros y formas de pago

Aceptamos pacientes con o sin seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.`;

const PAYMENT_EN = `## Insurance and payment

We accept patients with or without health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.`;

const AREAS_ES = `## Áreas que servimos

Atendemos a pacientes de La Porte, TX y el área de Houston: Deer Park, Pasadena, Shoreacres, Morgan's Point, Lomax, Bayshore y comunidades cercanas.`;

const AREAS_EN = `## Areas we serve

We care for patients across La Porte, TX and the greater Houston area: Deer Park, Pasadena, Shoreacres, Morgan's Point, Lomax, Bayshore and surrounding communities.`;

export const SERVICES: Service[] = [
  {
    slug: "medicina-familiar",
    order: 1,
    category: "medicina-general",
    icon: "Stethoscope",
    highlighted: true,
    title: "Medicina Familiar en La Porte",
    titleEn: "Family Medicine in La Porte",
    shortDescription:
      "Atención médica primaria para toda la familia, en español y sin cita previa.",
    shortDescriptionEn:
      "Primary medical care for the whole family, in Spanish and walk-ins welcome.",
    description:
      "Medicina familiar en La Porte, TX para niños y adultos. Consultas, chequeos y seguimiento en español, con o sin seguro.",
    descriptionEn:
      "Family medicine in La Porte, TX for children and adults. Visits, checkups and follow-up in Spanish, with or without insurance.",
    keywords: [
      "medicina familiar la porte",
      "doctor que habla español la porte",
      "clínica hispana la porte",
      "consulta médica sin cita la porte",
    ],
    keywordsEn: [
      "family medicine la porte",
      "spanish speaking doctor la porte",
      "hispanic clinic la porte",
      "walk in clinic la porte",
    ],
    features: [
      "Consultas para niños y adultos",
      "Chequeos médicos generales",
      "Seguimiento de tratamientos",
      "Recetas y referencias médicas",
    ],
    featuresEn: [
      "Visits for children and adults",
      "General medical checkups",
      "Treatment follow-up",
      "Prescriptions and referrals",
    ],
    longDescription: `La medicina familiar es la base del cuidado de tu salud. En Clínica Hispana Nueva Salud La Porte atendemos a toda la familia —desde los más pequeños hasta los adultos mayores— con un médico que te escucha y te explica todo en español.

## ¿Qué incluye?

- Consulta médica general para niños y adultos
- Chequeos preventivos y control de salud
- Diagnóstico y tratamiento de enfermedades comunes
- Manejo de condiciones crónicas como diabetes e hipertensión
- Recetas, notas médicas y referencias a especialistas

## Condiciones que atendemos

Gripe y resfriados, infecciones, dolores, presión alta, diabetes, alergias, problemas digestivos y muchas más. Si no estás seguro de a quién acudir, empieza con tu médico de familia.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Family medicine is the foundation of your health care. At Clínica Hispana Nueva Salud La Porte we care for the whole family —from the youngest children to older adults— with a doctor who listens and explains everything in Spanish.

## What's included?

- General medical visits for children and adults
- Preventive checkups and health monitoring
- Diagnosis and treatment of common illnesses
- Management of chronic conditions like diabetes and hypertension
- Prescriptions, medical notes and specialist referrals

## Conditions we treat

Flu and colds, infections, aches and pains, high blood pressure, diabetes, allergies, digestive issues and many more. If you're not sure who to see, start with your family doctor.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examenes-inmigracion",
    order: 2,
    category: "examenes",
    icon: "ClipboardCheck",
    highlighted: true,
    title: "Examen Médico de Inmigración I-693 La Porte",
    titleEn: "Immigration Medical Exam I-693 La Porte",
    shortDescription:
      "Examen médico de inmigración completo con médico autorizado por USCIS y sellado del I-693.",
    shortDescriptionEn:
      "Complete immigration medical exam with a USCIS-authorized physician and sealed I-693.",
    description:
      "Examen médico de inmigración I-693 en La Porte con médico autorizado por USCIS. Vacunas y formulario sellado el mismo día.",
    descriptionEn:
      "I-693 immigration medical exam in La Porte with a USCIS-authorized physician. Vaccines and sealed form same day.",
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
    slug: "enfermedades-transmision-sexual",
    order: 3,
    category: "laboratorio",
    icon: "ShieldCheck",
    title: "Pruebas STD Confidenciales La Porte",
    titleEn: "Confidential STD Testing La Porte",
    shortDescription:
      "Pruebas de enfermedades de transmisión sexual rápidas, confidenciales y sin juicios.",
    shortDescriptionEn:
      "Fast, confidential, judgment-free testing for sexually transmitted infections.",
    description:
      "Pruebas de ETS/STD confidenciales en La Porte. Resultados rápidos y tratamiento en español, con o sin seguro.",
    descriptionEn:
      "Confidential STD testing in La Porte. Fast results and treatment in Spanish, with or without insurance.",
    keywords: [
      "prueba std la porte",
      "examen enfermedades de transmision sexual la porte",
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
      "Resultados rápidos",
      "Tratamiento disponible",
      "Atención en español",
    ],
    featuresEn: [
      "Confidential, judgment-free testing",
      "Fast results",
      "Treatment available",
      "Care in Spanish",
    ],
    longDescription: `Cuidar tu salud sexual es un acto de responsabilidad. En Clínica Hispana Nueva Salud La Porte ofrecemos pruebas de enfermedades de transmisión sexual de forma confidencial, respetuosa y sin juicios, con resultados rápidos y tratamiento cuando es necesario.

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
    longDescriptionEn: `Taking care of your sexual health is an act of responsibility. At Clínica Hispana Nueva Salud La Porte we offer confidential, respectful, judgment-free testing for sexually transmitted infections, with fast results and treatment when needed.

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
    slug: "urologia",
    order: 4,
    category: "tratamientos",
    icon: "Droplets",
    title: "Consulta de Urología",
    titleEn: "Urology Consultation",
    shortDescription:
      "Atención urológica para problemas urinarios, de próstata y del tracto urinario, en español.",
    shortDescriptionEn:
      "Urology care for urinary, prostate and urinary-tract issues, in Spanish.",
    description:
      "Atención urológica en La Porte en español: infecciones urinarias, próstata, cálculos renales y más. Con o sin seguro.",
    descriptionEn:
      "Urology care in La Porte in Spanish: urinary infections, prostate, kidney stones and more. With or without insurance.",
    keywords: [
      "urologo la porte español",
      "urologo que habla español la porte",
      "salud urinaria la porte",
      "clinica urologia la porte",
    ],
    keywordsEn: [
      "urologist la porte spanish",
      "spanish speaking urologist la porte",
      "urinary health la porte",
      "urology clinic la porte",
    ],
    features: [
      "Evaluación de salud urinaria",
      "Control de próstata",
      "Manejo de cálculos renales",
      "Atención en español",
    ],
    featuresEn: [
      "Urinary health evaluation",
      "Prostate checks",
      "Kidney stone management",
      "Care in Spanish",
    ],
    longDescription: `La salud urológica afecta tanto a hombres como a mujeres y a menudo se posterga por pena o falta de información en español. En Clínica Hispana Nueva Salud La Porte evaluamos y tratamos los problemas del tracto urinario con respeto y claridad.

## ¿Qué atendemos?

- Infecciones urinarias frecuentes
- Salud y control de la próstata
- Cálculos renales (piedras en el riñón)
- Sangre en la orina y otros síntomas urinarios
- Chequeos preventivos de salud urinaria

## Cuándo consultar

Dolor o ardor al orinar, ganas frecuentes de ir al baño, dolor en la espalda baja o cualquier cambio en la orina son motivos para una evaluación. Atender a tiempo evita complicaciones.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Urological health affects both men and women and is often postponed out of embarrassment or a lack of information in Spanish. At Clínica Hispana Nueva Salud La Porte we evaluate and treat urinary-tract issues with respect and clarity.

## What we treat

- Frequent urinary infections
- Prostate health and checks
- Kidney stones
- Blood in the urine and other urinary symptoms
- Preventive urinary-health checkups

## When to seek care

Pain or burning when urinating, frequent urge to go, lower-back pain or any change in your urine are reasons for an evaluation. Addressing it early prevents complications.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "condiciones-cronicas",
    order: 5,
    category: "medicina-general",
    icon: "Activity",
    highlighted: true,
    title: "Control de Diabetes e Hipertensión La Porte",
    titleEn: "Diabetes & Hypertension Care La Porte",
    shortDescription:
      "Programa de control de diabetes, presión alta y colesterol con seguimiento cercano.",
    shortDescriptionEn:
      "Diabetes, high blood pressure and cholesterol management with close follow-up.",
    description:
      "Control de diabetes, hipertensión y colesterol en La Porte. Seguimiento y laboratorio en español, con o sin seguro.",
    descriptionEn:
      "Diabetes, hypertension and cholesterol management in La Porte. Follow-up and lab work in Spanish, with or without insurance.",
    keywords: [
      "control de diabetes la porte",
      "doctor diabetes español la porte",
      "control de presion alta la porte",
      "clinica enfermedades cronicas la porte",
    ],
    keywordsEn: [
      "diabetes management la porte",
      "high blood pressure doctor la porte",
      "chronic disease clinic la porte",
      "cholesterol management la porte",
    ],
    features: [
      "Monitoreo y ajuste de medicamentos",
      "Laboratorio el mismo día",
      "Plan de alimentación y hábitos",
      "Educación en tu idioma",
    ],
    featuresEn: [
      "Medication monitoring and adjustment",
      "Same-day lab work",
      "Nutrition and lifestyle plan",
      "Education in your language",
    ],
    longDescription: `Vivir con diabetes, presión alta o colesterol elevado no tiene por qué controlarte a ti. Con el acompañamiento correcto puedes llevar una vida plena. En Clínica Hispana Nueva Salud La Porte diseñamos un plan claro y te seguimos de cerca.

## ¿Qué incluye?

- Evaluación inicial y análisis de laboratorio
- Monitoreo de glucosa, presión y colesterol
- Ajuste de medicamentos según tu evolución
- Plan de alimentación y actividad física
- Educación sobre tu condición en español

## Por qué es importante el control

Las condiciones crónicas mal controladas dañan el corazón, los riñones y la vista con el tiempo. Un buen seguimiento previene complicaciones y mejora tu calidad de vida.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Living with diabetes, high blood pressure or high cholesterol doesn't have to control you. With the right support you can live a full life. At Clínica Hispana Nueva Salud La Porte we design a clear plan and follow you closely.

## What's included?

- Initial evaluation and lab work
- Monitoring of glucose, blood pressure and cholesterol
- Medication adjustment based on your progress
- Nutrition and physical-activity plan
- Education about your condition in Spanish

## Why control matters

Poorly managed chronic conditions damage the heart, kidneys and eyesight over time. Good follow-up prevents complications and improves your quality of life.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "laboratorio",
    order: 6,
    category: "laboratorio",
    icon: "FlaskConical",
    highlighted: true,
    title: "Laboratorio Clínico Cerca de Mí La Porte | Mismo Día",
    titleEn: "Clinical Lab Near Me La Porte | Same Day",
    shortDescription:
      "Análisis de sangre y laboratorio clínico con resultados rápidos, sin cita previa.",
    shortDescriptionEn:
      "Blood work and clinical lab tests with fast results, no appointment needed.",
    description:
      "Laboratorio clínico en La Porte: análisis de sangre, orina y más con resultados el mismo día. En español, con o sin seguro.",
    descriptionEn:
      "Clinical lab in La Porte: blood, urine and more with same-day results. In Spanish, with or without insurance.",
    keywords: [
      "laboratorio clinico la porte",
      "analisis de sangre la porte",
      "laboratorio cerca de mi la porte",
      "examenes de sangre español la porte",
    ],
    keywordsEn: [
      "clinical lab la porte",
      "blood test la porte",
      "lab near me la porte",
      "blood work la porte",
    ],
    features: [
      "Análisis de sangre y orina",
      "Resultados el mismo día",
      "Sin cita previa",
      "Interpretación en español",
    ],
    featuresEn: [
      "Blood and urine analysis",
      "Same-day results",
      "Walk-ins welcome",
      "Results explained in Spanish",
    ],
    longDescription: `Un buen diagnóstico empieza con un buen laboratorio. En Clínica Hispana Nueva Salud La Porte tomamos tus muestras en el momento y te explicamos los resultados en español, sin tecnicismos.

## ¿Qué incluye?

- Análisis de sangre completos (biometría, química, etc.)
- Pruebas de glucosa, colesterol y triglicéridos
- Pruebas de tiroides, hígado y riñón
- Examen general de orina
- Resultados el mismo día en la mayoría de los casos

## Para qué sirven

Los análisis ayudan a detectar problemas antes de que den síntomas, dar seguimiento a una condición crónica o completar un examen de inmigración, trabajo o escuela.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `A good diagnosis starts with a good lab. At Clínica Hispana Nueva Salud La Porte we draw your samples on the spot and explain your results in Spanish, without the jargon.

## What's included?

- Complete blood work (CBC, chemistry, etc.)
- Glucose, cholesterol and triglyceride tests
- Thyroid, liver and kidney tests
- General urinalysis
- Same-day results in most cases

## Why they matter

Lab tests help detect problems before symptoms appear, follow up on a chronic condition or complete an immigration, work or school exam.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "ultrasonido",
    order: 7,
    category: "examenes",
    icon: "ScanLine",
    title: "Ultrasonido y Ecografía La Porte TX",
    titleEn: "Ultrasound & Sonography La Porte TX",
    shortDescription:
      "Ultrasonidos diagnósticos y de embarazo con equipo moderno y atención en español.",
    shortDescriptionEn:
      "Diagnostic and pregnancy ultrasounds with modern equipment and care in Spanish.",
    description:
      "Ultrasonido y ecografía en La Porte: abdominal, pélvico y de embarazo. Atención en español, con o sin seguro.",
    descriptionEn:
      "Ultrasound and sonography in La Porte: abdominal, pelvic and pregnancy. Care in Spanish, with or without insurance.",
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
    slug: "ginecologia",
    order: 8,
    category: "salud-mujer",
    icon: "Flower2",
    highlighted: true,
    title: "Consulta de Ginecología",
    titleEn: "Gynecology Consultation",
    shortDescription:
      "Salud ginecológica integral: papanicolaou, chequeos y atención de la mujer en español.",
    shortDescriptionEn:
      "Comprehensive gynecological care: Pap smears, checkups and women's health in Spanish.",
    description:
      "Ginecología en La Porte en español: papanicolaou, chequeos y salud de la mujer. Con o sin seguro, sin cita previa.",
    descriptionEn:
      "Gynecology in La Porte in Spanish: Pap smears, checkups and women's health. With or without insurance, walk-ins welcome.",
    keywords: [
      "ginecologo la porte español",
      "clinica de la mujer la porte",
      "papanicolaou la porte",
      "ginecologia hispana la porte",
    ],
    keywordsEn: [
      "gynecologist la porte spanish",
      "womens clinic la porte",
      "pap smear la porte",
      "hispanic gynecology la porte",
    ],
    features: [
      "Papanicolaou y chequeo anual",
      "Salud de la mujer integral",
      "Orientación en planificación",
      "Atención en español",
    ],
    featuresEn: [
      "Pap smear and annual checkup",
      "Comprehensive women's health",
      "Family-planning guidance",
      "Care in Spanish",
    ],
    longDescription: `Tu salud como mujer merece un espacio de confianza. En Clínica Hispana Nueva Salud La Porte ofrecemos atención ginecológica integral en español, con la privacidad y el respeto que mereces en cada etapa de tu vida.

## ¿Qué incluye?

- Papanicolaou y chequeo ginecológico anual
- Evaluación de salud de la mujer
- Orientación en métodos de planificación familiar
- Atención de molestias e infecciones
- Referencias cuando se necesita un especialista

## Prevención que salva vidas

El chequeo ginecológico regular permite detectar a tiempo cambios importantes. No esperes a tener síntomas: la prevención es tu mejor aliada.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Your health as a woman deserves a space of trust. At Clínica Hispana Nueva Salud La Porte we offer comprehensive gynecological care in Spanish, with the privacy and respect you deserve at every stage of life.

## What's included?

- Pap smear and annual gynecological checkup
- Women's health evaluation
- Guidance on family-planning methods
- Care for discomfort and infections
- Referrals when a specialist is needed

## Prevention that saves lives

Regular gynecological checkups allow important changes to be caught early. Don't wait for symptoms: prevention is your best ally.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "planificacion-familiar",
    order: 9,
    category: "salud-mujer",
    icon: "Users",
    title: "Planificación Familiar La Porte TX",
    titleEn: "Family Planning La Porte TX",
    shortDescription:
      "Orientación y métodos de planificación familiar para decidir con información, en español.",
    shortDescriptionEn:
      "Family-planning guidance and methods to decide with clear information, in Spanish.",
    description:
      "Planificación familiar en La Porte: orientación y métodos anticonceptivos en español. Con o sin seguro.",
    descriptionEn:
      "Family planning in La Porte: guidance and contraceptive methods in Spanish. With or without insurance.",
    keywords: [
      "planificacion familiar la porte",
      "metodos anticonceptivos la porte",
      "clinica planificacion español la porte",
      "anticonceptivos la porte español",
    ],
    keywordsEn: [
      "family planning la porte",
      "birth control la porte",
      "contraception clinic la porte",
      "birth control spanish la porte",
    ],
    features: [
      "Orientación personalizada",
      "Métodos anticonceptivos",
      "Seguimiento médico",
      "Atención en español",
    ],
    featuresEn: [
      "Personalized guidance",
      "Contraceptive methods",
      "Medical follow-up",
      "Care in Spanish",
    ],
    longDescription: `Decidir cuándo y cómo formar tu familia es un derecho. En Clínica Hispana Nueva Salud La Porte te damos información clara, sin juicios y en español para que elijas el método que mejor se adapta a ti.

## ¿Qué incluye?

- Consulta de orientación personalizada
- Información sobre los distintos métodos
- Inicio y seguimiento del método elegido
- Resolución de dudas y efectos secundarios

## Una decisión informada

Cada cuerpo y cada vida es distinta. Te ayudamos a comparar opciones según tu salud, tus planes y tu comodidad para que tomes la mejor decisión.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Deciding when and how to build your family is a right. At Clínica Hispana Nueva Salud La Porte we give you clear, judgment-free information in Spanish so you can choose the method that best fits you.

## What's included?

- Personalized guidance visit
- Information about the different methods
- Starting and following up on the chosen method
- Answers to questions and side effects

## An informed decision

Every body and every life is different. We help you compare options based on your health, your plans and your comfort so you make the best decision.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "vacunas-anticonceptivas",
    order: 10,
    category: "salud-mujer",
    icon: "Syringe",
    title: "Inyección Anticonceptiva La Porte",
    titleEn: "Contraceptive Injection La Porte",
    shortDescription:
      "Aplicación de la inyección anticonceptiva con seguimiento y orientación en español.",
    shortDescriptionEn:
      "Contraceptive injection with follow-up and guidance in Spanish.",
    description:
      "Inyección anticonceptiva en La Porte con seguimiento médico, en español. Con o sin seguro, sin cita previa.",
    descriptionEn:
      "Contraceptive injection in La Porte with medical follow-up, in Spanish. With or without insurance, walk-ins welcome.",
    keywords: [
      "inyeccion anticonceptiva la porte",
      "inyeccion para no quedar embarazada la porte",
      "anticonceptivo inyectable la porte",
      "depo provera la porte español",
    ],
    keywordsEn: [
      "contraceptive injection la porte",
      "birth control shot la porte",
      "depo shot la porte",
      "contraceptive shot spanish la porte",
    ],
    features: [
      "Aplicación por personal médico",
      "Recordatorio de tu próxima dosis",
      "Orientación sobre el método",
      "Atención en español",
    ],
    featuresEn: [
      "Administered by medical staff",
      "Reminder for your next dose",
      "Guidance about the method",
      "Care in Spanish",
    ],
    longDescription: `La inyección anticonceptiva es un método cómodo y eficaz para quienes prefieren no tomar pastillas todos los días. En Clínica Hispana Nueva Salud La Porte te la aplicamos con seguridad y te ayudamos a llevar el control de tus dosis.

## ¿Qué incluye?

- Evaluación breve para confirmar que es adecuada para ti
- Aplicación por personal médico
- Orientación sobre cómo actúa y qué esperar
- Recordatorio de la fecha de tu próxima dosis

## Constancia para que funcione

Para mantener su eficacia, la inyección debe aplicarse en el intervalo indicado. Te ayudamos a no perder tu cita para que estés siempre protegida.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `The contraceptive injection is a convenient, effective method for those who prefer not to take a daily pill. At Clínica Hispana Nueva Salud La Porte we administer it safely and help you keep track of your doses.

## What's included?

- A brief evaluation to confirm it's right for you
- Administration by medical staff
- Guidance on how it works and what to expect
- A reminder for your next dose date

## Consistency for it to work

To stay effective, the injection must be given within the recommended interval. We help you keep your appointment so you're always protected.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "extraccion-implantes",
    order: 11,
    category: "salud-mujer",
    icon: "Bandage",
    title: "Extracción de Implantes Anticonceptivos La Porte",
    titleEn: "Contraceptive Implant Removal La Porte",
    shortDescription:
      "Retiro seguro de implantes anticonceptivos del brazo, por personal capacitado.",
    shortDescriptionEn:
      "Safe removal of arm contraceptive implants by trained staff.",
    description:
      "Extracción de implantes anticonceptivos en La Porte, procedimiento seguro y en español. Con o sin seguro.",
    descriptionEn:
      "Contraceptive implant removal in La Porte, a safe procedure in Spanish. With or without insurance.",
    keywords: [
      "extraccion de implante anticonceptivo la porte",
      "quitar implante del brazo la porte",
      "retiro de nexplanon la porte",
      "remover implante anticonceptivo la porte",
    ],
    keywordsEn: [
      "contraceptive implant removal la porte",
      "arm implant removal la porte",
      "nexplanon removal la porte",
      "birth control implant removal la porte",
    ],
    features: [
      "Procedimiento ambulatorio",
      "Personal capacitado",
      "Cuidado posterior explicado",
      "Atención en español",
    ],
    featuresEn: [
      "Outpatient procedure",
      "Trained staff",
      "After-care explained",
      "Care in Spanish",
    ],
    longDescription: `Si llegó el momento de retirar tu implante anticonceptivo —porque caducó o porque deseas cambiar de método— en Clínica Hispana Nueva Salud La Porte lo hacemos de forma segura, rápida y con cuidado.

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
    longDescriptionEn: `If it's time to remove your contraceptive implant —because it expired or you want to switch methods— at Clínica Hispana Nueva Salud La Porte we do it safely, quickly and with care.

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
    slug: "electrocardiograma",
    order: 12,
    category: "examenes",
    icon: "HeartPulse",
    title: "Electrocardiograma EKG La Porte TX",
    titleEn: "Electrocardiogram EKG La Porte TX",
    shortDescription:
      "Electrocardiograma (EKG) rápido para evaluar la salud de tu corazón, en español.",
    shortDescriptionEn:
      "Fast electrocardiogram (EKG) to evaluate your heart health, in Spanish.",
    description:
      "Electrocardiograma EKG en La Porte, rápido y sin dolor. Resultados y atención en español, con o sin seguro.",
    descriptionEn:
      "Electrocardiogram EKG in La Porte, fast and painless. Results and care in Spanish, with or without insurance.",
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
      "Atención en español",
    ],
    featuresEn: [
      "Fast and painless test",
      "Heart-rhythm evaluation",
      "Useful for medical exams",
      "Care in Spanish",
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
    slug: "enfermedades-respiratorias",
    order: 13,
    category: "tratamientos",
    icon: "Wind",
    title: "Tratamiento Gripe y Enfermedades Respiratorias La Porte",
    titleEn: "Flu & Respiratory Illness Treatment La Porte",
    shortDescription:
      "Diagnóstico y tratamiento de gripe, tos, bronquitis y otras enfermedades respiratorias.",
    shortDescriptionEn:
      "Diagnosis and treatment of flu, cough, bronchitis and other respiratory illnesses.",
    description:
      "Tratamiento de gripe y enfermedades respiratorias en La Porte, en español. Sin cita previa, con o sin seguro.",
    descriptionEn:
      "Flu and respiratory illness treatment in La Porte, in Spanish. Walk-ins welcome, with or without insurance.",
    keywords: [
      "tratamiento gripe la porte",
      "doctor para la tos la porte español",
      "enfermedades respiratorias la porte",
      "clinica gripe sin cita la porte",
    ],
    keywordsEn: [
      "flu treatment la porte",
      "cough doctor la porte",
      "respiratory illness la porte",
      "walk in flu clinic la porte",
    ],
    features: [
      "Diagnóstico el mismo día",
      "Tratamiento para gripe y tos",
      "Manejo de bronquitis y alergias",
      "Atención en español",
    ],
    featuresEn: [
      "Same-day diagnosis",
      "Treatment for flu and cough",
      "Bronchitis and allergy care",
      "Care in Spanish",
    ],
    longDescription: `La gripe, la tos persistente y las infecciones respiratorias pueden complicarse si no se atienden a tiempo. En Clínica Hispana Nueva Salud La Porte te recibimos sin cita para diagnosticar y tratar lo antes posible.

## ¿Qué atendemos?

- Gripe y resfriados fuertes
- Tos persistente y bronquitis
- Infecciones de garganta y senos nasales
- Alergias respiratorias
- Dificultad para respirar leve a moderada

## No dejes que avance

Si los síntomas no mejoran, hay fiebre alta o cuesta respirar, es mejor evaluarte. Un tratamiento oportuno acorta la enfermedad y evita complicaciones.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Flu, a lingering cough and respiratory infections can get worse if not treated in time. At Clínica Hispana Nueva Salud La Porte we see you without an appointment to diagnose and treat as soon as possible.

## What we treat

- Flu and severe colds
- Persistent cough and bronchitis
- Throat and sinus infections
- Respiratory allergies
- Mild to moderate shortness of breath

## Don't let it progress

If symptoms don't improve, there's a high fever or breathing is hard, it's best to get evaluated. Timely treatment shortens the illness and prevents complications.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "infecciones-urinarias",
    order: 14,
    category: "tratamientos",
    icon: "Droplet",
    title: "Tratamiento Infecciones Urinarias La Porte",
    titleEn: "Urinary Infection Treatment La Porte",
    shortDescription:
      "Diagnóstico y tratamiento de infecciones urinarias el mismo día, en español.",
    shortDescriptionEn:
      "Same-day diagnosis and treatment of urinary infections, in Spanish.",
    description:
      "Tratamiento de infecciones urinarias en La Porte, el mismo día y en español. Con o sin seguro, sin cita previa.",
    descriptionEn:
      "Urinary infection treatment in La Porte, same day and in Spanish. With or without insurance, walk-ins welcome.",
    keywords: [
      "infeccion urinaria la porte",
      "tratamiento infeccion urinaria la porte español",
      "doctor infeccion de orina la porte",
      "clinica infeccion urinaria sin cita la porte",
    ],
    keywordsEn: [
      "urinary tract infection la porte",
      "uti treatment la porte",
      "uti doctor la porte spanish",
      "walk in uti clinic la porte",
    ],
    features: [
      "Diagnóstico con prueba de orina",
      "Tratamiento el mismo día",
      "Sin cita previa",
      "Atención en español",
    ],
    featuresEn: [
      "Diagnosis with a urine test",
      "Same-day treatment",
      "Walk-ins welcome",
      "Care in Spanish",
    ],
    longDescription: `Las infecciones urinarias son muy comunes y, tratadas a tiempo, se resuelven rápido. En Clínica Hispana Nueva Salud La Porte te diagnosticamos con una prueba sencilla y empezamos el tratamiento el mismo día.

## ¿Qué incluye?

- Evaluación de síntomas
- Prueba de orina en la clínica
- Tratamiento adecuado el mismo día
- Indicaciones para evitar que regrese

## Síntomas frecuentes

Ardor al orinar, ganas constantes de ir al baño, orina turbia o con mal olor y dolor en la parte baja del abdomen. Si los tienes, no esperes: una infección sin tratar puede llegar a los riñones.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Urinary infections are very common and, treated in time, clear up quickly. At Clínica Hispana Nueva Salud La Porte we diagnose you with a simple test and start treatment the same day.

## What's included?

- Symptom evaluation
- In-clinic urine test
- Appropriate same-day treatment
- Tips to prevent it from coming back

## Common symptoms

Burning when urinating, a constant urge to go, cloudy or foul-smelling urine and lower-abdomen pain. If you have them, don't wait: an untreated infection can reach the kidneys.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "infecciones-vaginales",
    order: 15,
    category: "salud-mujer",
    icon: "Flower",
    title: "Tratamiento Infecciones Vaginales La Porte",
    titleEn: "Vaginal Infection Treatment La Porte",
    shortDescription:
      "Diagnóstico y tratamiento de infecciones vaginales con discreción y en español.",
    shortDescriptionEn:
      "Diagnosis and treatment of vaginal infections, discreet and in Spanish.",
    description:
      "Tratamiento de infecciones vaginales en La Porte, discreto y en español. Con o sin seguro, sin cita previa.",
    descriptionEn:
      "Vaginal infection treatment in La Porte, discreet and in Spanish. With or without insurance, walk-ins welcome.",
    keywords: [
      "infeccion vaginal la porte",
      "tratamiento infeccion vaginal la porte español",
      "doctor infeccion vaginal la porte",
      "clinica salud femenina la porte",
    ],
    keywordsEn: [
      "vaginal infection la porte",
      "yeast infection treatment la porte",
      "vaginal infection doctor la porte",
      "womens health clinic la porte",
    ],
    features: [
      "Evaluación discreta",
      "Diagnóstico preciso",
      "Tratamiento el mismo día",
      "Atención en español",
    ],
    featuresEn: [
      "Discreet evaluation",
      "Accurate diagnosis",
      "Same-day treatment",
      "Care in Spanish",
    ],
    longDescription: `Las molestias vaginales son frecuentes y tienen solución. En Clínica Hispana Nueva Salud La Porte te atendemos con discreción y respeto para identificar la causa y darte el tratamiento correcto.

## ¿Qué incluye?

- Evaluación de síntomas con privacidad
- Diagnóstico de la causa (hongos, bacterias, etc.)
- Tratamiento adecuado el mismo día
- Recomendaciones para prevenir recaídas

## No te quedes con la duda

Comezón, ardor, flujo diferente o mal olor son señales de que algo necesita atención. Un diagnóstico correcto evita tratamientos equivocados y resuelve la molestia más rápido.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Vaginal discomfort is common and treatable. At Clínica Hispana Nueva Salud La Porte we care for you with discretion and respect to identify the cause and give you the right treatment.

## What's included?

- Private symptom evaluation
- Diagnosis of the cause (yeast, bacteria, etc.)
- Appropriate same-day treatment
- Recommendations to prevent recurrence

## Don't stay in doubt

Itching, burning, unusual discharge or odor are signs something needs attention. An accurate diagnosis avoids the wrong treatment and resolves the discomfort faster.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "examen-dot",
    order: 16,
    category: "examenes",
    icon: "Truck",
    title: "Examen Físico DOT La Porte - Licencia CDL",
    titleEn: "DOT Physical Exam La Porte - CDL License",
    shortDescription:
      "Examen físico DOT para conductores comerciales (CDL), con certificado el mismo día.",
    shortDescriptionEn:
      "DOT physical exam for commercial drivers (CDL), with same-day certificate.",
    description:
      "Examen físico DOT en La Porte para licencia CDL, certificado el mismo día y en español. Con o sin seguro.",
    descriptionEn:
      "DOT physical exam in La Porte for CDL license, same-day certificate, in Spanish. With or without insurance.",
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
    slug: "examenes-generales",
    order: 17,
    category: "examenes",
    icon: "ClipboardList",
    title: "Exámenes Físicos La Porte - Trabajo, Escuela, Deportes",
    titleEn: "Physical Exams La Porte - Work, School, Sports",
    shortDescription:
      "Exámenes físicos para trabajo, escuela y deportes, rápidos y en español.",
    shortDescriptionEn:
      "Physical exams for work, school and sports, fast and in Spanish.",
    description:
      "Exámenes físicos en La Porte para trabajo, escuela y deportes. Rápidos, en español y con o sin seguro.",
    descriptionEn:
      "Physical exams in La Porte for work, school and sports. Fast, in Spanish, with or without insurance.",
    keywords: [
      "examen fisico la porte",
      "examen fisico para trabajo la porte",
      "examen fisico escolar la porte",
      "physical exam la porte español",
    ],
    keywordsEn: [
      "physical exam la porte",
      "work physical la porte",
      "school physical la porte",
      "sports physical la porte",
    ],
    features: [
      "Examen para trabajo y escuela",
      "Examen deportivo",
      "Formularios completados",
      "Atención en español",
    ],
    featuresEn: [
      "Work and school exams",
      "Sports physicals",
      "Forms completed",
      "Care in Spanish",
    ],
    longDescription: `Cuando necesitas un examen físico para un nuevo trabajo, la escuela o un deporte, en Clínica Hispana Nueva Salud La Porte te lo hacemos de forma rápida y completa, con todos los formularios listos.

## ¿Qué incluye?

- Examen físico general
- Revisión de signos vitales
- Llenado de formularios requeridos
- Recomendaciones de salud personalizadas

## Para cada necesidad

- **Trabajo:** cumple los requisitos de tu empleador.
- **Escuela:** examen para inscripción y actividades.
- **Deportes:** evaluación para practicar con seguridad.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `When you need a physical exam for a new job, school or a sport, at Clínica Hispana Nueva Salud La Porte we do it quickly and thoroughly, with all the forms ready.

## What's included?

- General physical exam
- Vital-signs check
- Completion of required forms
- Personalized health recommendations

## For every need

- **Work:** meet your employer's requirements.
- **School:** exam for enrollment and activities.
- **Sports:** evaluation to play safely.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "dolores-musculares",
    order: 18,
    category: "tratamientos",
    icon: "Bone",
    title: "Tratamiento Dolor de Espalda y Muscular La Porte",
    titleEn: "Back & Muscle Pain Treatment La Porte",
    shortDescription:
      "Evaluación y tratamiento del dolor de espalda y muscular para que recuperes tu movilidad.",
    shortDescriptionEn:
      "Evaluation and treatment of back and muscle pain so you regain mobility.",
    description:
      "Tratamiento del dolor de espalda y muscular en La Porte, en español. Con o sin seguro, sin cita previa.",
    descriptionEn:
      "Back and muscle pain treatment in La Porte, in Spanish. With or without insurance, walk-ins welcome.",
    keywords: [
      "dolor de espalda la porte",
      "tratamiento dolor muscular la porte español",
      "doctor dolor de espalda la porte",
      "clinica dolor la porte",
    ],
    keywordsEn: [
      "back pain treatment la porte",
      "muscle pain doctor la porte",
      "back pain doctor la porte spanish",
      "pain clinic la porte",
    ],
    features: [
      "Evaluación del origen del dolor",
      "Plan de tratamiento",
      "Manejo del dolor",
      "Atención en español",
    ],
    featuresEn: [
      "Evaluation of the pain's origin",
      "Treatment plan",
      "Pain management",
      "Care in Spanish",
    ],
    longDescription: `El dolor de espalda y muscular puede afectar tu trabajo y tu vida diaria. En Clínica Hispana Nueva Salud La Porte identificamos la causa y te ofrecemos un plan para aliviarlo y prevenir que regrese.

## ¿Qué incluye?

- Evaluación del origen del dolor
- Diagnóstico y plan de tratamiento
- Manejo del dolor y la inflamación
- Recomendaciones de cuidado y postura
- Referencia a especialista si se requiere

## Causas frecuentes

Malas posturas, esfuerzos en el trabajo, golpes o lesiones y tensión acumulada. Atender el dolor a tiempo evita que se vuelva crónico.

${WHY_ES}

${PAYMENT_ES}

${AREAS_ES}`,
    longDescriptionEn: `Back and muscle pain can affect your work and daily life. At Clínica Hispana Nueva Salud La Porte we identify the cause and offer you a plan to relieve it and prevent it from coming back.

## What's included?

- Evaluation of the pain's origin
- Diagnosis and treatment plan
- Pain and inflammation management
- Care and posture recommendations
- Referral to a specialist if needed

## Common causes

Poor posture, strain at work, blows or injuries and accumulated tension. Treating the pain early keeps it from becoming chronic.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
  {
    slug: "farmacia",
    order: 19,
    category: "tratamientos",
    icon: "Pill",
    title: "Farmacia en La Porte TX",
    titleEn: "Pharmacy in La Porte TX",
    shortDescription:
      "Recoge tus medicamentos al terminar la consulta, sin ir a otra farmacia.",
    shortDescriptionEn:
      "Pick up your medications right after your visit — no second stop.",
    description:
      "Farmacia en La Porte, TX dentro de la clínica. Surtimos tu receta al terminar la consulta: medicamentos de marca y genéricos, atención en español.",
    descriptionEn:
      "Pharmacy in La Porte, TX inside the clinic. We fill your prescription right after your visit: brand-name and generic medications, service in Spanish.",
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

Te ahorras una segunda parada: el médico te atiende, te receta y recoges tu medicamento en el mismo lugar. Te explicamos en español la dosis, los horarios y los cuidados, para que empieces tu tratamiento con confianza.

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

You skip the second stop: the doctor sees you, writes your prescription, and you pick up your medication in the same place. We explain the dosage, schedule and precautions in Spanish so you can start your treatment with confidence.

${WHY_EN}

${PAYMENT_EN}

${AREAS_EN}`,
  },
];

// Testimonios de respaldo para el carrusel cuando no hay data en vivo de Google.
// La data real se trae con getGooglePlaceData(); estos son representativos.
export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    author: "María G.",
    rating: 5,
    text: "Excelente atención y todo en español. Me explicaron cada paso de mi examen de inmigración. Muy recomendados.",
    textEn: "Excellent care and everything in Spanish. They explained every step of my immigration exam. Highly recommended.",
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
