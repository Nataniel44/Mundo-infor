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
    navigate("/choose-username");
  }
  function handleUserNotRegistered(user) {
    navigate("/choose-username");
  }
  function handleUserNotLoggedIn() {
    setCurrentState(4);
  }

  if (state === 2) {
    return <div className="text-light">Estas aunteticado y registrado</div>;
  }
  if (state === 3) {
    return (
      <div className="text-light">Estas aunteticado pero no registrado</div>
    );
  }
  if (state === 4) {
    return (
      <div className="text-light">
        <button onClick={handleOnClick} className="btn btn-primary">
          Log In
        </button>
      </div>
    );
  }
  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
      onUserNotLoggedIn={handleUserNotLoggedIn}
    >
      <div className="text-light">Loading...</div>
    </AuthProvider>
  );
};

export default Registerform;
