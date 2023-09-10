import AuthProvider from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { existsUsername, updateUser } from "../firebase";
import { Link } from "react-router-dom";
const ChoseUserName = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState("");
  function handleUserLoggedIn(user) {
    navigate("/Mundo-infor/profile");
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
      <div className="d-flex justify-content-center align-items-center flex-column text-light vh-50 ">
        <form>
          <div className="mb-3 "></div>
        </form>
        <h1>
          Bienvenido
          <span className="text-primary">{currentUser.displayName}</span>
        </h1>
        <p>Para continuar ingrese un nombre de usuario.</p>
        {state === 5 ? <p>El nombre de usuario ya existe, escoge otro</p> : ""}
        <div>
          <input
            type="text"
            className="form-control mb-3"
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
    );
  }
  if (state === 6) {
    return (
      <div>
        <h1>fleicidades ya tienes</h1>
        <Link to="/dashboard">continuar</Link>
      </div>
    );
  }
  return (
    <>
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotRegistered={handleUserNotRegistered}
        onUserNotLoggedIn={handleUserNotLoggedIn}
      >
        <div className="text-light bg-light">Loading...</div>
      </AuthProvider>
    </>
  );
};

export default ChoseUserName;
