import React, { useState, useContext } from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import LogoConUbicacion from './LogoConUbicacion';
import PopupCategorias from './PopupCategorias';
import perfilIcon from '../../assets/mi-perfil-MC@2x.png';

import { useAuth } from '../../context/AuthContext';
import { CartContext } from '../Carrito/CartContext';
import useCategorias from '../../hooks/useCategorias';
import CartSidebar from '../Carrito/CartSidebar';

import '../../styles/Header.css';

export default function Header({ onBuscar }) {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState('');
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const { categories, loading, error } = useCategorias();
  const { user, logout, token } = useAuth();
  const { cart, totalItems } = useContext(CartContext);

  const isAuth = !!token;

const handleBuscar = (e) => {
  e.preventDefault();
  if (busqueda.trim() !== '') {
    navigate(`/productos?buscar=${encodeURIComponent(busqueda.trim())}`);
    setBusqueda('');
  }
};



  const handleLoginClick = () => {
    navigate('/login');
  };

  const cerrarSesion = () => {
    localStorage.removeItem('auth');
    logout();
    navigate('/login');
  };




const handleSelectCategory = (category) => {
  console.log('Categoría seleccionada:', category);
  setMostrarPopup(false);
  navigate(`/productos?categoria=${category.id}`);
};


  if (error) {
    console.error('Error loading categories:', error);
    return null;
  }

  return (
    <>
      <CartSidebar show={showCart} onHide={() => setShowCart(false)} />


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
              <Button
                variant="outline-info"
                as={Link}
                to="/my-orders"
                style={{ marginRight: '12px' }}
              >
                Mis Pedidos
              </Button>   


              
              {!isAuth ? (
                <>
                  <Button variant="outline-light" onClick={handleLoginClick} className="me-2">
                    Mi cuenta
                  </Button>

                  <div
                    className="text-white position-relative"
                    style={{ cursor: 'pointer' }}
                    onClick={() => setShowCart(true)}
                  >
                    <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    {totalItems > 0 && (
                      <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                        {totalItems}
                      </Badge>
                    )}
                  </div>
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
              onMouseEnter={() => !loading && setMostrarPopup(true)}
              onMouseLeave={() => setMostrarPopup(false)}
              style={{ position: 'relative' }}
            >
              <Button className="nav-btn d-flex align-items-center me-2" variant="light">
                <FontAwesomeIcon icon={faBars} className="me-2" />
                <Link to="/productos" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Categoria
                </Link>
              </Button>

              {mostrarPopup && !loading && (
                <div style={{ position: 'absolute', top: '100%', zIndex: 999 }}>
                  <PopupCategorias categorias={categories} onSelectCategory={handleSelectCategory} />
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

            {isAuth && (
              <>
                <Nav.Link as={Link} to="/admin" className="nav-btn">
                  Administrador
                </Nav.Link>                
                <Nav.Link as={Link} to="/Usuarios" className="nav-btn">
                  Usuarios
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
