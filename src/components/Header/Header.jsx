import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import LogoConUbicacion from './LogoConUbicacion';
import { Link, useNavigate } from 'react-router-dom';
import { faSearch, faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PopupCategorias from './PopupCategorias';
import '../../styles/Header.css';
import perfilIcon from '../../assets/mi-perfil-MC@2x.png'; // Importa tu icono correctamente

export default function Header({ onBuscar }) {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const isAuth = localStorage.getItem('auth') === 'true';
  const categorias = ['Electrónica', 'Ropa', 'Libros', 'Hogar', 'Deportes', 'Juguetes', 'Salud', 'Mascotas'];

  const handleBuscar = (e) => {
    e.preventDefault();
    onBuscar(busqueda);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const cerrarSesion = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <Navbar expand="md" variant="dark" bg="black" className="sb-topnav mb-4">
      <Container fluid className="d-flex flex-column">
        {/* Fila superior */}
        <div className="d-flex w-100 align-items-center mb-2">
          <Navbar.Brand as={Link} to="/" className="me-3">
            <LogoConUbicacion />
          </Navbar.Brand>

          <form className="d-flex flex-grow-1 mx-3" onSubmit={handleBuscar}>
            <input
              type="search"
              className="form-control me-2"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <Button variant="outline-light" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </form>

          <div className="d-flex align-items-center">
            {!isAuth ? (
              <>
                
                <Button variant="outline-light" onClick={handleLoginClick}>
                  <img src={perfilIcon} alt="Mi perfil" style={{ width: 24, marginRight: 8 }} />
                  Mi cuenta
                </Button>
                
                <Button variant="link" onClick={handleLoginClick} style={{ color: 'white', textDecoration: 'none' }}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Button>




              </>
            ) : (
              <Button variant="outline-light" onClick={cerrarSesion}>
                <img src={perfilIcon} alt="Mi perfil" style={{ width: 24, marginRight: 8 }} />
                Cerrar sesión
              </Button>
            )}
          </div>
        </div>

        {/* Fila inferior */}
        <Nav className="justify-content-center w-100 align-items-center">
          <div
            onMouseEnter={() => setMostrarPopup(true)}
            onMouseLeave={() => setMostrarPopup(false)}
            style={{ position: 'relative' }}
          >
            <Button className="nav-btn d-flex align-items-center me-2" variant="light">
              <FontAwesomeIcon icon={faBars} className="me-2" />
              Categorías
            </Button>

            {mostrarPopup && (
              <div style={{ position: 'absolute', top: '100%', zIndex: 999 }}>
                <PopupCategorias categorias={categorias} />
              </div>
            )}
          </div>

          <Nav.Link as={Link} to="/Ofertas" className="nav-btn">
            Ofertas
          </Nav.Link>

           <Nav.Link as={Link} to="/Newtemporada" className="nav-btn">
            New temporada
          </Nav.Link>

          {isAuth && (
            <>
              <Nav.Link as={Link} to="/perfil/usuario123" className="nav-btn">
                Perfil
              </Nav.Link>
              <Nav.Link as={Link} to="/admin" className="nav-btn">
                Admin
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
