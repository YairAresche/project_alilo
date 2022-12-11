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
                <Link className='' to='/' >
                    <Brand />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/">Inicio</NavLink>
                            <NavDropdown title="Productos" id="collasible-nav-dropdown" className='dropdawnContenedor'>
                                <NavLink to="/categoria/tazones">
                                    Tazones
                                </NavLink>
                                <NavLink to="/categoria/platos">
                                    Platos
                                </NavLink>
                                <NavLink to="/categoria/hornitos">
                                    Hornitos
                                </NavLink>
                            </NavDropdown>
                        <NavLink to="/aboutMe" >Sobre Mi</NavLink>
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