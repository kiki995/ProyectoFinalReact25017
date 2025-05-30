import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/ProductCard.css';

const ProductCard = ({ product, agregarAlCarrito }) => {
  return (

    // Armo la cards
    <Card className="h-100 d-flex flex-column">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        className="card-img-top img-fluid product-img"
      />


      <Card.Body className="d-flex flex-column h-100">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description.slice(0, 100)}...
        </Card.Text>
        <Card.Text>
          <strong>${product.price}</strong>
        </Card.Text>
        <Button variant="primary" onClick={() => agregarAlCarrito(product)} className='mt-auto'>
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
};



export default ProductCard;
// Este componente ProductCard recibe un producto y una función para agregarlo al carrito.
// Utiliza Bootstrap para mostrar la información del producto en una tarjeta (Card).