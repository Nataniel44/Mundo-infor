import { Link } from "react-router-dom";

import Home from "../components/Home";

export const cursosData = [
  {
    id: 1,
    title: "Técnico superior",
    imageURL: "./img/img1/tec-sup.jpeg",
    description:
      "Lo más completo, ya que cuenta con todos los programas de Office y eso hace que se abra una gran ventana de oportunidades laborales, ya sea en corralones, farmacias, supermercados, estaciones de servicios y/o cooperativas. Importante certificación para aquellos que buscan desempeñarse también en las fuerzas (Policía, Gendarmería, Prefectura, etc.)",
  },
  {
    id: 2,
    title: "Técnico Administrativo",
    imageURL: "./img/img1/tec-adm.jpeg",
    description:
      "Brinda la posibilidad laboral en diversas empresas, por ejemplo, empresas de transporte, ferreterías, estaciones de servicios y mercados. También para jóvenes de nivel secundario es muy útil por el aplicativo administrativo y contable. Facilita en gran manera al alumno en su preparación personal y profesional.",
  },
  {
    id: 3,
    title: "Técnico en administración de empresas",
    imageURL: "./img/img1/tec-adm-emp.jpeg",
    description:
      "Orientado a la parte bancaria, eso significa que con tu título secundario y este curso se abren opciones para subir tu curriculum vitae a la página de un banco, ya sea Nación, Macro, Patagonia, Francés, Santander, Rio o Bisel, los cuales suelen tener importantes sueldos. Como también se incrementan las posibilidades para trabajar en empresas locales, provinciales y nacionales en la parte administrativa.",
  },
  {
    id: 4,
    title: "Coaching Financiero",
    imageURL: "./img/img1/coaching.jpeg",
    description:
      "Es una disciplina orientada a mejorar tu economía. La misma está cambiando la vida de muchas personas y tú puedes ser uno de ellos. ¿Cómo te ves en los próximos 2 años? ¿Cómo están tus finanzas? ¿Te gustaría mejorar tus ganancias en 90 días? Con la certificación de coaching financiero lograrás un cambio significativo que impacte en tus finanzas en más del 70%. Transforma tu vida e impacta la vida de otros. ¿Cómo? Aprendiendo a crear negocios sin el conocimiento, un curso práctico, sencillo y sumamente eficaz. Una herramienta que hoy está a tu disposición y con la facilidad de cursar desde la comodidad de tu hogar con el acompañamiento del IMI.",
  },
  {
    id: 5,
    title: "Técnico auxiliar en dictado de clases",
    imageURL: "./img/img1/tec-aux.jpeg",
    description:
      "Una tecnicatura pensada para aquellas personas que deseen desempeñarse dentro del área de la enseñanza. Puedes enseñar tanto en escuelas (presentando un proyecto), colegios como también en institutos privados, o bien abrir tu propia academia. Una excelente alternativa para poder ser tu propio jefe.",
  },
  {
    id: 6,
    title: "Técnico avanzado en Office",
    imageURL: "./img/img1/tec-avan.jpeg",
    description:
      "Lo más completo, ya que cuenta con todos los programas de Office y eso hace que se abra una gran ventana de oportunidades laborales, ya sea en corralones, farmacias, supermercados, estaciones de servicios y/o cooperativas. Importante certificación para aquellos que buscan desempeñarse también en las fuerzas (Policía, Gendarmería, Prefectura, etc.)",
  },
  {
    id: 7,
    title: "Instructor en informática",
    imageURL: "./img/img1/ins-infor.jpeg",
    description:
      "Lo más completo, ya que cuenta con todos los programas de Office y eso hace que se abra una gran ventana de oportunidades laborales, ya sea en corralones, farmacias, supermercados, estaciones de servicios y/o cooperativas. Importante certificación para aquellos que buscan desempeñarse también en las fuerzas (Policía, Gendarmería, Prefectura, etc.)",
  },
  {
    id: 8,
    title: "Operador de pc y aplicaciones",
    imageURL: "./img/img1/op-pc.jpeg",
    description:
      "Lo más completo, ya que cuenta con todos los programas de Office y eso hace que se abra una gran ventana de oportunidades laborales, ya sea en corralones, farmacias, supermercados, estaciones de servicios y/o cooperativas. Importante certificación para aquellos que buscan desempeñarse también en las fuerzas (Policía, Gendarmería, Prefectura, etc.)",
  },

  {
    id: 9,
    title: "Secretariado administrativo",
    imageURL: "./img/img1/secre.jpeg",
    description:
      "Lo más completo, ya que cuenta con todos los programas de Office y eso hace que se abra una gran ventana de oportunidades laborales, ya sea en corralones, farmacias, supermercados, estaciones de servicios y/o cooperativas. Importante certificación para aquellos que buscan desempeñarse también en las fuerzas (Policía, Gendarmería, Prefectura, etc.)",
  },

  {
    id: 10,
    title: "Administrativo contable",
    imageURL: "./img/img1/adm-cont.jpeg",
    description:
      "Lo más completo, ya que cuenta con todos los programas de Office y eso hace que se abra una gran ventana de oportunidades laborales, ya sea en corralones, farmacias, supermercados, estaciones de servicios y/o cooperativas. Importante certificación para aquellos que buscan desempeñarse también en las fuerzas (Policía, Gendarmería, Prefectura, etc.)",
  },
];

export default function Main() {
  return (
    <>
      <Home />
      <div className="container mt-5 text-logo">
        <h3 className="text-light text-center display-5">Nuestros Cursos</h3>
        <div className="row justify-content-center">
          {cursosData.map((curso) => (
            <div key={curso.id} className="col-10 col-md-4 col-lg-3 mb-4">
              <div className="card shadow border-0 ">
                <img
                  src={curso.imageURL}
                  className="card-img-top border-0"
                  alt={curso.title}
                />
                <div className="card-body second-color rounded-bottom">
                  <h5 className="card-title">{curso.title}</h5>
                  <Link to={`/curso/${curso.id}`} className="btn btn-dark">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
