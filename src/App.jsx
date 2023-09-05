import "./App.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import CursosDetalle from "./components/CursosDetalle";

import Registerform from "./components/Registerform";

import ChoseUserName from "./rutas/ChoseUserName";

import { useState } from "react";
function App() {
  const [data, setdata] = useState(null);

  fetch("/src/DATA/CursosData.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((jsonData) => {
      setdata(jsonData);
    })
    .catch((error) => {
      console.error("Error al cargar datos:", error);
    });

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/choose-username" element={<ChoseUserName />} />

        <Route
          path="/curso/:id"
          element={<CursosDetalle cursosData={data} />}
        />
        <Route path="/login" element={<Registerform />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
