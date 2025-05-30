import React from 'react';
import ProductList from './ProductList';
import Ofertas from './Ofertas'; // Asegurate de que la ruta sea correcta

const Contacto = () => {
  return (
    <div className="container">
      <h1>Ofertas</h1>
      <ProductList category="men's clothing" />
    </div>
  );
};

export default Ofertas;