import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import logo from "../assets/logo.png";

function Login() {
  const [form, setForm] = useState({ usuario: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";

    if (!value) {
      error = "Este campo es obligatorio";
    } else {
      if (name === "usuario") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = "Ingrese un correo válido";
      }
      if (name === "password") {
        if (value.length < 6) error = "Mínimo 6 caracteres";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate("usuario", form.usuario);
    validate("password", form.password);

    if (errors.usuario || errors.password || !form.usuario || !form.password) {
      return;
    }
    alert("Inicio de sesión correcto");
  };

  return (
    <div className="login-page">
      {/* Izquierda: branding */}
      <div className="login-brand-side">
        <div className="brand-blur-circle"></div>
        <div className="brand-content">
          <div className="brand-logo-card">
            <img src={logo} alt="Grupo 6 Clínica" />
          </div>
          <h1>Vive la atención médica, reimaginada.</h1>
          <p>
            Entra a un espacio diseñado con claridad y excelencia profesional.
            Tu camino de salud merece un santuario.
          </p>
        </div>
      </div>

      {/* Derecha: formulario */}
      <div className="login-form-side">
        <div className="login-form-box">
          <div className="mobile-logo">
            <img src={logo} alt="Grupo 6 Clínica" />
          </div>
          <h2>Bienvenido de nuevo</h2>
          <p className="login-subtitle">
            Por favor ingresa tus datos para acceder a tu portal.
          </p>

          <div className="social-buttons">
            <button type="button" className="social-btn">
              <img src="/icons/google.svg" alt="" className="social-icon" /> Google
            </button>
            <button type="button" className="social-btn">
              <img src="/icons/facebook.svg" alt="" className="social-icon" /> Facebook
            </button>
          </div>

          <div className="divider">
            <span>O CONTINÚA CON CORREO</span>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <label>Correo Electrónico</label>
              <div className="input-wrapper">
                <i className="bi bi-envelope input-icon"></i>
                <input
                  type="email"
                  name="usuario"
                  placeholder="dr.perez@ejemplo.com"
                  value={form.usuario}
                  onChange={handleChange}
                  className={errors.usuario ? "error-input" : ""}
                />
              </div>
              {errors.usuario && <p className="error">{errors.usuario}</p>}
            </div>

            <div className="input-group">
              <div className="label-row">
                <label>Contraseña</label>
                <a href="#" className="forgot">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
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

            <label className="remember">
              <input type="checkbox" /> Recuérdame por 30 días
            </label>

            <button type="submit" className="auth-btn">
              Iniciar Sesión
            </button>
          </form>

          <p className="auth-switch">
            ¿Aún no tienes cuenta? <Link to="/registro">Crear cuenta</Link>
          </p>

          <div className="login-badges">
            <span><i className="bi bi-shield-check"></i> CUMPLIMIENTO HIPAA</span>
            <span><i className="bi bi-lock-fill"></i> CIFRADO 256-BIT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
