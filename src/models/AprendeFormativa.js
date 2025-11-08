// Modelo Diagnostico.js utilizado para la Fase 1: Aprende 
const mongoose = require('mongoose');

// Modelo de preguntas de evaluaciones formativas.
const preguntaSchema = new mongoose.Schema({
    questionid: { type: Number, required: true },
    text : { type: String, required: true },
    answer_user : { type: String, required: true },
    answer_correct : { type: String, required: true },
});

// Modelo de Pruebas formativas.
const PruebasSchema = new mongoose.Schema({
    testid: { type: Number, required: true },
    name: { type: String, required: true },
    score: { type: Number, required: true }, // Double
    questions: {type: [preguntaSchema], required: true}, // Array de preguntas de diagnóstico
});

const aprendeFormativaSchema = new mongoose.Schema({

    userid : { type: Number, required: true },
    courseid : { type: Number, required: true },
    evaluations : {type: [PruebasSchema], required: true}// Array de pruebas formativas
});

module.exports = mongoose.model('AprendeFormativa', aprendeFormativaSchema);