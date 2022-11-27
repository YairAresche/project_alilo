import './NavBar.css'
import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Brand from '../Brand/Brand';
import CartWidget from '../CartWidget/CartWidget';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
            <Container>
                <Navbar.Brand href="#">
                    <Brand />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">Sobre Mi</Nav.Link>
                        <Nav.Link href="#">Preguntas Frecuentes</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
                    </Nav>
                    <Nav>
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;