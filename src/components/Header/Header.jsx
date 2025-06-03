import React, { useState,useContext } from 'react';
import { Navbar, Nav, Container, Button,Badge  } from 'react-bootstrap';
import LogoConUbicacion from './LogoConUbicacion';
import { Link, useNavigate } from 'react-router-dom';
import { faSearch, faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PopupCategorias from './PopupCategorias';
import '../../styles/Header.css';
import perfilIcon from '../../assets/mi-perfil-MC@2x.png'; // Importa tu icono correctamente
import { useAuth } from "../../context/AuthContext";
import { CartContext } from '../Carrito/CartContext'; // Asegúrate de que la ruta sea correcta

export default function Header({ onBuscar }) {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const categorias = ['Electrónica', 'Ropa', 'Libros', 'Hogar', 'Deportes', 'Juguetes', 'Salud', 'Mascotas'];
  const { user, logout } = useAuth();
  const { token } = useAuth();
  const { carrito } = useContext(CartContext);
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);

const isAuth = !!token;
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
           {/*     
                <Button variant="outline-light" onClick={handleLoginClick}>
                  <img src={perfilIcon} alt="Mi perfil" style={{ width: 24, marginRight: 8 }} />
                  Mi cuenta
                </Button>
                
                <Link to="/carrito" className="text-white position-relative">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {totalItems > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {totalItems}
                </Badge>
              )}
             </Link>*/}

                       <div className="d-flex align-items-center">
            <Button variant="outline-light"  onClick={handleLoginClick} className="me-2">
              Mi cuenta
            </Button>
            <Link to="/carrito" className="text-white position-relative">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              {totalItems > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {totalItems}
                </Badge>
              )}
            </Link>
          </div>




              </>
            ) : (
              <Button variant="outline-light" onClick={() => {cerrarSesion(); logout(); }}>
                <img src={perfilIcon} alt="Mi perfil" style={{ width: 24, marginRight: 8 }} />
                Cerrar sesión
              </Button>
              
              
            )}
          </div>
        </div>

        {/* Fila inferior */}
            
        {/*  publicas */}
        <Nav className="justify-content-center w-100 align-items-center">
                  <div
                    onMouseEnter={() => setMostrarPopup(true)}
                    onMouseLeave={() => setMostrarPopup(false)}
                    style={{ position: 'relative' }}
                  >
                    <Button className="nav-btn d-flex align-items-center me-2" variant="light">
                      <FontAwesomeIcon icon={faBars} className="me-2" />
                      <Link to="/productos" style={{ textDecoration: 'none', color: 'inherit' }}>Productos</Link>
                      
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

                  <Nav.Link as={Link} to="/Contacto" className="nav-btn">
                    Contacto
                  </Nav.Link>
          {/*  Privadas */}
              {isAuth && (
                <>
                  <Nav.Link as={Link} to="/admin" className="nav-btn">
                    Administrador
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin" className="nav-btn">
                    Mantenedor
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin" className="nav-btn">
                    Cliente
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin" className="nav-btn">
                    Ventas
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin" className="nav-btn">
                    Reporte
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin" className="nav-btn">
                    Reporte
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Usuarios" className="nav-btn">
                    Usuarios
                  </Nav.Link>
                </>
              )}
        </Nav>
      </Container>
    </Navbar>
  );
}
