import Header from "./Header";

import Presentation from "./Presentation";
function Home() {
  return (
    <>
      <Header />
      <div className="container text-light">
        <Presentation />
      </div>
    </>
  );
}

export default Home;
