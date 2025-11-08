const express = require('express');
const router = express.Router();

const {
    registrarPruebasFormativas
} = require('../controllers/aprendeformativa.controller');

// Ruta para registrar las pruebas formativas (POST)
router.post('/', registrarPruebasFormativas);

module.exports = router;