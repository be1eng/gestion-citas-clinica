import React, { useState, useEffect } from "react";
import Stepper from "../../components/Stepper";
import Modal from "../../components/ModalCita";
import "../../styles/FormularioCita.css";
import { useNavigate } from "react-router-dom";
// --- SUB-COMPONENTES PARA CADA PASO ---

const Step1Info = ({ formData, handleChange, summaryData }) =>
  <div className="animate__animated animate__fadeIn step-container">
    <section className="step-form-section">
      <h2 className="mb-4 step-title">Información de Paciente</h2>
      <div className="d-flex gap-5">
        <div className="flex-fill mb-3 ">
          <label className="form-label fw-semibold">Nombre Completo</label>
          <input
            className="form-control form-input-flat"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Ingresa tu nombre completo"
          />
        </div>

        <div className="flex-fill mb-3">
          <label className="form-label fw-semibold">Teléfono</label>
          <input
            className="form-control form-input-flat"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+51 999 999 999"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Email</label>
        <input
          className="form-control form-input-flat"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="correo@ejemplo.com"
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Motivo de la visita</label>
        <textarea
          className="form-control form-input-flat"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          rows="3"
        />
      </div>
    </section>

    {/* La tarjeta lateral */}
    <section className="step-info-section card border-0 shadow-sm ">
      <div className="text-left m-4 d-flex flex-column gap-3">
        <h4 className="fw-semibold" style={{ fontSize: "20px" }}>
          <i className="bi bi-calendar me-2" style={{ color: "#004AC6" }} />
          Resumen de Cita
        </h4>
        <div className="d-flex flex-column gap-3">
          {/*info doc */}
          <div className="summaryCard card d-flex flex-row gap-1 p-3 ">
            <img
              src={summaryData.doctorPhoto}
              alt={summaryData.doctorName}
              className="summaryImg rounded-4 "
            />
            <div className="informationCard flex-fill">
              <h6 class="card-title" style={{ fontWeight: "bold" }}>
                {summaryData.doctorName}
              </h6>
              <p className="card-text mb-0" style={{ fontSize: "14px" }}>
                {summaryData.speciality}
              </p>
            </div>
          </div>

          <div className="d-flex gap-3">
            <div class="summaryCard card flex-fill p-3">
              <h5 class="card-title" style={{ fontSize: "12px" }}>
                FECHA
              </h5>
              <p
                className="card-text"
                style={{ fontWeight: "600", fontSize: "16px" }}
              >
                {new Date(summaryData.date).toLocaleDateString("es-PE", {
                  month: "short",
                  day: "numeric",
                  year: "numeric"
                })}
              </p>
            </div>
            <div class="summaryCard card flex-fill p-3">
              <h5 class="card-title" style={{ fontSize: "12px" }}>
                HORA
              </h5>
              <p
                class="card-text"
                style={{ fontWeight: "600", fontSize: "16px" }}
              >
                {summaryData.time}
              </p>
            </div>
          </div>
        </div>
        <div className="p-3 rounded-3" style={{ backgroundColor: "#F2F4F6" }}>
          <div className="d-flex justify-content-between mb-2">
            <span className="text-muted">Costo por consulta</span>
            <span>
              ${summaryData.fee}
            </span>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <span className="text-muted">Cobertura de seguro</span>
            <span className="text-danger">
              -${summaryData.insuranceAmount}
            </span>
          </div>

          <hr />
          <div className="d-flex justify-content-between fw-bold fs-5">
            <span>Total a pagar</span>
            <span className="text-primary">
              ${summaryData.total}
            </span>
          </div>
        </div>
        <div className="summaryCard rounded-3 p-4 d-flex flex-row gap-2">
          <i className="bi bi-info-circle text-primary mb-1 me-2" />
          <p className="small text-muted">
            Asegúrate de que tus datos sean correctos para procesar tu cita en
            la clínica.
          </p>
        </div>
      </div>
    </section>
  </div>;

const Step2Review = ({ formData, handleChange }) =>
  <div className="animate__animated animate__fadeIn">
    <h4 className="step-title mb-4 text-primary">Verifique sus datos</h4>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <strong>Nombre completo:</strong> {formData.fullName}
      </li>
      <li className="list-group-item">
        <strong>Teléfono:</strong> {formData.phone}
      </li>
      <li className="list-group-item">
        <strong>Email:</strong> {formData.email}
      </li>
      <li className="list-group-item">
        <strong>Motivo de la visita:</strong> {formData.reason || "-"}
      </li>
    </ul>
  </div>;

const Step3Final = ({ formData, handleChange }) =>
  <div className="text-center py-4 animate__animated animate__pulse">
    <i className="fas fa-check-circle text-success fa-4x mb-3" />
    {/* <h3>¡Cita Confirmada!</h3>
    <p className="text-muted">
      Hemos enviado un correo con los detalles a {formData.email}.
    </p> */}
  </div>;

function FormularioCita() {
  // 1. DEFINIR EL ESTADO DEL PASO ACTUAL (Faltaba esto)
  const [currentStep, setCurrentStep] = useState(1);

  // 2. DEFINIR LA CONFIGURACIÓN DE LOS PASOS (Faltaba esto)
  const stepsConfig = [
    { title: "Información de Paciente", icon: "bi-person-fill" },
    { title: "Resumen", icon: "bi-eye-fill" },
    { title: "Confirmación", icon: "bi-check-circle-fill" }
  ];

  // usuario falso
  const fakeUser = {
    fullName: "Valeria Godoy",
    phone: "987654321",
    email: "valeria@email.com",
    reason: ""
  };

  // resumen falso
  const fakeSummaryInfo = {
    doctorPhoto:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_-hWCzfTEU7Cmil3zyaa470SzEwn5yNIPRSfMeSe5nqDwyadQXEEWDpR7kknRqcjmfLKSDUHBFP9obFClwJs5uL8VFcoIYugPrY2u9Zq_i5Wlg2AjYJq7cZVbfknjdPwUqN8bOy04mF1KnBlkTfwbmEuOaa3gNaFYW05AQAMxCI2eNpLG-UZEnA1jwI8yKSYyIReUnor9gb_5MwLYlpLNF2TG3gQ_2DaTHZmR8F1NwokhzeinfMuHabeTgEW4A7Ie19z3_J5zYKs",
    doctorName: "Dr. Julian Vance",
    speciality: "Lead Cardiologist",
    fee: "120.00",
    insuranceAmount: "80.00",
    total: "40.00",
    date: "2026-04-10",
    time: "9:00 AM",
    place: "clinica Arequipa"
  };

  const [formData, setFormData] = useState(fakeUser);
  const [summaryData, setSummaryData] = useState(fakeSummaryInfo);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(
    () => {
      if (currentStep === 3) {
        setShowSuccess(true);
      }
    },
    [currentStep]
  );

  // --- FUNCION ÚNICA PARA EL FORMULARIO ---
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  //  Validacion para Stepper
  const nextStep = () => {
    if (currentStep === 1 && (!formData.fullName || !formData.email)) {
      alert("Por favor, complete los campos obligatorios");
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => setCurrentStep(prev => prev - 1);
  
  const navigate = useNavigate();
  return (
    <div className="container mt-5 " style={{ maxWidth: "100%" }}>
      {/* Componente Stepper Visual */}
      <Stepper steps={stepsConfig} currentStep={currentStep} />

      {/* Contenido Dinámico */}
      <div className="card-body m-5">
        {currentStep === 1 &&
          <Step1Info
            formData={formData}
            handleChange={handleChange}
            summaryData={summaryData}
          />}
        {currentStep === 2 &&
          <Step2Review formData={formData} handleChange={handleChange} />}
        {currentStep === 3 &&
          <Step3Final formData={formData} handleChange={handleChange} />}
      </div>

      {/* Botones de Navegación */}
      <div className="d-flex justify-content-between mt-3">
        {currentStep < 3 &&
          <button
            className="btn btn-outline-secondary px-4"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Regresar
          </button>}

        {currentStep === 1 &&
          <button className="btn btn-primary px-4" onClick={nextStep}>
            Siguiente
          </button>}

        {currentStep === 2 &&
          <button className="btn btn-success px-4" onClick={nextStep}>
            Confirmar Cita
          </button>}

        {currentStep === 3 &&
          <Modal
            show={showSuccess}
            summary={summaryData}
            onClose={() => navigate("/")}
          />}
      </div>
    </div>
  );
}
export default FormularioCita;
