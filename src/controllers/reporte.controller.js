import { reporteModel } from '../models/reporte.model.js';
import crypto from 'crypto'; // Para generar IDs (usando randomUUID de Node)

export const reporteController = {
  getAll: async (req, res) => {
    try {
      const reportes = await reporteModel.findAll();
      res.status(200).json({ success: true, data: reportes });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al obtener los reportes', error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const reporte = await reporteModel.findById(id);
      
      if (!reporte) {
        return res.status(404).json({ success: false, message: 'Reporte no encontrado' });
      }
      
      res.status(200).json({ success: true, data: reporte });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al obtener el reporte', error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const body = req.body;
      
      // Hardcodeando el userId como se solicitó para esta etapa
      const nuevoReporte = {
        id: crypto.randomUUID(),
        userId: 'user-123',
        ...body,
        estado: body.estado || 'Pendiente de validación',
        fecha: body.fecha || new Date().toISOString()
      };

      const creado = await reporteModel.create(nuevoReporte);
      res.status(201).json({ success: true, data: creado });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al crear el reporte', error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      
      // En una implementación real, aquí validaríamos que el reporte le pertenece al usuario o que es admin
      // const userId = 'user-123'; // Simulación de usuario autenticado
      
      const actualizado = await reporteModel.update(id, body);
      
      if (!actualizado) {
        return res.status(404).json({ success: false, message: 'Reporte no encontrado' });
      }
      
      res.status(200).json({ success: true, data: actualizado });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al actualizar el reporte', error: error.message });
    }
  },

  remove: async (req, res) => {
    try {
      const { id } = req.params;
      
      const eliminado = await reporteModel.delete(id);
      
      if (!eliminado) {
        return res.status(404).json({ success: false, message: 'Reporte no encontrado' });
      }
      
      res.status(200).json({ success: true, message: 'Reporte eliminado con éxito', data: eliminado });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al eliminar el reporte', error: error.message });
    }
  }
};
