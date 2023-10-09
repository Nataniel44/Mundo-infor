const ContenidoItem = ({ titulo, texto, material, video }) => (
  <div className="d-flex flex-column gap-3">
    <div className="bg-light">
      <button
        type="button"
        className="btn btn-link  fs-4 font p-2"
        data-bs-toggle="modal"
        data-bs-target="#miModal"
      >
        <img src={"/icons/youtube.png"} className="me-3" width={50} alt="" />
        Ver Clase
      </button>
    </div>

    <div className="me-3 ms-3  p-3 d-flex align-items-center bg-light">
      <img src="/icons/briefcase.png" className="me-3" width={25} alt="" />
      <a
        className="btn btn-link p-0"
        href={material}
        target="_blank"
        rel="noopener noreferrer"
      >
        Materiales: {texto}
      </a>
    </div>
  </div>
);

export default ContenidoItem;
