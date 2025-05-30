import { Row, Col } from 'react-bootstrap';
import useProducts from '../hooks/useProducts';
import ProductCard from "./ProductCard";


const ProductList = ({ category = null }) => {
  const { products, loading } = useProducts(category);

  const handleAgregarAlCarrito = (product) => {
    alert(`Producto ${product.title} agregado al carrito`);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Row>
      {products.map((product) => (
        <Col md={4} key={product.id} className="mb-4">
          <ProductCard product={product} agregarAlCarrito={handleAgregarAlCarrito} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
