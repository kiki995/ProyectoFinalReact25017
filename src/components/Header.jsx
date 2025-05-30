import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import LogoConUbicacion from './LogoConUbicacion';
import '../styles/Header.css'; 

export default function Header() 
{
  const navigate = useNavigate();



  const isAuth = localStorage.getItem('auth') === 'true';

  const cerrarSesion = () => 
    {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <Navbar expand="md" variant="dark" bg="black" className="sb-topnav mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex flex-column align-items-start">
          <LogoConUbicacion />
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
          <Nav.Link as={Link} to="/ofertas" className="me-3">Ofertas</Nav.Link>
          <Nav.Link as={Link} to="/infaltables" className="me-3">Infaltables</Nav.Link>

          <div className="d-flex align-items-center">
            <Button variant="outline-light" as={Link} to="/administracion" className="me-2">
              Administración
            </Button>
            <Link to="/carrito" className="text-white">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            </Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};
