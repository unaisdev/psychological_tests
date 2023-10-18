export const DATA_API = {
  categories: [
    {
      id: 1,
      name: 'Ansiedad',
      desc: 'Esta es la descripción de la categoría ansiedad',
      color: '#007acc', // Color Azul Claro
    },
    {
      id: 2,
      name: 'Depresión',
      desc: 'Esta es la descripción de la categoría depresión',
      color: '#005c99', // Variación más clara
    },
    {
      id: 3,
      name: 'Adicción',
      desc: 'Esta es la descripción de la categoría adicción',
      color: '#006ab7', // Variación más oscura
    },
    {
      id: 4,
      name: 'Estrés',
      desc: 'Descripción de la categoría de estrés',
      color: '#cc7a00', // Color complementario
    },
    {
      id: 5,
      name: 'Salud Mental',
      desc: 'Descripción de la categoría de salud mental',
      color: '#995c00', // Tonalidad complementaria
    },
    {
      id: 6,
      name: 'Autoestima',
      desc: 'Descripción de la categoría de autoestima',
      color: '#7a5200', // Otra tonalidad complementaria
    },
    {
      id: 7,
      name: 'Hábitos de Sueño',
      desc: 'Esta es la descripción de la categoría hábitos de sueño',
      color: '#0099cc', // Otra tonalidad complementaria
    },
    {
      id: 8,
      name: 'Relaciones Interpersonales',
      desc: 'Esta es la descripción de la categoría relaciones interpersonales',
      color: '#b70000', // Otra tonalidad complementaria
    },
  ],
  tests: [
    {
      id: 1,
      title: 'Ansiedad generalizada',
      category: 1,
      litle_desc: 'Responde a estas afirmaciones',
      desc: 'La ansiedad es una respuesta emocional que todos experimentamos en algún momento. Es una reacción natural del cuerpo ante situaciones que percibe como amenazantes. Sin embargo, cuando estos síntomas se intensifican o se prolongan, pueden afectar nuestra calidad de vida. Con el siguiente test, te invito a reflexionar sobre tus propias experiencias y emociones relacionadas con la ansiedad. Es fundamental entender que este test es meramente orientativo. No hay respuestas "correctas" o "incorrectas"; simplemente es una herramienta para que puedas identificar cómo te sientes en relación a ciertas situaciones. El resultado no debe ser interpretado como un diagnóstico clínico. Si te sientes identificado con varios de los ítems o tienes inquietudes sobre tu bienestar emocional, siempre es recomendable buscar la opinión y guía de un profesional. Si después de realizar el test sientes la necesidad de hablar o entender más sobre lo que estás experimentando, estoy aquí para ayudarte. Como psicólogo con experiencia en el tratamiento de la ansiedad, puedo ofrecerte un espacio seguro y confiable para explorar tus emociones y encontrar herramientas que te ayuden a mejorar tu bienestar. No dudes en contactarme y juntos trabajaremos hacia una vida más equilibrada y tranquila.',
      questions: [
        'A menudo me siento nervioso o inquieto.',
        'Tengo una sensación constante de peligro o catástrofe inminente.',
        'Mi corazón late más rápido de lo normal sin razón aparente.',
        'Me cuesta conciliar el sueño o permanecer dormido debido a pensamientos inquietantes.',
        'Me irrito con más facilidad que antes.',
        'Me siento constantemente fatigado o sin energía.',
        'A veces evito ciertas situaciones o lugares por miedo a tener un ataque de ansiedad.',
        'Tengo dificultades para concentrarme en tareas cotidianas.',
        'Siento temblores en mis manos o en otras partes del cuerpo.',
        'Experimento sensaciones de ahogo o falta de aire sin razón médica aparente.',
        'Siento un miedo irracional a situaciones que otros consideran normales.',
        'A menudo tengo pensamientos negativos que no puedo controlar.',
        'Siento náuseas o molestias en el estómago con regularidad.',
        'Me preocupo excesivamente por situaciones futuras o por problemas que podrían surgir.',
        'Siento tensión muscular o dolores en diferentes partes del cuerpo.',
        'Evito el contacto social por miedo a ser juzgado o a no saber cómo actuar.',
        'Siento mareos o desvanecimientos sin causa médica aparente.',
        'Tengo miedo constante de perder el control o de volverse loco.',
        'A menudo siento que no estoy conectado con la realidad o que las cosas a mi alrededor no son reales.',
        'Me sobresalto con facilidad ante ruidos o sorpresas inesperadas.',
      ],
      answers: {
        'Totalmente de acuerdo': 5,
        'Bastante de acuerdo': 3.75,
        'Ni de acuerdo ni en desacuerdo': 2.5,
        'Poco de acuerdo': 1.25,
        'Nada de acuerdo': 0.1,
      },
      results: {
        '0-25':
          'Tus niveles de ansiedad parecen estar en un rango bajo. Sin embargo, si tienes alguna inquietud, no dudes en buscar ayuda profesional.',
        '25-50':
          'Podrías estar experimentando algunos síntomas leves de ansiedad. Sería bueno reflexionar sobre tus emociones y considerar hablar con un especialista si sientes que esto afecta tu vida cotidiana.',
        '50-75':
          'Estás mostrando signos de ansiedad moderada. Es importante que busques apoyo y estrategias para manejar tus emociones. Considera la ayuda de un profesional.',
        '75-100':
          'Tus respuestas sugieren que estás experimentando niveles altos de ansiedad. Es fundamental que busques la ayuda de un profesional para abordar estos sentimientos y encontrar herramientas que te ayuden a mejorar tu bienestar.',
      },
    },
    {
      id: 2,
      title: 'Síntomas de Depresión',
      category: 2,
      litle_desc: 'Responde a estas afirmaciones',
      desc: 'La depresión es una condición médica que afecta tanto la mente como el cuerpo. Es más que sentirse triste por unos días. Aquellos que tienen depresión sienten una tristeza profunda o desesperanza que dura semanas, meses, o incluso más tiempo. Con este test, podrás reflexionar sobre tus propias experiencias y emociones relacionadas con la depresión. Es importante recordar que este test es solo orientativo y no debe ser interpretado como un diagnóstico clínico.',
      questions: [
        'Me siento desesperanzado y triste la mayor parte del tiempo.',
        'He perdido el interés en actividades que antes disfrutaba.',
        'Me es difícil dormir por la noche o me despierto muy temprano.',
        'Me siento constantemente cansado y sin energía.',
        'Mi apetito ha cambiado, he perdido o ganado peso sin razón aparente.',
        'Me resulta difícil concentrarme o tomar decisiones.',
        'Siento que no valgo nada y tengo una baja autoestima.',
        'He pensado en hacerme daño o en el suicidio.',
        'Me siento irritado o ansioso sin razón aparente.',
        'Evito socializar y me alejo de amigos y familiares.',
      ],
      answers: {
        'Totalmente de acuerdo': 5,
        'Bastante de acuerdo': 3.75,
        'Ni de acuerdo ni en desacuerdo': 2.5,
        'Poco de acuerdo': 1.25,
        'Nada de acuerdo': 0.1,
      },
      results: {
        '0-25':
          'Tus respuestas sugieren que tienes un bajo nivel de síntomas relacionados con la depresión. Sin embargo, si tienes alguna inquietud, siempre es bueno hablar con un especialista.',
        '25-50':
          'Podrías estar experimentando algunos síntomas leves de depresión. Es importante reflexionar sobre tus sentimientos y buscar apoyo si lo consideras necesario.',
        '50-75':
          'Estás mostrando signos de depresión moderada. Considera hablar con un profesional para discutir tus sentimientos.',
        '75-100':
          'Tus respuestas indican síntomas graves de depresión. Es crucial buscar ayuda profesional lo antes posible.',
      },
    },
    {
      id: 3,
      title: 'Tendencias Adictivas',
      category: 3,
      litle_desc: 'Responde a estas afirmaciones',
      desc: 'La adicción no siempre está relacionada con sustancias. Las personas también pueden desarrollar adicciones a actividades como el juego, la comida o el uso del internet. Este test te ayudará a reflexionar sobre tus hábitos y a identificar si podrías estar desarrollando comportamientos adictivos. Recuerda que este test es solo orientativo y no un diagnóstico clínico.',
      questions: [
        'Siento una necesidad constante de la sustancia/actividad.',
        'Aumenté la cantidad de la sustancia/actividad para sentir el mismo efecto que antes.',
        'Me siento mal si no consumo o realizo la actividad.',
        'He intentado reducir o dejar la sustancia/actividad sin éxito.',
        'Dedico mucho tiempo a conseguir, consumir o recuperarme de la sustancia/actividad.',
        'He dejado de hacer actividades que disfrutaba para consumir o realizar la actividad.',
        'He continuado con la sustancia/actividad a pesar de ser consciente de los problemas que me causa.',
      ],
      answers: {
        'Totalmente de acuerdo': 5,
        'Bastante de acuerdo': 3.75,
        'Ni de acuerdo ni en desacuerdo': 2.5,
        'Poco de acuerdo': 1.25,
        'Nada de acuerdo': 0.1,
      },
      results: {
        '0-25':
          'Tus respuestas sugieren que actualmente no muestras signos evidentes de comportamientos adictivos. Sin embargo, siempre es bueno ser consciente de tus hábitos.',
        '25-50':
          'Podrías estar mostrando algunos signos iniciales de un comportamiento adictivo. Reflexiona sobre tus hábitos y busca apoyo si lo consideras necesario.',
        '50-75':
          'Estás mostrando varios indicadores asociados con comportamientos adictivos. Es importante considerar la posibilidad de buscar apoyo profesional.',
        '75-100':
          'Tus respuestas sugieren fuertes indicadores de comportamiento adictivo. Es fundamental continuar que busques ayuda profesional para abordar estos hábitos y comportamientos. La adicción puede ser un problema serio que afecta todas las áreas de tu vida, pero con el apoyo adecuado, es posible encontrar el camino hacia la recuperación y una vida más equilibrada.',
      },
    },
    {
      id: 4,
      title: 'Calidad del Sueño',
      category: 7,
      litle_desc: 'Responde a estas afirmaciones',
      desc: 'La descripción de la prueba de calidad del sueño.',
      questions: [
        'Duermo entre 7-9 horas cada noche.',
        'Me despierto sintiéndome descansado o descansada la mayoría de los días.',
        'Tengo dificultades para conciliar el sueño o permanecer dormido.',
        'Uso dispositivos electrónicos en la cama antes de dormir.',
        'Me siento estresado o ansioso antes de acostarme.',
        'Bebo cafeína o alcohol poco antes de dormir.',
        'Tengo una rutina de relajación antes de acostarme.',
        'Duermo en un ambiente oscuro y silencioso.',
      ],
      answers: {
        'Todos los días': 5,
        'A menudo': 4,
        'A veces': 3,
        'Muy rara vez': 2,
        'En ningún momento': 1,
      },
      results: {
        '8-10': 'Tienes excelentes hábitos de sueño y calidad del sueño.',
        '11-14':
          'Tus hábitos de sueño son buenos, pero hay margen para la mejora.',
        '15-18':
          'Tienes hábitos de sueño promedio. Considera mejorar tu rutina de sueño.',
        '19-24':
          'Tus hábitos de sueño necesitan atención. Consulta a un profesional del sueño si tienes dificultades para dormir.',
      },
    },
    {
      id: 5,
      title: 'Relaciones Familiares',
      category: 8,
      litle_desc: 'Responde a estas afirmaciones',
      desc: 'La descripción de la prueba de relaciones familiares.',
      questions: [
        'Me siento cercano y conectado con mi familia.',
        'Tengo conflictos frecuentes con mi pareja o cónyuge.',
        'Me cuesta comunicarme eficazmente con mis hijos.',
        'Tengo dificultades para establecer límites saludables con mis familiares.',
        'Me siento apoyado por mi red familiar en momentos difíciles.',
        'Me siento estresado debido a conflictos familiares.',
        'Me cuesta perdonar a mis familiares por errores pasados.',
        'Me siento satisfecho con mis relaciones familiares en general.',
      ],
      answers: {
        'Totalmente de acuerdo': 5,
        'Bastante de acuerdo': 3.75,
        'Ni de acuerdo ni en desacuerdo': 2.5,
        'Poco de acuerdo': 1.25,
        'Nada de acuerdo': 0.1,
      },
      results: {
        '0-5': 'Tus relaciones familiares son saludables y sólidas.',
        '6-12':
          'Tienes algunas áreas de conflicto en tus relaciones familiares.',
        '13-20':
          'Estás experimentando problemas significativos en tus relaciones familiares.',
        '21-40':
          'Tus relaciones familiares están experimentando un estrés sustancial. Considera buscar apoyo profesional.',
      },
    },
    {
      id: 6,
      title: 'Niveles de Estrés',
      category: 4,
      litle_desc: 'Responde a estas afirmaciones',
      desc: 'El estrés es una reacción natural del cuerpo a situaciones desafiantes. Sin embargo, el estrés crónico puede tener efectos negativos en la salud mental y física. Con este test, puedes evaluar tus niveles de estrés y tomar medidas para reducirlo si es necesario. Recuerda que este test es orientativo y no reemplaza el consejo de un profesional de la salud.',
      questions: [
        'Me siento constantemente abrumado por mis responsabilidades.',
        'Tengo dificultades para relajarme y desconectar.',
        'Siento tensión en mi cuerpo, como dolor de cabeza o muscular, debido al estrés.',
        'Mis niveles de estrés afectan mi calidad de sueño.',
        'Me preocupo en exceso por el futuro.',
        'Tengo cambios de humor frecuentes debido al estrés.',
        'Soy propenso a ataques de ansiedad debido al estrés.',
        'He experimentado síntomas físicos relacionados con el estrés, como palpitaciones o sudoración excesiva.',
        'Me siento presionado para cumplir con expectativas poco realistas.',
        'Tengo dificultades para concentrarme debido al estrés.',
      ],
      answers: {
        'Totalmente de acuerdo': 5,
        'Bastante de acuerdo': 3.75,
        'Ni de acuerdo ni en desacuerdo': 2.5,
        'Poco de acuerdo': 1.25,
        'Nada de acuerdo': 0.1,
      },
      results: {
        '0-15':
          'Tienes niveles bajos de estrés y estás manejando bien las situaciones desafiantes.',
        '16-30':
          'Estás experimentando un nivel moderado de estrés. Considera estrategias para reducirlo.',
        '31-45':
          'Tus niveles de estrés son altos y pueden afectar tu bienestar. Busca formas de reducir el estrés.',
        '46-50':
          'Tienes niveles muy altos de estrés. Es importante buscar apoyo y aprender a manejar el estrés de manera más efectiva.',
      },
    },
    {
      id: 7,
      title: 'Autoestima y Confianza en Uno Mismo',
      category: 6,
      litle_desc:
        'Responde a las siguientes preguntas sobre tu autoestima y confianza en ti mismo',
      desc: 'La autoestima es una parte importante de tu bienestar emocional. Esta prueba te ayudará a evaluar tu nivel de autoestima y confianza en ti mismo. Responde honestamente y considera cómo te sientes en relación con cada pregunta.',
      questions: [
        '¿Te sientes seguro de ti mismo en la mayoría de las situaciones?',
        '¿Sueles pensar en tus errores pasados y sentirte mal contigo mismo?',
        '¿Sientes que tienes cualidades y habilidades únicas?',
        '¿Te preocupas constantemente por lo que otros piensan de ti?',
        '¿Te aceptas tal como eres, con tus virtudes y defectos?',
        '¿Tomas decisiones basadas en lo que es mejor para ti, en lugar de lo que otros esperan de ti?',
        '¿Te sientes capaz de enfrentar desafíos y superar obstáculos?',
        '¿Te comparas con otros con frecuencia y sientes que no estás a la altura?',
      ],
      answers: {
        'Si, siempre': 5,
        'Con frecuencia, sí': 3.75,
        'A veces, sí': 2.5,
        'Rara vez, no': 1.25,
        'Nunca lo hago': 0.1,
      },
      results: {
        '0-10':
          'Tienes una autoestima muy alta y una gran confianza en ti mismo.',
        '11-20':
          'Tu autoestima es saludable, pero aún puedes trabajar en la confianza en ti mismo.',
        '21-30':
          'Tu autoestima podría mejorar. Considera trabajar en tu confianza y autoaceptación.',
        '31-40':
          'Tienes una autoestima baja y podría ser un desafío en tu vida. Busca ayuda y apoyo para fortalecer tu autoestima.',
      },
    },
    {
      id: 9,
      title: 'Evaluación de Hábitos de Estudio',
      category: 5,
      litle_desc:
        'Responde a las siguientes preguntas sobre tus hábitos de estudio y productividad.',
      desc: 'Tus hábitos de estudio pueden tener un impacto significativo en tu rendimiento académico y en tu capacidad para retener información. Esta prueba te ayudará a evaluar tus hábitos de estudio actuales. Sé sincero al responder y considera cómo puedes mejorar tu enfoque en el aprendizaje.',
      questions: [
        '¿Tienes un lugar de estudio tranquilo y libre de distracciones?',
        '¿Estableces un horario regular para tus sesiones de estudio?',
        '¿Realizas resúmenes o esquemas para organizar la información?',
        '¿Haces pausas regulares durante el estudio para descansar?',
        '¿Prestas atención a tu dieta y sueño para mantener tu energía?',
        '¿Te sientes motivado y comprometido con tus metas de estudio?',
        '¿Utilizas diferentes recursos, como libros y recursos en línea?',
        '¿Eres capaz de concentrarte durante períodos de tiempo prolongados?',
      ],
      answers: {
        'Sí, siempre': 5,
        'Con frecuencia': 3.75,
        'A veces': 2.5,
        'Rara vez, no': 1.25,
        'Nunca lo hago': 0.1,
      },
      results: {
        '0-10': 'Tienes excelentes hábitos de estudio y productividad.',
        '11-20':
          'Tus hábitos de estudio son buenos, pero siempre hay margen para la mejora.',
        '21-30':
          'Puedes mejorar tus hábitos de estudio. Considera hacer cambios para ser más efectivo en tu aprendizaje.',
        '31-40':
          'Tus hábitos de estudio actuales podrían estar afectando tu rendimiento académico. Busca formas de mejorar y aumentar tu productividad.',
      },
    },
  ],
};
