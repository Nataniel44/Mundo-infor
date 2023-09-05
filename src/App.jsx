import "./App.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Registerform from "./components/Registerform";

import ChoseUserName from "./rutas/ChoseUserName";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/choose-username" element={<ChoseUserName />} />

        <Route path="/curso/:id" />
        <Route path="/login" element={<Registerform />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
