import { useRef } from "react";
import RegistroForm from "./RegistroForm";
const Presentation = () => {
  const compraSectionRef = useRef(null); // Referencia a la sección de compra

  // Función para manejar el clic en la flecha y llevar al usuario a la sección de compra
  const handleArrowClick = () => {
    compraSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div>
        <div className="jumbotron jumbotron-fluid text-center text-logo rounded  p-3 mt-3 mb-3">
          <div className="">
            <h3 className="display-5">
              Bienvenido a el <br /> INSTITUTO
              <span className="text-primary"> Mundo Informática</span>
            </h3>
            <p className="lead">
              En Mundo Informática, estamos comprometidos con la excelencia en
              la educación informática.
            </p>

            <button onClick={handleArrowClick} className="btn btn-primary">
              Explora nuestros cursos
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-12 col-lg-6">
            <RegistroForm />
          </div>
        </div>
        <div className=" ">
          <h2 className="text-color">Nuestra Misión</h2>
          <p>
            Nuestra misión es simple pero poderosa: transformar vidas a través
            del conocimiento informático. En un mundo cada vez más digitalizado,
            creemos que la capacitación en informática es esencial para el éxito
            personal y profesional. Nos esforzamos por brindar una educación de
            alta calidad que sea accesible para todos.
          </p>

          <h2 className="text-color">¿Por qué elegir Mundo Informática?</h2>
          <ul>
            <li>
              Experiencia y Expertise: Con años de experiencia en la enseñanza
              de informática, nuestros instructores son expertos en su campo y
              están dedicados a tu éxito.
            </li>
            <li>
              Cursos Innovadores: Ofrecemos una amplia gama de cursos
              actualizados
            </li>
            <li>
              Aprendizaje Práctico: Creemos en el aprendizaje práctico. Nuestros
              estudiantes no solo adquieren conocimientos teóricos, sino que
              también obtienen experiencia práctica a través de proyectos
              reales.
            </li>
            <li>
              Flexibilidad: Entendemos que cada estudiante tiene necesidades
              únicas. Ofrecemos horarios flexibles y opciones de aprendizaje en
              línea para adaptarnos a tu estilo de vida.
            </li>
          </ul>

          <h2 className="text-color">
            Únete a la Comunidad de Mundo Informática
          </h2>
          <p>
            En Mundo Informática, no solo te ofrecemos una educación de calidad,
            sino que también te invitamos a unirte a nuestra comunidad.
            Conéctate con otros entusiastas de la tecnología, participa en
            eventos emocionantes y accede a recursos exclusivos para impulsar tu
            carrera.
          </p>

          <h2 className="text-color">Comienza tu Viaje en el Mundo Digital</h2>
          <p>
            Estamos emocionados de ser tu compañero en este emocionante viaje
            hacia el mundo de la informática. ¡Explora nuestros cursos,
            conócenos mejor y prepárate para un futuro lleno de oportunidades en
            la tecnología!
          </p>

          <p>
            No esperes más, ¡inscríbete en Mundo Informática y lleva tu
            conocimiento informático al siguiente nivel!
          </p>
          <div className="h-25 text-dark" ref={compraSectionRef}>
            <p>1</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Presentation;
