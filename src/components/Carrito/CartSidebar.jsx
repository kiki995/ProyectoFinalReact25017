import React, { useContext, useState } from 'react';
import { Offcanvas, Button, ListGroup, Alert } from 'react-bootstrap';
import { CartContext } from '../Carrito/CartContext';
import { FaTimes, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../../styles/CartSidebar.css';

const CartSidebar = ({ show, onHide }) => {
  const { cart, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const crearPedido = async () => {
    if (cart.length === 0) return;

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const pedido = {
      id: `ORD-${Date.now()}`,
      fecha: new Date().toISOString(),
      status: 'Processing',
      statusPercentage: 10,
      total: totalPrice,
      items: cart.map(item => ({
        name: item.title,
        quantity: item.quantity,
        price: item.price,
        image: item.images?.[0] || '/images/placeholder.jpg'
      }))
    };

    try {
      const existingOrders = JSON.parse(localStorage.getItem('userOrders') || '[]');
      localStorage.setItem('userOrders', JSON.stringify([...existingOrders, pedido]));

      setSuccess(true);
      clearCart();

      setTimeout(() => {
        onHide();
        navigate('/my-orders');
      }, 2000);
    } catch (err) {
      console.error('Error en crearPedido:', err);
      setError('Hubo un error al guardar el pedido');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Offcanvas show={show} onHide={onHide} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Tu Pedido ({totalItems})</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {error && (
          <Alert variant="danger" className="d-flex align-items-center">
            <FaExclamationTriangle className="me-2" />
            {error}
          </Alert>
        )}

        {success && (
          <Alert variant="success" className="d-flex align-items-center">
            <FaCheckCircle className="me-2" />
            Pedido creado con éxito. Redirigiendo...
          </Alert>
        )}

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
                      <FaTimes size={20} />
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

              <Button 
                variant="dark" 
                className="w-100 mt-3" 
                onClick={crearPedido}
                disabled={cart.length === 0 || isSubmitting}
              >
                {isSubmitting ? 'Procesando...' : 'Continuar compra'}
              </Button>
            </div>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CartSidebar;
