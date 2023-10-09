import { useState } from "react";
import { db } from "/src/firebase"; // Importa la instancia de Firebase que creaste
import { collection, addDoc } from "firebase/firestore";
import Navbar from "./Navbar";
import { useEffect } from "react";
const Registro = () => {
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
      const collectionRef = collection(db, "usuarios");
      addDoc(collectionRef, formData);
      console.log("se realizo");
    } catch (error) {
      console.error("Error en el registro", error);
      // Maneja errores de registro aquí
    }
  };
  useEffect(() => {
    // Restablece la posición de desplazamiento a la parte superior de la página
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container fondo2 p-3 text-light text-center">
        <h2 className="font display-5 text-">¡Quiero inscribirme!</h2>
        <p className="text-light">
          Complete el formulario y sera contactado en la brevedad.
        </p>
        <div className="  d-flex justify-content-center flex-column align-items-center ">
          <div className="text-center text-logo d-flex flex-column rounded btn-custom p-3 border border-dark  ">
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
        </div>

        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>
    </>
  );
};

export default Registro;
