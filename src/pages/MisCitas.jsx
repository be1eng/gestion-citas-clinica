import React from 'react';

// Datos de ejemplo
const upcomingAppointments = [
  {
    id: 1,
    doctor: 'Dr. Jean Sanchez',
    specialty: 'Cardiólogo Senior',
    location: 'Sede Principal - Ala Oeste',
    date: '10 de Abril, 2026',
    time: '08:30 AM',
    photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_-hWCzfTEU7Cmil3zyaa470SzEwn5yNIPRSfMeSe5nqDwyadQXEEWDpR7kknRqcjmfLKSDUHBFP9obFClwJs5uL8VFcoIYugPrY2u9Zq_i5Wlg2AjYJq7cZVbfknjdPwUqN8bOy04mF1KnBlkTfwbmEuOaa3gNaFYW05AQAMxCI2eNpLG-UZEnA1jwI8yKSYyIReUnor9gb_5MwLYlpLNF2TG3gQ_2DaTHZmR8F1NwokhzeinfMuHabeTgEW4A7Ie19z3_J5zYKs',
    isPrimary: true,
  },
  {
    id: 2,
    doctor: 'Dra. Elena Rodriguez',
    specialty: 'Dermatología',
    location: 'Consulta de Rutina',
    date: '02 de Mayo, 2026',
    time: '02:15 PM',
    photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF9ZFhXJWxt_-DCHcCHSzO3FYMrryLNAQqb0SlSGUU0eo5F5qDI74MdO2x3zMbhFKuZo8zAVVNwhmam0NZsPcqX6qdavaMc37kQ7aCEqX74A-D0FjgBMONQu0k8GJ1b33-lmBfhg1PalUuTmgqpw6q0zJvSO8owLY1QS5FCmrN-KCFAvEXybILMFWjt3H1o66JpIbLBh-phA0QPhoakNSZE1fGz_H_1SBTPCuWX_t5EpCgeJ2a-6ffeGhgsUEpoCV2btZS9vvEGqI',
    isPrimary: false,
  },
];

const visitHistory = [
  { doctor: 'Dr. Julian Thorne', date: '12 de Septiembre, 2025', purpose: 'Consulta Inicial', status: 'Completada' },
  { doctor: 'Dr. Michael Chen', date: '05 de Agosto, 2025', purpose: 'Resultados de Lab', status: 'Completada' },
  { doctor: 'Clínica Bienestar', date: '18 de Junio, 2025', purpose: 'Chequeo Anual', status: 'Completada' },
];

const documents = [
  { icon: '💊', title: 'Lisinopril 10mg', type: 'Prescripción • Activa', detail: '2 recargas restantes', action: 'Descargar', color: 'rgba(0,74,198,0.1)', textColor: 'var(--cs-primary)' },
  { icon: '🧪', title: 'Panel Lipídico', type: 'Lab • 14 Sep', detail: 'Rangos normales', action: 'Ver PDF', color: 'rgba(148,55,0,0.1)', textColor: '#943700' },
  { icon: '📷', title: 'Radiografía de Tórax', type: 'Imagen • 02 Ago', detail: 'Centro Diagnóstico', action: 'Ver', color: 'rgba(67,71,75,0.1)', textColor: '#43474b' },
];

const vitals = [
  { label: 'Presión Arterial', value: '118/74' },
  { label: 'Ritmo Cardíaco', value: '72 bpm' },
  { label: 'Oxígeno', value: '99%' },
  { label: 'IMC', value: '22.4' },
];

function MisCitas() {
  return (
    <div style={{ backgroundColor: 'var(--cs-surface)', minHeight: '100vh' }}>
      <div className="container py-5">

        {/* Header de bienvenida */}
        <header className="mb-5">
          <h1 className="fw-bold" style={{ fontSize: '2.25rem', color: 'var(--cs-on-surface)', letterSpacing: '-0.02em' }}>
            Bienvenido de vuelta, Jean Piere.
          </h1>
          <p style={{ color: 'var(--cs-on-surface-variant)', fontSize: '1.1rem' }}>
            Tu salud va por buen camino. Tienes una cita programada para hoy.
          </p>
        </header>

        {/* Layout Bento Grid */}
        <div className="row g-4">

          {/* Columna principal (8 cols) */}
          <div className="col-lg-8">

            {/* Citas Próximas */}
            <section className="mb-5">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold mb-0" style={{ fontSize: '1.5rem' }}>Citas Próximas</h2>
                <button className="btn btn-link text-decoration-none fw-semibold d-flex align-items-center gap-1 p-0"
                        style={{ color: 'var(--cs-primary)' }}>
                  Nueva Cita <span>+</span>
                </button>
              </div>

              <div className="d-flex flex-column gap-3">
                {upcomingAppointments.map((appt) => (
                  <div key={appt.id}
                       className={`rounded-4 p-4 ${appt.isPrimary ? 'appointment-card-active clinical-shadow' : ''}`}
                       style={{
                         backgroundColor: appt.isPrimary ? 'var(--cs-surface-lowest)' : 'var(--cs-surface-low)',
                         border: appt.isPrimary ? 'none' : '1px solid rgba(195,198,215,0.15)',
                       }}>
                    <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                      <div className="d-flex align-items-start gap-3">
                        <div className="flex-shrink-0">
                          <img
                            src={appt.photo}
                            alt={appt.doctor}
                            className="rounded-4"
                            style={{ width: '64px', height: '64px', objectFit: 'cover', opacity: appt.isPrimary ? 1 : 0.8 }}
                          />
                        </div>
                        <div>
                          <h5 className="fw-bold mb-1" style={{ fontSize: appt.isPrimary ? '1.2rem' : '1.05rem' }}>
                            {appt.doctor}
                          </h5>
                          <p className="mb-2" style={{ color: 'var(--cs-on-surface-variant)', fontSize: '0.875rem' }}>
                            {appt.specialty} • {appt.location}
                          </p>
                          <div className="d-flex align-items-center gap-3">
                            <span className="d-flex align-items-center gap-1 fw-semibold"
                                  style={{ color: appt.isPrimary ? 'var(--cs-primary)' : 'var(--cs-on-surface-variant)', fontSize: '0.875rem' }}>
                              📅 {appt.date}
                            </span>
                            <span className="d-flex align-items-center gap-1 fw-semibold"
                                  style={{ color: appt.isPrimary ? 'var(--cs-primary)' : 'var(--cs-on-surface-variant)', fontSize: '0.875rem' }}>
                              🕐 {appt.time}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-wrap gap-2">
                        {appt.isPrimary && (
                          <button className="btn-primary-gradient">
                            Unirse a la Cita
                          </button>
                        )}
                        <button className="btn btn-light rounded-pill px-4 py-2 fw-medium"
                                style={{ fontSize: '0.875rem', border: appt.isPrimary ? 'none' : '1px solid var(--cs-outline-variant)' }}>
                          Reagendar
                        </button>
                        <button className="btn rounded-pill px-3 py-2 fw-medium"
                                style={{ color: 'var(--cs-error)', fontSize: '0.875rem' }}>
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Historial de Visitas */}
            <section>
              <h2 className="fw-bold mb-4" style={{ fontSize: '1.5rem' }}>Historial de Visitas</h2>
              <div className="rounded-4 overflow-hidden" style={{ backgroundColor: 'var(--cs-surface-low)' }}>
                <div className="p-2">
                  <div className="table-responsive">
                    <table className="table table-borderless mb-0 align-middle">
                      <thead>
                        <tr style={{ color: 'var(--cs-on-surface-variant)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          <th className="fw-semibold px-4 py-3">Especialista</th>
                          <th className="fw-semibold px-4 py-3">Fecha</th>
                          <th className="fw-semibold px-4 py-3">Motivo</th>
                          <th className="fw-semibold px-4 py-3">Estado</th>
                          <th className="fw-semibold px-4 py-3 text-end">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {visitHistory.map((visit, idx) => (
                          <tr key={idx} style={{ transition: 'background-color 0.2s' }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--cs-surface-container)'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                            <td className="px-4 py-3 fw-semibold">{visit.doctor}</td>
                            <td className="px-4 py-3" style={{ color: 'var(--cs-on-surface-variant)' }}>{visit.date}</td>
                            <td className="px-4 py-3">{visit.purpose}</td>
                            <td className="px-4 py-3">
                              <span className="badge-completed">{visit.status}</span>
                            </td>
                            <td className="px-4 py-3 text-end">
                              <button className="btn btn-link btn-sm text-decoration-none fw-medium p-0"
                                      style={{ color: 'var(--cs-primary)', fontSize: '0.875rem' }}>
                                Resumen
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar (4 cols) */}
          <div className="col-lg-4">

            {/* Documentos Médicos */}
            <section className="rounded-4 p-4 mb-4" style={{ backgroundColor: 'rgba(224,227,229,0.3)', border: '1px solid rgba(255,255,255,0.2)' }}>
              <h5 className="fw-bold mb-4">Documentos Médicos</h5>
              <div className="d-flex flex-column gap-3">
                {documents.map((doc, idx) => (
                  <div className="rounded-4 p-3 doc-card" key={idx}
                       style={{ backgroundColor: 'var(--cs-surface-lowest)' }}>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-3 d-flex align-items-center justify-content-center"
                           style={{ width: '40px', height: '40px', backgroundColor: doc.color, fontSize: '1.1rem' }}>
                        {doc.icon}
                      </div>
                      <div>
                        <h6 className="fw-bold mb-0" style={{ fontSize: '0.875rem' }}>{doc.title}</h6>
                        <p className="mb-0 fw-bold text-uppercase"
                           style={{ fontSize: '0.6rem', color: 'var(--cs-on-surface-variant)', letterSpacing: '0.08em' }}>
                          {doc.type}
                        </p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span style={{ fontSize: '0.75rem', color: 'var(--cs-on-surface-variant)' }}>{doc.detail}</span>
                      <button className="btn btn-link btn-sm text-decoration-none fw-bold p-0"
                              style={{ color: 'var(--cs-primary)', fontSize: '0.75rem' }}>
                        {doc.action} →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn w-100 mt-4 py-3 rounded-4 fw-semibold"
                      style={{ border: '2px dashed var(--cs-outline-variant)', color: 'var(--cs-on-surface-variant)', fontSize: '0.875rem' }}>
                Subir Documento
              </button>
            </section>

            {/* Signos Vitales */}
            <section className="vitals-card">
              <h5 className="fw-bold mb-4">Últimos Signos Vitales</h5>
              <div className="row g-3">
                {vitals.map((vital, idx) => (
                  <div className="col-6" key={idx}>
                    <div className="vitals-item">
                      <p className="vitals-item__label mb-1">{vital.label}</p>
                      <p className="vitals-item__value mb-0">{vital.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 mb-0 fst-italic" style={{ fontSize: '0.625rem', opacity: 0.7 }}>
                Última actualización: 12 Sep, 2026
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MisCitas;
