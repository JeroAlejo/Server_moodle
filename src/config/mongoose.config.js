// config/moongose.config.js
const mongoose = require('mongoose');

// Función para obtener el string de conexión basado en el nombre de la base de datos
const getConnectionString = (dbName) => `mongodb://127.0.0.1:27017/${dbName}`;


//Conectar a la base de datos guiDB
const connectDB = async () => {
    try {
        await mongoose.connect(getConnectionString('guiaDB'), {
            serverSelectionTimeoutMS: 5000, // Timeout en caso de que el servidor no responda
        });
        console.log('Conectado a la base de datos guiDB');
    } catch (err) {
        console.error('Error al conectar a la base de datos guiDB:', err);
        process.exit(1); // Salir de la app si la conexión falla
    }
}

module.exports = connectDB;