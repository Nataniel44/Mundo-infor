import { Link } from "react-router-dom";

import Home from "../components/Home";
import { useState } from "react";
export default function Main() {
  const [data, setdata] = useState(null);

  fetch("./DATA/CursosData.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((jsonData) => {
      setdata(jsonData);
    })
    .catch((error) => {
      console.error("Error al cargar datos:", error);
    });

  return (
    <>
      <Home />
      <div className="container mt-5 text-logo">
        <h3 className="text-light text-center display-5">Nuestros Cursos</h3>
        <div className="row justify-content-center">
          {data ? (
            data.map((curso) => (
              <div key={curso.id} className="col-12 col-md-4 col-lg-3 mb-4">
                <div className="card shadow border-0">
                  <img
                    src={curso.imageURL}
                    className="card-img-top border-0"
                    alt={curso.title}
                  />
                  <div className="card-body second-color">
                    <h5 className="card-title">{curso.title}</h5>
                    <Link to={`/curso/${curso.id}`} className="btn btn-dark">
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Cargando datos...</p>
          )}
        </div>
      </div>
    </>
  );
}
