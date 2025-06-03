import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Ofertas from '../components/Ofertas';
import Contacto from '../components/contacto';
import Login from '../pages/Login';
import Productos from '../pages/Productos';
import Usuarios from '../pages/Usuarios';
import Carrito from '../components/Carrito/Carrito';
import Header from '../components/Header/Header'; // si existe
import Footer from '../components/Footer'; // si existe
import { CartProvider } from '../components/Carrito/CartContext';

const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Ofertas" element={<Ofertas />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Productos" element={<Productos />} />
      <Route path="/Usuarios" element={<Usuarios />} />
      <Route path="/Carrito" element={<Carrito />} />
     </Routes>

);

export default AppRoutes;
