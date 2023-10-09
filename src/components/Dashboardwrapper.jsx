import { Link } from "react-router-dom";
import { useState } from "react";

import AuthProvider from "../components/AuthProvider";

import { getProfilePhotoUrl } from "../firebase";

import { signOut } from "firebase/auth";
import { auth } from "/src/firebase";
import { useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate si estás usando react-router-dom.

const Dashboardwrapper = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [profileUrl, setProfileUrl] = useState({});

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Después del cierre de sesión, puedes redirigir al usuario a la página de inicio de sesión o a donde desees.
      navigate("/Mundo-infor/login"); // Ajusta la URL de redirección según tu enrutamiento.
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  async function handleUserLoggedIn(user) {
    setCurrentUser(user);
    if (user.isAdmin) {
      setIsAdmin(true);
    }
    const url = await getProfilePhotoUrl(user.profilePicture);
    if (url === undefined) {
      setProfileUrl("/img/logo2.png");
    } else {
      setProfileUrl(url);
    }
    setState(2);
  }
  function handleUserNotRegistered() {}

  function handleUserNotLoggedIn() {}

  if (state !== 2) {
    return (
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotRegistered={handleUserNotRegistered}
        onUserNotLoggedIn={handleUserNotLoggedIn}
      >
        <div className="text-light  vh-50 text-center text display-5 css-selector d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center gap-3">
            Cargando
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        </div>
      </AuthProvider>
    );
  }
  function toMy() {
    navigate("My");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top rounded-top rounded-bottom shadow z-max">
        <div className="container-fluid container-md">
          <a className="navbar-brand d-flex justify-content-center align-items-center gap-2">
            <img
              src={profileUrl}
              className="rounded-circle"
              width={40}
              height={40}
              alt="Mundo Informática"
            />
            <ul className="ul-1">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="text-color">{currentUser.username}</span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark "
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <a
                      href={"/Mundo-infor/editProfile"}
                      className="dropdown-item"
                    >
                      Editar Perfil
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
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
            className={`justify-content-end collapse navbar-collapse ${
              collapsed ? "show" : ""
            }`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              {/* Solo muestra el enlace de administrador si isAdmin es true */}
              {isAdmin && (
                <Link to={"/Mundo-infor/dashBoard"} className="nav-link active">
                  Prospectos
                </Link>
              )}

              <a href="/My" className="nav-link active">
                Inicio
              </a>

              <a onClick={handleSignOut} className="nav-link active ">
                <button className="btn nav-link active p-0 text-danger border-0">
                  SingOut
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="w-100">{children}</div>
    </div>
  );
};

export default Dashboardwrapper;
