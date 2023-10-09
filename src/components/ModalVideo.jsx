import { useEffect, useRef } from "react";

const ModalVideo = ({ data }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleModalVisibilityChange = () => {
      if (videoRef.current) {
        if (!document.getElementById("miModal").classList.contains("show")) {
          // El modal se ocultó, pausa el video
          videoRef.current.pause();
        } else {
          // El modal se muestra, reinicia el video
          videoRef.current.play();
        }
      }
    };

    document
      .getElementById("miModal")
      .addEventListener("shown.bs.modal", handleModalVisibilityChange);
    document
      .getElementById("miModal")
      .addEventListener("hidden.bs.modal", handleModalVisibilityChange);

    return () => {
      document
        .getElementById("miModal")
        .removeEventListener("shown.bs.modal", handleModalVisibilityChange);
      document
        .getElementById("miModal")
        .removeEventListener("hidden.bs.modal", handleModalVisibilityChange);
    };
  }, []);

  return (
    <div
      className="modal fade"
      id="miModal"
      tabIndex="-1"
      aria-labelledby="miModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="miModalLabel">
              Video de la clase
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex justify-content-center">
            <video ref={videoRef} width={400} controls>
              <source src={data} type="video/mp4" />
              Tu navegador no admite la reproducción de videos.
            </video>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalVideo;
