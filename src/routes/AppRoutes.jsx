import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Ofertas from '../components/Ofertas';
import Contacto from '../components/contacto';
import Login from '../pages/Login';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />  
    <Route path="/Home" element={<Home />} />
    <Route path="/Ofertas" element={<Ofertas />} />
    <Route path="/Contacto" element={<Contacto />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Newtemporada" element={<Login />} />

  </Routes>
);

export default AppRoutes;
