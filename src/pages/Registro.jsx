import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";
import bg from "../assets/clinic.jpg";

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
        if (!value) error = "Debes aceptar";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    const val = type === "checkbox" ? checked : value;

    setForm((prev) => ({
      ...prev,
      [name]: val,
    }));

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
    <div className="register-container">
      <div className="register-card">

        <div
          className="register-left"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="overlay">
            <h2>Your journey to wellness starts here.</h2>
            <p>
              Experience professional care simplified. Join Clinical Sanctuary
              and manage your health with clinical precision and peace of mind.
            </p>
          </div>
        </div>

        <div className="register-right">
          <div className="register-box">
            <h2>Create Account</h2>
            <p>Please fill in your details to get started.</p>

            <form onSubmit={handleSubmit} noValidate>
              
              <div className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="John Doe"
                  value={form.nombre}
                  onChange={handleChange}
                  className={errors.nombre ? "error-input" : ""}
                />
                {errors.nombre && <p className="error">{errors.nombre}</p>}
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? "error-input" : ""}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>

              <div className="passwords">
                <div className="input-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="********"
                    value={form.password}
                    onChange={handleChange}
                    className={errors.password ? "error-input" : ""}
                  />
                  {errors.password && (
                    <p className="error">{errors.password}</p>
                  )}
                </div>

                <div className="input-group">
                  <label>Confirm</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="********"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? "error-input" : ""}
                  />
                  {errors.confirmPassword && (
                    <p className="error">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <div className="terms">
                <input
                  type="checkbox"
                  name="terms"
                  checked={form.terms}
                  onChange={handleChange}
                />
                <span>
                  I agree to <b>Terms</b> and <b>Privacy Policy</b>
                </span>
              </div>
              {errors.terms && <p className="error">{errors.terms}</p>}

              <button type="submit" className="register-btn">
                Create Account
              </button>
            </form>

            <p className="login-link">
              Already have an account? <Link to="/">Login</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;