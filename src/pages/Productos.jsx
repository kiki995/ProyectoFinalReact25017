import React, { useState } from 'react';
import ProductList from '../components/Productos/ProductList';
import { Container } from 'react-bootstrap';

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Container className="py-4">
      <h1 className="mb-4">Nuestros Productos</h1>
      {selectedCategory && (
        <h2 className="mb-4">Categoría: {selectedCategory}</h2>
      )}
      
      <ProductList 
        category={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
    </Container>
  );
};

export default Productos;