import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';

const useProducts = (category = null) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts(category)
      .then(data => setProducts(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [category]);

  return { products, loading };
};

export default useProducts;
