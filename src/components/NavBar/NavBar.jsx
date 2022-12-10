import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Brand from '../Brand/Brand';
import CartWidget from '../CartWidget/CartWidget';

import './NavBar.css'

function NavBarBootstrap() {
    return (
        <Navbar fixed='top' collapseOnSelect expand="md" variant="white">
            <Container fluid>
                <Navbar.Brand href="#">
                    <Brand />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Tazones</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Platos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Hornitos</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#aboutMe">Sobre Mi</Nav.Link>
                        <Nav.Link href="#">Preguntas Frecuentes</Nav.Link>                         <Nav.Link href="#">Contacto</Nav.Link>
                    </Nav>
                    <Nav>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarBootstrap;