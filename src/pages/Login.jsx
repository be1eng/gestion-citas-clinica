// Página: Login
// Asignado a: ERLIN
import React from 'react';

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <h2 className="text-primary fw-bold">GRUPO 6 CLÍNICA</h2>
          <h4>Bienvenido</h4>
        </div>
        {/* ERLIN: Implementar aquí el formulario de login con:
            - Campo "Usuario"
            - Campo "Contraseña"
            - Botón "Iniciar Sesión"
            - Link "¿No tienes cuenta? Regístrate" que lleve a /registro
        */}
        <p className="text-muted text-center">TODO: Implementar formulario de login</p>
      </div>
    </div>
  );
}

export default Login;
