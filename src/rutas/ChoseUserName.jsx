import AuthProvider from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { existsUsername, updateUser } from "../firebase";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboardwrapper from "../components/Dashboardwrapper";
const ChoseUserName = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState("");
  function handleUserLoggedIn(user) {
    navigate("/Mundo-infor/editProfile");
  }
  function handleUserNotRegistered(user) {
    setCurrentUser(user);
    setState(3);
  }
  function handleUserNotLoggedIn() {
    navigate("/Mundo-infor/login");
  }
  async function handleContinue() {
    if (username !== "") {
      const exists = await existsUsername(username);
      if (exists) {
        setState(5);
      } else {
        const tmp = { ...currentUser };
        tmp.username = username;
        tmp.processCompleted = true;
        await updateUser(tmp);
        setState(6);
      }
    }
  }
  function handleInputUsername(e) {
    setUsername(e.target.value);
  }
  if (state === 3 || state === 5) {
    return (
      <>
        <Navbar />
        <div className="d-flex css-selector1 justify-content-center align-items-center flex-column text-light vh-50 ">
          <div className="bg-light text-dark  bg-opacity-75 rounded p-3 d-flex flex-column align-items-center">
            <form>
              <div className="mb-3 "></div>
            </form>
            <h1 className="text-logo">
              Bienvenido
              <span className="text-primary "> {currentUser.displayName} </span>
            </h1>
            <p>Para continuar ingrese un nombre de usuario.</p>
            {state === 5 ? (
              <p>El nombre de usuario ya existe, escoge otro</p>
            ) : (
              ""
            )}
            <div>
              <input
                type="text"
                className="form-control mb-3 "
                onInput={handleInputUsername}
                placeholder="---Nombre De Usuario---"
              />
            </div>

            <div>
              <button className="btn btn-primary" onClick={handleContinue}>
                Continuar &#8594;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (state === 6) {
    return (
      <>
        <Dashboardwrapper></Dashboardwrapper>
        <div className="css-selector1 vh-50 d-flex justify-content-center align-items-center">
          <div className="bg-light text-dark text-logo bg-opacity-75 border border-dark rounded p-4 d-flex justify-content-center align-items-center flex-column">
            <h2>se registro correctamente.</h2>
            <Link
              to="/Mundo-infor/editProfile"
              className="btn btn btn-outline-primary"
            >
              continuar
            </Link>
          </div>
        </div>
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
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        </div>
      </AuthProvider>
    </>
  );
};

export default ChoseUserName;
