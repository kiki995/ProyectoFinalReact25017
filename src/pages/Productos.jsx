import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/Productos/ProductList';
import { Container } from 'react-bootstrap';

const Productos = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('buscar') || '';

  return (
    <Container className="py-4">
      {selectedCategory && (
        <div className="text-center mb-4 p-3 bg-light rounded-3 shadow-sm">
          <h2 className="m-0 text-primary">
            <i className="bi bi-tag-fill me-2"></i>
            Categoría: <span className="fw-bold">{selectedCategory.name}</span>
          </h2>
        </div>
      )}
      
      <ProductList 
        category={selectedCategory}
        onCategorySelect={setSelectedCategory}
        filtroNombre={query} // 🔥 nuevo prop
      />
    </Container>
  );
};

export default Productos;
