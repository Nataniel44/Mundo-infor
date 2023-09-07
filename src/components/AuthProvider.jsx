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

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (user) {
          const isRegistered = await userExists(user.uid);
          if (isRegistered) {
            const userInfo = await getUserInfo(user.uid);

            if (userInfo.processCompleted) {
              onUserLoggedIn(userInfo);
            } else {
              onUserNotRegistered(userInfo);
            }
          } else {
            await registerNewUser({
              uid: user.uid,
              displayName: user.displayName,
              profilePicture: "",
              username: "",
              processCompleted: false,
            });
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
