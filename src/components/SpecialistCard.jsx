import React from "react";

export default function SpecialistCard({ doctor }) {
  return (
    <div className="card specialist-card shadow-sm border-0 p-3 h-100">

      <div className="d-flex align-items-start">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="rounded-4 me-3"
          width="90"
        />

        <div className="flex-grow-1">
          <span className="badge bg-success-subtle text-success mb-2">
            {doctor.status}
          </span>

          <h5 className="fw-semibold mb-1">{doctor.name}</h5>

          <p className="text-primary mb-1">
            {doctor.speciality}
          </p>

          <small className="text-muted">
            ⭐ {doctor.rating} ({doctor.reviews} reviews)
          </small>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-between align-items-center">
        <div>
          <small className="text-muted">FEE STARTS FROM</small>
          <h5 className="fw-bold">${doctor.price}</h5>
        </div>

        <button className="btn btn-primary rounded-pill px-4">
          Book Appointment
        </button>
      </div>
    </div>
  );
}