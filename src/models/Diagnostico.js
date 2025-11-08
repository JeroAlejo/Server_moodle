// Modelo Diagnostico.js utilizado para la Fase 1: Aprende 
const mongoose = require('mongoose');

// Modelo de preguntas de diagnóstico.
const preguntaSchema = new mongoose.Schema({
    id_pregunta: { type: Number, required: true },
    texto : { type: String, required: true },
    respuesta : { type: String, required: true },
});

// Esquema principal del diagnóstico.
const DiagnosticoSchema = new mongoose.Schema({
    id_estudiante: { type: Number, required: true },
    id_curso: { type: Number, required: true },
    preguntas: {type: [preguntaSchema], required: true}, // Array de preguntas de diagnóstico
    fecha_realizacion: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Diagnostico', DiagnosticoSchema);