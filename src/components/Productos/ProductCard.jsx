import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {  // Cambiado de agregarAlCarrito a onAddToCart
  if (!product.images || product.images.length === 0) return null;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.images[0]} 
          alt={product.title} 
          className="product-image"
        />

{product.price < 101 && (
            <div className="product-badge">Nuevo</div>
          )}

       
        <button 
          className="wishlist-button" 
          aria-label="Añadir a favoritos"
        >
          ♡
        </button>
      </div>

      <div className="product-info">
        <div className="product-category">{product.category?.name}</div>
        <h3 className="product-title">{product.title}</h3>
        
        <div className="product-price-container">
          <span className="product-price">${product.price}</span>
          {product.price > 100 && (
            <span className="product-discount">20% OFF</span>
          )}
        </div>

        <button 
          className="add-to-cart-button"
          onClick={() => onAddToCart(product)}  // Cambiado a onAddToCart
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;