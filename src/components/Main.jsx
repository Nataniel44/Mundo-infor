import { Link } from "react-router-dom";

import Navbar from "./Navbar";

import { cursosData } from "./CursosData";
import { useRef } from "react";
import Header from "./Header";
import Presentation from "./Presentation";
import { LargerArrowSvg } from "./Large";
export default function Main() {
  const sectionRef = useRef(null);

  const handleScrollToSection = () => {
    // Realiza el scroll a la sección
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />

      <a href="https://wa.me/3755538503" target="_blank" rel="noreferrer">
        <div className="whatsapp-icon">
          <i className="fab fa-whatsapp">
            <img src="/img/whatsapp.png" width={"35px"} alt="" />
          </i>
        </div>
      </a>
      <Header />
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
      <div className="container  text-logo custom-fondo1">
        <br />
        <br />
        <br />
        <h3 className="text-light text-center display-5 text-logo">
          Nuestros Cursos
        </h3>
        <div className="row justify-content-center">
          {cursosData.map((curso) => (
            <div key={curso.id} className="col-9 col-md-4 col-lg-3 mb-4">
              <div className="card shadow border-0">
                <img
                  src={curso.imageURL}
                  className="card-img-top border-0"
                  alt={curso.title}
                />
                <div className="card-body second-color">
                  <h5 className="card-title">{curso.title}</h5>
                  <Link
                    to={`/Mundo-infor/curso/${curso.id}`}
                    className="btn btn-dark"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
