import type { ServiceFaq } from "@/types";

/**
 * FAQs por servicio (clave = slug). Bilingüe. Se usan en la página de
 * detalle del servicio y para el JSON-LD FAQPage.
 */
export const SERVICE_FAQS: Record<string, ServiceFaq[]> = {
  "medicina-familiar": [
    {
      question: "¿Necesito cita para una consulta de medicina familiar?",
      answer:
        "No. Atendemos sin cita previa de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment for a family medicine visit?",
      answerEn:
        "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a niños y adultos?",
      answer:
        "Sí, brindamos atención de medicina familiar para todas las edades, desde niños hasta adultos mayores.",
      questionEn: "Do you treat both children and adults?",
      answerEn:
        "Yes, we provide family medicine care for all ages, from children to older adults.",
    },
    {
      question: "¿Aceptan pacientes sin seguro?",
      answer:
        "Sí. Atendemos a pacientes con o sin seguro, con precios accesibles y transparentes.",
      questionEn: "Do you accept patients without insurance?",
      answerEn:
        "Yes. We see patients with or without insurance, with affordable and transparent pricing.",
    },
  ],
  "examenes-inmigracion": [
    {
      question: "¿El médico está autorizado por USCIS?",
      answer:
        "Sí, el examen lo realiza un médico autorizado (civil surgeon) y te entregamos el Formulario I-693 sellado.",
      questionEn: "Is the doctor authorized by USCIS?",
      answerEn:
        "Yes, the exam is performed by an authorized physician (civil surgeon) and we give you the sealed Form I-693.",
    },
    {
      question: "¿Qué debo llevar a mi examen de inmigración?",
      answer:
        "Identificación con foto y tu registro de vacunas si lo tienes. Cualquier documento médico relevante también ayuda.",
      questionEn: "What should I bring to my immigration exam?",
      answerEn:
        "Photo ID and your vaccination record if you have it. Any relevant medical documents also help.",
    },
    {
      question: "¿Aplican las vacunas requeridas?",
      answer:
        "Sí, aplicamos las vacunas que te falten para cumplir con los requisitos de USCIS el mismo día.",
      questionEn: "Do you administer the required vaccines?",
      answerEn:
        "Yes, we administer any missing vaccines to meet USCIS requirements the same day.",
    },
  ],
  "enfermedades-transmision-sexual": [
    {
      question: "¿Las pruebas son confidenciales?",
      answer:
        "Totalmente. Tu información y tus resultados son privados y te atendemos sin juicios.",
      questionEn: "Is the testing confidential?",
      answerEn:
        "Completely. Your information and results are private, and we care for you without judgment.",
    },
    {
      question: "¿Cuánto tardan los resultados?",
      answer:
        "Depende de la prueba, pero muchas ofrecen resultados rápidos. Te indicamos los tiempos en tu visita.",
      questionEn: "How long do results take?",
      answerEn:
        "It depends on the test, but many offer fast results. We'll let you know the timing at your visit.",
    },
    {
      question: "¿Ofrecen tratamiento si salgo positivo?",
      answer:
        "Sí, si el resultado es positivo iniciamos el tratamiento y te damos orientación en español.",
      questionEn: "Do you offer treatment if I test positive?",
      answerEn:
        "Yes, if the result is positive we start treatment and give you guidance in Spanish.",
    },
  ],
  urologia: [
    {
      question: "¿Atienden problemas urinarios de hombres y mujeres?",
      answer:
        "Sí, evaluamos y tratamos problemas del tracto urinario tanto en hombres como en mujeres.",
      questionEn: "Do you treat urinary issues in both men and women?",
      answerEn:
        "Yes, we evaluate and treat urinary-tract issues in both men and women.",
    },
    {
      question: "¿Cuándo debo ver al médico por un problema urinario?",
      answer:
        "Si tienes ardor al orinar, ganas frecuentes, dolor en la espalda baja o cambios en la orina, agenda una evaluación.",
      questionEn: "When should I see the doctor for a urinary problem?",
      answerEn:
        "If you have burning when urinating, frequent urges, lower-back pain or changes in your urine, schedule an evaluation.",
    },
    {
      question: "¿La atención es en español?",
      answer: "Sí, todo nuestro equipo te atiende en español.",
      questionEn: "Is care provided in Spanish?",
      answerEn: "Yes, our entire team cares for you in Spanish.",
    },
  ],
  "condiciones-cronicas": [
    {
      question: "¿Cada cuánto debo ir a control?",
      answer:
        "Depende de tu condición, pero solemos recomendar seguimiento regular para ajustar el tratamiento. Lo definimos contigo.",
      questionEn: "How often should I come in for follow-up?",
      answerEn:
        "It depends on your condition, but we usually recommend regular follow-up to adjust treatment. We'll define it with you.",
    },
    {
      question: "¿Hacen los análisis de laboratorio en la clínica?",
      answer:
        "Sí, contamos con laboratorio y en la mayoría de los casos entregamos resultados el mismo día.",
      questionEn: "Do you do lab work in the clinic?",
      answerEn:
        "Yes, we have a lab and in most cases deliver results the same day.",
    },
    {
      question: "¿Me ayudan con el plan de alimentación?",
      answer:
        "Sí, te damos orientación de alimentación y hábitos como parte del control de tu condición.",
      questionEn: "Do you help with a nutrition plan?",
      answerEn:
        "Yes, we provide nutrition and lifestyle guidance as part of managing your condition.",
    },
  ],
  laboratorio: [
    {
      question: "¿Necesito ayuno para mis análisis?",
      answer:
        "Algunos estudios requieren ayuno y otros no. Llámanos o pregúntanos y te indicamos cómo prepararte.",
      questionEn: "Do I need to fast for my lab tests?",
      answerEn:
        "Some tests require fasting and others don't. Call or ask us and we'll tell you how to prepare.",
    },
    {
      question: "¿Cuándo tendré mis resultados?",
      answer:
        "En la mayoría de los casos entregamos resultados el mismo día y te los explicamos en español.",
      questionEn: "When will I get my results?",
      answerEn:
        "In most cases we deliver results the same day and explain them in Spanish.",
    },
    {
      question: "¿Puedo ir sin cita al laboratorio?",
      answer:
        "Sí, puedes venir sin cita de lunes a domingo de 9 AM a 9 PM.",
      questionEn: "Can I walk in to the lab?",
      answerEn:
        "Yes, you can come without an appointment Monday to Sunday from 9 AM to 9 PM.",
    },
  ],
  ultrasonido: [
    {
      question: "¿El ultrasonido es seguro durante el embarazo?",
      answer:
        "Sí. El ultrasonido no usa radiación, por lo que es seguro durante el embarazo.",
      questionEn: "Is ultrasound safe during pregnancy?",
      answerEn:
        "Yes. Ultrasound uses no radiation, so it is safe during pregnancy.",
    },
    {
      question: "¿Necesito preparación para el estudio?",
      answer:
        "Depende del tipo de ultrasonido. Te damos las indicaciones específicas al agendar tu estudio.",
      questionEn: "Do I need to prepare for the study?",
      answerEn:
        "It depends on the type of ultrasound. We give you specific instructions when you schedule.",
    },
    {
      question: "¿Qué tipos de ultrasonido realizan?",
      answer:
        "Realizamos ultrasonido abdominal, pélvico, de embarazo y de tejidos blandos, entre otros.",
      questionEn: "What types of ultrasound do you perform?",
      answerEn:
        "We perform abdominal, pelvic, pregnancy and soft-tissue ultrasounds, among others.",
    },
  ],
  ginecologia: [
    {
      question: "¿Cada cuánto debo hacerme el papanicolaou?",
      answer:
        "La frecuencia depende de tu edad e historial. En tu consulta te indicamos lo más adecuado para ti.",
      questionEn: "How often should I get a Pap smear?",
      answerEn:
        "The frequency depends on your age and history. At your visit we'll advise what's best for you.",
    },
    {
      question: "¿La atención es privada y en español?",
      answer:
        "Sí, te atendemos con total privacidad y respeto, y siempre en español.",
      questionEn: "Is care private and in Spanish?",
      answerEn:
        "Yes, we care for you with complete privacy and respect, always in Spanish.",
    },
    {
      question: "¿Atienden sin seguro?",
      answer:
        "Sí, atendemos a pacientes con o sin seguro y con precios accesibles.",
      questionEn: "Do you see patients without insurance?",
      answerEn:
        "Yes, we see patients with or without insurance and with affordable pricing.",
    },
  ],
  "planificacion-familiar": [
    {
      question: "¿Qué métodos ofrecen?",
      answer:
        "Te orientamos sobre los distintos métodos disponibles para que elijas el que mejor se adapte a ti.",
      questionEn: "What methods do you offer?",
      answerEn:
        "We guide you through the different available methods so you choose the one that best fits you.",
    },
    {
      question: "¿La consulta es confidencial?",
      answer:
        "Sí, tu consulta es privada y te atendemos sin juicios y en español.",
      questionEn: "Is the consultation confidential?",
      answerEn:
        "Yes, your visit is private and we care for you without judgment, in Spanish.",
    },
    {
      question: "¿Necesito cita?",
      answer:
        "Puedes venir sin cita o llamarnos para reservar un horario que te convenga.",
      questionEn: "Do I need an appointment?",
      answerEn:
        "You can walk in or call us to reserve a time that works for you.",
    },
  ],
  "vacunas-anticonceptivas": [
    {
      question: "¿Cada cuánto se aplica la inyección?",
      answer:
        "Según el tipo de inyección, se aplica en un intervalo determinado. Te recordamos la fecha de tu próxima dosis.",
      questionEn: "How often is the injection given?",
      answerEn:
        "Depending on the type, it's given at a set interval. We remind you of your next dose date.",
    },
    {
      question: "¿Necesito una evaluación antes?",
      answer:
        "Sí, hacemos una evaluación breve para confirmar que el método es adecuado para ti.",
      questionEn: "Do I need an evaluation first?",
      answerEn:
        "Yes, we do a brief evaluation to confirm the method is right for you.",
    },
    {
      question: "¿Atienden sin cita?",
      answer:
        "Sí, puedes venir sin cita de lunes a domingo de 9 AM a 9 PM.",
      questionEn: "Do you take walk-ins?",
      answerEn:
        "Yes, you can come without an appointment Monday to Sunday from 9 AM to 9 PM.",
    },
  ],
  "extraccion-implantes": [
    {
      question: "¿El procedimiento es doloroso?",
      answer:
        "Se realiza con anestesia local, por lo que las molestias son mínimas. Te explicamos cada paso.",
      questionEn: "Is the procedure painful?",
      answerEn:
        "It's done with local anesthesia, so discomfort is minimal. We explain every step.",
    },
    {
      question: "¿Cuánto tiempo toma?",
      answer:
        "El retiro suele tomar pocos minutos y es un procedimiento ambulatorio.",
      questionEn: "How long does it take?",
      answerEn:
        "Removal usually takes just a few minutes and is an outpatient procedure.",
    },
    {
      question: "¿Puedo cambiar de método el mismo día?",
      answer:
        "Te orientamos sobre tus opciones de planificación para los próximos pasos según tu caso.",
      questionEn: "Can I switch methods the same day?",
      answerEn:
        "We guide you on your family-planning options and next steps based on your case.",
    },
  ],
  electrocardiograma: [
    {
      question: "¿El electrocardiograma duele?",
      answer:
        "No. Es un estudio rápido, sin dolor y sin riesgos. Solo se colocan unos sensores en la piel.",
      questionEn: "Does the electrocardiogram hurt?",
      answerEn:
        "No. It's a quick, painless, risk-free study. Only a few sensors are placed on the skin.",
    },
    {
      question: "¿Cuándo se recomienda un EKG?",
      answer:
        "Ante palpitaciones, presión alta, molestias en el pecho o como parte de un examen médico completo.",
      questionEn: "When is an EKG recommended?",
      answerEn:
        "For palpitations, high blood pressure, chest discomfort or as part of a complete medical exam.",
    },
    {
      question: "¿Entregan resultados el mismo día?",
      answer:
        "Sí, el estudio es rápido y te explicamos los resultados en español en tu visita.",
      questionEn: "Do you give same-day results?",
      answerEn:
        "Yes, the study is quick and we explain your results in Spanish at your visit.",
    },
  ],
  "enfermedades-respiratorias": [
    {
      question: "¿Atienden gripe y tos sin cita?",
      answer:
        "Sí, te recibimos sin cita para diagnosticar y tratar tus síntomas el mismo día.",
      questionEn: "Do you treat flu and cough without an appointment?",
      answerEn:
        "Yes, we see you without an appointment to diagnose and treat your symptoms the same day.",
    },
    {
      question: "¿Cuándo debo preocuparme por una tos?",
      answer:
        "Si la tos no mejora, hay fiebre alta o dificultad para respirar, es mejor que te evaluemos.",
      questionEn: "When should I worry about a cough?",
      answerEn:
        "If the cough doesn't improve, there's a high fever or trouble breathing, it's best to get evaluated.",
    },
    {
      question: "¿Tratan también alergias respiratorias?",
      answer:
        "Sí, evaluamos y tratamos alergias respiratorias e infecciones de garganta y senos nasales.",
      questionEn: "Do you also treat respiratory allergies?",
      answerEn:
        "Yes, we evaluate and treat respiratory allergies and throat and sinus infections.",
    },
  ],
  "infecciones-urinarias": [
    {
      question: "¿Tratan la infección el mismo día?",
      answer:
        "Sí, hacemos una prueba de orina y empezamos el tratamiento el mismo día de tu visita.",
      questionEn: "Do you treat the infection the same day?",
      answerEn:
        "Yes, we do a urine test and start treatment the same day of your visit.",
    },
    {
      question: "¿Cuáles son los síntomas de una infección urinaria?",
      answer:
        "Ardor al orinar, ganas frecuentes, orina turbia o con mal olor y dolor en la parte baja del abdomen.",
      questionEn: "What are the symptoms of a urinary infection?",
      answerEn:
        "Burning when urinating, frequent urges, cloudy or foul-smelling urine and lower-abdomen pain.",
    },
    {
      question: "¿Necesito cita?",
      answer: "No, puedes venir sin cita de 9 AM a 9 PM todos los días.",
      questionEn: "Do I need an appointment?",
      answerEn: "No, you can walk in from 9 AM to 9 PM every day.",
    },
  ],
  "infecciones-vaginales": [
    {
      question: "¿La consulta es discreta?",
      answer:
        "Sí, te atendemos con total privacidad y respeto, y en español.",
      questionEn: "Is the visit discreet?",
      answerEn:
        "Yes, we care for you with complete privacy and respect, in Spanish.",
    },
    {
      question: "¿Tratan la infección el mismo día?",
      answer:
        "En la mayoría de los casos identificamos la causa y te damos tratamiento el mismo día.",
      questionEn: "Do you treat the infection the same day?",
      answerEn:
        "In most cases we identify the cause and give you treatment the same day.",
    },
    {
      question: "¿Cuándo debo consultar?",
      answer:
        "Ante comezón, ardor, flujo diferente o mal olor, lo mejor es una evaluación para un tratamiento correcto.",
      questionEn: "When should I see a doctor?",
      answerEn:
        "With itching, burning, unusual discharge or odor, an evaluation ensures the right treatment.",
    },
  ],
  "examen-dot": [
    {
      question: "¿Entregan el certificado DOT el mismo día?",
      answer:
        "Sí, realizamos el examen y te entregamos tu certificado médico DOT el mismo día.",
      questionEn: "Do you give the DOT certificate the same day?",
      answerEn:
        "Yes, we perform the exam and give you your DOT medical certificate the same day.",
    },
    {
      question: "¿Qué incluye el examen DOT?",
      answer:
        "Revisión de visión y audición, presión arterial, examen físico y revisión de tu historial médico.",
      questionEn: "What does the DOT exam include?",
      answerEn:
        "Vision and hearing screening, blood pressure, physical exam and a review of your medical history.",
    },
    {
      question: "¿Sirve para renovar la licencia CDL?",
      answer:
        "Sí, el examen es válido para obtener o renovar tu licencia comercial CDL.",
      questionEn: "Is it valid to renew a CDL license?",
      answerEn:
        "Yes, the exam is valid to obtain or renew your CDL commercial license.",
    },
  ],
  "examenes-generales": [
    {
      question: "¿Hacen exámenes para el trabajo y la escuela?",
      answer:
        "Sí, realizamos exámenes físicos para trabajo, escuela y deportes, con los formularios completados.",
      questionEn: "Do you do work and school exams?",
      answerEn:
        "Yes, we perform physical exams for work, school and sports, with the forms completed.",
    },
    {
      question: "¿Cuánto tarda el examen físico?",
      answer:
        "Es un proceso rápido. En la mayoría de los casos sales el mismo día con tus formularios listos.",
      questionEn: "How long does the physical exam take?",
      answerEn:
        "It's a quick process. In most cases you leave the same day with your forms ready.",
    },
    {
      question: "¿Necesito cita?",
      answer:
        "Puedes venir sin cita o llamarnos para reservar el horario que prefieras.",
      questionEn: "Do I need an appointment?",
      answerEn:
        "You can walk in or call us to reserve the time you prefer.",
    },
  ],
  "dolores-musculares": [
    {
      question: "¿Qué tipo de dolores atienden?",
      answer:
        "Atendemos dolor de espalda, cuello, hombros y dolor muscular por esfuerzo, golpes o tensión.",
      questionEn: "What kind of pain do you treat?",
      answerEn:
        "We treat back, neck and shoulder pain, and muscle pain from strain, blows or tension.",
    },
    {
      question: "¿Me refieren a un especialista si es necesario?",
      answer:
        "Sí, si tu caso lo requiere te damos una referencia a un especialista.",
      questionEn: "Will you refer me to a specialist if needed?",
      answerEn:
        "Yes, if your case requires it we provide a referral to a specialist.",
    },
    {
      question: "¿Atienden sin cita?",
      answer:
        "Sí, puedes venir sin cita de lunes a domingo de 9 AM a 9 PM.",
      questionEn: "Do you take walk-ins?",
      answerEn:
        "Yes, you can come without an appointment Monday to Sunday from 9 AM to 9 PM.",
    },
  ],
  farmacia: [
    {
      question: "¿Puedo recoger mis medicamentos en la misma clínica?",
      answer:
        "Sí. Al terminar tu consulta puedes surtir tu receta en nuestra farmacia, sin tener que ir a otro lugar.",
      questionEn: "Can I pick up my medications at the clinic?",
      answerEn:
        "Yes. Right after your visit you can fill your prescription at our pharmacy, without going anywhere else.",
    },
    {
      question: "¿Tienen medicamentos de marca y genéricos?",
      answer:
        "Sí, manejamos medicamentos de marca y genéricos, además de productos de venta libre (OTC) para gripe, dolor, alergias y más.",
      questionEn: "Do you carry brand-name and generic medications?",
      answerEn:
        "Yes, we carry brand-name and generic medications, plus over-the-counter (OTC) products for colds, pain, allergies and more.",
    },
    {
      question: "¿Me explican cómo tomar mis medicamentos?",
      answer:
        "Claro. Nuestro personal te explica en español la dosis, los horarios y los cuidados de cada medicamento.",
      questionEn: "Will you explain how to take my medications?",
      answerEn:
        "Of course. Our staff explains the dosage, schedule and precautions for each medication in Spanish.",
    },
  ],
};

export function getServiceFaqs(slug: string): ServiceFaq[] {
  return SERVICE_FAQS[slug] ?? [];
}
