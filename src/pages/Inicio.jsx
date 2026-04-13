import React from "react";
import "./Inicio.css";

export default function Inicio() {
  return (
    <section className="inicio-page">
      {/* SECCIÓN HERO (Lo que se ve al entrar) */}
      <div className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1>Encuentra tu <span>cita.</span></h1>
            <p className="hero-text">
              Experimente la atención médica como debe ser.<br />
              Conéctese con especialistas de talla mundial en un entorno digital.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Buscar Doctor</button>
              <button className="btn-secondary">Ver Especialidades</button>
            </div>
            <div className="stats">
              <div className="stat-box"><h3>10k+</h3><p>Doctores</p></div>
              <div className="stat-box"><h3>50k+</h3><p>Pacientes</p></div>
            </div>
          </div>

          <div className="hero-right">
            <img src="imagen-inicio.png" alt="doctor" />
            <div className="floating-card">
              <h4>Premium Care</h4>
              <p>Top 1% profesionales médicos seleccionados.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN DE ESPECIALIDADES */}
      <div className="specialties-section">
        <div className="specialties-header">
          <div>
            <h2>Nuestras especialidades</h2>
            <p>Ofrecemos atención especializada en una amplia gama de disciplinas médicas.</p>
          </div>
          <a href="#" className="view-all">View All →</a>
        </div>

        <div className="specialties-grid">
          <div className="specialty-card">
            <h3>Cardiología</h3>
            <p>Comprehensive heart health and vascular diagnostics.</p>
            <span className="badge">124 Specialists</span>
          </div>
          <div className="specialty-card">
            <h3>Neurología</h3>
            <p>Expert care for brain, spine and nervous system.</p>
            <span className="badge">82 Specialists</span>
          </div>
          <div className="specialty-card">
            <h3>Pediatría</h3>
            <p>Specialized medical attention for infants and children.</p>
            <span className="badge">215 Specialists</span>
          </div>
          <div className="specialty-card">
            <h3>Dermatología</h3>
            <p>Advanced skin care and aesthetic treatments.</p>
            <span className="badge">56 Specialists</span>
          </div>
        </div>
      </div>
      <div className="section-header">
        <h1>Simple path to wellness</h1>
        <p>Designed to remove the friction from healthcare. Book your next appointment in minutes.</p>
      </div>

      <div className="steps-grid">
        {/* Paso 01 */}
        <div className="step-item">
          <div className="step-text-wrapper">
            <span className="step-bg-number">01</span>
            <h3>Search Specialist</h3>
            <p>Browse through our curated list of board-certified medical professionals tailored to your needs.</p>
          </div>
          <div className="step-image-container">
            <img src="buscarmedico.jpg" alt="Search" />
          </div>
        </div>

        {/* Paso 02 */}
        <div className="step-item">
          <div className="step-text-wrapper">
            <span className="step-bg-number">02</span>
            <h3>Check Availability</h3>
            <p>Select a date and time that fits your schedule. Real-time booking with no waitlists.</p>
          </div>
          <div className="step-image-container">
            <img src="citamedica.jpg" alt="Availability" />
          </div>
        </div>

        {/* Paso 03 */}
        <div className="step-item">
          <div className="step-text-wrapper">
            <span className="step-bg-number">03</span>
            <h3>Confirm & Meet</h3>
            <p>Get instant confirmation. Attend your consultation in-person or via high-definition video.</p>
          </div>
          <div className="step-image-container">
            <img src="reunionmedica.jpg" alt="Meet" />
          </div>
        </div>
      </div>
    </section>
  );
}