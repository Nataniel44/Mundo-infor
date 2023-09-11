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

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
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
    navigate("/Mundo-infor/editProfile");
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
      <div className="">
        {state === 4 ? (
          <div className="text-light ">
            <Navbar />
            <div className="custom-fondo1 vh-50 d-flex justify-content-center align-items-center">
              <div className="bg-dark bg-opacity-75 rounded p-4 d-flex justify-content-center align-items-center flex-column">
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
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </AuthProvider>
  );
};

export default Registerform;
