import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer bg-white mt-auto">
      <div className="container py-4 py-lg-5">
        <div className="row g-4 g-lg-5">
          {/* Marca */}
          <div className="col-12 col-lg-5">
            <Link to="/" className="footer-brand d-inline-flex align-items-center mb-3">
              <img src="/logo-clinica.png" alt="Grupo 6 Clínica" />
            </Link>
            <p className="text-muted mb-0" style={{ fontSize: '0.9rem', maxWidth: '360px' }}>
              Elevando la atención médica a través de un diseño profesional y cuidado de calidad.
              Tu bienestar es nuestra prioridad.
            </p>
          </div>

          {/* Plataforma */}
          <div className="col-12 col-lg-2">
            <h6 className="fw-semibold mb-3" style={{ color: '#111827' }}>Plataforma</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none footer-link" style={{ fontSize: '0.9rem' }}>
                  Centro de Ayuda
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none footer-link" style={{ fontSize: '0.9rem' }}>
                  Contáctenos
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-lg-5">
            <h6 className="fw-semibold mb-3" style={{ color: '#111827' }}>Boletín</h6>
            <p className="text-muted mb-3" style={{ fontSize: '0.85rem' }}>
              Mantente al día con consejos de salud y noticias de la clínica.
            </p>
            <form
              className="footer-newsletter d-flex flex-column flex-sm-row gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                className="form-control form-control-sm rounded-pill px-3"
                placeholder="Tu correo"
                style={{ fontSize: '0.9rem' }}
              />
              <button
                type="submit"
                className="btn btn-primary btn-sm rounded-pill px-3"
                style={{ backgroundColor: '#2563EB', borderColor: '#2563EB', fontSize: '0.85rem', whiteSpace: 'nowrap' }}
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        <div className="container py-3">
          <p className="text-muted text-center mb-0" style={{ fontSize: '0.85rem' }}>
            &copy; 2026 Grupo 6 Clínica. Atención profesional, simplificada.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
