import { useParams, Link } from "react-router-dom";

const CursoDetalle = ({ cursosData }) => {
  const { id } = useParams(); // Obtiene el ID de la URL

  // Busca los detalles del curso correspondiente en la matriz de datos de cursos
  const curso = cursosData.find((curso) => curso.id === parseInt(id));

  if (!curso) {
    // Manejo de caso en el que el curso no se encuentra
    return <div className="bg-light">Curso no encontrado</div>;
  }

  return (
    <div className="container first-color mb-3 p-3 rounded ">
      <h2 className=" text-center text display-5 ">Detalles del Curso</h2>
      <div className="row align-items-center">
        <div className="col-md-4">
          <img
            src={curso.imageURL}
            alt={curso.title}
            className="img-fluid rounded "
          />
        </div>
        <div className="col-md-8 ">
          <h3 className="text text-color display-2">{curso.title}</h3>
          <p className="">{curso.description}</p>
          <Link to="/MUNDO-INFORMATICA/" className="btn btn-dark">
            Ver más cursos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CursoDetalle;
