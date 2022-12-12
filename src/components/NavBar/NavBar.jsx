import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import Brand from '../Brand/Brand';
import CartWidget from '../CartWidget/CartWidget';

import './NavBar.css'

function NavBarBootstrap() {
    return (
        // fixed='top'
        <Navbar  collapseOnSelect expand="md" variant="white"> 
            <Container fluid>
                {/* <Link to='/' >
                    <Brand />
                </Link> */}
                <Navbar.Brand as={Link} to='/' >
                    <Brand />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            <NavDropdown title="Productos" id="collasible-nav-dropdown" className='dropdawnContenedor'>
                                <Nav.Link as={Link} to="/categoria/tazones">
                                    Tazones
                                </Nav.Link>
                                <Nav.Link as={Link} to="/categoria/platos">
                                    Platos
                                </Nav.Link>
                                <Nav.Link as={Link} to="/categoria/hornitos">
                                    Hornitos
                                </Nav.Link>
                            </NavDropdown>
                        <Nav.Link as={Link} to="/aboutMe" >Sobre Mi</Nav.Link>
                        {/* <Nav.Link href="#">Preguntas Frecuentes</Nav.Link>                         <Nav.Link href="#">Contacto</Nav.Link> */}
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