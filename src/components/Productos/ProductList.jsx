import { useContext, useState } from 'react';
import { Row, Col, Toast, ToastContainer } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import ProductCard from './ProductCard';
import { CartContext } from '../Carrito/CartContext';
import CartSidebar from '../Carrito/CartSidebar';



const ProductList = ({ category = null }) => {
  const { products, loading } = useProducts(category);
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);
  const [addedProduct, setAddedProduct] = useState('');
  const [showCart, setShowCart] = useState(false); // Estado para controlar el sidebar

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProduct(product.title);
    setShowToast(true);
    setShowCart(true); // Mostrar el sidebar al agregar un producto
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <ProductCard 
              product={product} 
              onAddToCart={handleAddToCart}
            />
          </Col>
        ))}
      </Row>

      {/* Sidebar del carrito */}
<CartSidebar show={showCart} onHide={() => setShowCart(false)} />
    </>
  );
};

export default ProductList;