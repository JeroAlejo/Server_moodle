//Importar modelos
const AprendeFormativa = require('../models/AprendeFormativa');

// Lista de frases de práctica
const frases_practica = [
    "He detectado que cuentas con una gran habilidad en programación, por lo que te recomiendo empezar con los difíciles.",
    "Tu desempeño en las pruebas muestra un excelente dominio de los conceptos básicos; intenta desafíos más avanzados.",
    "Basado en tus resultados, eres un programador talentoso. ¿Por qué no pruebas con problemas complejos?",
    "Excelente trabajo en las evaluaciones. Tu habilidad sugiere que estás listo para niveles superiores.",
    "Detecto una fuerte aptitud para la lógica de programación. Te sugiero abordar tareas más exigentes.",
    "Tus puntuaciones indican un alto nivel de competencia. Prueba con ejercicios difíciles para seguir creciendo.",
    "Eres muy hábil en este tema. Recomiendo que te enfrentes a los retos más complicados.",
    "Tu rendimiento es impresionante. Para mejorar aún más, intenta con los problemas avanzados.",
    "Con tus habilidades actuales, estás preparado para desafíos mayores. ¡Adelante!",
    "Excelente capacidad detectada. Te propongo empezar con los ejercicios más difíciles."
];

// Falta implementar la respuesta a Moodle

//Controlador de aprendeformativa
const aprendeformativaController = {};

// Metodo para registrar el envio de pruebas formativas.
aprendeformativaController.registrarPruebasFormativas = async (req, res) => {
    try {
        console.log('Datos recibidos desde Moodle para pruebas formativas:', JSON.stringify(req.body, null, 2));


        const { userid, courseid, evaluations } = req.body;
        // Crear un registro de pruebas formativas.
        const nuevasPruebasFormativas = new AprendeFormativa({
            userid,
            courseid,
            evaluations
        });

        // Guardar las pruebas formativas.
        await nuevasPruebasFormativas.save();

        // Seleccionar una frase aleatoria y responder
        const fraseAleatoria = frases_practica[Math.floor(Math.random() * frases_practica.length)];
        console.log('Mensaje enviado:', fraseAleatoria);
        res.status(200).json({ message: fraseAleatoria });
    }catch (error) {
        console.error('Error al registrar las pruebas formativas:', error);
        res.status(500).json({message: 'Error al registrar las pruebas formativas'});
    }
};

module.exports = aprendeformativaController;
