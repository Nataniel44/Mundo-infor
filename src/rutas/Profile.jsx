import React from "react";
import Dashboardwrapper from "../components/Dashboardwrapper";
import { useState } from "react";
import AuthProvider from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { getAdminInfo } from "../firebase";
import { Link } from "react-router-dom";
import { cursosData } from "../components/CursosData";

const Profile = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);
  const [curso, setCurso] = useState(0);

  async function handleUserLoggedIn(user) {
    const userInfo = await getAdminInfo(user.uid);

    if (userInfo.isAdmin) {
      setIsAdmin(true);
    }
    if (userInfo.currentCurso !== 0) {
      setCurso(userInfo.currentCurso);
    }
    setCurrentUser(user);
    setState(2);
  }

  function handleUserNotRegistered(user) {
    navigate("/Mundo-infor/login");
  }

  function handleUserNotLoggedIn() {
    navigate("/Mundo-infor/login");
  }

  // Función para obtener el curso correspondiente
  function obtenerCurso() {
    if (curso !== 0) {
      const cursoSeleccionado = cursosData.find(
        (cursoItem) => cursoItem.id === curso
      );
      return cursoSeleccionado ? (
        <div
          key={cursoSeleccionado.id}
          className="border border-2  p-2 align-items-center text-secondary"
        >
          <Link
            to={"/cursosView/"}
            className="d-flex align-items-center nav-link active p-0"
          >
            <img
              width={100}
              src={cursoSeleccionado.imageURL}
              alt={cursoSeleccionado.title}
              className="me-2"
            />
            <h3 className="font text-dark">{cursoSeleccionado.title}</h3>
          </Link>
        </div>
      ) : (
        <div className="border border-2 d-flex p-2 align-items-center text-secondary">
          No se encontró el curso correspondiente
        </div>
      );
    } else {
      return (
        <div className="border border-2 d-flex p-2 align-items-center text-secondary">
          No se encontró ningún curso
        </div>
      );
    }
  }

  if (state === 0) {
    return (
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotRegistered={handleUserNotRegistered}
        onUserNotLoggedIn={handleUserNotLoggedIn}
      >
        <div className="text-light vh-50 text-center text display-5 css-selector d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        </div>
      </AuthProvider>
    );
  }

  return (
    <Dashboardwrapper admin={isAdmin}>
      <div className="text-dark">
        <article className="bg-light vh-50 ps-4 pe-4">
          <section className="row p-3 justify-content-around">
            <div className="col-12 col-lg-7 bg-light p-2 border border-1 mt-3">
              <h2 className="font m-0  ">Mis cursos</h2>
              {obtenerCurso()}
            </div>

            <div className="col-12 col-lg-4 bg-light p-2 border border-1 mt-3">
              <div className="">
                <h2 className="font">Línea del tiempo</h2>
              </div>
            </div>
          </section>
        </article>
      </div>
    </Dashboardwrapper>
  );
};

export default Profile;
