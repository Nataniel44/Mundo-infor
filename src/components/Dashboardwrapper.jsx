import { Link } from "react-router-dom";
import { useState } from "react";

import AuthProvider from "../components/AuthProvider";

import { getProfilePhotoUrl } from "../firebase";

const Dashboardwrapper = ({ children, admin }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [profileUrl, setProfileUrl] = useState({});

  async function handleUserLoggedIn(user) {
    setCurrentUser(user);
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
      ></AuthProvider>
    );
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand d-flex justify-content-center align-items-center">
            <img
              src={profileUrl}
              className="rounded-circle"
              width="50"
              height={50}
              alt="Mundo Informática"
            />
            <ul className="ul-1">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="text-logo">{currentUser.username}</span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link
                      to={"/Mundo-infor/editProfile"}
                      className="dropdown-item"
                    >
                      Editar Perfil
                    </Link>
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
              <Link to={"/Mundo-infor/profile"} className="nav-link active">
                cursos
              </Link>

              <Link to={"/Singout"} className="nav-link active text-danger">
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
