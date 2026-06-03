import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/index.routes.js';
import notFoundMiddleware from './middlewares/notFound.middleware.js';

const app = express();

// Configuración de middlewares
// Habilita peticiones cruzadas (CORS)
app.use(cors());
// Parsea el cuerpo de las peticiones a JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Montaje de rutas
// Todas las rutas de indexRoutes tendrán el prefijo /api
app.use('/api', indexRoutes);

// Manejo de rutas no encontradas (404)
app.use(notFoundMiddleware);

export default app;
