import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/MainLayout';

// Pages
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Inicio from '../pages/Inicio';
import Especialidades from '../pages/Especialidades';
import Formulario from '../pages/Formulario';
import MisCitas from '../pages/MisCitas';
import CitaAgendada from '../pages/CitaAgendada';

function AppRouter() {
  return (
    <Routes>
      {/* Rutas públicas (sin navbar) */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />

      {/* Rutas con navbar (MainLayout) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/sacar-cita" element={<Formulario />} />
        <Route path="/mis-citas" element={<MisCitas />} />
        <Route path="/cita-agendada" element={<CitaAgendada />} />
      </Route>

      {/* Ruta 404 - redirige al inicio */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
