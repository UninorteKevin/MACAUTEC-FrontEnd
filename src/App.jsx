
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Components
import Usuarios from "./pages/Usuario/Usuarios";
//import Usuario from "./pages/Usuario/Usuario";
//<Route path="/usuarios/:id" element={<Usuario/>} />
import Usuario from "./pages/Usuario/Usuario"
import Servicios from './pages/Servicio/Servicios';
import Servicio from './pages/Servicio/Servicio';
import Mecanicos from './pages/Mecanico/Mecanicos';
import Mecanico from './pages/Mecanico/Mecanico';
import Perfil from './pages/Perfil/Perfil';
import Agenda from './pages/Agenda/agenda';
import Citas from './pages/Cita/Citas';

function App() {
  return (
  <Router>    
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Sidebar />
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Routes>
                <Route path="/usuarios/" element={<Usuarios/>} />
                <Route path="/usuarios/:id" element={<Usuario/>} />
                <Route path="/servicios/:id" element={<Servicio/>} />
                <Route path="/servicios/" element={<Servicios/>} />
                <Route path="/mecanicos/" element={<Mecanicos/>} />
                <Route path="/mecanicos/:id" element={<Mecanico/>} />
                <Route path="/perfil/" element={<Perfil/>} />
                <Route path="/agenda/" element={<Agenda/>} />
                <Route path="/citas/" element={<Citas/>} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;
