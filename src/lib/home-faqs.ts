import type { ServiceFaq } from "@/types";

// FAQs generales del home (bilingüe). También alimentan el FAQPage JSON-LD.
// Texto propio de La Porte (B3, 2026-10-03): no copiar a otras clínicas.
export const HOME_FAQS: ServiceFaq[] = [
  {
    question: "¿Tengo que sacar cita para que me atiendan?",
    answer:
      "No hace falta. Llega sin avisar de lunes a sábado entre 9:00 AM y 9:00 PM, o el domingo entre 9:00 AM y 7:00 PM. Si prefieres asegurar un horario, llámanos y te lo apartamos.",
    questionEn: "Do I have to book an appointment to be seen?",
    answerEn:
      "Not at all. Walk in Monday through Saturday between 9:00 AM and 9:00 PM, or Sunday between 9:00 AM and 7:00 PM. If you'd rather lock in a time, call us and we'll set one aside.",
  },
  {
    question: "¿Me atienden aunque no tenga seguro médico?",
    answer:
      "Sí. Cada consulta y cada estudio tiene una tarifa que te decimos antes de atenderte, para que sepas cuánto vas a pagar desde el principio.",
    questionEn: "Will you see me if I don't have health insurance?",
    answerEn:
      "Yes. Every visit and test has a fee we tell you before you're seen, so you know what you'll pay from the start.",
  },
  {
    question: "¿Puedo hablar en español durante toda la visita?",
    answer:
      "Sí. Desde la recepción hasta la consulta te atendemos en español, y si alguien de tu familia se siente más cómodo en inglés, también lo atendemos en inglés.",
    questionEn: "Can I speak Spanish during the whole visit?",
    answerEn:
      "Yes. From the front desk to the exam room we speak Spanish, and if someone in your family is more comfortable in English, we see them in English too.",
  },
  {
    question: "¿Qué tipo de atención encuentro en la clínica?",
    answer:
      "Medicina general y familiar, laboratorio clínico, ultrasonido, ginecología básica, examen DOT, examen de inmigración I-693, vacunas, procedimientos menores y seguimiento de diabetes, presión alta y tiroides. La lista completa está en la página de servicios.",
    questionEn: "What kind of care can I get at the clinic?",
    answerEn:
      "General and family medicine, clinical lab, ultrasound, basic gynecology, DOT exams, I-693 immigration exams, vaccines, minor procedures and follow-up for diabetes, high blood pressure and thyroid. The full list is on the services page.",
  },
  {
    question: "¿Cuál es la dirección de la clínica?",
    answer:
      "9606 Spencer Hwy Ste D, La Porte, TX 77571. Nos visitan pacientes de La Porte, Deer Park, Pasadena, Shoreacres y Morgan's Point.",
    questionEn: "What is the clinic's address?",
    answerEn:
      "9606 Spencer Hwy Ste D, La Porte, TX 77571. Our patients come from La Porte, Deer Park, Pasadena, Shoreacres and Morgan's Point.",
  },
  {
    question: "¿Hay una clínica hispana cerca de mí en La Porte, TX?",
    answer:
      "Si vives en La Porte o en una ciudad vecina como Deer Park o Pasadena, sí: Clínica Hispana Nueva Salud La Porte queda sobre Spencer Highway y recibe pacientes sin cita los siete días de la semana.",
    questionEn: "Is there a Hispanic clinic near me in La Porte, TX?",
    answerEn:
      "If you live in La Porte or a neighboring city such as Deer Park or Pasadena, yes: Clínica Hispana Nueva Salud La Porte is on Spencer Highway and takes walk-in patients seven days a week.",
  },
  {
    question: "¿Puedo hacer de esta clínica mi lugar de atención primaria?",
    answer:
      "Sí. Aquí puedes llevar tus consultas de rutina, el control de la diabetes o la presión alta, los análisis de laboratorio y las revisiones de seguimiento, siempre con el equipo médico de la clínica y en español.",
    questionEn: "Can this clinic be my primary care home?",
    answerEn:
      "Yes. You can bring your routine visits, diabetes or blood pressure control, lab work and follow-up checks here, always with the clinic's medical team and in Spanish.",
  },
  {
    question: "¿Atienden solo a pacientes latinos?",
    answer:
      "No. Somos una clínica hispana abierta a cualquier persona, sin importar de dónde venga o qué idioma hable en casa; la atención es en español y en inglés.",
    questionEn: "Do you only see Latino patients?",
    answerEn:
      "No. We are a Hispanic clinic open to anyone, wherever they come from and whatever language they speak at home; care is in Spanish and English.",
  },
  {
    question: "¿Hacen el examen médico de inmigración I-693?",
    answer:
      "Sí. Lo realiza un Civil Surgeon designado por USCIS, con las vacunas que pida el formulario, y te entregamos el sobre sellado en cuanto el expediente está completo.",
    questionEn: "Do you do the I-693 immigration medical exam?",
    answerEn:
      "Yes. A USCIS-designated civil surgeon performs it, including the vaccines the form requires, and we hand you the sealed envelope as soon as the file is complete.",
  },
];
