import { auth, userExists } from "/src/firebase";
import { useNavigate } from "react-router-dom";
import AuthProvider from "/src/components/AuthProvider";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
const Registerform = () => {
  /*
  0:inicializado
  1:loanding
  2:login completo
  3:login pero sin registro
  4:no hay nadie logueado
  5:ya existe username
  6:nuevo username click para continuar 
  */
  const [state, setCurrentState] = useState(0);
  const navigate = useNavigate();

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
    navigate("/Mundo-Infor");
  }
  function handleUserNotRegistered(user) {
    navigate("/choose-username");
  }
  function handleUserNotLoggedIn() {
    setCurrentState(4);
  }

  if (state === 4) {
    return (
      <div className=" text-light vh-50 d-flex flex-column css-selector justify-content-center align-items-center">
        <div className=" d-flex bg-dark border-1 border rounded flex-column p-3 align-items-center">
         <h2>Authentification</h2>
        <button onClick={handleOnClick} className="btn btn-primary">
          Log In With Google

          <img src="/public/img/google.png" className="m-1" width={"20px"} alt="123" />

        </button>
        </div>
      </div>
    );
  }
  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
      onUserNotLoggedIn={handleUserNotLoggedIn}
    >
      <div className="vh-50">
        <div className="text-light">Loading...</div>
      </div>
    </AuthProvider>
  );
};

export default Registerform;
