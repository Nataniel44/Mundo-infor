import { Link } from "react-router-dom";

import Navbar from "./Navbar";

import { cursosData } from "./CursosData";
import { useRef } from "react";

import Presentation from "./Presentation";
import { LargerArrowSvg } from "./Large";

import RegistroForm from "./RegistroForm";
import Headers from "./Headers";
export default function Main() {
  const sectionRef = useRef(null);

  const handleScrollToSection = () => {
    // Realiza el scroll a la sección
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <main className="">
        <a href="https://wa.me/3755538503" target="_blank" rel="noreferrer">
          <div className="whatsapp-icon">
            <i className="fab fa-whatsapp">
              <img src="/img/whatsapp.png" width={"35px"} alt="" />
            </i>
          </div>
        </a>
        <Headers />

        <RegistroForm />
        <div className="arrow">
          <div className="arrow-container">
            <button className="btn  p-0" onClick={handleScrollToSection}>
              {LargerArrowSvg}
            </button>
          </div>
        </div>
        <div className="text-light">
          <Presentation />
        </div>

        <section ref={sectionRef}></section>
        <div className="container  text-logo fondo3">
          <br />

          <h3 className="text-light text-center font display-5 second-color1 rounded m-0">
            Nuestros Cursos
            <div className="cursos-container1">
              {/* Contenido de tus cursos */}
              <div className="arrow-down1 text-dark"></div>
            </div>
          </h3>
          <div className="row justify-content-center">
            {cursosData.map((curso) => (
              <div key={curso.id} className="col-9 col-md-4 col-lg-3 mb-4">
                <div className="card shadow border-0">
                  {/* Envuelve todos los elementos en un contenedor */}
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
      </main>
    </>
  );
}
