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
          <div className="d-flex align-items-center flex-wrap gap-2">
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
            <h4 className="fw-bold mb-0 ms-1 ms-sm-2" style={{ fontSize: '1.15rem', color: 'var(--cs-on-surface)' }}>
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
        <div className="gcal-wrapper rounded-4 clinical-shadow" style={{ backgroundColor: 'var(--cs-surface-lowest)' }}>
         <div className="gcal-scroll">

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
              <div className="d-flex flex-wrap gap-2 w-100 w-md-auto appt-actions">
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