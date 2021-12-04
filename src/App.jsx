
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
import UsuariosGestionar from "./components/usuarios-gestionar";

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
                <Route path="usuarios-gestionar" element={<UsuariosGestionar />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;
