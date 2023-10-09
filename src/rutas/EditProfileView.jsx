import AuthProvider from "../components/AuthProvider";
import Dashboardwrapper from "../components/Dashboardwrapper";
import {
  getAdminInfo,
  getProfilePhotoUrl,
  setUserProfilePhoto,
  updateUser,
} from "../firebase";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const EditProfileView = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [profileUrl, setProfileUrl] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const fileRef = useRef(null);

  async function handleUserLoggedIn(user) {
    const userInfo = await getAdminInfo(user.uid);
    if (userInfo.isAdmin) {
      setIsAdmin(true);
    }

    setCurrentUser(user);
    const url = await getProfilePhotoUrl(user.profilePicture);
    setProfileUrl(url);
    setState(2);
  }

  function handleUserNotRegistered(user) {
    navigate("/Mundo-infor/login");
  }

  function handleUserNotLoggedIn() {
    navigate("/Mundo-infor/login");
  }
  function handleOpenFilePicker() {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }
  function handleChangeFile(e) {
    const files = e.target.files;
    const fileReader = new FileReader();
    if (fileReader && files && files.length > 0) {
      fileReader.readAsArrayBuffer(files[0]);
      fileReader.onload = async function () {
        const imageData = fileReader.result;
        const res = await setUserProfilePhoto(currentUser.uid, imageData);

        if (res) {
          const tmpUser = { ...currentUser };
          tmpUser.profilePicture = res.metadata.fullPath;
          await updateUser(tmpUser);
          setCurrentUser;
          ({ ...tmpUser });
          const url = await getProfilePhotoUrl(currentUser.profilePicture);
          setProfileUrl(url);
        }
      };
    }
  }
  if (state !== 2) {
    return (
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
    );
  }
  return (
    <Dashboardwrapper admin={isAdmin}>
      <div className="bg-light">
        <div className="text-dark   container p-3  mb-3 mt-3">
          <div className="mt-1 d-flex flex-column align-items-center   ">
            <h2 className="text-center text m-0">Editar Perfil</h2>
            <label htmlFor="profile-image" className="text-primary fs-5">
              Foto de perfil:
            </label>
            <div className="d-flex align-items-center gap-3 m-3 ">
              <img
                src={profileUrl}
                className="rounded-top  borde-personalizado3 "
                alt="Foto de perfil"
                width={100}
                height={100}
              />
              <button
                onClick={handleOpenFilePicker}
                className="btn btn-primary ml-3"
              >
                Cambiar Foto
              </button>
              <input
                ref={fileRef}
                type="file"
                id="profile-image"
                className="d-none"
                onChange={handleChangeFile}
              />
            </div>
            <div className="d-flex align-items-center justify-content-center flex-column m-2">
              <span className="text-primary  fs-5">Nombre de usuario:</span>
              <h2 className="font">{currentUser.username}</h2>
            </div>
          </div>
        </div>
      </div>
    </Dashboardwrapper>
  );
};

export default EditProfileView;
