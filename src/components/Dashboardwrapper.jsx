import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboardwrapper = ({ children, admin }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
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
              {/* Solo muestra el enlace de administrador si isAdmin es true */}
              {admin && (
                <Link to={"/Mundo-infor/dashBoard"} className="nav-link active">
                  Prospectos
                </Link>
              )}
              <Link
                to={"/Mundo-infor/dashBoard/profile"}
                className="nav-link active"
              >
                Profile
              </Link>
              <Link to={"/Singout"} className="nav-link active">
                SingOut
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Dashboardwrapper;
