import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  // TODO: Reemplazar con estado real de autenticación (Context o estado global)
  const isLoggedIn = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" style={{ color: '#0B7BEB' }}>
          <img
            src="/logo-clinica.png"
            alt="Grupo 6 Clínica"
            width="120"
            className="d-inline-block align-top me-2"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{ color: '#0B7BEB' }}>
                INICIO
              </NavLink>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/mis-citas" style={{ color: '#0B7BEB' }}>
                    MIS CITAS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sacar-cita" style={{ color: '#0B7BEB' }}>
                    SACAR CITA
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" style={{ color: '#0B7BEB' }}>
                  INICIAR SESIÓN
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
