
import React from 'react';
import '../styles/ModalCita.css'

const parseLocalDate = (iso) => {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};

function AppointmentSuccessModal({ show, onClose, summary, onAddToCalendar }) {

  if (!show) return null;

  // const formatDate = (date) => {
  //   const formatted = new Date(date).toLocaleDateString("es-ES", {
  //     weekday: "long",
  //     day: "numeric",
  //     month: "long"
  //   });
  //   return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  // };

  const formatDate = (date) => {
  const formatted = parseLocalDate(date).toLocaleDateString("es-PE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

  const handleAddToCalendar = () => {
    const date = parseLocalDate(summary.date);

    if (onAddToCalendar) return onAddToCalendar();
    const start = date.toISOString().replace(/[-:]|\.\d{3}/g, "");
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Cita con ${summary.doctorName || "Doctor"}`
    )}&dates=${start}/${start}&location=${encodeURIComponent(summary.place || "")}&details=${encodeURIComponent(
      `Consulta de ${summary.speciality || ""} — ${summary.time || ""}`
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="modalOverlay" role="dialog" aria-modal="true">
      <div className="successModal animate__animated animate__zoomIn animate__faster">

        {/* Header azul */}
        <div className="modalHeader">
          <div className="checkCircle">
            <i className="bi bi-check-lg" />
          </div>
        </div>

        {/* Body */}
        <div className="modalBody text-center">

          <h2 className="successTitle">¡Agendado!</h2>
          <p className="text-muted mb-0">
            Tu cita ha sido confirmada exitosamente.
          </p>

          {/* info */}
          <div className="infoBox text-start">
            <div className="infoRow">
              <div className="infoIcon">
                <i className="bi bi-calendar-event" />
              </div>
              <div>
                <small className="infoLabel">CUÁNDO</small>
                <p className="mb-0 fw-semibold">
                  {formatDate(summary.date)} — {summary.time}
                </p>
              </div>
            </div>

            <div className="infoRow">
              <div className="infoIcon">
                <i className="bi bi-geo-alt-fill" />
              </div>
              <div>
                <small className="infoLabel">DÓNDE</small>
                <p className="mb-0 fw-semibold text-capitalize">
                  {summary.place}
                </p>
              </div>
            </div>
          </div>

          {/* botones */}
          <div className="modalActions">
            <button
              type="button"
              className="btn btn-link text-decoration-none fw-semibold text-secondary"
              onClick={handleAddToCalendar}
            >
              <i className="bi bi-calendar-plus me-1" />
              Añadir al calendario
            </button>

            <button
              type="button"
              className="btn btn-primary rounded-pill px-4"
              onClick={onClose}
              style={{ backgroundColor: "#2563EB", borderColor: "#2563EB" }}
            >
              Ir al inicio
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AppointmentSuccessModal;