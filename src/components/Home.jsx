import Header from "./Header";
import RegistroForm from "./RegistroForm";
import Presentation from "./Presentation";
function Home() {
  return (
    <>
      <Header />
      <div className="container text-light">
        <Presentation />
        <RegistroForm />
      </div>
    </>
  );
}

export default Home;
