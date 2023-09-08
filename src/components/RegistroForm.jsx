import { useState } from "react";
import { db } from "/src/firebase"; // Importa la instancia de Firebase que creaste

const RegistroForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
  });

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
      // Guarda los datos en una colección llamada "usuarios" en Firestore
      await db.collection("usuarios").doc("ojcEKx37vzOjS3mJe7lO").set(formData);
      console.log("Registro exitoso");
      // Puedes redirigir o mostrar un mensaje de éxito aquí
    } catch (error) {
      console.error("Error en el registro", error);
      // Maneja errores de registro aquí
    }
  };

  return (
    <div className="text-center text-logo d-flex flex-column rounded second-color p-3">
      <h2 className="">
        Formulario de{" "}
        <span className="text-color-second"> Pre-Inscripción</span>
      </h2>
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
    </div>
  );
};

export default RegistroForm;
