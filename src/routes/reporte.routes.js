import { Router } from 'express';
import { reporteController } from '../controllers/reporte.controller.js';

const router = Router();

// Rutas para Reportes
router.get('/', reporteController.getAll);
router.get('/:id', reporteController.getById);
router.post('/', reporteController.create);
router.put('/:id', reporteController.update);
router.delete('/:id', reporteController.remove);

export default router;
