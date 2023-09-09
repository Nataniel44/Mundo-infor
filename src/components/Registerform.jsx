import { auth, userExists, getUserInfo } from "/src/firebase"; // Importa la función getUserInfo
import { useNavigate, Link } from "react-router-dom";
import AuthProvider from "/src/components/AuthProvider";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useState, useEffect } from "react";

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
    navigate("/Mundo-infor/dashboard");
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
          <div className="text-light">
            <button onClick={handleOnClick} className="btn btn-primary">
              Log In
            </button>
          </div>
        ) : (
          <div className="text-light vh-100">Loading...</div>
        )}
      </div>
    </AuthProvider>
  );
};

export default Registerform;
