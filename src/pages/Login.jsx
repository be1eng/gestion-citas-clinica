// Página: Login
// Asignado a: ERLIN
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({
    usuario: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos login:", form);

    alert("Iniciando sesión...");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        
        <div className="text-center mb-4">
          <h2 className="text-primary fw-bold">GRUPO 6 CLÍNICA</h2>
          <h4>Bienvenido</h4>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Usuario (Email)</label>
            <input
              type="email"
              className="form-control"
              name="usuario"
              placeholder="Ingrese su correo"
              value={form.usuario}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Ingrese su contraseña"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Iniciar Sesión
          </button>

        </form>

        <div className="text-center mt-3">
          <small>
            ¿No tienes cuenta?{' '}
            <Link to="/registro" className="text-primary fw-bold">
              Regístrate
            </Link>
          </small>
        </div>

      </div>
    </div>
  );
}

export default Login;