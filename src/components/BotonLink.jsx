import { Link } from "react-router-dom";

const BotonLink = ({ curso, onClaseSeleccionada }) => {
  return (
    <>
      <div className="row p-3 pb-5 justify-content-center gap-1">
        <div className="col-5 col-md-4 col-lg-3 p-0 ">
          <a href="/cursosView/" className="nav-link active p-0 ">
            <div className="single-section onetopic">General</div>
          </a>
        </div>
        {curso.map((clase) => (
          <div key={clase.id} className="col-3 col-sm-3 col-md-3 col-lg-2 p-0">
            <Link
              to={`/cursosView/${clase.id}`}
              className="nav-link active p-0 "
              onClick={() => onClaseSeleccionada(clase)}
            >
              <div className="single-section onetopic">Clase {clase.id}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default BotonLink;
