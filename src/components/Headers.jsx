const Headers = () => {
  return (
    <>
      <header className="vh-max d-flex justify-content-center align-items-center container">
        <div className="shadow color-tarjeta1 rounded-5 p-2 text-center">
          <h1 className="lh-1 logo display-1 ">
            ESTUDIA <br /> Y CRECE
          </h1>
          <div className="bg-dark rounded ps-3 pe-3 text-light">
            <p className="fs-5  ">
              con los cursos del <span className="text-color">IMI</span>
            </p>
          </div>
          <div className="mt-3 d-flex flex-column fs-5">
            <p className="m-0 text ">&#x2705;+19 años de trayectoria.</p>
            <p className="m-0 text ">&#x2705;+21 mil egresados.</p>
            <p className="m-0 text ">&#x2705;Todas las modalidades.</p>
            <p className="m-0 text ">&#x2705;Diferentes edades.</p>
            <p className="m-0 text ">
              &#x2705;Becas y descuentos <br /> exclusivos.
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headers;
