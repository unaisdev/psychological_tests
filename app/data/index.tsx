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
    {
      id: 2,
      title: 'Depresión',
      category: 2,
      litle_desc: 'Responde a estas afirmaciones',
      desc: 'La depresión es una condición de salud mental que afecta a millones de personas en todo el mundo. Este test te ayudará a reflexionar sobre tus emociones y sentimientos relacionados con la depresión. Recuerda que este test es orientativo y no sustituye la evaluación de un profesional de la salud mental.',
      questions: [
        'A menudo me siento triste sin razón aparente.',
        'Pierdo interés en actividades que antes disfrutaba.',
        'Experimento cambios significativos en mi apetito o peso.',
        'Me siento agotado y sin energía la mayor parte del tiempo.',
        'Tengo dificultades para concentrarme en tareas cotidianas.',
        'Siento que soy una carga para las personas que me rodean.',
        'Tengo pensamientos de autocrítica y baja autoestima.',
        'Experimento cambios en los patrones de sueño (insomnio o hipersomnia).',
        'Me siento desesperanzado sobre el futuro.',
        'A veces considero la posibilidad de hacerme daño a mí mismo.',
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
            'Tus niveles de depresión parecen estar en un rango bajo. Si tienes inquietudes, considera hablar con un profesional.',
        },
        {
          baremo: '25-50',
          message:
            'Podrías estar experimentando algunos síntomas leves de depresión. Consultar con un especialista puede ser beneficioso.',
        },
        {
          baremo: '50-75',
          message:
            'Estás mostrando signos de depresión moderada. Buscar apoyo profesional es importante.',
        },
        {
          baremo: '75-100',
          message:
            'Tus respuestas sugieren que estás experimentando niveles altos de depresión. Busca ayuda profesional para mejorar tu bienestar.',
        },
      ],
    },
    {
      id: 3,
      title: 'Adicción a las Redes Sociales',
      category: 3,
      litle_desc: 'Responde a estas afirmaciones',
      desc: 'La adicción a las redes sociales es un problema creciente en la sociedad moderna. Este test te ayudará a evaluar tu relación con las redes sociales y si podrías estar experimentando signos de adicción. Recuerda que este test es orientativo y no sustituye la evaluación de un profesional de la salud mental.',
      questions: [
        'Verifico mis redes sociales constantemente a lo largo del día.',
        'Me siento ansioso si no reviso mis redes sociales en un tiempo.',
        'Paso más tiempo en redes sociales que interactuando en persona.',
        'He descuidado responsabilidades importantes debido a las redes sociales.',
        'Me comparo constantemente con lo que veo en las redes sociales.',
        'Siento que mi autoestima se ve afectada por la cantidad de "me gusta" y comentarios que recibo.',
        'Me esfuerzo por crear una imagen perfecta de mi vida en redes sociales.',
        'Me siento en competencia con otras personas en términos de seguidores y popularidad.',
        'He perdido la noción del tiempo mientras navegaba en redes sociales.',
        'Mis relaciones personales se han visto afectadas debido a mi uso excesivo de redes sociales.',
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
            'Tu relación con las redes sociales parece saludable. Sigue siendo consciente de tu uso y mantenlo equilibrado.',
        },
        {
          baremo: '25-50',
          message:
            'Podrías estar experimentando algunos signos de adicción a las redes sociales. Reflexiona sobre tu uso y considera establecer límites.',
        },
        {
          baremo: '50-75',
          message:
            'Tus respuestas sugieren una adicción moderada a las redes sociales. Es importante buscar estrategias para reducir su impacto en tu vida.',
        },
        {
          baremo: '75-100',
          message:
            'Estás mostrando signos de adicción severa a las redes sociales. Busca apoyo y ayuda profesional para recuperar el equilibrio.',
        },
      ],
    },
    {
      id: 4,
      title: 'Autoestima',
      category: 6,
      litle_desc: 'Responde a estas afirmaciones',
      desc: 'La autoestima se refiere a cómo te valoras a ti mismo y a tu autoimagen. Este test te ayudará a reflexionar sobre tu autoestima y la forma en que te percibes a ti mismo. Recuerda que este test es orientativo y no sustituye la evaluación de un profesional de la salud mental.',
      questions: [
        'Siento que soy una persona valiosa y digna de amor y respeto.',
        'A menudo me critico y me siento inadecuado o inferior a los demás.',
        'Puedo aceptar los elogios y cumplidos de los demás con facilidad.',
        'Me comparo constantemente con otras personas y siento envidia de sus logros.',
        'Confío en mis habilidades y capacidades en la mayoría de las áreas de mi vida.',
        'Me siento incómodo al expresar mis opiniones o necesidades a los demás.',
        'Aprecio mis logros y éxitos personales, por pequeños que sean.',
        'Soy capaz de establecer límites saludables en mis relaciones personales.',
        'Me cuesta perdonarme por errores o fracasos pasados.',
        'Siento que merezco amor y cuidado de los demás.',
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
            'Tu autoestima parece ser alta y saludable. Continúa cultivando una imagen positiva de ti mismo.',
        },
        {
          baremo: '25-50',
          message:
            'Podrías tener algunos desafíos en tu autoestima. Trabajar en tu autoaceptación y autoestima es importante.',
        },
        {
          baremo: '50-75',
          message:
            'Estás mostrando signos de una autoestima moderada. Considera buscar apoyo para fortalecer tu autoimagen.',
        },
        {
          baremo: '75-100',
          message:
            'Tus respuestas sugieren una autoestima baja. Es esencial buscar ayuda para mejorar tu autoconcepto y bienestar emocional.',
        },
      ],
    },
    {
      id: 5,
      title: 'Hábitos de Sueño',
      category: 7,
      litle_desc: 'Responde a estas afirmaciones',
      desc: 'El sueño es fundamental para la salud y el bienestar. Este test te ayudará a evaluar tus hábitos de sueño y determinar si podrías estar experimentando problemas de sueño. Recuerda que este test es orientativo y no sustituye la evaluación de un profesional de la salud.',
      questions: [
        'Me despierto sintiéndome descansado y renovado la mayoría de las mañanas.',
        'Tengo dificultades para conciliar el sueño en la noche.',
        'Sufro de insomnio, despertándome en medio de la noche y teniendo dificultades para volver a dormir.',
        'Dedico tiempo para relajarme antes de acostarme, como leer o meditar.',
        'Uso dispositivos electrónicos (teléfono, tablet, computadora) justo antes de dormir.',
        'Mi horario de sueño es irregular, acostándome y despertándome a diferentes horas cada día.',
        'Consumo cafeína o alimentos pesados ​​antes de acostarme.',
        'Sufro de pesadillas o terrores nocturnos con frecuencia.',
        'Dormir durante el día afecta mi capacidad para dormir bien en la noche.',
        'Siento somnolencia excesiva durante el día.',
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
            'Tus hábitos de sueño parecen ser saludables. Sigue manteniendo un buen cuidado del sueño.',
        },
        {
          baremo: '25-50',
          message:
            'Podrías estar experimentando algunos problemas de sueño. Considera adoptar hábitos de sueño más saludables.',
        },
        {
          baremo: '50-75',
          message:
            'Estás mostrando signos de problemas moderados de sueño. Busca estrategias para mejorar la calidad de tu sueño.',
        },
        {
          baremo: '75-100',
          message:
            'Tus respuestas sugieren problemas graves de sueño. Consulta con un profesional para abordar tus dificultades de sueño.',
        },
      ],
    },
    {
      id: 6,
      title: 'Salud Mental',
      category: 5,
      litle_desc: 'Responde a estas afirmaciones',
      desc: 'La salud mental es esencial para el bienestar general. Este test te ayudará a reflexionar sobre tu estado de salud mental y cómo te sientes en relación a él. Recuerda que este test es orientativo y no sustituye la evaluación de un profesional de la salud mental.',
      questions: [
        'Me siento generalmente contento y satisfecho con mi vida.',
        'Soy capaz de manejar el estrés y las presiones cotidianas de manera efectiva.',
        'Tengo una red de apoyo de amigos y familiares en quienes puedo confiar.',
        'Puedo lidiar con desafíos emocionales y situaciones difíciles de manera saludable.',
        'Soy consciente de mis emociones y sé cómo expresarlas de manera adecuada.',
        'Cuido de mi bienestar emocional y busco ayuda cuando la necesito.',
        'Siento que tengo un propósito y metas en la vida.',
        'Soy resiliente y puedo recuperarme de adversidades emocionales.',
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
            'Tu salud mental parece ser fuerte y saludable. Continúa cuidándola y manteniendo un equilibrio emocional.',
        },
        {
          baremo: '25-50',
          message:
            'Podrías estar experimentando algunos desafíos emocionales. Reflexiona sobre tu bienestar mental y busca apoyo si es necesario.',
        },
        {
          baremo: '50-75',
          message:
            'Estás mostrando signos de salud mental moderada. Considera hablar con un profesional para fortalecer tu bienestar emocional.',
        },
        {
          baremo: '75-100',
          message:
            'Tus respuestas sugieren desafíos significativos en tu salud mental. Busca ayuda profesional para abordar tus necesidades emocionales.',
        },
      ],
    },
    {
      id: 7,
      title: 'Relaciones Interpersonales',
      category: 8,
      litle_desc: 'Responde a estas afirmaciones',
      desc: 'Las relaciones interpersonales desempeñan un papel crucial en nuestras vidas. Este test te ayudará a reflexionar sobre tus relaciones con los demás y cómo te sientes en relación a ellas. Recuerda que este test es orientativo y no sustituye la evaluación de un profesional de la salud mental.',
      questions: [
        'Disfruto de las interacciones sociales y me siento cómodo en compañía de otros.',
        'Tengo relaciones cercanas y significativas con amigos y familiares.',
        'Soy capaz de comunicarme de manera efectiva y resolver conflictos en mis relaciones.',
        'Siento que puedo confiar en las personas en mi vida.',
        'A menudo me siento solo o aislado de los demás.',
        'Tengo dificultades para establecer límites saludables en mis relaciones.',
        'Sufro de conflictos interpersonales frecuentes o relaciones tóxicas.',
        'Siento que carezco de apoyo emocional en mi vida.',
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
            'Tus relaciones interpersonales parecen ser saludables. Sigue fortaleciendo tus conexiones y comunicación con los demás.',
        },
        {
          baremo: '25-50',
          message:
            'Podrías estar experimentando algunos desafíos en tus relaciones. Reflexiona sobre tus interacciones y busca mejorar la calidad de tus conexiones interpersonales.',
        },
        {
          baremo: '50-75',
          message:
            'Estás mostrando signos de problemas moderados en tus relaciones interpersonales. Considera buscar apoyo para mejorar la calidad de tus conexiones con los demás.',
        },
        {
          baremo: '75-100',
          message:
            'Tus respuestas sugieren desafíos significativos en tus relaciones interpersonales. Busca ayuda profesional para abordar tus necesidades relacionadas con los demás.',
        },
      ],
    },
  ],
};
