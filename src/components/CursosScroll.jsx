import { cursosData } from "./CursosData";
import { Link } from "react-router-dom";
const Cursoshor = () => {
  return (
    <div className="cursos-container rounded fondo3">
      {/* Aplica la clase aquí */}
      <h3 className="text-light text-center font display-5 second-color1 rounded m-0">
        Mas Cursos
        <div className="cursos-container1">
          {/* Contenido de tus cursos */}
          <div className="arrow-down1 text-dark"></div>
        </div>
      </h3>
      {cursosData.map((curso) => (
        <div key={curso.id} className="">
          <div className="d-flex position-relative">
            <img
              src={curso.imageURL}
              className="flex-shrink-0"
              alt={curso.title}
              width={150}
            />
            <div className="card-body second-color">
              <h5 className="card-title">{curso.title}</h5>
              <div
                className="truncate-text"
                style={{
                  width: "200px", // Ajusta el ancho según tus necesidades
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  margin: "0px",
                }}
              >
                {curso.description}
              </div>
              <Link
                to={`/Mundo-infor/curso/${curso.id}`}
                className="btn btn-dark"
                style={{
                  transition: "background-color 0.3s, color 0.3s",
                }} // Transición suave para el efecto hover
              >
                Ver más
              </Link>
              {/* Agrega el contenido del curso aquí */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cursoshor;
