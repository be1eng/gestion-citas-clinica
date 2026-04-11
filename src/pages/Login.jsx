import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../styles/logo.svg'; 

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
    <div className="login-container">

      <div className="login-left">
        <div className="left-content">

          <img src={logo} alt="logo" className="logo-img" />

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

          <div className="social-buttons">
            <button>Google</button>
            <button>Facebook</button>
          </div>

          <div className="divider">
            <span>OR CONTINUE WITH EMAIL</span>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="usuario"
                placeholder="dr.smith@sanctuary.com"
                value={form.usuario}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <span className="forgot">Forgot Password?</span>
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