import React, { useEffect, useState } from "react";
import {
  obtenerCursosDeFirestore,
  actualizarCursoEnFirestore,
} from "../firebase";
import Dashboardwrapper from "./Dashboardwrapper";

const AñadirCurso = () => {
  const [cursos, setCursos] = useState([]);
  const [cursoEditando, setCursoEditando] = useState(null);
  const [formularioEdicion, setFormularioEdicion] = useState({
    title: "",
    imageURL: "",
    description: "",
  });

  const handleEditarCurso = (curso) => {
    setCursoEditando(curso);
    setFormularioEdicion({
      title: curso.title,
      imageURL: curso.imageURL,
      description: curso.description,
    });
  };

  const handleSubmitEdicion = async (e) => {
    e.preventDefault();
    if (cursoEditando) {
      const cursoActualizado = {
        title: formularioEdicion.title,
        imageURL: formularioEdicion.imageURL,
        description: formularioEdicion.description,
      };
      const cursoId = cursoEditando.uuid;
      try {
        await actualizarCursoEnFirestore(cursoId.toString(), cursoActualizado);
        setCursoEditando(null);
        setFormularioEdicion({
          title: "",
          imageURL: "",
          description: "",
        });
        // Actualiza la lista de cursos después de la edición si es necesario.
      } catch (error) {
        console.error("Error al actualizar el curso: ", error);
      }
    }
  };

  useEffect(() => {
    const obtenerCursos = async () => {
      const cursosData = await obtenerCursosDeFirestore();
      setCursos(cursosData);
    };

    obtenerCursos();
  }, []);

  return (
    <>
      <Dashboardwrapper>
        <div className="container p-3">
          <div className="row gap-3 justify-content-center bg-light">
            <div className="col-12 col-md-6">
              <div className="row  gap-3 justify-content-center pt-3 mb-2 pb-3">
                {cursos.map((curso) => (
                  <div className="col-12 col-md-12 p-2 borde" key={curso.id}>
                    <div className="d-flex gap-3 align-items-center">
                      <img
                        src={curso.imageURL}
                        alt=""
                        className=""
                        width={100}
                      />
                      <div className="">
                        <h2 className="fs-5">{curso.title}</h2>
                        <button
                          className="btn btn-dark"
                          onClick={() => handleEditarCurso(curso)}
                        >
                          Editar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {cursoEditando && (
              <div className="col-md-5 col-12 z-min ">
                <div className="sticky-top mt-5 pt-5">
                  <form onSubmit={handleSubmitEdicion} className="mt-4">
                    <h2 className="fs-5 text-center">Editar Curso</h2>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Título:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={formularioEdicion.title}
                        onChange={(e) =>
                          setFormularioEdicion({
                            ...formularioEdicion,
                            title: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="imageURL" className="form-label">
                        URL de la imagen:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="imageURL"
                        value={formularioEdicion.imageURL}
                        onChange={(e) =>
                          setFormularioEdicion({
                            ...formularioEdicion,
                            imageURL: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">
                        Descripción:
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        value={formularioEdicion.description}
                        onChange={(e) =>
                          setFormularioEdicion({
                            ...formularioEdicion,
                            description: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Guardar Cambios
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </Dashboardwrapper>

      {/* Formulario de edición */}
    </>
  );
};

export default AñadirCurso;
