import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSpecialistById } from '../data/specialists';

// Días de la semana para el calendario
const weekDays = [
  { day: 'Lun', date: 21, disabled: false },
  { day: 'Mar', date: 22, disabled: false },
  { day: 'Mié', date: 23, disabled: false },
  { day: 'Jue', date: 24, disabled: false },
  { day: 'Vie', date: 25, disabled: false },
  { day: 'Sáb', date: 26, disabled: true },
  { day: 'Dom', date: 27, disabled: true },
];

// Horarios disponibles
const timeSlots = ['09:00 AM', '10:30 AM', '11:15 AM', '01:45 PM', '03:00 PM', '04:30 PM'];

function PerfilEspecialista() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(22);
  const [selectedTime, setSelectedTime] = useState('11:15 AM');

  const doctor = getSpecialistById(id);

  if (!doctor) {
    return (
      <div className="container py-5 text-center">
        <h2 className="fw-bold mb-3">Especialista no encontrado</h2>
        <p className="text-muted mb-4">El especialista que buscas no existe o fue removido.</p>
        <button className="btn btn-primary rounded-pill px-4" onClick={() => navigate('/especialidades')}>
          Ver todos los especialistas
        </button>
      </div>
    );
  }

  const handleConfirm = () => {
    navigate('/sacar-cita');
  };

  return (
    <div style={{ backgroundColor: 'var(--cs-surface)', minHeight: '100vh' }}>
      <div className="container py-5">

        {/* Hero - Perfil del Doctor */}
        <section className="mb-5">
          <div className="rounded-4 p-4 p-md-5 d-flex flex-column flex-md-row gap-4 align-items-center align-items-md-end"
               style={{ backgroundColor: 'var(--cs-surface-low)' }}>
            <div className="flex-shrink-0">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="rounded-4 shadow"
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="text-center text-md-start flex-grow-1">
              <span className="badge rounded-pill px-3 py-2 mb-3 fw-bold text-uppercase"
                    style={{ backgroundColor: 'var(--cs-primary-fixed)', color: 'var(--cs-primary)', fontSize: '0.7rem', letterSpacing: '0.05em' }}>
                {doctor.speciality}
              </span>
              <h1 className="fw-bold mb-2" style={{ fontSize: '2.5rem', color: 'var(--cs-on-surface)' }}>
                {doctor.name}
              </h1>
              <p className="mb-4" style={{ color: 'var(--cs-on-surface-variant)', fontSize: '1.05rem', maxWidth: '600px' }}>
                {doctor.bio}
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-4">
                <span className="d-flex align-items-center gap-2" style={{ color: 'var(--cs-on-surface-variant)', fontSize: '0.875rem' }}>
                  <span style={{ color: 'var(--cs-primary)' }}>✓</span>
                  <span className="fw-medium">Certificado</span>
                </span>
                <span className="d-flex align-items-center gap-2" style={{ color: 'var(--cs-on-surface-variant)', fontSize: '0.875rem' }}>
                  <span style={{ color: 'var(--cs-primary)' }}>📍</span>
                  <span className="fw-medium">{doctor.location}</span>
                </span>
                <span className="d-flex align-items-center gap-2" style={{ color: 'var(--cs-on-surface-variant)', fontSize: '0.875rem' }}>
                  <span style={{ color: 'var(--cs-primary)' }}>⭐</span>
                  <span className="fw-medium">{doctor.rating} ({doctor.reviews} reseñas)</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="row g-4">
          {/* Columna principal: Calendario y Expertise */}
          <div className="col-lg-8">

            {/* Sección Agendar Cita */}
            <section className="rounded-4 p-4 p-md-5 mb-4 clinical-shadow"
                     style={{ backgroundColor: 'var(--cs-surface-lowest)' }}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold mb-0" style={{ fontSize: '1.5rem' }}>Agendar Cita</h2>
                <div className="d-flex gap-2">
                  <button className="btn btn-light rounded-circle p-2">‹</button>
                  <button className="btn btn-light rounded-circle p-2">›</button>
                </div>
              </div>

              {/* Selector de Fecha Semanal */}
              <div className="mb-5">
                <p className="fw-medium mb-3" style={{ color: 'var(--cs-on-surface-variant)', fontSize: '0.875rem' }}>
                  Selecciona una Fecha — Octubre 2024
                </p>
                <div className="row g-3">
                  {weekDays.map((item) => (
                    <div className="col" key={item.date}>
                      <div
                        className={`calendar-day ${
                          selectedDate === item.date ? 'calendar-day--selected' : ''
                        } ${item.disabled ? 'calendar-day--disabled' : ''}`}
                        onClick={() => !item.disabled && setSelectedDate(item.date)}
                      >
                        <span className="calendar-day__label">{item.day}</span>
                        <span className="calendar-day__number">{item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid de Horarios */}
              <div className="mb-5">
                <p className="fw-medium mb-3" style={{ color: 'var(--cs-on-surface-variant)', fontSize: '0.875rem' }}>
                  Horarios Disponibles
                </p>
                <div className="row g-3">
                  {timeSlots.map((time) => (
                    <div className="col-4 col-md-3" key={time}>
                      <button
                        className={`time-slot w-100 ${selectedTime === time ? 'time-slot--selected' : ''}`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón Confirmar */}
              <button className="btn-confirm-appointment" onClick={handleConfirm}>
                Confirmar Cita
              </button>
            </section>

            {/* Expertise Clínico */}
            <section className="mb-4">
              <h2 className="fw-bold mb-4" style={{ fontSize: '1.5rem' }}>Experiencia Clínica</h2>
              <div className="row g-4">
                {doctor.expertise.map((item, idx) => (
                  <div className="col-md-6" key={idx}>
                    <div className="rounded-4 p-4" style={{ backgroundColor: 'var(--cs-surface-low)' }}>
                      <div className="rounded-3 d-flex align-items-center justify-content-center mb-3"
                           style={{ width: '40px', height: '40px', backgroundColor: 'rgba(0,74,198,0.1)' }}>
                        <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                      </div>
                      <h5 className="fw-bold mb-2">{item.title}</h5>
                      <p className="mb-0" style={{ color: 'var(--cs-on-surface-variant)', fontSize: '0.875rem' }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar: Experiencia y Reseñas */}
          <div className="col-lg-4">

            {/* Timeline de Experiencia */}
            <div className="rounded-4 p-4 mb-4" style={{ backgroundColor: 'var(--cs-surface-low)' }}>
              <h5 className="fw-bold mb-4">Experiencia</h5>
              <div className="d-flex flex-column gap-4">
                {doctor.experience.map((exp, idx) => (
                  <div className="timeline-item" key={idx}>
                    <div className={`timeline-bar ${exp.active ? 'timeline-bar--active' : 'timeline-bar--past'}`}></div>
                    <div>
                      <p className={`mb-0 fw-bold text-uppercase ${exp.active ? 'text-cs-primary' : ''}`}
                         style={{ fontSize: '0.7rem', color: exp.active ? undefined : 'var(--cs-on-surface-variant)' }}>
                        {exp.period}
                      </p>
                      <p className="mb-0 fw-bold" style={{ color: 'var(--cs-on-surface)' }}>{exp.role}</p>
                      <p className="mb-0" style={{ color: 'var(--cs-on-surface-variant)', fontSize: '0.75rem' }}>{exp.place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reseñas de Pacientes */}
            <div>
              <h5 className="fw-bold mb-3">Opiniones de Pacientes</h5>
              <div className="d-flex flex-column gap-3">
                {doctor.feedback.map((review, idx) => (
                  <div className="rounded-4 p-4" key={idx}
                       style={{ backgroundColor: 'var(--cs-surface-lowest)', border: '1px solid rgba(195,198,215,0.15)' }}>
                    <div className="mb-2">
                      {'⭐'.repeat(5)}
                    </div>
                    <p className="mb-3 fst-italic" style={{ color: 'var(--cs-on-surface-variant)', fontSize: '0.875rem' }}>
                      {review.text}
                    </p>
                    <div className="d-flex align-items-center gap-3">
                      <div className="rounded-circle" style={{ width: '32px', height: '32px', backgroundColor: 'var(--cs-secondary-container)' }}></div>
                      <div>
                        <p className="mb-0 fw-bold" style={{ fontSize: '0.75rem' }}>{review.name}</p>
                        <p className="mb-0" style={{ fontSize: '0.625rem', color: 'var(--cs-on-surface-variant)' }}>{review.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilEspecialista;
