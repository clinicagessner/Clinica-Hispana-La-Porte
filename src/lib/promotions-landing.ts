import type { Locale } from "@/types";

export interface PromotionsLandingContent {
  metaTitle: string;
  metaDescription: string;
  backToHome: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  limitedTime: string;
  priceLabel: string;
  includesLabel: string;
  viewDetails: string;
  ctaCall: string;
  ctaDirections: string;
  ctaForm: string;
  close: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  finalTitle: string;
  finalBody: string;
}

// Contenido de UI de la página /promociones. Las promociones (título, precio,
// descripción) viven en PROMOTIONS (constants.ts) porque son datos de negocio
// que también usa el carrusel de la home.
const CONTENT: Record<Locale, PromotionsLandingContent> = {
  es: {
    metaTitle:
      "Promociones de la clínica en La Porte | Clínica Hispana Nueva Salud",
    metaDescription:
      "Promociones del mes en Clínica Hispana Nueva Salud La Porte: examen general de sangre + Vitamina B12 por $99, salud íntima femenina por $69 y perfil hormonal masculino por $200. En español, sin cita y sin seguro en La Porte, TX.",
    backToHome: "Volver al inicio",
    eyebrow: "Promociones del mes",
    title: "Promociones de nuestra clínica hispana",
    subtitle:
      "Ofertas en exámenes y servicios de salud, con atención 100% en español, sin cita previa y sin necesidad de seguro en La Porte, TX. Llámanos para confirmar disponibilidad.",
    limitedTime: "Oferta por tiempo limitado",
    priceLabel: "Por solo",
    includesLabel: "Incluye",
    viewDetails: "Ver detalles",
    ctaCall: "Llamar ahora",
    ctaDirections: "Cómo llegar",
    ctaForm: "Llenar formulario",
    close: "Cerrar",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "¿Hasta cuándo son válidas las promociones?",
        answer:
          "Son por tiempo limitado. Llámanos para confirmar la promoción vigente y disponibilidad antes de tu visita.",
      },
      {
        question: "¿Necesito cita o seguro para aprovecharlas?",
        answer:
          "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM y sin necesidad de seguro.",
      },
      {
        question: "¿Cómo reservo una promoción?",
        answer:
          "Llámanos, escríbenos por el formulario o visítanos sin cita. Te atendemos 100% en español.",
      },
    ],
    finalTitle: "Aprovecha la promoción. Tu salud no espera.",
    finalBody:
      "Llámanos o déjanos tus datos y te atendemos hoy mismo, en español.",
  },
  en: {
    metaTitle:
      "Clinic promotions in La Porte | Clínica Hispana Nueva Salud",
    metaDescription:
      "This month's promotions at Clínica Hispana Nueva Salud La Porte: complete blood panel + Vitamin B12 for $99, women's intimate health for $69 and a male hormone panel for $200. In Spanish, walk-ins and no insurance needed in La Porte, TX.",
    backToHome: "Back to home",
    eyebrow: "This month's offers",
    title: "Promotions at our Hispanic clinic",
    subtitle:
      "Offers on exams and health services, with care 100% in Spanish, walk-ins welcome and no insurance needed in La Porte, TX. Call us to confirm availability.",
    limitedTime: "Limited-time offer",
    priceLabel: "For only",
    includesLabel: "Includes",
    viewDetails: "View details",
    ctaCall: "Call now",
    ctaDirections: "Get directions",
    ctaForm: "Fill out the form",
    close: "Close",
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        question: "How long are the promotions valid?",
        answer:
          "They are for a limited time. Call us to confirm the current promotion and availability before your visit.",
      },
      {
        question: "Do I need an appointment or insurance to use them?",
        answer:
          "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM and no insurance is needed.",
      },
      {
        question: "How do I book a promotion?",
        answer:
          "Call us, message us through the form or visit us without an appointment. We care for you 100% in Spanish.",
      },
    ],
    finalTitle: "Take advantage of the offer. Your health can't wait.",
    finalBody:
      "Call us or leave your details and we'll see you today, in Spanish.",
  },
};

export function getPromotionsLandingContent(
  locale: Locale,
): PromotionsLandingContent {
  return CONTENT[locale === "en" ? "en" : "es"];
}
