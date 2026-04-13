
import React from 'react';
import '../styles/ModalCita.css'


function AppointmentSuccessModal({ show, onClose, summary }) {

  if (!show) return null;

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long"
    });


    
  return (
    <div className="modalOverlay">

      <div className="successModal">

        {/* Header azul */}
        <div className="modalHeader">
          <div className="checkCircle">
            <i class="bi bi-clipboard2-check"></i>
          </div>
        </div>

        {/* Body */}
        <div className="modalBody text-center">

          <h2>¡Agendado!</h2>
          <p className="text-muted">
            Tu cita ha sido confirmada exitosamente.
          </p>

          {/* info */}
          <div className="infoBox text-start">

            <div className="mb-3">
              <small className="text-primary fw-bold">FECHA</small>
              <p className="mb-0 fw-semibold">
                {formatDate(summary.date)} — {summary.time}
              </p>
            </div>

            <div>
              <small className="text-primary fw-bold">LUGAR</small>
              <p className="mb-0 fw-semibold">
                {summary.place}
              </p>
            </div>

          </div>

          {/* botones */}
          <div className="d-flex justify-content-end mt-4">

            <button
              className="btn btn-primary px-4 rounded-pill"
              onClick={onClose}
            >
              Ir a inicio
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AppointmentSuccessModal;