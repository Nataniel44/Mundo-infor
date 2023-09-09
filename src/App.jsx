import "./App.css";

import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import CursosDetalle from "./components/CursosDetalle";

import Registerform from "./components/Registerform";
import { cursosData } from "./components/CursosData";

import ChoseUserName from "./rutas/ChoseUserName";
import Dashboard from "./rutas/Dashboard";
import Profile from "./rutas/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/Mundo-infor/" element={<Main />} />
        <Route
          path="/Mundo-infor/choose-username"
          element={<ChoseUserName />}
        />

        <Route
          path="/Mundo-infor/curso/:id"
          element={<CursosDetalle cursosData={cursosData} />}
        />

        <Route path="/Mundo-infor/login" element={<Registerform />} />
        <Route path="/Mundo-infor/dashBoard" element={<Dashboard />} />
        <Route path="/Mundo-infor/dashBoard/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
/*
  0:inicializado
  1:loanding
  2:login completo
  3:login pero sin registro
  4:no hay nadie logueado
  5:ya existe username
  6:nuevo username click para continuar 
  */
