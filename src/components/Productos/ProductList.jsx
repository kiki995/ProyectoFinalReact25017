import { useContext, useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col, Spinner, Alert } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import ProductCard from './ProductCard';
import { CartContext } from '../Carrito/CartContext';
import CartSidebar from '../Carrito/CartSidebar';
import { fetchCategoryById } from '../../services/api';

const ProductList = ({
  category = null,
  minPrice = null,
  maxPrice = null,
  onCategorySelect,
  filtroNombre = ''
}) => {
  const { search } = useLocation();
  const [currentCategory, setCurrentCategory] = useState(null);

  const categoryId = useMemo(() => {
    const params = new URLSearchParams(search);
    return params.get('categoria') || (category ? category.id : null);
  }, [search, category]);

  useEffect(() => {
    const loadCategory = async () => {
      if (categoryId) {
        try {
          const categoryData = await fetchCategoryById(categoryId);
          setCurrentCategory(categoryData);
          if (onCategorySelect) {
            onCategorySelect(categoryData);
          }
        } catch (error) {
          console.error('Error loading category:', error);
        }
      } else {
        setCurrentCategory(null);
        if (onCategorySelect) {
          onCategorySelect(null);
        }
      }
    };

    loadCategory();
  }, [categoryId, onCategorySelect]);

  const { products, loading } = useProducts(categoryId, minPrice, maxPrice);
  const { addToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);
  const [addedProduct, setAddedProduct] = useState('');
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProduct(product.title);
    setShowToast(true);
    setShowCart(true);
  };

  // 🔎 Filtrado por nombre si se recibió el prop filtroNombre
  const productosFiltrados = products.filter((p) =>
    p.title.toLowerCase().includes(filtroNombre.toLowerCase())
  );

  if (loading) return (
    <div className="text-center py-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Cargando...</span>
      </Spinner>
    </div>
  );

  if (productosFiltrados.length === 0) return (
    <Alert variant="info" className="my-4">
      No se encontraron productos {currentCategory ? `en la categoría ${currentCategory.name}` : ''}.
    </Alert>
  );

  return (
    <>
      <Row>
        {productosFiltrados.map((product) => (
          <Col key={product.id} md={4} lg={3} className="mb-4">
            <ProductCard 
              product={product} 
              onAddToCart={handleAddToCart}
            />
          </Col>
        ))}
      </Row>

      <CartSidebar show={showCart} onHide={() => setShowCart(false)} />
    </>
  );
};

export default ProductList;
