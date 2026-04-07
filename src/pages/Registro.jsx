// Página: Registro
// Asignado a: ERLIN
import React from 'react';

function Registro() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: '450px', width: '100%' }}>
        <div className="text-center mb-4">
          <h2 className="text-primary fw-bold">GRUPO 6 CLÍNICA</h2>
          <h4>Regístrate</h4>
        </div>
        {/* ERLIN: Implementar aquí el formulario de registro con:
            - Campo "Nombre"
            - Campo "Apellidos"
            - Campo "Nombre de Usuario"
            - Campo "DNI"
            - Campo "Contraseña"
            - Campo "Confirmar Contraseña"
            - Botón "Registrarse"
            - Link "¿Ya tienes cuenta? Iniciar sesión" que lleve a /login
        */}
        <p className="text-muted text-center">TODO: Implementar formulario de registro</p>
      </div>
    </div>
  );
}

export default Registro;
