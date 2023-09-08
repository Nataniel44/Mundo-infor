const Header = () => {
  return (
    <div className="header-container">
      <div className="background-square rounded shadow "></div>
      {/* Cuadrado horizontal de fondo */}
      <div className="content-container">
        <div className="text-center text-color text-logo d-flex justify-content-center">
          <div className="p-3 d-flex align-items-center">
            <div className="shadow color-tarjeta rounded p-2 ">
              <div>
                <h2 className="lh-0 m-0 logo display-1 text-color ">
                  ESTUDIA <br /> Y CRECE
                </h2>
                <div className="bg-dark rounded ps-3 pe-3 text-light">
                  <p className="fs-5 text">
                    Con los cursos del <span className="text-color">IMI</span>
                  </p>
                </div>
                <div className="mt-3 d-flex flex-column ">
                  <p className="m-0 text ">&#x2705;+19 años de trayectoria.</p>
                  <p className="m-0 text ">&#x2705;+21 mil seguidores.</p>
                  <p className="m-0 text ">&#x2705;Todas las modalidades.</p>
                  <p className="m-0 text ">&#x2705;Diferentes edades.</p>
                  <p className="m-0 text ">
                    &#x2705;Becas y descuentos <br /> exclusivos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
