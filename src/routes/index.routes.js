import { Router } from 'express';
import reporteRoutes from './reporte.routes.js';
import protocoloRoutes from './protocolo.routes.js';

const router = Router();

// Endpoint de health check para verificar que la API está funcionando
router.get('/health', async (req, res) => {
    try {
        // En una app real aquí se podrían chequear conexiones a BDD, etc.
        res.status(200).json({ status: 'ok' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

// Registrar rutas
router.use('/reportes', reporteRoutes);
router.use('/protocolos', protocoloRoutes);

export default router;
