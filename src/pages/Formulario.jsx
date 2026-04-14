// Página: Formulario de Cita
// Asignado a: POR ASIGNAR
import React from 'react';
import FormularioCita from './GestionCitas/FormularioCita';
function Formulario() {
  return (
    <div className="d-flex justify-content-center align-items-start align-items-md-center" style={{ minHeight: '60vh' }}>
      <div className="p-2 p-md-5" style={{ width: '100%', backgroundColor: '#F7F9FB' }}>
        <FormularioCita />
      </div>
    </div>
  );
}

export default Formulario;
