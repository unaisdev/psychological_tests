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
      answers: [
        {question: 'Poco de acuerdo', value: 1},
        {question: 'Nada de acuerdo', value: 2},
        {question: 'Ni de acuerdo ni en desacuerdo', value: 3},
        {question: 'Bastante de acuerdo', value: 4},
        {question: 'Totalmente de acuerdo', value: 5},
      ],
      results: [
        {
          baremo: '0-25',
          message:
            'Tus niveles de ansiedad parecen estar en un rango bajo. Sin embargo, si tienes alguna inquietud, no dudes en buscar ayuda profesional.',
        },
        {
          baremo: '25-50',
          message:
            'Podrías estar experimentando algunos síntomas leves de ansiedad. Sería bueno reflexionar sobre tus emociones y considerar hablar con un especialista si sientes que esto afecta tu vida cotidiana.',
        },
        {
          baremo: '50-75',
          message:
            'Estás mostrando signos de ansiedad moderada. Es importante que busques apoyo y estrategias para manejar tus emociones. Considera la ayuda de un profesional.',
        },
        {
          baremo: '75-100',
          message:
            'Tus respuestas sugieren que estás experimentando niveles altos de ansiedad. Es fundamental que busques la ayuda de un profesional para abordar estos sentimientos y encontrar herramientas que te ayuden a mejorar tu bienestar.',
        },
      ],
    },
  ],
};
