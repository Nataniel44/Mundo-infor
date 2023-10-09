import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top rounded-bottom p-0 flex-column">
        <div className={`promotion-banner ${scrolled ? "scrolled" : ""}`}>
          <div className="animated-text">
            <marquee direction=" ">50% OFF en cualquier curso</marquee>
          </div>
        </div>
        <div className="container-fluid">
          <a className="navbar-brand text p-0" href="#">
            <img
              src="/img/logo4.png"
              className="rounded-circle"
              width="160"
              alt="Mundo Informática"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={collapsed ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-center p${
              collapsed ? "show" : ""
            }`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav fs-5 d-flex align-items-center gap-3">
              <Link
                to="/Mundo-infor"
                className="nav-link active"
                onClick={toggleNavbar} // Cierra el navbar al hacer clic en el enlace
              >
                Inicio
              </Link>

              <Link className="nav-link active" to={"/Mundo-infor/cursos/"}>
                Cursos
              </Link>
              <Link className="nav-link active" to={"/Mundo-infor/inscribirMe"}>
                ¡Quiero inscribirme!
              </Link>
              <Link
                to="/Mundo-infor/login"
                className="nav-link active text-primary d-flex align-items-center justify-content-center"
                onClick={toggleNavbar} // Cierra el navbar al hacer clic en el enlace
              >
                Log In With{" "}
                <img src="/img/google.png" className="ms-1" width={25} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
