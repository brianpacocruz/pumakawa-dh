import { protocoloModel } from '../models/protocolo.model.js';
import crypto from 'crypto';

export const protocoloController = {
  getAll: async (req, res) => {
    try {
      const protocolos = await protocoloModel.findAll();
      res.status(200).json({ success: true, data: protocolos });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al obtener los protocolos', error: error.message });
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const protocolo = await protocoloModel.findById(id);
      
      if (!protocolo) {
        return res.status(404).json({ success: false, message: 'Protocolo no encontrado' });
      }
      
      res.status(200).json({ success: true, data: protocolo });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al obtener el protocolo', error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      const body = req.body;
      
      const nuevoProtocolo = {
        id: crypto.randomUUID(),
        ...body
      };

      const creado = await protocoloModel.create(nuevoProtocolo);
      res.status(201).json({ success: true, data: creado });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al crear el protocolo', error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      
      const actualizado = await protocoloModel.update(id, body);
      
      if (!actualizado) {
        return res.status(404).json({ success: false, message: 'Protocolo no encontrado' });
      }
      
      res.status(200).json({ success: true, data: actualizado });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al actualizar el protocolo', error: error.message });
    }
  },

  remove: async (req, res) => {
    try {
      const { id } = req.params;
      
      const eliminado = await protocoloModel.delete(id);
      
      if (!eliminado) {
        return res.status(404).json({ success: false, message: 'Protocolo no encontrado' });
      }
      
      res.status(200).json({ success: true, message: 'Protocolo eliminado con éxito', data: eliminado });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error al eliminar el protocolo', error: error.message });
    }
  }
};
