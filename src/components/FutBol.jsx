const FutBol = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary bg-boca1 sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Bootstrap
          </a>
        </div>
      </nav>
      <div className="d-flex flex-column  vh-100 bg-boca">
        <h2 className="font h1 display-3 text-light text-center">
          boca vs palmerinas
        </h2>
        <iframe
          className="embed-responsive-item w-100 h-75"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen="true"
          src="https://embed.librefutboltv.com/espnbr.html"
          scrolling="no"
        ></iframe>
      </div>
    </>
  );
};

export default FutBol;
