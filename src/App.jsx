import "./App.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import CursosDetalle from "./components/CursosDetalle";
import cursosData from "./src/DATA/cursosData.json"; // Importa los datos desde el archivo JSON
import Registerform from "./components/Registerform";

import ChoseUserName from "./rutas/ChoseUserName";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/MUNDO-INFORMATICA" element={<Main />} />
        <Route path="/choose-username" element={<ChoseUserName />} />

        <Route
          path="/curso/:id"
          element={<CursosDetalle cursosData={cursosData} />}
        />
        <Route path="/login" element={<Registerform />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
