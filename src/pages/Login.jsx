import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../assets/logo.png';

function Login() {
  const [form, setForm] = useState({
    usuario: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";

    if (!value) {
      error = "Este campo es obligatorio";
    } else {
      if (name === "usuario") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          error = "Ingrese un correo válido";
        }
      }

      if (name === "password") {
        if (value.length < 6) {
          error = "Mínimo 6 caracteres";
        }
      }
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });

    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validate("usuario", form.usuario);
    validate("password", form.password);

    if (errors.usuario || errors.password || !form.usuario || !form.password) {
      return;
    }

    alert("Login correcto");
  };

  return (
    <div className="login-container">

      <div className="login-left">
        <div className="left-content">

          <img src={logo} alt="logo" className="logo-main" />

          <h2>Experience healthcare, redefined.</h2>
          <p>
            Enter a space designed for clarity and professional excellence.
            Your health journey deserves a sanctuary.
          </p>
        </div>
      </div>

      <div className="login-right">

        <div className="login-box">
          <h2>Welcome Back</h2>
          <p>Please enter your details to access your portal.</p>

          <form onSubmit={handleSubmit} noValidate>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="usuario"
                value={form.usuario}
                onChange={handleChange}
                className={errors.usuario ? "error-input" : ""}
              />
              {errors.usuario && <p className="error">{errors.usuario}</p>}
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className={errors.password ? "error-input" : ""}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <button type="submit" className="login-btn">
              Login to Portal
            </button>

          </form>

          <p className="register">
            Don't have an account? <Link to="/registro">Create Account</Link>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;