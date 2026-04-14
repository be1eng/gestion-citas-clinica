import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Registro.css";
import logo from "../assets/logo.png";
import clinicBg from "../assets/clinic.jpg";

function Register() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";

    if (name !== "terms" && !value) {
      error = "Este campo es obligatorio";
    } else {
      if (name === "email") {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) error = "Correo inválido";
      }

      if (name === "password") {
        if (value.length < 6) error = "Mínimo 6 caracteres";
      }

      if (name === "confirmPassword") {
        if (value !== form.password) error = "No coincide";
      }

      if (name === "terms") {
        if (!value) error = "Debes aceptar los términos";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setForm((prev) => ({ ...prev, [name]: val }));
    validate(name, val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(form).forEach((key) => validate(key, form[key]));

    const hasErrors = Object.values(errors).some((e) => e);
    const hasEmpty =
      !form.nombre ||
      !form.email ||
      !form.password ||
      !form.confirmPassword ||
      !form.terms;

    if (hasErrors || hasEmpty) return;
    alert("Registro exitoso");
  };

  return (
    <div className="auth-page">
      <header className="auth-header">
        <Link to="/" className="auth-brand">
          <img src={logo} alt="Grupo 6 Clínica" />
          <span>Grupo 6 Clínica</span>
        </Link>
      </header>

      <main className="auth-main">
        <div className="auth-card">
          <div
            className="auth-side"
            style={{ backgroundImage: `url(${clinicBg})` }}
          >
            <div className="auth-side-overlay">
              <div>
                <h2>Tu camino al bienestar comienza aquí.</h2>
                <p>
                  Vive la atención profesional simplificada. Únete a Grupo 6
                  Clínica y gestiona tu salud con precisión clínica y tranquilidad.
                </p>
              </div>
              <div className="trust-badge">
                <div className="trust-avatars">
                  <img src="/female-doctor-portrait.jpg" alt="" className="avatar" />
                  <img src="/mal-physician.jpg" alt="" className="avatar" />
                  <img src="/dermatologist.jpg" alt="" className="avatar" />
                </div>
                <p>Respaldado por más de 500 especialistas</p>
              </div>
            </div>
          </div>

          <div className="auth-form">
            <h2>Crear Cuenta</h2>
            <p className="auth-subtitle">
              Por favor completa tus datos para comenzar.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="input-group">
                <label>Nombre Completo</label>
                <div className="input-wrapper">
                  <i className="bi bi-person input-icon"></i>
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Juan Pérez"
                    value={form.nombre}
                    onChange={handleChange}
                    className={errors.nombre ? "error-input" : ""}
                  />
                </div>
                {errors.nombre && <p className="error">{errors.nombre}</p>}
              </div>

              <div className="input-group">
                <label>Correo Electrónico</label>
                <div className="input-wrapper">
                  <i className="bi bi-envelope input-icon"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="nombre@ejemplo.com"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? "error-input" : ""}
                  />
                </div>
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div className="passwords">
                <div className="input-group">
                  <label>Contraseña</label>
                  <div className="input-wrapper">
                    <i className="bi bi-lock input-icon"></i>
                    <input
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      value={form.password}
                      onChange={handleChange}
                      className={errors.password ? "error-input" : ""}
                    />
                  </div>
                  {errors.password && <p className="error">{errors.password}</p>}
                </div>

                <div className="input-group">
                  <label>Confirmar Contraseña</label>
                  <div className="input-wrapper">
                    <i className="bi bi-key input-icon"></i>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="••••••••"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      className={errors.confirmPassword ? "error-input" : ""}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <div className="terms">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={form.terms}
                  onChange={handleChange}
                />
                <label htmlFor="terms">
                  Al registrarme, acepto los{" "}
                  <a href="#">Términos de Servicio</a> y la{" "}
                  <a href="#">Política de Privacidad</a>.
                </label>
              </div>
              {errors.terms && <p className="error">{errors.terms}</p>}

              <button type="submit" className="auth-btn">
                Crear Cuenta
              </button>
            </form>

            <p className="auth-switch">
              ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="auth-footer">
        <div>
          <strong>Grupo 6 Clínica</strong>
          <p>© 2026 Grupo 6 Clínica. Atención profesional, simplificada.</p>
        </div>
        <nav>
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos de Servicio</a>
          <a href="#">Contáctenos</a>
          <a href="#">Centro de Ayuda</a>
        </nav>
      </footer>
    </div>
  );
}

export default Register;
