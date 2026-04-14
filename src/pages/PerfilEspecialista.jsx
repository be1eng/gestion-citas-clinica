import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSpecialistById } from '../data/specialists';

// ---------- Helpers de fecha ISO (YYYY-MM-DD) ----------
const parseIso = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
};
const toIso = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
};
const mondayOf = (iso) => {
  const d = parseIso(iso);
  const dow = d.getDay(); // 0 dom .. 6 sab
  const diff = dow === 0 ? -6 : 1 - dow;
  d.setDate(d.getDate() + diff);
  return toIso(d);
};
const addDays = (iso, n) => {
  const d = parseIso(iso);
  d.setDate(d.getDate() + n);
  return toIso(d);
};
const weekdayLabel = (iso) => {
  const label = parseIso(iso).toLocaleDateString('es-ES', { weekday: 'short' });
  return label.replace('.', '').charAt(0).toUpperCase() + label.replace('.', '').slice(1);
};
const dayNumber = (iso) => Number(iso.slice(8, 10));
const monthYearLabel = (iso) => {
  const label = parseIso(iso).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
  return label.charAt(0).toUpperCase() + label.slice(1);
};

function PerfilEspecialista() {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = getSpecialistById(id);

  const availability = doctor?.availability ?? [];

  const firstAvailable = useMemo(
    () => availability.find((d) => d.timeSlots.length > 0),
    [availability]
  );

  const [weekStart, setWeekStart] = useState(
    firstAvailable ? mondayOf(firstAvailable.date) : toIso(new Date())
  );
  const [selectedDate, setSelectedDate] = useState(firstAvailable?.date ?? null);
  const [selectedTime, setSelectedTime] = useState(firstAvailable?.timeSlots[0] ?? '');

  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => {
      const iso = addDays(weekStart, i);
      const slot = availability.find((a) => a.date === iso);
      return {
        iso,
        label: weekdayLabel(iso),
        number: dayNumber(iso),
        disabled: !slot || slot.timeSlots.length === 0,
        timeSlots: slot?.timeSlots ?? [],
      };
    });
  }, [weekStart, availability]);

  const timeSlots = useMemo(
    () => availability.find((a) => a.date === selectedDate)?.timeSlots ?? [],
    [availability, selectedDate]
  );

  const { canPrev, canNext } = useMemo(() => {
    if (availability.length === 0) return { canPrev: false, canNext: false };
    const firstDate = availability[0].date;
    const lastDate = availability[availability.length - 1].date;
    return {
      canPrev: weekStart > mondayOf(firstDate),
      canNext: weekStart < mondayOf(lastDate),
    };
  }, [weekStart, availability]);

  const handleSelectDate = (iso) => {
    setSelectedDate(iso);
    const slots = availability.find((a) => a.date === iso)?.timeSlots ?? [];
    setSelectedTime(slots[0] ?? '');
  };

  const handleWeekShift = (delta) => {
    const newStart = addDays(weekStart, delta);
    setWeekStart(newStart);
    // Si la fecha seleccionada queda fuera de la nueva semana, saltar a la primera disponible dentro de ella
    const newEnd = addDays(newStart, 6);
    if (selectedDate < newStart || selectedDate > newEnd) {
      const firstInWeek = availability.find(
        (a) => a.date >= newStart && a.date <= newEnd && a.timeSlots.length > 0
      );
      if (firstInWeek) {
        setSelectedDate(firstInWeek.date);
        setSelectedTime(firstInWeek.timeSlots[0]);
      } else {
        setSelectedDate(null);
        setSelectedTime('');
      }
    }
  };

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
                  <button
                    className="btn btn-light rounded-circle p-2"
                    onClick={() => handleWeekShift(-7)}
                    disabled={!canPrev}
                    aria-label="Semana anterior"
                  >‹</button>
                  <button
                    className="btn btn-light rounded-circle p-2"
                    onClick={() => handleWeekShift(7)}
                    disabled={!canNext}
                    aria-label="Semana siguiente"
                  >›</button>
                </div>
              </div>

              {/* Selector de Fecha Semanal */}
              <div className="mb-5">
                <p className="fw-medium mb-3" style={{ color: 'var(--cs-on-surface-variant)', fontSize: '0.875rem' }}>
                  Selecciona una Fecha — {monthYearLabel(weekStart)}
                </p>
                <div className="row g-3">
                  {weekDays.map((item) => (
                    <div className="col" key={item.iso}>
                      <div
                        className={`calendar-day ${
                          selectedDate === item.iso ? 'calendar-day--selected' : ''
                        } ${item.disabled ? 'calendar-day--disabled' : ''}`}
                        onClick={() => !item.disabled && handleSelectDate(item.iso)}
                      >
                        <span className="calendar-day__label">{item.label}</span>
                        <span className="calendar-day__number">{item.number}</span>
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
                {timeSlots.length === 0 ? (
                  <p className="text-muted fst-italic mb-0">
                    No hay horarios disponibles para este día.
                  </p>
                ) : (
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
                )}
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
