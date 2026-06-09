import React, { useState } from 'react';
import { createReporte } from '../services/reporte.service';

const ReporteForm = ({ onReporteCreado }) => {
    const [formData, setFormData] = useState({
        tipoEvento: '',
        direccion: '',
        fotoUrl: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const newReporte = {
            ...formData,
            userId: 'user-123',
            latitud: -31.4201, // hardcoded a Córdoba Capital
            longitud: -64.1888 // hardcoded a Córdoba Capital
        };

        try {
            await createReporte(newReporte);
            setFormData({ tipoEvento: '', direccion: '', fotoUrl: '' });
            if (onReporteCreado) {
                onReporteCreado();
            }
        } catch (err) {
            setError(err.message || 'Error al crear el reporte');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ marginTop: 0 }}>Crear Nuevo Reporte</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
                    Tipo de Evento:
                    <select
                        name="tipoEvento"
                        value={formData.tipoEvento}
                        onChange={handleChange}
                        required
                        style={{ marginTop: '5px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    >
                        <option value="">Seleccione...</option>
                        <option value="Avistaje">Avistaje</option>
                        <option value="Ataque a ganado">Ataque a ganado</option>
                        <option value="Huellas/Rastros">Huellas/Rastros</option>
                    </select>
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
                    Dirección:
                    <input
                        type="text"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleChange}
                        required
                        placeholder="Ej. Ruta 38 km 45"
                        style={{ marginTop: '5px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold' }}>
                    URL de la Foto:
                    <input
                        type="text"
                        name="fotoUrl"
                        value={formData.fotoUrl}
                        onChange={handleChange}
                        placeholder="http://ejemplo.com/foto.jpg"
                        style={{ marginTop: '5px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </label>
                <button 
                    type="submit" 
                    disabled={loading} 
                    style={{ 
                        padding: '10px 15px', 
                        marginTop: '10px', 
                        cursor: loading ? 'not-allowed' : 'pointer',
                        backgroundColor: '#27ae60',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        fontWeight: 'bold'
                    }}
                >
                    {loading ? 'Enviando...' : 'Crear Reporte'}
                </button>
            </form>
        </div>
    );
};

export default ReporteForm;
