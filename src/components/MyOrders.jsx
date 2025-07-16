import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, Button, Card, Table, Badge,
  Alert, Row, Col, ProgressBar, Spinner
} from 'react-bootstrap';
import { 
  FiArrowLeft, FiTruck, FiCheckCircle, 
  FiClock, FiDollarSign, FiShoppingBag 
} from 'react-icons/fi';
import '../styles/MyOrders.css';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Simular carga inicial desde API
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Obtener pedidos de localStorage (simulación)
        const localStorageOrders = JSON.parse(localStorage.getItem('userOrders')) || [];
        
        // Pedidos mock iniciales solo si no hay en localStorage
        const mockOrders = localStorageOrders.length > 0 ? [] : [
          {
            id: 'ORD-12345',
            date: '2023-05-15',
            status: 'Delivered',
            statusPercentage: 100,
            total: 89.99,
            items: [
              { name: 'Camiseta Elegante', quantity: 2, price: 29.99, image: '/images/shirt.jpg' },
              { name: 'Pantalón Moderno', quantity: 1, price: 39.99, image: '/images/pants.jpg' }
            ]
          },
          {
            id: 'ORD-12346',
            date: '2023-06-02',
            status: 'Shipping',
            statusPercentage: 65,
            total: 129.50,
            items: [
              { name: 'Vestido de Verano', quantity: 1, price: 59.99, image: '/images/dress.jpg' },
              { name: 'Zapatos Casuales', quantity: 1, price: 69.99, image: '/images/shoes.jpg' }
            ]
          }
        ];
        
        setOrders([...localStorageOrders, ...mockOrders]);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const getStatusDetails = (status) => {
    switch (status) {
      case 'Delivered': 
        return { 
          icon: <FiCheckCircle size={18} />, 
          color: 'success', 
          text: 'Entregado' 
        };
      case 'Shipping': 
        return { 
          icon: <FiTruck size={18} />, 
          color: 'primary', 
          text: 'En camino' 
        };
      default: 
        return { 
          icon: <FiClock size={18} />, 
          color: 'warning', 
          text: 'Procesando' 
        };
    }
  };

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="mt-3">Cargando tus pedidos...</p>
      </Container>
    );
  }

  return (
    <Container className="my-orders-container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Button 
          as={Link} 
          to="/" 
          variant="light" 
          className="back-button"
        >
          <FiArrowLeft className="me-2" /> Volver a la tienda
        </Button>
        <h2 className="page-title mb-0">
          <FiShoppingBag className="me-2" /> Mis Pedidos
        </h2>
      </div>

      {orders.length === 0 ? (
        <Alert variant="light" className="text-center empty-orders">
          <div className="empty-icon mb-3">
            <FiShoppingBag size={48} />
          </div>
          <h4>No tienes pedidos recientes</h4>
          <p className="text-muted mb-4">Aún no has realizado ningún pedido en nuestra tienda</p>
          <Button 
            as={Link} 
            to="/productos" 
            variant="primary" 
            className="px-4 py-2"
          >
            Explorar productos
          </Button>
        </Alert>
      ) : (
        <div className="orders-list">
          {orders.map((order) => {
            const statusInfo = getStatusDetails(order.status);
            
            return (
              <Card key={order.id} className="order-card mb-4 shadow-sm">
                <Card.Body>
                  <Row className="align-items-center mb-3">
                    <Col md={6}>
                      <div className="d-flex align-items-center">
                        <Badge 
                          bg={statusInfo.color} 
                          className="status-badge me-3"
                        >
                          {statusInfo.icon}
                        </Badge>
                        <div>
                          <h5 className="order-id mb-1">Pedido #{order.id}</h5>
                          <small className="text-muted">
                            {new Date(order.fecha).toLocaleDateString('es-ES', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </small>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="d-flex justify-content-md-end mt-3 mt-md-0">
                        <div className="text-end">
                          <div className="order-total">
                            <FiDollarSign className="me-1" />
                            <strong>${order.total.toFixed(2)}</strong>
                          </div>
                          <small className={`text-${statusInfo.color} status-text`}>
                            {statusInfo.text}
                          </small>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  {order.statusPercentage && (
                    <ProgressBar 
                      now={order.statusPercentage} 
                      variant={statusInfo.color}
                      className="mb-4"
                      label={`${order.statusPercentage}%`}
                    />
                  )}

                  <Table borderless responsive className="order-items-table">
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th className="text-end">Precio</th>
                        <th className="text-end">Cantidad</th>
                        <th className="text-end">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.items.map((item, idx) => (
                        <tr key={idx}>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="product-image me-3">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  onError={(e) => {
                                    e.target.src = '/images/placeholder.jpg';
                                  }}
                                />
                              </div>
                              <span>{item.name}</span>
                            </div>
                          </td>
                          <td className="text-end">${item.price.toFixed(2)}</td>
                          <td className="text-end">x{item.quantity}</td>
                          <td className="text-end">
                            <strong>${(item.quantity * item.price).toFixed(2)}</strong>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="3" className="text-end">
                          <strong>Total del pedido:</strong>
                        </td>
                        <td className="text-end">
                          <strong className="total-amount">
                            ${order.total.toFixed(2)}
                          </strong>
                        </td>
                      </tr>
                    </tfoot>
                  </Table>

                  <div className="d-flex justify-content-end mt-3">
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      className="me-2"
                    >
                      Ver detalles
                    </Button>
                    <Button 
                      variant="outline-success" 
                      size="sm"
                    >
                      Volver a comprar
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      )}
    </Container>
  );
};

export default MyOrders;