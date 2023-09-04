import AuthProvider from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ChoseUserName = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  function handleUserLoggedIn(user) {
    navigate("/choose-username");
  }
  function handleUserNotRegistered(user) {
    setState(3);
  }
  function handleUserNotLoggedIn() {
    navigate("/login");
  }
  if (state === 3) {
    return (
      <div>
        <h1>Bienvenido {}</h1>
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
