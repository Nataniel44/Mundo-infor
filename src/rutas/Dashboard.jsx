import { useState } from "react";
import AuthProvider from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";
import Dashboardwrapper from "../components/Dashboardwrapper";
import { v4 as uuidv4 } from "uuid";
import { insertNewLink, getLinks, getAdminInfo } from "../firebase";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [students, setStudents] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  async function handleUserLoggedIn(user) {
    const userInfo = await getAdminInfo(user.uid);
    if (userInfo.isAdmin) {
      setIsAdmin(true);
      navigate("/Mundo-infor/dashBoard");
      setCurrentUser(user);
      setState(2);
      const resLinks = await getLinks(user.uid);
      setStudents([...resLinks]);
    } else {
      navigate("/Mundo-infor/");
    }
  }

  function handleUserNotRegistered(user) {
    navigate("/Mundo-infor/login");
  }

  function handleUserNotLoggedIn() {
    navigate("/Mundo-infor/login");
  }

  if (state === 0) {
    return (
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotRegistered={handleUserNotRegistered}
        onUserNotLoggedIn={handleUserNotLoggedIn}
      >
        <div className="text-light vh-50 text-center text display-5 css-selector d-flex justify-content-center align-items-center">
          Loading...
        </div>
      </AuthProvider>
    );
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    addStudent();
  }

  function addStudent() {
    if (fullName !== "" && phone !== "" && address !== "") {
      const newStudent = {
        id: uuidv4(),
        fullName: fullName,
        phone: phone,
        address: address,
        uid: currentUser.uid,
      };

      // Aquí puedes llamar a tu función insertNewLink si es necesario.
      const res = insertNewLink(newStudent);
      newStudent.docId = res.uid;
      setFullName("");
      setPhone("");
      setAddress("");
      setStudents([...students, newStudent]);
    }
  }

  return (
    <Dashboardwrapper admin={isAdmin}>
      <div className="bg-darkmode text-light p-3">
        <h1 className="mb-1 text-center text-logo display-4">PROSPECTOS</h1>
        <div className="d-flex justify-content-center">
          <div className="col-12 col-lg-6">
            <form onSubmit={handleOnSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label ">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="form-control fondo1"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="form-control fondo1"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Dirección
                </label>
                <input
                  type="text"
                  className="form-control fondo1"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Agregar Estudiante
              </button>
            </form>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-logo">Lista de prospectos</h2>
          <table className="table table-dark table-striped text-light ">
            <thead>
              <tr>
                <th>Nombre Completo</th>
                <th>Teléfono</th>
                <th>Dirección</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.fullName}</td>
                  <td>{student.phone}</td>
                  <td>{student.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Dashboardwrapper>
  );
};

export default Dashboard;
