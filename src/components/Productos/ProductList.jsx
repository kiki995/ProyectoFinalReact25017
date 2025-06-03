import { useContext, useState } from 'react';
import { Row, Col, Toast, ToastContainer } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import ProductCard from './ProductCard';
import { CartContext } from '../Carrito/CartContext';

const ProductList = ({ category = null }) => {
  const { products, loading } = useProducts(category);
  const { agregarAlCarrito } = useContext(CartContext);

  const [mostrarToast, setMostrarToast] = useState(false);
  const [productoAgregado, setProductoAgregado] = useState('');

  const handleAgregarAlCarrito = (product) => {
    agregarAlCarrito(product);
    setProductoAgregado(product.title);
    setMostrarToast(true);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <ProductCard product={product} agregarAlCarrito={handleAgregarAlCarrito} />
          </Col>
        ))}
      </Row>

      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
        <Toast onClose={() => setMostrarToast(false)} show={mostrarToast} delay={3000} autohide bg="success">
          <Toast.Header>
            <strong className="me-auto">Carrito</strong>
          </Toast.Header>
          <Toast.Body className="text-white">Producto "{productoAgregado}" agregado al carrito</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ProductList;
