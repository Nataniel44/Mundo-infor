import { auth, userExists } from "/src/firebase";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (user) {
          const isRegistered = await userExists(user.uid);
          if (isRegistered) {
            onUserLoggedIn(user);
          } else {
            //TODO: REDIRIGIR A CHOOSE USERNAME
            onUserNotRegistered(user);
          }
        }
      } else {
        onUserNotLoggedIn();
      }
    });
  }, [navigate, onUserLoggedIn, onUserNotLoggedIn, onUserNotRegistered]);
  return <div>{children}</div>;
};

export default authProvider;
