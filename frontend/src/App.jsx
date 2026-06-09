import React, { useState } from 'react';
import ReporteForm from './components/ReporteForm';
import ReporteList from './components/ReporteList';

function App() {
  const [refreshCount, setRefreshCount] = useState(0);

  const handleReporteCreado = () => {
    setRefreshCount(prev => prev + 1);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Pumakawa Red Frontend</h1>
      <ReporteForm onReporteCreado={handleReporteCreado} />
      <ReporteList refreshTrigger={refreshCount} />
    </div>
  );
}

export default App;
