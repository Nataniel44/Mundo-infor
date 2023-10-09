import { cursosData } from "./CursosData";
import { Link } from "react-router-dom";

const Cursoshor = () => {
  
  return (
    <div className="container vh-100">
      <h2 className="text-center display-4">Nuestros cursos</h2>
      <div
        id="cursoCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="false"
        data-bs-wrap="false"
        data-bs-touch="true"
      >
        <div className="carousel-inner">
          {cursosData.map((curso, index) => (
            <div
              key={curso.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row justify-content-center p-2">
                <div className="col-9 col-md-4 col-lg-3 mb-4">
                  <div className="card shadow border-0">
                    <div className="card-content">
                      <img
                        src={curso.imageURL}
                        className="card-img-top border-0"
                        alt={curso.title}
                      />
                      <div className="card-body ">
                        <h5 className="card-title font fs-3">{curso.title}</h5>
                        <Link
                          to={`/Mundo-infor/curso/${curso.id}`}
                          className="btn btn-dark"
                          style={{
                            transition: "background-color 0.3s, color 0.3s",
                          }}
                        >
                          Ver Detalles
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#cursoCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#cursoCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Cursoshor;
