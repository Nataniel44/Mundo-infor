const Pregunta = ({
  pregunta,
  opciones,
  seleccionarRespuesta,
  puntuacion,
  puntuacionMax,
}) => {
  return (
    <div className=" mt-3 text-center">
      <h2 className="mb-4 text-light">{pregunta}</h2>
      <ul className="list-group">
        {opciones.map((opcion, index) => (
          <li key={index} className="list-group-item bg-dark mb-2">
            <button
              className="btn btn-primary"
              onClick={() => seleccionarRespuesta(opcion)}
            >
              {opcion}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <div className="d-flex justify-content-between fs-5">
          <strong>Puntuación: {puntuacion}</strong>
          <strong>Puntuación-Max: {puntuacionMax}</strong>
        </div>
      </div>
    </div>
  );
};

export default Pregunta;
