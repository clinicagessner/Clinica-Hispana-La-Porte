import type { ServiceFaq } from "@/types";

/**
 * FAQs por servicio (clave = slug). Bilingüe. Se usan en la página de
 * detalle del servicio y para el JSON-LD FAQPage.
 */
export const SERVICE_FAQS: Record<string, ServiceFaq[]> = {
  "condiciones-cronicas": [
    {
      question: "¿Cada cuánto debo hacerme exámenes de control?",
      answer: "Depende de tu condición; por lo general cada 3 a 6 meses para diabetes, presión o colesterol. Te damos un plan de seguimiento personalizado.",
      questionEn: "How often should I get control labs?",
      answerEn: "It depends on your condition; usually every 3 to 6 months for diabetes, blood pressure or cholesterol. We give you a personalized follow-up plan.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "tiroides": [
    {
      question: "¿Qué prueba se usa para revisar la tiroides?",
      answer: "Usamos principalmente la TSH y, si es necesario, T3 y T4 para evaluar cómo funciona tu tiroides.",
      questionEn: "What test is used to check the thyroid?",
      answerEn: "We mainly use TSH and, if needed, T3 and T4 to evaluate how your thyroid is working.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "alergias": [
    {
      question: "¿Tratan alergias en la piel y respiratorias?",
      answer: "Sí, evaluamos y tratamos alergias respiratorias (rinitis, congestión) y de la piel (ronchas, comezón).",
      questionEn: "Do you treat both skin and respiratory allergies?",
      answerEn: "Yes, we evaluate and treat respiratory allergies (rhinitis, congestion) and skin allergies (hives, itching).",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "enfermedades-respiratorias": [
    {
      question: "¿Hacen prueba de flu y de COVID el mismo día?",
      answer: "Sí, hacemos pruebas rápidas de influenza y COVID y te damos el resultado y el tratamiento el mismo día.",
      questionEn: "Do you test for flu and COVID the same day?",
      answerEn: "Yes, we run rapid flu and COVID tests and give you the result and treatment the same day.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examen-fisico-escolar": [
    {
      question: "¿Llenan el formulario de la escuela, el equipo o el trabajo?",
      answer: "Sí. Trae el formulario de tu escuela, equipo deportivo o empleador y lo completamos durante la visita, el mismo día.",
      questionEn: "Do you fill out the school, team or employer form?",
      answerEn: "Yes. Bring your school, sports-team or employer form and we complete it during the visit, the same day.",
    },
    {
      question: "¿Hacen exámenes físicos para adultos?",
      answer: "Sí. Además de los físicos escolares y deportivos, hacemos exámenes físicos para el trabajo y chequeos anuales para adultos, con análisis de sangre y orina si los necesitas.",
      questionEn: "Do you do physical exams for adults?",
      answerEn: "Yes. Besides school and sports physicals, we do work physicals and annual checkups for adults, with blood and urine tests if needed.",
    },
    {
      question: "¿Necesito ir en ayunas?",
      answer: "Solo si te vas a hacer análisis de sangre como glucosa o colesterol. En ese caso ven con 8 a 10 horas de ayuno; puedes tomar agua. Para el físico escolar o deportivo no hace falta.",
      questionEn: "Do I need to fast?",
      answerEn: "Only if you're having blood work such as glucose or cholesterol. In that case, come after fasting 8 to 10 hours; water is fine. School and sports physicals don't require fasting.",
    },
    {
      question: "¿Cuánto cuesta el examen físico?",
      answer: "Tenemos precios accesibles y sin sorpresas; el costo depende de si necesitas laboratorio. Llámanos y te lo decimos antes de tu visita, o pregunta por el chequeo general completo por $99.",
      questionEn: "How much does the physical exam cost?",
      answerEn: "We offer affordable pricing with no surprises; the cost depends on whether you need lab work. Call us and we'll tell you before your visit, or ask about the $99 complete general checkup.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "ginecologia": [
    {
      question: "¿Cada cuánto debo hacerme el papanicolaou?",
      answer: "De los 21 a los 65 años, cada 3 años si el resultado es normal, o cada 5 años cuando se combina con la prueba de VPH después de los 30. Si nunca te lo has hecho, empieza hoy sin cita.",
      questionEn: "How often should I get a Pap smear?",
      answerEn: "From age 21 to 65, every 3 years if the result is normal, or every 5 years when combined with HPV testing after 30. If you have never had one, start today with no appointment.",
    },
    {
      question: "¿Puedo hacerme el papanicolaou si tengo la regla?",
      answer: "Es mejor esperar a que pase el sangrado abundante para que la muestra sea confiable. También evita relaciones, duchas vaginales y óvulos 48 horas antes.",
      questionEn: "Can I get a Pap smear during my period?",
      answerEn: "It is better to wait until heavy bleeding is over so the sample is reliable. Also avoid intercourse, douching and vaginal suppositories for 48 hours before.",
    },
    {
      question: "¿Cuánto tarda el resultado del papanicolaou?",
      answer: "Entre 1 y 2 semanas. Te avisamos cuando llegue y, si sale alterado, te lo explicamos con calma y organizamos el seguimiento.",
      questionEn: "How long do Pap smear results take?",
      answerEn: "1 to 2 weeks. We let you know when it arrives and, if it is abnormal, we explain it calmly and arrange follow-up.",
    },
    {
      question: "¿Tratan las infecciones vaginales el mismo día?",
      answer: "Sí. Tomamos el cultivo para saber si es hongos, vaginosis o tricomoniasis y en la mayoría de los casos empiezas el tratamiento en la misma visita. La promoción de salud íntima femenina por $69 incluye cultivo, consulta y examen de orina.",
      questionEn: "Do you treat vaginal infections the same day?",
      answerEn: "Yes. We take a culture to determine whether it is yeast, bacterial vaginosis or trichomoniasis, and in most cases you start treatment during the same visit. The $69 women's intimate health promotion includes the culture, consultation and urine test.",
    },
    {
      question: "¿Atienden a adolescentes y primeras consultas?",
      answer: "Sí. Atendemos desde la adolescencia; las menores de edad deben venir acompañadas por su madre, padre o tutor. Explicamos cada paso antes de hacerlo para que la primera consulta sea tranquila.",
      questionEn: "Do you see teenagers and first-time patients?",
      answerEn: "Yes. We see patients from adolescence on; minors must come with a parent or legal guardian. We explain each step before doing it so the first visit feels comfortable.",
    },
    {
      question: "¿Necesito cita o seguro para la consulta ginecológica?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM, y no necesitas seguro médico. Si prefieres, llámanos para reservar un horario y conocer el precio.",
      questionEn: "Do I need an appointment or insurance for a gynecology visit?",
      answerEn: "No. We see walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM, and no health insurance is needed. If you prefer, call us to reserve a time and ask about the price.",
    },
  ],
  "prueba-embarazo": [
    {
      question: "¿Cuándo puedo hacerme la prueba de embarazo?",
      answer: "La prueba de orina es confiable desde el primer día de retraso. Si quieres saberlo antes, la prueba de sangre detecta el embarazo entre 7 y 10 días después de la concepción.",
      questionEn: "When can I take a pregnancy test?",
      answerEn: "The urine test is reliable from the first day of a missed period. If you want to know sooner, the blood test detects pregnancy 7 to 10 days after conception.",
    },
    {
      question: "¿Es mejor la prueba de orina o la de sangre?",
      answer: "Las dos son confiables. La de orina es rápida y suficiente en la mayoría de los casos; la de sangre detecta antes y mide el nivel exacto de la hormona, útil en embarazos muy tempranos o si hay dolor o sangrado. El médico te orienta.",
      questionEn: "Is the urine or blood test better?",
      answerEn: "Both are reliable. The urine test is quick and enough in most cases; the blood test detects earlier and measures the exact hormone level, useful in very early pregnancies or if there is pain or bleeding. The physician guides you.",
    },
    {
      question: "¿Me dan el resultado el mismo día?",
      answer: "La prueba de orina se lee en minutos, en la misma visita. La de sangre suele estar lista en 24 horas y te avisamos por teléfono o en persona, como prefieras.",
      questionEn: "Do I get the result the same day?",
      answerEn: "The urine test is read in minutes, during the same visit. The blood test is usually ready within 24 hours and we notify you by phone or in person, whichever you prefer.",
    },
    {
      question: "¿Puedo confirmar el embarazo con ultrasonido ahí mismo?",
      answer: "Sí. A partir de la sexta semana hacemos el ultrasonido en la misma clínica para ver el saco, el latido y calcular la fecha probable de parto.",
      questionEn: "Can I confirm the pregnancy with an ultrasound there?",
      answerEn: "Yes. From the sixth week we do the ultrasound in the same clinic to see the sac and heartbeat and calculate your due date.",
    },
    {
      question: "¿La prueba es confidencial?",
      answer: "Sí. Se hace en un consultorio privado, el resultado solo se comparte contigo y, como pagas directamente sin seguro, no llega ningún documento a tu casa.",
      questionEn: "Is the test confidential?",
      answerEn: "Yes. It is done in a private exam room, the result is shared only with you and, since you pay directly without insurance, no paperwork is mailed to your home.",
    },
    {
      question: "¿Necesito cita y cuánto cuesta la prueba de embarazo?",
      answer: "No necesitas cita ni seguro. Atendemos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM; el precio es accesible y te lo confirmamos por teléfono.",
      questionEn: "Do I need an appointment and how much does the pregnancy test cost?",
      answerEn: "No appointment or insurance needed. We are open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM; the price is affordable and we confirm it by phone.",
    },
  ],
  "anticonceptivos": [
    {
      question: "¿Qué métodos anticonceptivos ofrecen?",
      answer: "Ofrecemos orientación, pastillas anticonceptivas e inyección, y te ayudamos a elegir el método adecuado para ti.",
      questionEn: "What contraceptive methods do you offer?",
      answerEn: "We offer guidance, birth control pills and the injection, and help you choose the right method for you.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "extraccion-implantes": [
    {
      question: "¿Duele la extracción del implante?",
      answer: "Se realiza con anestesia local, por lo que las molestias son mínimas. El procedimiento toma pocos minutos.",
      questionEn: "Does implant removal hurt?",
      answerEn: "It's done with local anesthesia, so discomfort is minimal. The procedure takes just a few minutes.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "salud-hombre": [
    {
      question: "¿Qué incluye el examen del hombre?",
      answer: "Incluye antígeno prostático (PSA), nivel de testosterona y un chequeo general, con resultados explicados en español.",
      questionEn: "What does the men's exam include?",
      answerEn: "It includes prostate antigen (PSA), testosterone level and a general checkup, with results explained in Spanish.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examenes-sangre": [
    {
      question: "¿Necesito ir en ayunas para el análisis de sangre?",
      answer: "Solo para glucosa, colesterol y triglicéridos: entre 8 y 12 horas sin comer, agua sí. Para A1C, tiroides, B12 o pruebas hormonales no hace falta ayunar. Si tienes dudas, llámanos antes de venir.",
      questionEn: "Do I need to fast for blood work?",
      answerEn: "Only for glucose, cholesterol and triglycerides: 8 to 12 hours without food, water is fine. A1C, thyroid, B12 or hormone tests do not require fasting. If in doubt, call us before you come.",
    },
    {
      question: "¿En cuánto tiempo están los resultados?",
      answer: "La mayoría de las pruebas de rutina están listas en 24 a 48 horas y algunas el mismo día. Cuando llegan, un médico los revisa contigo en español y te entrega tu copia impresa.",
      questionEn: "How soon are results ready?",
      answerEn: "Most routine tests are ready in 24 to 48 hours, and some the same day. When they arrive, a physician reviews them with you and gives you a printed copy.",
    },
    {
      question: "¿Necesito una orden médica para hacerme análisis?",
      answer: "No. Puedes pedir la prueba que necesitas directamente en la clínica. Si traes una orden de otro médico o de tu empleador, la seguimos tal cual; si no, nuestro médico te orienta sobre qué pruebas te convienen.",
      questionEn: "Do I need a doctor's order for lab tests?",
      answerEn: "No. You can request the test you need directly at the clinic. If you bring an order from another doctor or your employer we follow it as written; otherwise our physician helps you choose the right tests.",
    },
    {
      question: "¿Cuánto cuesta un análisis de sangre sin seguro?",
      answer: "Depende de las pruebas. Tenemos paquetes con precio fijo, como el chequeo general completo por $99 con sangre, A1C, orina y consulta incluida, y cada prueba también se puede hacer por separado. Te damos el precio exacto antes de tomar la muestra.",
      questionEn: "How much does blood work cost without insurance?",
      answerEn: "It depends on the tests. We have flat-price packages, such as the complete general checkup for $99 with blood panel, A1C, urine test and consultation included, and every test can also be ordered separately. We give you the exact price before drawing your sample.",
    },
    {
      question: "¿Puedo hacerme los análisis el fin de semana y sin cita?",
      answer: "Sí. Tomamos muestras sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. Si vas a venir en ayunas, lo más cómodo es llegar temprano.",
      questionEn: "Can I get blood work on the weekend without an appointment?",
      answerEn: "Yes. We draw samples with no appointment Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. If you are fasting, coming early is the most comfortable option.",
    },
    {
      question: "¿Me explican los resultados aunque no tenga seguro?",
      answer: "Sí. La explicación con el médico es parte del servicio. Si algo sale fuera de rango, iniciamos el tratamiento o el seguimiento en la misma visita.",
      questionEn: "Will someone explain my results even if I have no insurance?",
      answerEn: "Yes. The review with the physician is part of the service. If something is out of range, we start treatment or follow-up during the same visit.",
    },
  ],
  "infecciones-urinarias": [
    {
      question: "¿Puedo recibir tratamiento el mismo día?",
      answer: "Sí, hacemos el examen de orina y, si hay infección, iniciamos el tratamiento el mismo día.",
      questionEn: "Can I get treatment the same day?",
      answerEn: "Yes, we run the urine test and, if there's an infection, we start treatment the same day.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examen-heces": [
    {
      question: "¿Cómo se toma la muestra de heces?",
      answer: "Te entregamos un recipiente e instrucciones claras para recolectar la muestra en casa y traerla a la clínica.",
      questionEn: "How is the stool sample collected?",
      answerEn: "We give you a container and clear instructions to collect the sample at home and bring it to the clinic.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "prueba-strep": [
    {
      question: "¿Cuánto tarda el resultado del strep test?",
      answer: "La prueba rápida de estreptococo da resultado en pocos minutos durante tu visita.",
      questionEn: "How long does the strep test take?",
      answerEn: "The rapid strep test gives a result in just a few minutes during your visit.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "prueba-tuberculosis": [
    {
      question: "¿Cuánto tarda la prueba de tuberculosis?",
      answer: "La aplicación toma menos de cinco minutos. Debes regresar entre 48 y 72 horas después para la lectura, que también es rápida, y ahí mismo te entregamos el resultado por escrito.",
      questionEn: "How long does the TB test take?",
      answerEn: "Placement takes less than five minutes. You return 48 to 72 hours later for the reading, which is also quick, and you get the written result right there.",
    },
    {
      question: "¿Qué pasa si no regreso a tiempo para la lectura?",
      answer: "La prueba pierde validez y hay que aplicarla de nuevo. Como abrimos los 7 días, te damos una fecha de lectura que te quede cómoda antes de que te vayas.",
      questionEn: "What if I miss the reading window?",
      answerEn: "The test becomes invalid and has to be placed again. Since we are open 7 days a week, we give you a convenient reading date before you leave.",
    },
    {
      question: "¿Me puedo bañar o trabajar con la prueba puesta?",
      answer: "Sí. Báñate con normalidad y haz tu vida diaria. Solo evita rascar la zona, tallarla con fuerza o cubrirla con curita o crema.",
      questionEn: "Can I shower or work with the test in place?",
      answerEn: "Yes. Shower normally and go about your day. Just avoid scratching the area, rubbing it hard or covering it with a bandage or cream.",
    },
    {
      question: "Tuve la vacuna BCG de niño, ¿la prueba me saldrá positiva?",
      answer: "Puede dar una reacción positiva aunque no tengas la infección. Dínoslo desde el inicio: el médico interpreta el resultado con ese dato y te orienta sobre los pasos a seguir, incluida una radiografía de tórax si hace falta.",
      questionEn: "I had the BCG vaccine as a child. Will my test be positive?",
      answerEn: "It can cause a positive reaction even without infection. Tell us at the start: the physician interprets the result with that in mind and guides you on next steps, including a chest X-ray if needed.",
    },
    {
      question: "¿Hacen la prueba de TB de dos pasos?",
      answer: "Sí. Aplicamos la primera prueba, la leemos, y si es negativa programamos la segunda entre una y tres semanas después, con su propia lectura, tal como piden hospitales y agencias de cuidado.",
      questionEn: "Do you do two-step TB testing?",
      answerEn: "Yes. We place the first test, read it, and if it is negative we schedule the second one to three weeks later with its own reading, just as hospitals and home-care agencies require.",
    },
    {
      question: "¿Necesito cita o seguro para la prueba de tuberculosis?",
      answer: "No. Ven sin cita de lunes a sábado de 9 AM a 9 PM o domingo de 9 AM a 7 PM. No hace falta seguro médico y el precio es fijo; llámanos para confirmarlo.",
      questionEn: "Do I need an appointment or insurance for the TB test?",
      answerEn: "No. Walk in Monday to Saturday from 9 AM to 9 PM or Sunday from 9 AM to 7 PM. No health insurance needed and the price is flat; call us to confirm it.",
    },
  ],
  "enfermedades-transmision-sexual": [
    {
      question: "¿Las pruebas de ETS son confidenciales?",
      answer: "Sí. La consulta es en un consultorio privado, el resultado solo se comparte contigo y, como pagas directamente sin seguro, no llega ninguna carta de aseguradora a tu casa.",
      questionEn: "Is STD testing confidential?",
      answerEn: "Yes. The visit is in a private exam room, the result is shared only with you and, since you pay directly without insurance, no insurer letter arrives at your home.",
    },
    {
      question: "¿Qué pruebas incluye el panel de ETS?",
      answer: "Clamidia, gonorrea, sífilis, VIH y hepatitis B y C; en mujeres se puede agregar cultivo para tricomoniasis, vaginosis y candidiasis. También puedes hacerte solo las pruebas que te preocupan.",
      questionEn: "What does the STD panel include?",
      answerEn: "Chlamydia, gonorrhea, syphilis, HIV and hepatitis B and C; for women a culture for trichomoniasis, bacterial vaginosis and yeast can be added. You can also order only the tests you are concerned about.",
    },
    {
      question: "¿Cuánto tardan los resultados?",
      answer: "La mayoría están listos en 2 a 3 días y algunos antes. Te avisamos por teléfono o en persona, como prefieras, y te explicamos qué significa cada uno.",
      questionEn: "How long do results take?",
      answerEn: "Most are ready in 2 to 3 days and some sooner. We notify you by phone or in person, whichever you prefer, and explain what each one means.",
    },
    {
      question: "¿Cuánto tiempo después del contacto puedo hacerme la prueba?",
      answer: "Clamidia y gonorrea se detectan de 1 a 2 semanas después, sífilis de 3 a 6 semanas y VIH de 2 a 6 semanas según la prueba. Si vienes antes, te hacemos lo que ya es válido y te decimos cuándo repetir el resto.",
      questionEn: "How soon after exposure can I get tested?",
      answerEn: "Chlamydia and gonorrhea are detectable 1 to 2 weeks after, syphilis 3 to 6 weeks and HIV 2 to 6 weeks depending on the test. If you come earlier, we run what is already valid and tell you when to repeat the rest.",
    },
    {
      question: "Si salgo positivo, ¿me dan el tratamiento ahí mismo?",
      answer: "En la mayoría de los casos sí: iniciamos los antibióticos en la misma visita y los tienes en nuestra farmacia. Para VIH o hepatitis te referimos con un especialista y te acompañamos.",
      questionEn: "If I test positive, do I get treatment right there?",
      answerEn: "In most cases yes: we start antibiotics during the same visit and you can get them at our pharmacy. For HIV or hepatitis we refer you to a specialist and support you.",
    },
    {
      question: "¿Debe hacerse la prueba mi pareja también?",
      answer: "Sí, es lo recomendable. Si tú sales positivo, tu pareja debe evaluarse y tratarse aunque no tenga síntomas; de lo contrario la infección puede volver. Pueden venir juntos o por separado.",
      questionEn: "Should my partner get tested too?",
      answerEn: "Yes, that is the recommendation. If you test positive, your partner should be evaluated and treated even without symptoms; otherwise the infection can come back. You can come together or separately.",
    },
  ],
  "examen-alcohol-drogas": [
    {
      question: "¿Pueden hacer la prueba de drogas y el examen físico el mismo día?",
      answer: "Sí. Si tu empleador pide ambos, hacemos la prueba de drogas y el examen físico para el trabajo en una sola visita, sin cita.",
      questionEn: "Can you do the drug test and the physical exam the same day?",
      answerEn: "Yes. If your employer requires both, we do the drug test and the work physical in a single walk-in visit.",
    },
    {
      question: "¿Entregan documentación para el trabajo?",
      answer: "Sí, te entregamos la documentación del resultado para tu empleador o trámite.",
      questionEn: "Do you provide documentation for work?",
      answerEn: "Yes, we give you documentation of the result for your employer or paperwork.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "electrocardiograma": [
    {
      question: "¿El electrocardiograma duele?",
      answer: "No, es un estudio rápido y sin dolor; solo se colocan electrodos en la piel por unos minutos.",
      questionEn: "Does the EKG hurt?",
      answerEn: "No, it's a fast, painless test; electrodes are simply placed on the skin for a few minutes.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "ultrasonido": [
    {
      question: "¿Necesito orden médica para hacerme un ultrasonido?",
      answer: "No. Puedes venir directamente y el médico de la clínica evalúa qué estudio necesitas. Si traes una orden de otro doctor, la seguimos y le enviamos el reporte.",
      questionEn: "Do I need a doctor's order for an ultrasound?",
      answerEn: "No. You can come directly and the clinic physician determines which exam you need. If you bring an order from another doctor, we follow it and send them the report.",
    },
    {
      question: "¿Cuándo me dan los resultados del ultrasonido?",
      answer: "En la misma visita. El médico interpreta el estudio en el momento, te muestra las imágenes y te entrega el reporte escrito.",
      questionEn: "When do I get the ultrasound results?",
      answerEn: "During the same visit. The physician interprets the study on the spot, shows you the images and gives you the written report.",
    },
    {
      question: "¿Desde qué semana se ve el embarazo en el ultrasonido?",
      answer: "Alrededor de la sexta semana suele verse el saco gestacional y poco después el latido. Si es muy temprano, te indicamos cuándo repetirlo.",
      questionEn: "How early can a pregnancy be seen on ultrasound?",
      answerEn: "Around the sixth week the gestational sac is usually visible, with the heartbeat shortly after. If it is very early, we tell you when to repeat it.",
    },
    {
      question: "¿Cómo me preparo para un ultrasonido abdominal?",
      answer: "Ven con 6 a 8 horas de ayuno para que la vesícula se vea bien; puedes tomar agua. Para el pélvico o de embarazo temprano necesitas la vejiga llena.",
      questionEn: "How do I prepare for an abdominal ultrasound?",
      answerEn: "Come after fasting 6 to 8 hours so the gallbladder shows clearly; water is fine. For a pelvic or early-pregnancy ultrasound you need a full bladder.",
    },
    {
      question: "¿El ultrasonido es seguro durante el embarazo?",
      answer: "Sí. No usa radiación ni duele; usa ondas de sonido, por eso es el estudio de rutina en el embarazo y se puede repetir cuando haga falta.",
      questionEn: "Is ultrasound safe during pregnancy?",
      answerEn: "Yes. It uses no radiation and does not hurt; it works with sound waves, which is why it is the routine exam in pregnancy and can be repeated whenever needed.",
    },
    {
      question: "¿Cuánto cuesta un ultrasonido sin seguro?",
      answer: "El precio es fijo y depende del tipo de estudio. Llámanos y te lo decimos antes de tu visita; no necesitas seguro ni cita, atendemos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM.",
      questionEn: "How much does an ultrasound cost without insurance?",
      answerEn: "The price is flat and depends on the type of exam. Call us and we tell you before your visit; no insurance or appointment needed, we are open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM.",
    },
  ],
  "examen-dot": [
    {
      question: "¿Qué debo traer al examen DOT?",
      answer: "Tu licencia de conducir vigente, lentes o audífonos si los usas y la lista de tus medicamentos. Si tienes presión alta, diabetes o apnea del sueño, trae tus últimos resultados para agilizar el certificado.",
      questionEn: "What should I bring to the DOT exam?",
      answerEn: "Your valid driver's license, glasses or hearing aids if you use them, and your medication list. If you have high blood pressure, diabetes or sleep apnea, bring your latest results to speed up the certificate.",
    },
    {
      question: "¿Me entregan el certificado DOT el mismo día?",
      answer: "Sí, al terminar el examen físico DOT te entregamos tu certificado el mismo día.",
      questionEn: "Do I get the DOT certificate the same day?",
      answerEn: "Yes, after the DOT physical we give you your certificate the same day.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "examenes-inmigracion": [
    {
      question: "¿El examen de inmigración incluye examen físico?",
      answer: "Sí. El I-693 incluye un examen físico completo, revisión de vacunas, prueba de tuberculosis y las demás pruebas que exige USCIS. Todo se hace en la clínica.",
      questionEn: "Does the immigration exam include a physical exam?",
      answerEn: "Yes. The I-693 includes a complete physical exam, vaccine review, tuberculosis test and the other tests USCIS requires. Everything is done at the clinic.",
    },
    {
      question: "¿El médico está autorizado por USCIS?",
      answer: "Sí, el examen lo realiza un médico autorizado (civil surgeon) y te entregamos el Formulario I-693 sellado.",
      questionEn: "Is the doctor authorized by USCIS?",
      answerEn: "Yes, the exam is performed by an authorized civil surgeon and we give you the sealed Form I-693.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "vacunas": [
    {
      question: "¿Cuándo debo ponerme la vacuna de la flu?",
      answer: "Lo ideal es en septiembre u octubre, antes de que empiece la temporada de gripe en Houston, pero sirve hasta la primavera. La protección tarda unas dos semanas en desarrollarse y hay que repetirla cada año.",
      questionEn: "When should I get my flu shot?",
      answerEn: "Ideally in September or October, before flu season starts in Houston, but it is still useful through spring. Protection takes about two weeks to develop and the shot must be repeated every year.",
    },
    {
      question: "¿Cada cuánto necesito el refuerzo del tétanos?",
      answer: "Cada 10 años. Si tienes una herida sucia o profunda y pasaron más de 5 años desde tu última dosis, conviene ponerte el refuerzo dentro de las primeras 48 horas.",
      questionEn: "How often do I need a tetanus booster?",
      answerEn: "Every 10 years. If you have a dirty or deep wound and more than 5 years have passed since your last dose, you should get the booster within the first 48 hours.",
    },
    {
      question: "¿La vacuna de la influenza me puede dar gripe?",
      answer: "No. La vacuna no contiene virus vivo. Puedes sentir dolor en el brazo, cansancio leve o unas décimas de fiebre uno o dos días; eso es la respuesta normal del cuerpo, no gripe.",
      questionEn: "Can the flu shot give me the flu?",
      answerEn: "No. The vaccine contains no live virus. You may feel a sore arm, mild tiredness or a slight fever for a day or two; that is your body's normal response, not the flu.",
    },
    {
      question: "¿Vacunan a niños?",
      answer: "Aplicamos la vacuna de la influenza a niños y adultos; para menores de 3 años llámanos antes para confirmar disponibilidad de la dosis pediátrica. Los menores deben venir con su padre, madre o tutor.",
      questionEn: "Do you vaccinate children?",
      answerEn: "We give the flu vaccine to children and adults; for kids under 3, call ahead to confirm the pediatric dose is in stock. Minors must come with a parent or legal guardian.",
    },
    {
      question: "¿Me dan comprobante para el trabajo o la escuela?",
      answer: "Sí. Te entregamos un comprobante con la vacuna aplicada, la fecha y el lote, y si traes el formulario de tu empleador o escuela lo llenamos en la misma visita.",
      questionEn: "Will I get proof of vaccination for work or school?",
      answerEn: "Yes. You receive a record with the vaccine given, the date and the lot number, and if you bring your employer or school form we fill it out during the same visit.",
    },
    {
      question: "¿Necesito cita o seguro para vacunarme?",
      answer: "Ninguno de los dos. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM, con precio fijo que te confirmamos por teléfono.",
      questionEn: "Do I need an appointment or insurance to get vaccinated?",
      answerEn: "Neither. We see walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM, at a flat price we can confirm by phone.",
    },
  ],
  "sueros-vitaminados": [
    {
      question: "¿Cuánto dura una sesión de suero vitaminado?",
      answer: "Entre 30 y 60 minutos de infusión, más unos minutos de evaluación antes y de observación después. En total calcula alrededor de una hora.",
      questionEn: "How long does a vitamin drip session take?",
      answerEn: "30 to 60 minutes of infusion, plus a few minutes of evaluation before and observation after. Plan on about an hour in total.",
    },
    {
      question: "¿Cada cuánto puedo ponerme un suero?",
      answer: "Depende de tu objetivo. Para deshidratación o malestar puntual basta con una sesión; como apoyo de energía algunas personas lo repiten cada 2 a 4 semanas. El médico te recomienda la frecuencia adecuada en la evaluación.",
      questionEn: "How often can I get a drip?",
      answerEn: "It depends on your goal. For dehydration or a one-time slump a single session is enough; as an energy support some people repeat it every 2 to 4 weeks. The physician recommends the right frequency during the evaluation.",
    },
    {
      question: "¿Duele la aplicación del suero?",
      answer: "Solo el piquete inicial, parecido a una toma de sangre. Durante la infusión puedes sentir un poco de frío en el brazo, pero no dolor.",
      questionEn: "Does the IV hurt?",
      answerEn: "Only the initial poke, similar to a blood draw. During the infusion you may feel a little coolness in the arm, but no pain.",
    },
    {
      question: "¿Sirve el suero para la resaca o cruda?",
      answer: "Sí. Rehidrata rápido y, si hace falta, incluimos medicamento para las náuseas y el dolor de cabeza. La mayoría de las personas se sienten mejor al terminar la sesión.",
      questionEn: "Does a drip help with a hangover?",
      answerEn: "Yes. It rehydrates quickly and, if needed, we include medication for nausea and headache. Most people feel better by the end of the session.",
    },
    {
      question: "¿Puedo ponerme un suero si estoy embarazada o tengo problemas de riñón?",
      answer: "Debes comentarlo antes. El médico evalúa tu caso y decide si es seguro y qué componentes usar; en insuficiencia renal o cardíaca puede no ser recomendable.",
      questionEn: "Can I get a drip if I am pregnant or have kidney problems?",
      answerEn: "You must mention it first. The physician evaluates your case and decides whether it is safe and which ingredients to use; with kidney or heart failure it may not be advisable.",
    },
    {
      question: "¿Necesito cita y cuánto cuesta?",
      answer: "No necesitas cita ni seguro. El precio es fijo según el suero; llámanos para confirmarlo. Atendemos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM.",
      questionEn: "Do I need an appointment and how much does it cost?",
      answerEn: "No appointment or insurance needed. The price is flat depending on the drip; call us to confirm it. We are open Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM.",
    },
  ],
  "suturas-heridas": [
    {
      question: "¿Atienden heridas sin cita?",
      answer: "Sí, atendemos cortes y heridas sin cita previa; entre más pronto, menor el riesgo de infección.",
      questionEn: "Do you treat wounds without an appointment?",
      answerEn: "Yes, we treat cuts and wounds on a walk-in basis; the sooner, the lower the risk of infection.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "curacion-heridas": [
    {
      question: "¿Hacen cambios de vendaje y seguimiento?",
      answer: "Sí, limpiamos, curamos y cambiamos los vendajes, y damos seguimiento hasta que la herida cicatrice.",
      questionEn: "Do you do dressing changes and follow-up?",
      answerEn: "Yes, we clean, treat and change the dressings, and follow up until the wound heals.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "cirugias-menores": [
    {
      question: "¿Qué cirugías menores realizan?",
      answer: "Realizamos extracción de lunares, quistes y lipomas, entre otros procedimientos ambulatorios con anestesia local.",
      questionEn: "What minor surgeries do you perform?",
      answerEn: "We perform removal of moles, cysts and lipomas, among other outpatient procedures with local anesthesia.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "drenaje-abscesos": [
    {
      question: "¿El drenaje de un absceso duele?",
      answer: "Se realiza con anestesia local para reducir las molestias y aliviar el dolor del absceso rápidamente.",
      questionEn: "Does abscess drainage hurt?",
      answerEn: "It's done with local anesthesia to reduce discomfort and quickly relieve the abscess pain.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "unas-encarnadas": [
    {
      question: "¿Cómo tratan la uña encarnada?",
      answer: "Con un procedimiento sencillo y anestesia local retiramos la porción encarnada para aliviar el dolor el mismo día.",
      questionEn: "How do you treat an ingrown toenail?",
      answerEn: "With a simple procedure and local anesthesia we remove the ingrown portion to relieve pain the same day.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
  "farmacia": [
    {
      question: "¿Puedo surtir mi receta en la clínica?",
      answer: "Sí, al terminar tu consulta surtimos tu receta en nuestra farmacia, sin tener que ir a otro lugar.",
      questionEn: "Can I fill my prescription at the clinic?",
      answerEn: "Yes, after your visit we fill your prescription at our pharmacy, with no need to go elsewhere.",
    },
    {
      question: "¿Necesito cita previa?",
      answer: "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 7 PM. También puedes llamarnos para reservar un horario.",
      questionEn: "Do I need an appointment?",
      answerEn: "No. We welcome walk-ins Monday to Saturday from 9 AM to 9 PM and Sunday from 9 AM to 7 PM. You can also call us to reserve a time.",
    },
    {
      question: "¿Atienden a pacientes sin seguro?",
      answer: "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita.",
      questionEn: "Do you accept patients without insurance?",
      answerEn: "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit.",
    },
  ],
};

/** FAQs de un servicio por slug (vacío si no tiene). */
export function getServiceFaqs(slug: string): ServiceFaq[] {
  return SERVICE_FAQS[slug] ?? [];
}
