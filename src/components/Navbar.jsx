import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  // TODO: Reemplazar con estado real de autenticación (Context o estado global)
  const isLoggedIn = false;

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-2">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center py-0 me-0" to="/">
          <img
            src="/logo-clinica.png"
            alt="Grupo 6 Clínica"
            className="navbar-logo"
          />
        </Link>

        {/* Toggle mobile */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Links centrales */}
          <ul className="navbar-nav mx-auto gap-1 mt-3 mt-lg-0">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? 'active fw-semibold' : ''}`
                }
                to="/"
                end
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? 'active fw-semibold' : ''}`
                }
                to="/especialidades"
              >
                Doctores
              </NavLink>
            </li>
          </ul>

          {/* Botones de autenticación */}
          <div className="navbar-auth d-flex align-items-stretch align-items-lg-center gap-2 gap-lg-3 mt-3 mt-lg-0">
            {isLoggedIn ? (
              <>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link text-center ${isActive ? 'active fw-semibold' : ''}`
                  }
                  to="/mis-citas"
                >
                  Mis Citas
                </NavLink>
                <Link
                  className="btn btn-primary rounded-pill px-4"
                  to="/sacar-cita"
                  style={{ backgroundColor: '#2563EB', borderColor: '#2563EB' }}
                >
                  Sacar Cita
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link text-center" to="/login">
                  Iniciar Sesión
                </Link>
                <Link
                  className="btn btn-primary rounded-pill px-4"
                  to="/registro"
                  style={{ backgroundColor: '#2563EB', borderColor: '#2563EB' }}
                >
                  Registrarse
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
