const express = require('express');
const router = express.Router();

const {
    registrarRetroalimentacionVPL
} = require('../controllers/retroalimentacionvpl.controller');

// Ruta para registrar las pruebas formativas (POST)
router.post('/', registrarRetroalimentacionVPL);

module.exports = router;