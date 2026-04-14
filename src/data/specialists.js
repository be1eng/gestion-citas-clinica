// Fuente única de verdad para los especialistas de la clínica.
// Utilizado por: Especialidades, Inicio (Especialistas Recomendados),
// PerfilEspecialista, y cualquier otro lugar que muestre información de doctores.

export const specialists = [
  {
    id: 1,
    name: "Dra. Sara Mitchell",
    speciality: "Cardióloga Principal",
    specialityKey: "Cardiología",
    rating: 4.9,
    reviews: 124,
    price: 180,
    status: "Disponible",
    statusType: "available",
    image: "/female-doctor-portrait.jpg",
    location: "Sede Principal - Ala A",
    bio: "Especialista en salud cardíaca preventiva y diagnóstico por imagen cardíaca avanzada, con más de 15 años de experiencia atendiendo a pacientes adultos.",
    experience: [
      { period: "2019 - Presente", role: "Jefa de Cardiología", place: "Grupo 6 Clínica", active: true },
      { period: "2013 - 2019", role: "Cardióloga Senior", place: "Hospital del Corazón", active: false },
      { period: "2009 - 2013", role: "Residente de Cardiología", place: "Centro Médico Central", active: false },
    ],
    expertise: [
      { icon: "❤️", title: "Cardiología Preventiva", desc: "Evaluaciones cardíacas integrales y planes de manejo de estilo de vida personalizados." },
      { icon: "🩻", title: "Diagnóstico por Imagen", desc: "Ecocardiografía, tomografía coronaria y pruebas de esfuerzo avanzadas." },
    ],
    feedback: [
      { name: "Carlos R.", date: "Visitó en septiembre", text: "La Dra. Mitchell es increíblemente minuciosa. Me explicó cada resultado con paciencia." },
      { name: "María L.", date: "Visitó en agosto", text: "Atención de primer nivel. La reserva fue sencilla y el trato humano." },
    ],
    availability: [
      { date: "2026-04-20", timeSlots: ["09:00 AM", "10:30 AM", "11:15 AM", "03:00 PM"] },
      { date: "2026-04-21", timeSlots: ["08:30 AM", "10:00 AM", "01:45 PM", "04:30 PM"] },
      { date: "2026-04-22", timeSlots: ["09:00 AM", "11:15 AM", "02:00 PM"] },
      { date: "2026-04-24", timeSlots: ["10:30 AM", "12:00 PM", "03:30 PM", "05:00 PM"] },
      { date: "2026-04-27", timeSlots: ["09:00 AM", "10:30 AM", "11:15 AM"] },
      { date: "2026-04-28", timeSlots: ["08:30 AM", "10:00 AM", "01:45 PM"] },
      { date: "2026-04-29", timeSlots: ["09:00 AM", "02:00 PM", "04:00 PM"] },
      { date: "2026-05-04", timeSlots: ["09:00 AM", "10:30 AM"] },
    ],
  },
  {
    id: 2,
    name: "Dr. Marcus Thorne",
    speciality: "Cardiología Intervencionista",
    specialityKey: "Cardiología",
    rating: 4.8,
    reviews: 98,
    price: 220,
    status: "Disponible",
    statusType: "available",
    image: "/male-especialista.webp",
    location: "Sede Principal - Ala B",
    bio: "Experto en procedimientos cardíacos mínimamente invasivos como angioplastias y colocación de stents. Más de 12 años atendiendo casos complejos.",
    experience: [
      { period: "2020 - Presente", role: "Cardiólogo Intervencionista", place: "Grupo 6 Clínica", active: true },
      { period: "2014 - 2020", role: "Médico Intervencionista", place: "Clínica San Felipe", active: false },
    ],
    expertise: [
      { icon: "🫀", title: "Angioplastia Coronaria", desc: "Procedimientos para abrir arterias bloqueadas y restaurar el flujo sanguíneo." },
      { icon: "🩺", title: "Cateterismo Cardíaco", desc: "Diagnóstico y tratamiento de enfermedades coronarias mediante catéteres." },
    ],
    feedback: [
      { name: "Ana P.", date: "Visitó en octubre", text: "Un profesional serio y muy capaz. Me dio mucha confianza antes del procedimiento." },
    ],
    availability: [
      { date: "2026-04-21", timeSlots: ["08:00 AM", "09:30 AM", "02:30 PM"] },
      { date: "2026-04-22", timeSlots: ["12:00 PM", "05:00 PM"] },
      { date: "2026-04-23", timeSlots: ["08:00 AM", "09:30 AM", "12:00 PM", "02:30 PM", "05:00 PM"] },
      { date: "2026-04-24", timeSlots: ["09:30 AM", "12:00 PM"] },
      { date: "2026-04-25", timeSlots: ["09:00 AM", "10:30 AM"] },
      { date: "2026-04-28", timeSlots: ["08:00 AM", "09:30 AM", "02:30 PM"] },
      { date: "2026-05-05", timeSlots: ["08:00 AM", "09:30 AM"] },
    ],
  },
  {
    id: 3,
    name: "Dr. James Wilson",
    speciality: "Neurólogo",
    specialityKey: "Neurología",
    rating: 4.6,
    reviews: 142,
    price: 210,
    status: "Disponible",
    statusType: "available",
    image: "/mal-physician.jpg",
    location: "Sede Norte - Piso 3",
    bio: "Experto en trastornos del sueño, migrañas, salud cognitiva y cuidado de la memoria. Combina evaluación clínica con neuroimagen avanzada.",
    experience: [
      { period: "2017 - Presente", role: "Neurólogo Senior", place: "Grupo 6 Clínica", active: true },
      { period: "2010 - 2017", role: "Neurólogo General", place: "Hospital Neurológico", active: false },
    ],
    expertise: [
      { icon: "🧠", title: "Trastornos del Sueño", desc: "Diagnóstico y manejo de insomnio, apnea y otros problemas del sueño." },
      { icon: "💊", title: "Manejo de Migrañas", desc: "Planes de tratamiento personalizados para cefaleas crónicas." },
    ],
    feedback: [
      { name: "Luis G.", date: "Visitó en septiembre", text: "Me ayudó a controlar mis migrañas después de años de no encontrar solución." },
    ],
    availability: [
      { date: "2026-04-20", timeSlots: ["10:00 AM", "11:00 AM", "03:00 PM", "04:00 PM"] },
      { date: "2026-04-22", timeSlots: ["10:00 AM", "12:30 PM", "05:30 PM"] },
      { date: "2026-04-23", timeSlots: ["11:00 AM", "12:30 PM", "04:00 PM"] },
      { date: "2026-04-25", timeSlots: ["09:00 AM", "10:00 AM"] },
      { date: "2026-04-27", timeSlots: ["10:00 AM", "11:00 AM", "04:00 PM"] },
      { date: "2026-04-29", timeSlots: ["10:00 AM", "12:30 PM", "05:30 PM"] },
      { date: "2026-05-02", timeSlots: ["09:00 AM", "10:00 AM"] },
    ],
  },
  {
    id: 4,
    name: "Dra. Elena Rodríguez",
    speciality: "Dermatóloga Estética",
    specialityKey: "Dermatología",
    rating: 4.7,
    reviews: 188,
    price: 160,
    status: "Disponible",
    statusType: "available",
    image: "/dermatologist.jpg",
    location: "Sede Principal - Ala C",
    bio: "Dedicada al bienestar de la piel y cuidado estético con más de 15 años de experiencia en tratamientos dermatológicos y rejuvenecimiento.",
    experience: [
      { period: "2016 - Presente", role: "Dermatóloga Principal", place: "Grupo 6 Clínica", active: true },
      { period: "2009 - 2016", role: "Dermatóloga", place: "Centro Dermatológico", active: false },
    ],
    expertise: [
      { icon: "✨", title: "Dermatología Estética", desc: "Tratamientos faciales, rellenos, toxina botulínica y rejuvenecimiento." },
      { icon: "🧴", title: "Dermatología Clínica", desc: "Diagnóstico y tratamiento de acné, rosácea, dermatitis y otras afecciones." },
    ],
    feedback: [
      { name: "Patricia V.", date: "Visitó en octubre", text: "Excelente trato y resultados visibles desde la primera sesión." },
    ],
    availability: [
      { date: "2026-04-20", timeSlots: ["09:30 AM", "11:00 AM", "02:00 PM"] },
      { date: "2026-04-21", timeSlots: ["10:15 AM", "03:30 PM", "04:45 PM"] },
      { date: "2026-04-22", timeSlots: ["09:30 AM", "11:00 AM", "02:00 PM", "04:45 PM"] },
      { date: "2026-04-23", timeSlots: ["10:15 AM", "03:30 PM"] },
      { date: "2026-04-24", timeSlots: ["09:30 AM", "02:00 PM", "04:45 PM"] },
      { date: "2026-04-27", timeSlots: ["09:30 AM", "11:00 AM"] },
      { date: "2026-04-28", timeSlots: ["10:15 AM", "03:30 PM"] },
      { date: "2026-05-04", timeSlots: ["09:30 AM", "02:00 PM"] },
    ],
  },
  {
    id: 5,
    name: "Dr. Andrés Paredes",
    speciality: "Pediatra General",
    specialityKey: "Pediatría",
    rating: 4.5,
    reviews: 64,
    price: 140,
    status: "Próx: Jue",
    statusType: "next",
    image: "/man-especialista.webp",
    location: "Sede Sur - Consultorio 5",
    bio: "Pediatra general enfocado en el cuidado integral del niño sano y en el seguimiento del crecimiento y desarrollo desde el nacimiento hasta la adolescencia.",
    experience: [
      { period: "2018 - Presente", role: "Pediatra", place: "Grupo 6 Clínica", active: true },
      { period: "2014 - 2018", role: "Pediatra Residente", place: "Hospital del Niño", active: false },
    ],
    expertise: [
      { icon: "👶", title: "Control del Niño Sano", desc: "Seguimiento de crecimiento, vacunación y desarrollo psicomotor." },
      { icon: "🌡️", title: "Enfermedades Comunes", desc: "Diagnóstico y tratamiento de infecciones, alergias y afecciones pediátricas." },
    ],
    feedback: [
      { name: "Rocío M.", date: "Visitó en septiembre", text: "Muy cariñoso con los niños, mi hijo pierde el miedo apenas lo ve." },
    ],
    availability: [
      { date: "2026-04-23", timeSlots: ["08:30 AM", "09:15 AM", "11:30 AM"] },
      { date: "2026-04-24", timeSlots: ["09:15 AM", "10:00 AM", "03:00 PM"] },
      { date: "2026-04-25", timeSlots: ["10:00 AM", "11:30 AM"] },
      { date: "2026-04-30", timeSlots: ["08:30 AM", "09:15 AM", "11:30 AM"] },
      { date: "2026-05-01", timeSlots: ["09:15 AM", "10:00 AM", "03:00 PM"] },
    ],
  },
];

export function getSpecialistById(id) {
  const parsed = typeof id === "string" ? parseInt(id, 10) : id;
  return specialists.find((s) => s.id === parsed);
}

// Subconjunto mostrado en la home (Especialistas Recomendados).
// Referencia los mismos doctores por id para mantener consistencia.
export const recommendedIds = [1, 3, 4];
