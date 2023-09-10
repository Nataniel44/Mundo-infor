import { auth, userExists, getUserInfo } from "/src/firebase"; // Importa la función getUserInfo
import { useNavigate, Link } from "react-router-dom";
import AuthProvider from "/src/components/AuthProvider";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Registerform = () => {
  const [state, setCurrentState] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false); // Agrega el estado para determinar si el usuario es administrador
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Obtiene información del usuario y verifica si es administrador
        const userInfo = await getUserInfo(user.uid);
        if (userInfo && userInfo.isAdmin) {
          setIsAdmin(true);
        }
        checkUserRegistration(user.uid);
      } else {
        setCurrentState(4);
      }
    });

    return () => unsubscribe();
  }, []);

  async function checkUserRegistration(uid) {
    const isRegistered = await userExists(uid);
    if (isRegistered) {
      setCurrentState(2);
    } else {
      setCurrentState(3);
    }
  }

  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
  }

  async function signInWithGoogle(googleProvider) {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  function handleUserLoggedIn(user) {
    navigate("/Mundo-infor/profile/");
  }

  function handleUserNotRegistered(user) {
    navigate("/Mundo-infor/choose-username");
  }

  function handleUserNotLoggedIn() {
    setCurrentState(4);
  }

  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
      onUserNotLoggedIn={handleUserNotLoggedIn}
    >
      <div className="vh-50">
        {isAdmin && ( // Muestra el enlace "Admin" solo si el usuario es administrador
          <Link to="/dashboard">Admin</Link>
        )}
        {state === 4 ? (
          <div className="text-light ">
            <Navbar />
            <div className="css-selector1 vh-50 d-flex justify-content-center align-items-center">
              <div className="bg-dark bg-opacity-50 rounded p-4 d-flex justify-content-center align-items-center flex-column">
                <h1 className="text-light text-logo fs-3">
                  INGRESE CON SU CUENTA{" "}
                </h1>
                <button
                  onClick={handleOnClick}
                  className="btn btn btn-outline-primary mt-3 d-flex justify-content-center align-items-center "
                >
                  <img src="/img/google.png" width={"25px"} alt="" />
                  with google
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-light vh-50 text-center text display-5 css-selector d-flex justify-content-center align-items-center">
            Loading...
          </div>
        )}
      </div>
    </AuthProvider>
  );
};

export default Registerform;
