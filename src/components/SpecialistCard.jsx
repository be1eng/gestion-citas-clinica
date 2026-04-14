import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SpecialistCard({ doctor }) {
  const navigate = useNavigate();
  const [fav, setFav] = useState(false);

  return (
    <article className="specialist-card">
      <button
        type="button"
        className={`fav-btn ${fav ? "fav-btn--active" : ""}`}
        onClick={() => setFav(!fav)}
        aria-label="Favorito"
      >
        <i className={fav ? "bi bi-heart-fill" : "bi bi-heart"}></i>
      </button>

      <div className="card-top">
        <img src={doctor.image} alt={doctor.name} className="doctor-img" />
        <div className="doctor-info">
          <span className={`status-tag status-${doctor.statusType}`}>
            {doctor.status}
          </span>
          <h4>{doctor.name}</h4>
          <p className="specialty">{doctor.speciality}</p>
          <div className="rating">
            <i className="bi bi-star-fill"></i> {doctor.rating.toFixed(1)}{" "}
            <span>({doctor.reviews} reseñas)</span>
          </div>
        </div>
      </div>

      <div className="card-bottom">
        <div>
          <small>TARIFA DESDE</small>
          <strong>S/ {doctor.price}</strong>
        </div>
        <button
          type="button"
          className="book-btn"
          onClick={() => navigate("/sacar-cita")}
        >
          Reservar Cita
        </button>
      </div>
    </article>
  );
}
