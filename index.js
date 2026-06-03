import app from './src/app.js';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const PORT = process.env.PORT || 3000;

// Función asíncrona para iniciar el servidor
const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Error al levantar el servidor:', error);
        process.exit(1);
    }
};

startServer();
