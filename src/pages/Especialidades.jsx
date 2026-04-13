// Página: Especialidades
// Asignado a: GONZALO
import React from 'react';

// Datos de ejemplo
export const specialists = [
  {
    id: 1,
    name: "Dr. Julianne Moore",
    speciality: "Senior Cardiologist",
    rating: 4.9,
    reviews: 124,
    price: 180,
    status: "Available",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Dr. Marcus Thorne",
    speciality: "Interventional Cardiology",
    rating: 4.8,
    reviews: 98,
    price: 220,
    status: "Available",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Dr. Sarah Jenkins",
    speciality: "Pediatric Cardiology",
    rating: 5.0,
    reviews: 210,
    price: 195,
    status: "Next: Tue",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 4,
    name: "Dr. Elena Rodriguez",
    speciality: "Electrophysiology",
    rating: 4.7,
    reviews: 76,
    price: 250,
    status: "Available",
    image: "https://i.pravatar.cc/150?img=20",
  },
];


function Especialidades() {
  return (
    <div className="container mt-4">
      <h2 className="text-primary fw-bold mb-4">Seleccione especialidad médica</h2>
      {/* GONZALO: Implementar aquí el grid de especialidades con:
          - Grid de tarjetas (usar row/col de Bootstrap)
          - Cada tarjeta representa una especialidad médica
          - Al hacer clic en una tarjeta, navegar a /sacar-cita (o pasar la especialidad seleccionada)
          - Usar useNavigate() de react-router-dom para la navegación
      */}
      <p className="text-muted">TODO: Implementar grid de especialidades médicas</p>
    </div>
  );
}

export default Especialidades;
