import React from 'react';
import ProductList from '../components/Productos/ProductList';
import { Container, Alert } from 'react-bootstrap';

const Newtemporada = () => {
  return (
<Container className="py-4 text-center">    
  <h1 className="mb-4">New Temporada</h1>
  <ProductList maxPrice={100} />
</Container>
  );
};

export default Newtemporada;