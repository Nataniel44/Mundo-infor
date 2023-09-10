import { auth, userExists } from "/src/firebase";
import { useNavigate } from "react-router-dom";
import { registerNewUser, getUserInfo } from "../firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

import { useEffect, useState } from "react";

const authProvider = ({
  children,
  onUserLoggedIn,
  onUserNotLoggedIn,
  onUserNotRegistered,
}) => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false); // Agrega un estado para el rol de administrador

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const isRegistered = await userExists(user.uid);
        if (isRegistered) {
          const userInfo = await getUserInfo(user.uid);

          if (userInfo.processCompleted) {
            // Verifica si el usuario es un administrador
            if (userInfo.isAdmin) {
              setIsAdmin(true);
            }
            onUserLoggedIn(userInfo);
          } else {
            onUserNotRegistered(userInfo);
          }
        } else {
          await registerNewUser({
            uid: user.uid,
            displayName: user.displayName,
            isAdmin: false,
            profilePicture: "",
            username: "",
            processCompleted: false,
          });
          onUserNotRegistered(user);
        }
      } else {
        onUserNotLoggedIn();
      }
    });
  }, [navigate, onUserLoggedIn, onUserNotLoggedIn, onUserNotRegistered]);

  return <div>{children}</div>;
};

export default authProvider;
