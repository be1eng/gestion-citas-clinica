import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  // TODO: Reemplazar con estado real de autenticación (Context o estado global)
  const isLoggedIn = false;

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/logo-clinica.png"
            alt="Grupo 6 Clínica"
            height="80"
            className="d-inline-block"
          />
        </Link>

        {/* Toggle mobile */}
        <button
          className="navbar-toggler border-0"
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
          <ul className="navbar-nav mx-auto gap-1">
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
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link px-3 ${isActive ? 'active fw-semibold' : ''}`
                }
                to="/sacar-cita"
              >
                Servicios
              </NavLink>
            </li>
          </ul>

          {/* Botones de autenticación */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            {isLoggedIn ? (
              <>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active fw-semibold' : ''}`
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
                <Link className="nav-link" to="/login">
                  Iniciar Sesion
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
