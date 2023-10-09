import { useRef } from "react";
import RegistroForm from "./RegistroForm";
const Presentation = () => {
  const compraSectionRef = useRef(null); // Referencia a la sección de compra

  // Función para manejar el clic en la flecha y llevar al usuario a la sección de compra
  const handleArrowClick = () => {
    compraSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return <></>;
};

export default Presentation;
