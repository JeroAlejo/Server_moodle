//Importar modelos 
const AprendeFormativa = require('../models/AprendeFormativa');

// Falta implementar la respuesta a Moodle

//Controlador de aprendeformativa
const aprendeformativaController = {};

// Metodo para registrar el envio de pruebas formativas.
aprendeformativaController.registrarPruebasFormativas = async (req, res) => {
    try {
        console.log('Datos recibidos desde Moodle para pruebas formativas:', req.body);


        const { userid, courseid, evaluations } = req.body;
        // Crear un registro de pruebas formativas.
        const nuevasPruebasFormativas = new AprendeFormativa({
            userid,
            courseid,
            evaluations
        });

        // Guardar las pruebas formativas.
        await nuevasPruebasFormativas.save();

        // Simulacion de envio de rerspuesta POR DEFINIR 
    }catch (error) {
        console.error('Error al registrar las pruebas formativas:', error);
        res.status(500).json({message: 'Error al registrar las pruebas formativas'});
    }
};

module.exports = aprendeformativaController;
