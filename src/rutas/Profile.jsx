import Dashboardwrapper from "../components/Dashboardwrapper";
import { useState } from "react";
import AuthProvider from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import { getAdminInfo } from "../firebase";
import Navbar from "../components/Navbar";
const Profile = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  async function handleUserLoggedIn(user) {
    const userInfo = await getAdminInfo(user.uid);
    if (userInfo.isAdmin) {
      setIsAdmin(true);
    }
    setCurrentUser(user);
    setState(2);
    navigate("/Mundo-infor/profile");
  }

  function handleUserNotRegistered(user) {
    navigate("/Mundo-infor/login");
  }

  function handleUserNotLoggedIn() {
    navigate("/Mundo-infor/login");
  }

  if (state === 0) {
    return (
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotRegistered={handleUserNotRegistered}
        onUserNotLoggedIn={handleUserNotLoggedIn}
      >
        <Navbar />
        <div className="text-light vh-50 text-center text display-5 css-selector d-flex justify-content-center align-items-center">
          Loading...
        </div>
      </AuthProvider>
    );
  }
  return (
    <Dashboardwrapper admin={isAdmin}>
      <div className="vh-50 text-light ">profile</div>
    </Dashboardwrapper>
  );
};

export default Profile;
