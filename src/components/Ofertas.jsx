import React from 'react';
import ProductList from './Productos/ProductList';

const Ofertas = () => {
  return (
    <div className="container">
      <h1>Ofertas</h1>
      <ProductList category="Clothes" />
    </div>
  );
};

export default Ofertas;
