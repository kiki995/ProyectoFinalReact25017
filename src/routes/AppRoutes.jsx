import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Ofertas from '../components/Ofertas';
import Contacto from '../components/contacto';
import Login from '../pages/Login';

const AppRoutes = () => (
  <Routes>
    <Route path="/administracion" element={<Login />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/ofertas" element={<Ofertas />} />
    <Route path="/Contacto" element={<Contacto />} />
  </Routes>
);

export default AppRoutes;
