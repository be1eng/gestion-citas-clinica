import React from 'react';

function Footer() {
  return (
    <footer className="bg-white mt-auto" style={{ borderTop: '1px solid #e5e7eb' }}>
      <div className="container py-5">
        <div className="row">
          {/* Marca */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3">
              <img
                src="/logo-clinica.png"
                alt="Grupo 6 Clínica"
                height="80"
                className="d-inline-block"
              />
            </div>
            <p className="text-muted" style={{ fontSize: '0.9rem', maxWidth: '300px' }}>
              Elevando la atención médica a través de un diseño profesional y cuidado de calidad.
              Tu bienestar es nuestra prioridad.
            </p>
          </div>

          {/* Plataforma */}
          <div className="col-6 col-lg-2 offset-lg-2">
            <h6 className="fw-semibold mb-3" style={{ color: '#111827' }}>Plataforma</h6>
            <ul className="list-unstyled">
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

          {/* Legal */}
          <div className="col-6 col-lg-2">
            <h6 className="fw-semibold mb-3" style={{ color: '#111827' }}>Legal</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none footer-link" style={{ fontSize: '0.9rem' }}>
                  Política de Privacidad
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none footer-link" style={{ fontSize: '0.9rem' }}>
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ borderTop: '1px solid #e5e7eb' }}>
        <div className="container py-3">
          <p className="text-muted text-center mb-0" style={{ fontSize: '0.85rem' }}>
            &copy; 2024 Grupo 6 Clínica. Professional care, simplified.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
