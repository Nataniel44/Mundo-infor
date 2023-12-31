import React, { useState, useEffect } from "react";
import { db } from "/src/firebase";
import { collection, addDoc } from "firebase/firestore";

const RegistroForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
  });
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const isFormSubmitted = localStorage.getItem("formularioEnviado");
    if (isFormSubmitted) {
      setEnviado(true);
    }
  }, []); // Utiliza un efecto para comprobar si el formulario ya se envió al cargar el componente

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const collectionRef = collection(db, "usuarios");
      await addDoc(collectionRef, formData);
      console.log("se realizó");
      setEnviado(true);

      // Marca el formulario como enviado en Local Storage
      localStorage.setItem("formularioEnviado", "true");
    } catch (error) {
      console.error("Error en el registro", error);
      // Maneja errores de registro aquí
    }
  };

  return (
    <div className="container fondo2 p-3 text-light">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div className="text-center text-logo d-flex flex-column rounded btn-custom p-3 border border-dark">
          <h3 className="text display-4 text-color">
            INSTITUTO Mundo Informática
          </h3>
          <p className="">
            En Mundo Informática, estamos comprometidos con la excelencia en la
            educación informática.
          </p>

          <h2 className="">
            Formulario de{" "}
            <span className="text-color-second">Pre-Inscripción</span>
          </h2>
          {!enviado ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo Electrónico"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Teléfono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                Enviar
              </button>
            </form>
          ) : (
            <div className="alert alert-success mt-3">
              ¡El formulario se envió correctamente!
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>
      </div>
    </div>
  );
};

export default RegistroForm;
