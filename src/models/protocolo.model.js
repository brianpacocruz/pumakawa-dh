let protocolos = [
  {
    id: 'prot-001',
    tipoEvento: 'Avistamiento',
    titulo: 'Qué hacer ante un avistamiento',
    descripcion: 'Pasos a seguir cuando se observa un puma a la distancia de manera casual.',
    pasosSeguridad: [
      'No corras, mantén la calma',
      'Hazte ver más grande (levanta los brazos)',
      'Retrocede lentamente sin dar la espalda',
      'No te agaches ni intentes esconderte'
    ],
    colorAlerta: 'Amarillo'
  },
  {
    id: 'prot-002',
    tipoEvento: 'Ataque al ganado',
    titulo: 'Protocolo de mitigación de daños',
    descripcion: 'Cómo actuar y qué evidencia preservar si un puma atacó ganado en el establecimiento.',
    pasosSeguridad: [
      'No contamines la escena del ataque',
      'Toma fotografías de las huellas y del animal atacado',
      'Guarda a los animales sobrevivientes en corrales seguros',
      'Comunícate con las autoridades de fauna locales'
    ],
    colorAlerta: 'Naranja'
  },
  {
    id: 'prot-003',
    tipoEvento: 'Puma herido',
    titulo: 'Atención a puma herido',
    descripcion: 'Precauciones extremas al encontrar un animal herido, ya que son más impredecibles.',
    pasosSeguridad: [
      'Mantén una distancia mínima de 50 metros',
      'No intentes curar o asistir al animal por tu cuenta',
      'Avisa inmediatamente a Policía Ambiental o Guardaparques',
      'Advierte a otras personas en la zona para que no se acerquen'
    ],
    colorAlerta: 'Rojo'
  }
];

export const protocoloModel = {
  findAll: async () => {
    return protocolos;
  },

  findById: async (id) => {
    return protocolos.find(p => p.id === id);
  },

  create: async (nuevoProtocolo) => {
    protocolos.push(nuevoProtocolo);
    return nuevoProtocolo;
  },

  update: async (id, datosActualizados) => {
    const index = protocolos.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    protocolos[index] = { ...protocolos[index], ...datosActualizados };
    return protocolos[index];
  },

  delete: async (id) => {
    const index = protocolos.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    const protocoloEliminado = protocolos[index];
    protocolos = protocolos.filter(p => p.id !== id);
    return protocoloEliminado;
  }
};
