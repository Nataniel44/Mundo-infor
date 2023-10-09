import { Link } from "react-router-dom";
import { cursosData } from "./CursosData";
import Navbar from "./Navbar";
const Cursos = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center p-2">
          <h2 className="text-center display-4">Nuestros cursos</h2>
          {cursosData.map((curso) => (
            <div key={curso.id} className="col-9 col-md-4 col-lg-3 mb-4">
              <div className="card shadow border-0">
                <div className="card-content">
                  <img
                    src={curso.imageURL}
                    className="card-img-top border-0"
                    alt={curso.title}
                  />
                  <div className="card-body second-color">
                    <h5
                      className="card-title"
                      style={{
                        fontSize: "16px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {curso.title}
                    </h5>
                    <Link
                      to={`/Mundo-infor/curso/${curso.id}`}
                      className="btn btn-dark"
                      style={{
                        transition: "background-color 0.3s, color 0.3s",
                      }} // Transición suave para el efecto hover
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cursos;
