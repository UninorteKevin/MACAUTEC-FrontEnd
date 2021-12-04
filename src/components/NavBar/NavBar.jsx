import './NavBar.css';
import {Button, Navbar, NavDropdown, Container} from 'react-bootstrap';
const NavBar = () => {
    return(
        <Navbar className = "nav-design" expand="lg">
            <Container>
                <Navbar.Brand className = "text-light" href="#home">MacAutec Web</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end ">
                <ul className = "navbar-nav mr-auto text-ligth">
                    <li className = "nav-item"> Config</li>
                </ul>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
 
export default NavBar;