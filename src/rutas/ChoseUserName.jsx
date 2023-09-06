import AuthProvider from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { existsUsername } from "../firebase";
const ChoseUserName = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState("");
  function handleUserLoggedIn(user) {
    navigate("/choose-username");
  }
  function handleUserNotRegistered(user) {
    setCurrentUser(user);
    setState(3);
  }
  function handleUserNotLoggedIn() {
    navigate("/login");
  }
  function handleContinue() {
    if (username !== "") {
      const exists = await existUsername;
      if (exists) {
        setState(5)
      }
      else {
        const tmp = {...currentUser}
        tmp.processCompleted = true;
        
      }
    }
  }
  function handleInputUsername(e) {
    setUsername(e.target.value);
  }
  if (state === 3) {
    return (
      <div>
        <h1>Bienvenido {currentUser.displayName}</h1>
        <p>Para continuar ingrese un nombre de usuario.</p>

        <div>
          <input type="text" onInput={handleInputUsername} />
        </div>

        <div>
          <button onClick={handleContinue}>Continuar</button>
        </div>
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
        <div className="text-light">Loading...</div>
      </AuthProvider>
    </>
  );
};

export default ChoseUserName;
