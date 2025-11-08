const express = require('express');
const router = express.Router();
const {
  registrarDiagnostico

} = require('../controllers/diagnostico.controller');

// Ruta para crear un nuevo diagnóstico (POST)
router.post('/', registrarDiagnostico);

module.exports = router;