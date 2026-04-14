import React, { useState } from 'react';
{/* <Route path="/calendario-especialista" element={<CalendarioEspecialista />} /> */}
// Citas programadas del especialista (datos de ejemplo)
const appointments = [
  { id: 1, patient: 'María García', reason: 'Consulta General', day: 1, startHour: 8, duration: 1, color: '#004ac6' },
  { id: 2, patient: 'Carlos López', reason: 'Control de Rutina', day: 1, startHour: 10, duration: 1, color: '#2563eb' },
  { id: 3, patient: 'Ana Torres', reason: 'Examen Cardíaco', day: 1, startHour: 14, duration: 2, color: '#004ac6' },
  { id: 4, patient: 'Luis Mendoza', reason: 'Consulta General', day: 2, startHour: 9, duration: 1, color: '#2563eb' },
  { id: 5, patient: 'Rosa Díaz', reason: 'Electrocardiograma', day: 2, startHour: 11, duration: 1.5, color: '#004ac6' },
  { id: 6, patient: 'Pedro Ruiz', reason: 'Seguimiento', day: 2, startHour: 15, duration: 1, color: '#2563eb' },
  { id: 7, patient: 'Elena Vargas', reason: 'Consulta General', day: 3, startHour: 8, duration: 1, color: '#004ac6' },
  { id: 8, patient: 'Jorge Castillo', reason: 'Prueba de Esfuerzo', day: 3, startHour: 10, duration: 2, color: '#2563eb' },
  { id: 9, patient: 'Sofía Herrera', reason: 'Control Mensual', day: 4, startHour: 9, duration: 1, color: '#004ac6' },
  { id: 10, patient: 'Miguel Ángel Paz', reason: 'Ecocardiograma', day: 4, startHour: 13, duration: 1.5, color: '#2563eb' },
  { id: 11, patient: 'Laura Jiménez', reason: 'Consulta General', day: 4, startHour: 16, duration: 1, color: '#004ac6' },
  { id: 12, patient: 'Fernando Soto', reason: 'Control Post-Op', day: 5, startHour: 8, duration: 1, color: '#2563eb' },
  { id: 13, patient: 'Carmen Reyes', reason: 'Chequeo Anual', day: 5, startHour: 11, duration: 1, color: '#004ac6' },
];

// Horas del día (7 AM a 6 PM)
const hours = Array.from({ length: 12 }, (_, i) => i + 7);

// Nombre de los meses
const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

// Obtener los días de la semana para una fecha dada
function getWeekDays(baseDate) {
  const start = new Date(baseDate);
  const dayOfWeek = start.getDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  start.setDate(start.getDate() + mondayOffset);

  const days = [];
  const dayLabels = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    days.push({
      label: dayLabels[i],
      date: d.getDate(),
      month: d.getMonth(),
      year: d.getFullYear(),
      fullDate: new Date(d),
      isWeekend: i >= 5,
    });
  }
  return days;
}

function CalendarioEspecialista() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const weekDays = getWeekDays(currentDate);
  const today = new Date();

  const goToPrevWeek = () => {
    const prev = new Date(currentDate);
    prev.setDate(prev.getDate() - 7);
    setCurrentDate(prev);
  };

  const goToNextWeek = () => {
    const next = new Date(currentDate);
    next.setDate(next.getDate() + 7);
    setCurrentDate(next);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Mes y año del lunes de la semana actual
  const weekMonth = monthNames[weekDays[0].month];
  const weekYear = weekDays[0].year;

  // Contar citas del día
  const getTodayAppointmentCount = () => {
    const todayDayOfWeek = today.getDay();
    const adjustedDay = todayDayOfWeek === 0 ? 7 : todayDayOfWeek;
    return appointments.filter(a => a.day === adjustedDay).length;
  };

  // Obtener citas para un día de la semana (1=Lun, 7=Dom)
  const getAppointmentsForDay = (dayIndex) => {
    return appointments.filter(a => a.day === dayIndex + 1);
  };

  return (
    <div style={{ backgroundColor: 'var(--cs-surface)', minHeight: '100vh' }}>
      <div className="container-fluid py-4 px-3 px-md-5" style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
          <div>
            <h1 className="fw-bold mb-1" style={{ fontSize: '1.75rem', color: 'var(--cs-on-surface)' }}>
              Calendario de Citas
            </h1>
            <p className="mb-0" style={{ color: 'var(--cs-on-surface-variant)' }}>
              Dr. Jean Piere Sanchez — Cardiología &nbsp;·&nbsp; {getTodayAppointmentCount()} citas hoy
            </p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-sm rounded-pill px-3 fw-semibold"
                    onClick={goToToday}
                    style={{ border: '1px solid var(--cs-outline-variant)', color: 'var(--cs-on-surface)', fontSize: '0.875rem' }}>
              Hoy
            </button>
            <button className="btn btn-sm btn-light rounded-circle d-flex align-items-center justify-content-center"
                    onClick={goToPrevWeek}
                    style={{ width: '36px', height: '36px' }}>
              ‹
            </button>
            <button className="btn btn-sm btn-light rounded-circle d-flex align-items-center justify-content-center"
                    onClick={goToNextWeek}
                    style={{ width: '36px', height: '36px' }}>
              ›
            </button>
            <h4 className="fw-bold mb-0 ms-2" style={{ fontSize: '1.25rem', color: 'var(--cs-on-surface)' }}>
              {weekMonth} {weekYear}
            </h4>
          </div>
        </div>

        {/* Stats rápidos */}
        <div className="row g-3 mb-4">
          <div className="col-6 col-md-3">
            <div className="rounded-4 p-3 clinical-shadow" style={{ backgroundColor: 'var(--cs-surface-lowest)' }}>
              <p className="mb-1 fw-bold" style={{ fontSize: '0.7rem', color: 'var(--cs-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Citas esta semana
              </p>
              <p className="mb-0 fw-bold" style={{ fontSize: '1.5rem', color: 'var(--cs-primary)' }}>
                {appointments.length}
              </p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="rounded-4 p-3 clinical-shadow" style={{ backgroundColor: 'var(--cs-surface-lowest)' }}>
              <p className="mb-1 fw-bold" style={{ fontSize: '0.7rem', color: 'var(--cs-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Pacientes atendidos
              </p>
              <p className="mb-0 fw-bold" style={{ fontSize: '1.5rem', color: 'var(--cs-primary)' }}>
                {new Set(appointments.map(a => a.patient)).size}
              </p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="rounded-4 p-3 clinical-shadow" style={{ backgroundColor: 'var(--cs-surface-lowest)' }}>
              <p className="mb-1 fw-bold" style={{ fontSize: '0.7rem', color: 'var(--cs-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Horas ocupadas
              </p>
              <p className="mb-0 fw-bold" style={{ fontSize: '1.5rem', color: 'var(--cs-primary)' }}>
                {appointments.reduce((sum, a) => sum + a.duration, 0)}h
              </p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="rounded-4 p-3 clinical-shadow" style={{ backgroundColor: 'var(--cs-surface-lowest)' }}>
              <p className="mb-1 fw-bold" style={{ fontSize: '0.7rem', color: 'var(--cs-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Próxima cita
              </p>
              <p className="mb-0 fw-bold" style={{ fontSize: '1rem', color: 'var(--cs-primary)' }}>
                Lun 08:00 AM
              </p>
            </div>
          </div>
        </div>

        {/* Calendario semanal tipo Google Calendar */}
        <div className="rounded-4 clinical-shadow overflow-hidden" style={{ backgroundColor: 'var(--cs-surface-lowest)' }}>

          {/* Header de días */}
          <div className="gcal-header">
            <div className="gcal-time-gutter"></div>
            {weekDays.map((day, idx) => {
              const isToday = day.date === today.getDate() &&
                              day.month === today.getMonth() &&
                              day.year === today.getFullYear();
              return (
                <div key={idx}
                     className={`gcal-day-header ${isToday ? 'gcal-day-header--today' : ''} ${day.isWeekend ? 'gcal-day-header--weekend' : ''}`}>
                  <span className="gcal-day-header__label">{day.label}</span>
                  <span className={`gcal-day-header__number ${isToday ? 'gcal-day-header__number--today' : ''}`}>
                    {day.date}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Grid del calendario */}
          <div className="gcal-body">
            {hours.map((hour) => (
              <div className="gcal-row" key={hour}>
                <div className="gcal-time-gutter">
                  <span className="gcal-time-label">
                    {hour > 12 ? `${hour - 12}:00 PM` : hour === 12 ? '12:00 PM' : `${hour}:00 AM`}
                  </span>
                </div>
                {weekDays.map((day, dayIdx) => (
                  <div key={dayIdx}
                       className={`gcal-cell ${day.isWeekend ? 'gcal-cell--weekend' : ''}`}>
                    {/* Renderizar citas que empiezan en esta hora y día */}
                    {getAppointmentsForDay(dayIdx)
                      .filter(appt => appt.startHour === hour)
                      .map((appt) => (
                        <div
                          key={appt.id}
                          className={`gcal-event ${selectedAppointment === appt.id ? 'gcal-event--selected' : ''}`}
                          style={{
                            height: `${appt.duration * 60 - 4}px`,
                            backgroundColor: appt.color,
                          }}
                          onClick={() => setSelectedAppointment(selectedAppointment === appt.id ? null : appt.id)}
                        >
                          <span className="gcal-event__time">
                            {appt.startHour > 12 ? `${appt.startHour - 12}:00 PM` : `${appt.startHour}:00 AM`}
                          </span>
                          <span className="gcal-event__title">{appt.patient}</span>
                          <span className="gcal-event__subtitle">{appt.reason}</span>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Detalle de cita seleccionada */}
        {selectedAppointment && (() => {
          const appt = appointments.find(a => a.id === selectedAppointment);
          if (!appt) return null;
          const dayLabel = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'][appt.day - 1];
          const startTime = appt.startHour > 12 ? `${appt.startHour - 12}:00 PM` : `${appt.startHour}:00 AM`;
          const endHour = appt.startHour + appt.duration;
          const endTime = endHour > 12 ? `${endHour - 12}:00 PM` : `${endHour}:00 AM`;

          return (
            <div className="rounded-4 p-4 mt-4 clinical-shadow d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3"
                 style={{ backgroundColor: 'var(--cs-surface-lowest)' }}>
              <div className="d-flex align-items-center gap-3">
                <div className="rounded-circle d-flex align-items-center justify-content-center"
                     style={{ width: '48px', height: '48px', backgroundColor: 'rgba(0,74,198,0.1)' }}>
                  <span style={{ fontSize: '1.25rem' }}>👤</span>
                </div>
                <div>
                  <h5 className="fw-bold mb-0" style={{ fontSize: '1.05rem' }}>{appt.patient}</h5>
                  <p className="mb-0" style={{ color: 'var(--cs-on-surface-variant)', fontSize: '0.875rem' }}>
                    {appt.reason} &nbsp;·&nbsp; {dayLabel} {startTime} – {endTime}
                  </p>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button className="btn-primary-gradient">Ver Historial</button>
                <button className="btn btn-light rounded-pill px-4 py-2 fw-medium"
                        style={{ fontSize: '0.875rem', border: '1px solid var(--cs-outline-variant)' }}>
                  Reagendar
                </button>
                <button className="btn rounded-pill px-3 py-2 fw-medium"
                        style={{ color: 'var(--cs-error)', fontSize: '0.875rem' }}>
                  Cancelar
                </button>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

export default CalendarioEspecialista;



// /* ========================================
//    Design System "Clinical Sanctuary"
//    ======================================== */

// :root {
//   --cs-primary: #004ac6;
//   --cs-primary-container: #2563eb;
//   --cs-primary-fixed: #dbe1ff;
//   --cs-surface: #f7f9fb;
//   --cs-surface-low: #f2f4f6;
//   --cs-surface-container: #eceef0;
//   --cs-surface-lowest: #ffffff;
//   --cs-surface-high: #e6e8ea;
//   --cs-on-surface: #191c1e;
//   --cs-on-surface-variant: #434655;
//   --cs-outline: #737686;
//   --cs-outline-variant: #c3c6d7;
//   --cs-secondary-container: #dce0e4;
//   --cs-error: #ba1a1a;
//   --cs-error-container: #ffdad6;
// }

// /* Gradiente principal */
// .primary-gradient {
//   background: linear-gradient(135deg, var(--cs-primary) 0%, var(--cs-primary-container) 100%);
// }

// /* Sombra clínica */
// .clinical-shadow {
//   box-shadow: 0 32px 32px rgba(25, 28, 30, 0.04);
// }

// /* ========================================
//    Calendario del Especialista
//    ======================================== */

// /* Día de la semana */
// .calendar-day {
//   padding: 1rem 0.5rem;
//   border-radius: 0.75rem;
//   text-align: center;
//   cursor: pointer;
//   transition: background-color 0.2s, color 0.2s;
//   border: 1px solid transparent;
// }

// .calendar-day:hover:not(.calendar-day--disabled):not(.calendar-day--selected) {
//   background-color: var(--cs-surface-low);
// }

// .calendar-day--selected {
//   background: linear-gradient(135deg, var(--cs-primary) 0%, var(--cs-primary-container) 100%);
//   color: #ffffff;
//   box-shadow: 0 8px 24px rgba(0, 74, 198, 0.3);
// }

// .calendar-day--selected .calendar-day__label {
//   color: rgba(255, 255, 255, 0.8);
// }

// .calendar-day--disabled {
//   background-color: var(--cs-surface-container);
//   opacity: 0.4;
//   cursor: not-allowed;
// }

// .calendar-day__label {
//   display: block;
//   font-size: 0.75rem;
//   color: var(--cs-on-surface-variant);
//   margin-bottom: 0.25rem;
// }

// .calendar-day__number {
//   font-weight: 700;
//   font-size: 1rem;
// }

// /* Slot de horario */
// .time-slot {
//   padding: 0.75rem 1rem;
//   border-radius: 0.5rem;
//   background-color: var(--cs-surface-low);
//   border: none;
//   font-size: 0.875rem;
//   font-weight: 500;
//   color: var(--cs-on-surface);
//   cursor: pointer;
//   transition: all 0.2s;
// }

// .time-slot:hover:not(.time-slot--selected) {
//   background-color: var(--cs-primary-container);
//   color: #ffffff;
// }

// .time-slot--selected {
//   background-color: var(--cs-primary);
//   color: #ffffff;
//   font-weight: 700;
//   outline: 2px solid var(--cs-primary);
//   outline-offset: 2px;
// }

// /* Botón confirmar cita */
// .btn-confirm-appointment {
//   background: linear-gradient(135deg, var(--cs-primary) 0%, var(--cs-primary-container) 100%);
//   color: #ffffff;
//   border: none;
//   padding: 1rem;
//   border-radius: 50rem;
//   font-weight: 700;
//   font-size: 1.125rem;
//   width: 100%;
//   transition: transform 0.15s, box-shadow 0.2s;
//   box-shadow: 0 8px 24px rgba(0, 74, 198, 0.2);
// }

// .btn-confirm-appointment:hover {
//   transform: scale(1.01);
//   box-shadow: 0 12px 32px rgba(0, 74, 198, 0.3);
//   color: #ffffff;
// }

// .btn-confirm-appointment:active {
//   transform: scale(0.98);
// }

// /* ========================================
//    Panel del Paciente
//    ======================================== */

// /* Card de cita activa - borde izquierdo gradiente */
// .appointment-card-active {
//   position: relative;
//   overflow: hidden;
// }

// .appointment-card-active::before {
//   content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 4px;
//   height: 100%;
//   background: linear-gradient(135deg, var(--cs-primary) 0%, var(--cs-primary-container) 100%);
// }

// /* Badge de estado */
// .badge-completed {
//   background-color: #dcfce7;
//   color: #15803d;
//   font-weight: 700;
//   font-size: 0.75rem;
//   padding: 0.25rem 0.75rem;
//   border-radius: 50rem;
// }

// /* Card de signos vitales */
// .vitals-card {
//   background: linear-gradient(135deg, var(--cs-primary) 0%, var(--cs-primary-container) 100%);
//   color: #ffffff;
//   border-radius: 1rem;
//   padding: 1.5rem;
//   position: relative;
//   overflow: hidden;
// }

// .vitals-card::after {
//   content: '\2665';
//   position: absolute;
//   right: -0.5rem;
//   bottom: -0.5rem;
//   font-size: 7rem;
//   opacity: 0.1;
//   line-height: 1;
// }

// .vitals-item {
//   background: rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(12px);
//   border-radius: 0.75rem;
//   padding: 0.75rem;
// }

// .vitals-item__label {
//   font-size: 0.7rem;
//   opacity: 0.8;
//   text-transform: uppercase;
//   font-weight: 700;
//   letter-spacing: -0.02em;
// }

// .vitals-item__value {
//   font-size: 1.25rem;
//   font-weight: 700;
// }

// /* Botones de acción */
// .btn-primary-gradient {
//   background: linear-gradient(135deg, var(--cs-primary) 0%, var(--cs-primary-container) 100%);
//   color: #ffffff;
//   border: none;
//   border-radius: 50rem;
//   font-weight: 600;
//   font-size: 0.875rem;
//   padding: 0.625rem 1.5rem;
//   transition: all 0.15s;
//   box-shadow: 0 4px 12px rgba(0, 74, 198, 0.2);
// }

// .btn-primary-gradient:hover {
//   color: #ffffff;
//   box-shadow: 0 6px 16px rgba(0, 74, 198, 0.3);
//   transform: scale(0.98);
// }

// /* Experiencia - timeline */
// .timeline-item {
//   display: flex;
//   gap: 1rem;
// }

// .timeline-bar {
//   width: 3px;
//   border-radius: 2px;
//   flex-shrink: 0;
// }

// .timeline-bar--active {
//   background-color: var(--cs-primary);
// }

// .timeline-bar--past {
//   background-color: var(--cs-outline-variant);
// }

// /* Document card hover */
// .doc-card {
//   transition: box-shadow 0.2s;
// }

// .doc-card:hover {
//   box-shadow: 0 8px 24px rgba(25, 28, 30, 0.08);
// }

// /* Surface backgrounds */
// .bg-surface {
//   background-color: var(--cs-surface) !important;
// }

// .bg-surface-low {
//   background-color: var(--cs-surface-low) !important;
// }

// .bg-surface-lowest {
//   background-color: var(--cs-surface-lowest) !important;
// }

// /* Text colors */
// .text-cs-primary {
//   color: var(--cs-primary) !important;
// }

// .text-on-surface {
//   color: var(--cs-on-surface) !important;
// }

// .text-on-surface-variant {
//   color: var(--cs-on-surface-variant) !important;
// }

// /* ========================================
//    Calendario Semanal (tipo Google Calendar)
//    ======================================== */

// /* Header de días */
// .gcal-header {
//   display: grid;
//   grid-template-columns: 70px repeat(7, 1fr);
//   border-bottom: 1px solid var(--cs-outline-variant);
// }

// .gcal-time-gutter {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0.5rem;
//   min-width: 70px;
// }

// .gcal-day-header {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0.75rem 0.25rem;
//   border-left: 1px solid rgba(195, 198, 215, 0.2);
// }

// .gcal-day-header--weekend {
//   background-color: var(--cs-surface-low);
// }

// .gcal-day-header__label {
//   font-size: 0.7rem;
//   font-weight: 600;
//   text-transform: uppercase;
//   color: var(--cs-on-surface-variant);
//   letter-spacing: 0.04em;
//   margin-bottom: 0.25rem;
// }

// .gcal-day-header__number {
//   font-size: 1.25rem;
//   font-weight: 700;
//   color: var(--cs-on-surface);
//   width: 36px;
//   height: 36px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
// }

// .gcal-day-header__number--today {
//   background: linear-gradient(135deg, var(--cs-primary) 0%, var(--cs-primary-container) 100%);
//   color: #ffffff;
// }

// /* Body del calendario */
// .gcal-body {
//   max-height: 660px;
//   overflow-y: auto;
// }

// .gcal-row {
//   display: grid;
//   grid-template-columns: 70px repeat(7, 1fr);
//   min-height: 60px;
// }

// .gcal-time-label {
//   font-size: 0.7rem;
//   font-weight: 500;
//   color: var(--cs-on-surface-variant);
//   white-space: nowrap;
// }

// .gcal-cell {
//   border-left: 1px solid rgba(195, 198, 215, 0.2);
//   border-top: 1px solid rgba(195, 198, 215, 0.15);
//   position: relative;
//   min-height: 60px;
//   padding: 2px;
// }

// .gcal-cell--weekend {
//   background-color: rgba(242, 244, 246, 0.5);
// }

// /* Evento/cita */
// .gcal-event {
//   position: absolute;
//   left: 3px;
//   right: 3px;
//   top: 2px;
//   border-radius: 6px;
//   padding: 4px 8px;
//   color: #ffffff;
//   cursor: pointer;
//   overflow: hidden;
//   z-index: 1;
//   transition: transform 0.15s, box-shadow 0.15s;
//   display: flex;
//   flex-direction: column;
//   gap: 1px;
// }

// .gcal-event:hover {
//   transform: scale(1.02);
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//   z-index: 2;
// }

// .gcal-event--selected {
//   outline: 2px solid var(--cs-primary);
//   outline-offset: 2px;
//   box-shadow: 0 8px 24px rgba(0, 74, 198, 0.3);
//   z-index: 3;
// }

// .gcal-event__time {
//   font-size: 0.6rem;
//   font-weight: 700;
//   opacity: 0.9;
// }

// .gcal-event__title {
//   font-size: 0.75rem;
//   font-weight: 700;
//   line-height: 1.2;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }

// .gcal-event__subtitle {
//   font-size: 0.65rem;
//   opacity: 0.85;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// }

// /* Responsive */
// @media (max-width: 768px) {
//   .gcal-header,
//   .gcal-row {
//     grid-template-columns: 50px repeat(7, 1fr);
//   }

//   .gcal-time-gutter {
//     min-width: 50px;
//   }

//   .gcal-time-label {
//     font-size: 0.6rem;
//   }

//   .gcal-day-header__number {
//     font-size: 1rem;
//     width: 28px;
//     height: 28px;
//   }

//   .gcal-event__title {
//     font-size: 0.65rem;
//   }

//   .gcal-event__subtitle {
//     display: none;
//   }
// }