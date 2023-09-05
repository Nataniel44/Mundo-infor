import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text" href="#">
            <img
              src="./img/logo2.png"
              className="rounded-circle"
              width="50"
              alt=""
            />
            <img
              src="./img/tecnicoAd.png"
              className="rounded-circle"
              width="50"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav text-logo">
              <Link to="/home" className="nav-link active">
                Inicio
              </Link>

              <a className="nav-link active" href="#">
                Cursos
              </a>
              <a className="nav-link active" href="#">
                ¡quiero inscribirme!
              </a>
              <Link to="/login" className="nav-link active text-primary ">
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
