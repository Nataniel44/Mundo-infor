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

  const [curso, setCurso] = useState();

  async function handleUserLoggedIn(user) {
    const userInfo = await getAdminInfo(user.uid);

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
        <>
          <div className="col-12 col-lg-7 p-3 borde-personalizado mt-3 ">
            <h2 className="font m-0 ">Mis cursos</h2>
            <div
              key={cursoSeleccionado.id}
              className="borde  p-2 align-items-center text-secondary mb-5 mt-3"
            >
              <Link
                to={"/cursosView/"}
                className="d-flex align-items-center nav-link active p-0 justify-content-center"
              >
                <div className="row d-flex align-items-center justify-content-center">
                  <div className="col-12 col-md-3 col-lg-3 d-flex justify-content-center align-content-center ">
                    <img
                      width={100}
                      src={cursoSeleccionado.imageURL}
                      alt={cursoSeleccionado.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-12 col-md-9 col-lg-9 d-flex align-items-center justify-content-center">
                    <h3 className="font text-dark text-center">
                      {cursoSeleccionado.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="borde-pers col-12 col-lg-4 bg-light  mt-3 ps-4 pe-3">
            <div className="">
              <h2 className="font">Línea del progreso</h2>
              <hr />

              <div className="d-flex flex-column justify-content-center">
                <h4 className="font">{cursoSeleccionado.title}</h4>
                <div
                  className="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "50%" }}>
                    50%
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
          {currentUser.isAdmin && (
            <div className="d-flex justify-content-center">
              <div className="bg-light borde p-3 text-center">
                <h3 className="font display-5">Panel admin</h3>

                <Link to={"/Mundo-infor/admin"} className="btn btn-dark">
                  Entrar
                </Link>
              </div>
            </div>
          )}
        </>
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
          <div className="d-flex justify-content-center gap-3 ">
            Cargando
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        </div>
      </AuthProvider>
    );
  }

  return (
    <Dashboardwrapper>
      <div className=" container">
        <section className="row justify-content-center gap-3 p-3 pt-0  ">
          {obtenerCurso()}
        </section>
      </div>
    </Dashboardwrapper>
  );
};

export default Profile;
