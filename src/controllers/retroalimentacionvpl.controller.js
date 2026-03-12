// Controlador para manejar las solicitudes de retroalimentación VPL
exports.registrarRetroalimentacionVPL = (req, res) => {
    console.log('Datos recibidos:', req.body);
    res.status(200).send('Datos recibidos correctamente');
};