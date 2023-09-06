import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text" href="#">
            <img
              src="./img/logo2.png"
              className="rounded-circle"
              width="50"
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
            className={`collapse navbar-collapse ${collapsed ? "show" : ""}`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav text-logo">
              <Link
                to="/Mundo-infor"
                className="nav-link active"
                onClick={toggleNavbar} // Cierra el navbar al hacer clic en el enlace
              >
                Inicio
              </Link>

              <a className="nav-link active" href="#">
                Cursos
              </a>
              <a className="nav-link active" href="#">
                ¡Quiero inscribirme!
              </a>
              <Link
                to="/login"
                className="nav-link active text-primary"
                onClick={toggleNavbar} // Cierra el navbar al hacer clic en el enlace
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
