// Página: Cita Agendada (Confirmación)
// Asignado a: POR ASIGNAR
import React from 'react';

function CitaAgendada() {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
      <div className="card p-4 shadow text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <h4 className="mb-3">Cita agendada</h4>
        {/* TODO: Implementar confirmación de cita con:
            - Detalles de la cita (fecha, hora, especialidad, doctor)
            - Botón "ACEPTAR" que lleve a /mis-citas o /
        */}
        <p className="text-muted">TODO: Implementar diálogo de confirmación de cita</p>
      </div>
    </div>
  );
}

export default CitaAgendada;
