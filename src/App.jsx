
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
import UsuariosGestionar from "./pages/Usuario/Gestionar";
//import Usuario from "./pages/Usuario/Usuario";
//<Route path="/usuarios/:id" element={<Usuario/>} />
import Usuario from "./pages/Usuario/Usuario"

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
                <Route path="/usuarios-gestionar/" element={<UsuariosGestionar/>} />
                <Route path="/usuarios/:id" element={<Usuario/>} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;
