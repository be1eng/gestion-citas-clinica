// Página: Cita Agendada (Confirmación)
// Asignado a: POR ASIGNAR
import React from 'react';
import FormularioCita from './GestionCitas/FormularioCita';

function CitaAgendada() {
  return (
    <div className=" d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
      <div className="p-5 " style={{width: '100%', backgroundColor:'#F7F9FB ' }}>
      <FormularioCita/>
      </div>
    </div>
  );
}

export default CitaAgendada;
