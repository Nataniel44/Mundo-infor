import AuthProvider from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { existsUsername, updateUser } from "../firebase";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboardwrapper from "../components/Dashboardwrapper";
const cursosview = () => {
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
  if (state === 6) {
    return (
      <>
        <Dashboardwrapper />
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
export default cursosview;
