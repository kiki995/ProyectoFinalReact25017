import React, { useContext } from 'react';
import { Offcanvas, Button, ListGroup, Badge } from 'react-bootstrap';
import { CartContext } from '../Carrito/CartContext';
import { X } from 'react-bootstrap-icons';
import '../../styles/CartSidebar.css'; // Archivo CSS para estilos personalizados

const CartSidebar = ({ show, onHide }) => {
  const { cart, totalItems, totalPrice, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <Offcanvas 
      show={show} 
      onHide={onHide} 
      placement="end"
      style={{ top: '80px', height: 'calc(100vh - 80px)' }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Tu Pedido ({totalItems})</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {cart.length === 0 ? (
          <div className="text-center p-4">
            <p>Tu carrito está vacío</p>
            <Button variant="outline-dark" onClick={onHide}>
              Seguir comprando
            </Button>
          </div>
        ) : (
          <div className="d-flex flex-column h-100">
            <ListGroup variant="flush" className="flex-grow-1 overflow-auto">
              {cart.map((item) => (
                <ListGroup.Item key={item.id} className="cart-item border-0">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="me-3">
                      <img 
                        src={item.images?.[0]} 
                        alt={item.title} 
                        width="60" 
                        className="rounded"
                        onError={(e) => e.target.src = 'https://via.placeholder.com/60'}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.title}</h6>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="quantity-selector d-flex align-items-center">
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            className="px-2"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </Button>
                          <span className="mx-2">{item.quantity}</span>
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            className="px-2"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                        <span className="fw-bold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                    <Button 
                      variant="link" 
                      className="text-danger p-0 ms-2"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Eliminar"
                    >
                      <X size={20} />
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            
            <div className="cart-summary p-3 border-top">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Envío:</span>
                <span>Gratis</span>
              </div>
              <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              
          <Button variant="dark" className="w-100" onClick={onHide}>
              Continuar compra
            </Button>
            </div>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartSidebar;