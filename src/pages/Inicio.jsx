// Página: Inicio (Home)
// Asignado a: LEONARDO
import React from "react";
export default function Inicio() {
  return (
    <div>
      <section className="bg-blue-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido a nuestra clínica</h1>
        <p className="mb-6">Cuidamos de tu salud con los mejores especialistas</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
          Agendar
        </button>
      </section>

      <section className="py-12 px-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Servicios básicos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Cardiología", "Pediatría", "Dermatología"].map((servicio) => (
            <div key={servicio} className="border p-6 rounded-xl shadow">
              <h3 className="font-bold mb-2">{servicio}</h3>
              <p className="text-gray-600 mb-4">
                Atención especializada en {servicio.toLowerCase()}.
              </p>
              <button className="text-blue-600">Leer más</button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Reserva tu cita en línea</h2>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl">
          Reservar una cita
        </button>
      </section>

      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Recibe nuestras últimas noticias</h2>
        <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Ingresa tu email"
            className="border px-4 py-2 rounded-lg"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Suscribirse
          </button>
        </div>
      </section>

      <footer className="bg-gray-100 text-center py-6">
        <p>© 2026 Clínica. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

