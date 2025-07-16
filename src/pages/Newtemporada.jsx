import React from 'react';
import ProductList from '../components/Productos/ProductList';

const Newtemporada = () => {
  return (
    <div className="container">
      <h1>New temporada</h1>
      <ProductList category="Clothes" />
    </div>
  );
};

export default Newtemporada;
