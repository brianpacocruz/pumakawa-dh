import { Router } from 'express';
import { protocoloController } from '../controllers/protocolo.controller.js';

const router = Router();

// Rutas para Protocolos
router.get('/', protocoloController.getAll);
router.get('/:id', protocoloController.getById);
router.post('/', protocoloController.create);
router.put('/:id', protocoloController.update);
router.delete('/:id', protocoloController.remove);

export default router;
