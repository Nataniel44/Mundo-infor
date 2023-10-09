import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Cursoshor from "./Cursoshor";
import Navbar from "./Navbar";
const CursoDetalle = ({ cursosData }) => {
  const { id } = useParams(); // Obtiene el ID de la URL

  // Busca los detalles del curso correspondiente en la matriz de datos de cursos
  const curso = cursosData.find((curso) => curso.id === parseInt(id));

  if (!curso) {
    // Manejo de caso en el que el curso no se encuentra
    return <div className="bg-light">Curso no encontrado</div>;
  }
  useEffect(() => {
    // Restablece la posición de desplazamiento a la parte superior de la página
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="">
      <Navbar />
      <div className="container rounded  ">
        <div className="row justify-content-center gap-2 ">
          <div className="col-12 bg-light col-lg-7 mb-3 pb-4">
            <h2 className=" text-center text display-5 ">Detalles del Curso</h2>
            <div className="row align-items-center justify-content-center">
              <div className="col-md-4 col-6">
                <img
                  src={curso.imageURL}
                  alt={curso.title}
                  className="img-fluid rounded border borde-2 border-dark mb-2 "
                />
              </div>
              <div className="col-md-8 ">
                <h3 className="text text-color fs-4 m-0">{curso.title}</h3>
                <p className="">{curso.description}</p>
                <Link to="/Mundo-infor" className="btn btn-dark">
                  Ver más cursos
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 p-0  ">
            <Cursoshor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursoDetalle;
