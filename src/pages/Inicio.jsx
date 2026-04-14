import React from "react";
import { Link } from "react-router-dom";
import { getSpecialistById, recommendedIds } from "../data/specialists";
import "./Inicio.css";

const recommendedDoctors = recommendedIds.map(getSpecialistById);

export default function Inicio() {
  return (
    <section className="inicio-page">
      {/* SECCIÓN HERO */}
      <div className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1>Encuentra tu <span>cuidado.</span></h1>
            <p className="hero-text">
              Vive la atención médica como debe ser. Conéctate con especialistas
              de talla mundial en un entorno digital diseñado para tu tranquilidad.
            </p>
            <div className="hero-buttons">
              <Link to="/especialidades" className="btn-primary">Buscar Doctor</Link>
              <a href="#specialties" className="btn-secondary">Ver Especialidades</a>
            </div>
            <div className="stats">
              <div className="stat-box">
                <h3>10k+</h3>
                <p>Doctores Certificados</p>
              </div>
              <div className="stat-box">
                <h3>50k+</h3>
                <p>Pacientes Felices</p>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <img src="imagen-inicio.png" alt="doctor" />
            <div className="floating-card">
              <div className="floating-card-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <div>
                <h4>Atención Premium</h4>
                <p>Top 1% de profesionales médicos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ESPECIALIDADES POPULARES */}
      <div className="specialties-section" id="specialties">
        <div className="specialties-header">
          <div>
            <h2>Especialidades Populares</h2>
            <p>Accede a atención experta en una amplia gama de disciplinas médicas.</p>
          </div>
          <a href="#" className="view-all">Ver todas →</a>
        </div>

        <div className="specialties-grid">
          <div className="specialty-card">
            <div className="specialty-icon"><i className="bi bi-heart-pulse"></i></div>
            <h3>Cardiología</h3>
            <p>Salud cardíaca integral y diagnóstico vascular.</p>
            <a href="#" className="specialty-link">124 Especialistas</a>
          </div>
          <div className="specialty-card">
            <div className="specialty-icon"><i className="bi bi-activity"></i></div>
            <h3>Neurología</h3>
            <p>Atención experta para cerebro, columna y sistema nervioso.</p>
            <a href="#" className="specialty-link">82 Especialistas</a>
          </div>
          <div className="specialty-card">
            <div className="specialty-icon"><i className="bi bi-emoji-smile"></i></div>
            <h3>Pediatría</h3>
            <p>Atención médica especializada para bebés y niños.</p>
            <a href="#" className="specialty-link">215 Especialistas</a>
          </div>
          <div className="specialty-card">
            <div className="specialty-icon"><i className="bi bi-droplet"></i></div>
            <h3>Dermatología</h3>
            <p>Cuidado avanzado de la piel y tratamientos estéticos.</p>
            <a href="#" className="specialty-link">56 Especialistas</a>
          </div>
        </div>
      </div>

      {/* CAMINO SIMPLE AL BIENESTAR */}
      <div className="how-it-works" id="how-it-works">
        <div className="section-header">
          <h2>Camino simple al bienestar</h2>
          <p>Diseñado para eliminar la fricción de la atención médica. Reserva tu próxima cita en minutos.</p>
        </div>

        <div className="steps-grid">
          <div className="step-item step-item--1">
            <div className="step-text-wrapper">
              <span className="step-bg-number">01</span>
              <h3>Buscar Especialista</h3>
              <p>Explora nuestra lista seleccionada de profesionales médicos certificados adaptados a tus necesidades.</p>
            </div>
            <div className="step-image-container">
              <img src="buscarmedico.jpg" alt="Buscar" />
            </div>
          </div>

          <div className="step-item step-item--2">
            <div className="step-text-wrapper">
              <span className="step-bg-number">02</span>
              <h3>Ver Disponibilidad</h3>
              <p>Elige la fecha y hora que se ajuste a tu agenda. Reservas en tiempo real, sin listas de espera.</p>
            </div>
            <div className="step-image-container">
              <img src="citamedica.jpg" alt="Disponibilidad" />
            </div>
          </div>

          <div className="step-item step-item--3">
            <div className="step-text-wrapper">
              <span className="step-bg-number">03</span>
              <h3>Confirmar y Atender</h3>
              <p>Recibe confirmación al instante. Asiste a tu consulta en persona o por videollamada de alta definición.</p>
            </div>
            <div className="step-image-container">
              <img src="reunionmedica.jpg" alt="Consulta" />
            </div>
          </div>
        </div>
      </div>

      {/* ESPECIALISTAS RECOMENDADOS */}
      <div className="recommended-section">
        <div className="section-header">
          <h2>Especialistas Recomendados</h2>
          <p>Profesionales mejor calificados con alta satisfacción de pacientes.</p>
        </div>

        <div className="recommended-grid">
          {recommendedDoctors.map((doc) => (
            <div className="doctor-card" key={doc.id}>
              <img src={doc.image} alt={doc.name} className="doctor-photo" />
              <span className="availability-tag">Hoy</span>
              <h4>{doc.name}</h4>
              <p className="doctor-role">{doc.speciality}</p>
              <p className="doctor-desc">{doc.bio}</p>
              <Link to={`/especialista/${doc.id}`} className="btn-book">Reservar Cita</Link>
            </div>
          ))}
        </div>
      </div>

      {/* BANNER CTA */}
      <div className="cta-section">
        <div className="cta-banner">
          <h2>¿Listo para priorizar tu salud?</h2>
          <p>Únete a miles de pacientes que han encontrado a sus profesionales médicos de confianza en Grupo 6 Clínica.</p>
          <div className="cta-buttons">
            <Link to="/registro" className="btn-cta-primary">Crear Cuenta Gratis</Link>
            <a href="#" className="btn-cta-secondary">Contactar Soporte</a>
          </div>
        </div>
      </div>
    </section>
  );
}
