import './NavBar.css';
import {Navbar, Container} from 'react-bootstrap';
const NavBar = () => {
    return(
        <Navbar className = "nav-design" expand="lg">
            <Container>
                <Navbar.Brand href="#home">MacAutec Web</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end ">
                <Navbar.Brand href="#home">
                    <img
                        src="/profile_default.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
 
export default NavBar;