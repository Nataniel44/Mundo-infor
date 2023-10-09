import AuthProvider from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAdminInfo, getVideoUrl } from "../firebase";
import Dashboardwrapper from "../components/Dashboardwrapper";

import { Link } from "react-router-dom";

import BotonLink from "../components/BotonLink";
import ContenidoItem from "../components/ContenidoItem";
import { cursosData } from "../components/CursosData";
import ModalVideo from "../components/ModalVideo";
const Cursosview = () => {
  const [selectedClase, setSelectedClase] = useState(null); // Estado para la clase seleccionada

  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [curso, setCurso] = useState(0);
  const [cursodata, setCursoData] = useState();

  const [videoUrl, setVideoUrl] = useState(null); // Estado para almacenar la URL del video

  async function handleUserLoggedIn(user) {
    const userInfo = await getAdminInfo(user.uid);

    navigate("/cursosView/");
    setState(2);
    setCurrentUser(user);
    if (userInfo.currentCurso !== 0) {
      setCurso(userInfo.currentCurso);
    } else {
      navigate("/Mundo-infor/my");
    }
  }
  const handleClaseSeleccionada = (clase) => {
    setSelectedClase(clase);
  };

  function handleUserNotRegistered(user) {
    setCurrentUser(user);
    setState(3);
    navigate("/Mundo-infor/login");
  }
  function handleUserNotLoggedIn() {
    navigate("/Mundo-infor/login");
  }

  useEffect(() => {
    if (curso !== 0) {
      const clase = cursosData.find((cursoItem) => cursoItem.id === curso);
      if (clase) {
        setCursoData(clase.clases);
        console.log(cursodata);
      }
    }

    async function obtenerVideo() {
      const videoPath = "cursos/clase1.mp4"; // Reemplaza con la ruta correcta de tu video

      try {
        const url = await getVideoUrl(videoPath); // Espera a que se resuelva la promesa
        setVideoUrl(url); // Establece la URL del video en el estado
      } catch (error) {
        console.error("Error al obtener la URL del video:", error);
      }
    }

    obtenerVideo();
  }, [curso]);

  function obtenerDescripcion() {
    if (curso !== 0) {
      const cursoSeleccionado = cursosData.find(
        (cursoItem) => cursoItem.id === curso
      );

      return (
        cursoSeleccionado && (
          <section className="p-3 fs-3  borde-personalizado rounded m-4 shadow  ">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-12 col-lg-6">
                <h3 className="text-color-quinto">{cursoSeleccionado.title}</h3>
                <h4 className="fs-5">{cursoSeleccionado.description}</h4>
              </div>
            </div>
          </section>
        )
      );
    }
  }
  function obtenerCurso() {
    if (curso !== 0) {
      const cursoSeleccionado = cursosData.find(
        (cursoItem) => cursoItem.id === curso
      );

      return cursoSeleccionado ? (
        <div className="header1 pb-2 pe-3 ps-3">
          <div
            key={cursoSeleccionado.id}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              width={150}
              src={cursoSeleccionado.imageURL}
              alt={cursoSeleccionado.title}
              className="me-2 rounded-5 rounded-top-0"
            />

            <h3 className="text-dark fs-1 text-center font bg-light  p-2 borde-personalizado1">
              {cursoSeleccionado.title}
            </h3>
          </div>

          <div className="d-flex col-12 text-center justify-content-center">
            <BotonLink
              curso={cursodata}
              onClaseSeleccionada={handleClaseSeleccionada}
            />
          </div>
        </div>
      ) : (
        <div className="border border-2 d-flex p-2 align-items-center text-secondary">
          No se encontró el curso correspondiente
        </div>
      );
    }
  }

  if (state === 2) {
    return (
      <>
        <Dashboardwrapper >
          <section className="">{obtenerCurso()}</section>

          <section className="m-3">
            {selectedClase ? (
              // Renderiza el contenido de la clase seleccionada
              <div>
                {
                  <>
                    <ModalVideo data={videoUrl} />
                    <section className="p-3 fs-3 borde-personalizado m-4 shadow">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-12 col-lg-6">
                          <h2>{selectedClase.title}</h2>
                          <p className="p-0 m-0">Fecha: {selectedClase.date}</p>
                          <p className=" m-0">
                            Material: {selectedClase.material}
                          </p>
                        </div>
                        <div className="col-12 col-lg-6 d-flex  justify-content-end">
                          <img
                            src="/img/logo4.png"
                            className="rounded disp-none"
                            width={200}
                            alt=""
                          />
                        </div>
                      </div>
                    </section>
                    <section className="borde-personalizado2 mb-3">
                      <div className="p-3 d-flex flex-column gap-3">
                        <ContenidoItem
                          titulo="Grabacion de la clase"
                          texto={selectedClase.material}
                          video={selectedClase.video}
                          material={selectedClase.materialUrl}
                        />
                      </div>
                    </section>
                  </>
                }
              </div>
            ) : (
              // Renderiza el contenido del curso si no se ha seleccionado una clase
              obtenerDescripcion()
            )}
          </section>
        </Dashboardwrapper>
      </>
    );
  }
  return (
    <>
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotRegistered={handleUserNotRegistered}
        onUserNotLoggedIn={handleUserNotLoggedIn}
      >
        <div className="text-light vh-50 text-center text display-5 css-selector d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center gap-3">
            Cargando
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        </div>
      </AuthProvider>
    </>
  );
};
export default Cursosview;
