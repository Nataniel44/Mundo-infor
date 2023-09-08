import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
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
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="container p-3 rounded bg-light ">
      <div>
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
            <h3 className="text text-color display-4">{curso.title}</h3>
            <p className="">{curso.description}</p>
            <Link to="/Mundo-info" className="btn btn-dark">
              Ver más cursos
            </Link>
          </div>
=======
=======
>>>>>>> parent of ce0ad55 (3)
    <div className="container first-color mb-3 p-3 rounded " id="section">
      <h2 className=" text-center text display-5 ">Detalles del Curso</h2>
      <div className="row align-items-center">
        <div className="col-md-4">
          <img
            src={curso.imageURL}
            alt={curso.title}
            className="img-fluid rounded border borde-2 border-dark mb-2 "
          />
        </div>
        <div className="col-md-8 ">
          <h3 className="text text-color display-2">{curso.title}</h3>
          <p className="">{curso.description}</p>
          <Link to="/Mundo-infor" className="btn btn-dark">
            Ver más cursos
          </Link>
<<<<<<< HEAD
>>>>>>> parent of ce0ad55 (3)
=======
>>>>>>> parent of ce0ad55 (3)
        </div>
      </div>
    </div>
  );
};

export default CursoDetalle;
