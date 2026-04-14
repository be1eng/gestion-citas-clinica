import React, { useMemo, useState } from "react";
import SpecialistCard from "../components/SpecialistCard";
import "./Especialidades.css";

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
  },
];

const ALL_SPECIALTIES = ["Cardiología", "Neurología", "Pediatría", "Dermatología"];
const PAGE_SIZE = 4;

function Especialidades() {
  const [selectedSpecialties, setSelectedSpecialties] = useState(["Cardiología"]);
  const [minRating, setMinRating] = useState(4.5);
  const [maxPrice, setMaxPrice] = useState(500);
  const [location, setLocation] = useState("Lima, Perú");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(0);

  const toggleSpecialty = (sp) => {
    setPage(0);
    setSelectedSpecialties((prev) =>
      prev.includes(sp) ? prev.filter((s) => s !== sp) : [...prev, sp]
    );
  };

  const filtered = useMemo(() => {
    return specialists.filter((d) => {
      if (selectedSpecialties.length && !selectedSpecialties.includes(d.specialityKey)) {
        return false;
      }
      if (minRating && d.rating < minRating) return false;
      if (d.price > maxPrice) return false;
      return true;
    });
  }, [selectedSpecialties, minRating, maxPrice]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="especialidades-page">
      <aside className="filters-sidebar">
        <h3>Refinar búsqueda</h3>

        <div className="filter-group">
          <label className="filter-label">ESPECIALIDAD</label>
          {ALL_SPECIALTIES.map((sp) => (
            <label key={sp} className="check-item">
              <input
                type="checkbox"
                checked={selectedSpecialties.includes(sp)}
                onChange={() => toggleSpecialty(sp)}
              />
              {sp}
            </label>
          ))}
        </div>

        <div className="filter-group">
          <label className="filter-label">UBICACIÓN</label>
          <div className="select-wrapper">
            <i className="bi bi-geo-alt"></i>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
              <option>Lima, Perú</option>
              <option>Arequipa, Perú</option>
              <option>Trujillo, Perú</option>
              <option>Cusco, Perú</option>
            </select>
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">CALIFICACIÓN MÍNIMA</label>
          <div className="rating-toggle">
            {[3.0, 4.0, 4.5].map((r) => (
              <button
                key={r}
                type="button"
                className={minRating === r ? "active" : ""}
                onClick={() => {
                  setMinRating(r);
                  setPage(0);
                }}
              >
                {r.toFixed(1)}+
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label">RANGO DE PRECIO (SESIÓN)</label>
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(Number(e.target.value));
              setPage(0);
            }}
            className="price-slider"
          />
          <div className="range-labels">
            <span>S/ 0</span>
            <span>S/ {maxPrice}+</span>
          </div>
        </div>

        <div className="urgent-card">
          <i className="bi bi-clock-history"></i>
          <h4>¿Necesitas atención urgente?</h4>
          <p>Conéctate con un especialista de turno en menos de 15 minutos.</p>
          <button type="button">Iniciar Consulta Virtual</button>
        </div>
      </aside>

      <main className="specialists-main">
        <header className="main-header">
          <div>
            <h1>Especialistas Expertos</h1>
            <p>
              Mostrando {filtered.length} especialistas mejor calificados en tu
              área
            </p>
          </div>
          <div className="view-toggle">
            <button
              type="button"
              className={view === "grid" ? "active" : ""}
              onClick={() => setView("grid")}
              aria-label="Vista de cuadrícula"
            >
              <i className="bi bi-grid-fill"></i>
            </button>
            <button
              type="button"
              className={view === "list" ? "active" : ""}
              onClick={() => setView("list")}
              aria-label="Vista de lista"
            >
              <i className="bi bi-list-ul"></i>
            </button>
          </div>
        </header>

        {visible.length === 0 ? (
          <div className="empty-state">
            <i className="bi bi-search"></i>
            <p>No hay especialistas que coincidan con tus filtros.</p>
          </div>
        ) : (
          <div className={`specialists-grid ${view === "list" ? "is-list" : ""}`}>
            {visible.map((doc) => (
              <SpecialistCard key={doc.id} doctor={doc} />
            ))}
          </div>
        )}

        {pages > 1 && (
          <nav className="pagination">
            <button
              type="button"
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              aria-label="Anterior"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                type="button"
                className={i === page ? "active" : ""}
                onClick={() => setPage(i)}
              >
                {i + 1}
              </button>
            ))}
            <button
              type="button"
              disabled={page >= pages - 1}
              onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
              aria-label="Siguiente"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </nav>
        )}
      </main>
    </section>
  );
}

export default Especialidades;
