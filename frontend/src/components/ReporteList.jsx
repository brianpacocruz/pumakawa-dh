import React, { useState, useEffect } from 'react';
import { getReportes } from '../services/reporte.service';

const ReporteList = ({ refreshTrigger }) => {
    const [reportes, setReportes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchReportes = async () => {
            setLoading(true);
            try {
                const data = await getReportes();
                // Aseguramos que data sea un array, previene errores si el backend devuelve undefined
                setReportes(Array.isArray(data) ? data : []);
                setError(null);
            } catch (err) {
                setError(err.message || 'Error al cargar los reportes');
            } finally {
                setLoading(false);
            }
        };

        fetchReportes();
    }, [refreshTrigger]);

    const getEstadoColor = (estado) => {
        switch (estado) {
            case 'Pendiente de validación':
                return '#f39c12'; // Amarillo precaución
            case 'Validado':
                return '#2980b9'; // Azul analítico
            case 'Descartado':
                return '#bdc3c7'; // Gris claro
            default:
                return '#95a5a6'; // Gris por defecto
        }
    };

    if (loading) return <p>Cargando reportes...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h2>Lista de Reportes</h2>
            {reportes.length === 0 ? (
                <p>No hay reportes para mostrar.</p>
            ) : (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {reportes.map((reporte) => (
                        <li key={reporte._id || Math.random().toString()} style={{ 
                            border: '1px solid #ddd', 
                            padding: '15px', 
                            marginBottom: '10px', 
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            backgroundColor: '#fff',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}>
                            <div>
                                <strong style={{ fontSize: '1.1em' }}>{reporte.tipoEvento}</strong> 
                                <span style={{ color: '#666', marginLeft: '10px' }}>
                                    {new Date(reporte.fecha || Date.now()).toLocaleDateString()}
                                </span>
                                <br />
                                <span style={{ color: '#444', marginTop: '5px', display: 'inline-block' }}>
                                    📍 {reporte.direccion}
                                </span>
                            </div>
                            <div style={{ 
                                backgroundColor: getEstadoColor(reporte.estado || 'Pendiente de validación'), 
                                padding: '6px 12px', 
                                borderRadius: '20px',
                                color: reporte.estado === 'Descartado' ? '#333' : '#fff',
                                fontWeight: 'bold',
                                fontSize: '0.85em',
                                textAlign: 'center',
                                minWidth: '100px'
                            }}>
                                {reporte.estado || 'Pendiente de validación'}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReporteList;
