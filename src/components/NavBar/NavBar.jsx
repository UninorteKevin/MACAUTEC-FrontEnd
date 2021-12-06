import './NavBar.css';
import {Navbar, Container} from 'react-bootstrap';
const NavBar = () => {
    return(
        <Navbar className = "nav-design" expand="lg">
            <Container>
                <Navbar.Brand className = "text-light" href="#home">MacAutec Web</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end ">
                <ul className = "navbar-nav mr-auto text-ligth">
                    <li className = "nav-item"><a href="/perfil">Perfil</a></li>
                </ul>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
 
export default NavBar;