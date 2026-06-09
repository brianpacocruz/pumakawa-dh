let reportes = [
  {
    id: 'rep-001',
    userId: 'user-123',
    tipoEvento: 'Avistamiento',
    latitud: -31.4201,
    longitud: -64.1888,
    direccion: 'Córdoba Capital, cerca del río',
    fotoUrl: 'https://example.com/foto1.jpg',
    descripcion: 'Puma joven visto al atardecer',
    nombreContacto: 'Juan Pérez',
    contacto: 'juan@example.com',
    estado: 'Validado',
    fecha: '2023-10-15T18:30:00Z'
  },
  {
    id: 'rep-002',
    userId: 'user-456',
    tipoEvento: 'Rastros o huellas',
    latitud: -31.4322,
    longitud: -64.1950,
    direccion: 'Reserva Natural',
    fotoUrl: 'https://example.com/foto2.jpg',
    estado: 'Pendiente de validación',
    fecha: '2023-10-20T08:15:00Z'
  },
  {
    id: 'rep-003',
    userId: 'user-123',
    tipoEvento: 'Puma herido',
    latitud: -31.4150,
    longitud: -64.1800,
    direccion: 'Ruta 9, km 15',
    fotoUrl: 'https://example.com/foto3.jpg',
    descripcion: 'Se observó puma cojeando cerca de la ruta',
    nombreContacto: 'María Gómez',
    contacto: '3511234567',
    estado: 'Descartado',
    fecha: '2023-10-25T14:45:00Z'
  }
];

export const reporteModel = {
  findAll: async () => {
    return reportes;
  },

  findById: async (id) => {
    return reportes.find(r => r.id === id);
  },

  create: async (nuevoReporte) => {
    reportes.push(nuevoReporte);
    return nuevoReporte;
  },

  update: async (id, datosActualizados) => {
    const index = reportes.findIndex(r => r.id === id);
    if (index === -1) return null;
    
    reportes[index] = { ...reportes[index], ...datosActualizados };
    return reportes[index];
  },

  delete: async (id) => {
    const index = reportes.findIndex(r => r.id === id);
    if (index === -1) return null;
    
    const reporteEliminado = reportes[index];
    reportes = reportes.filter(r => r.id !== id);
    return reporteEliminado;
  }
};
