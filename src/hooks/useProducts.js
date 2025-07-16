// useProducts.js - Versión corregida
import { useEffect, useState } from 'react';
import { fetchFilteredProducts } from '../services/api';


const useProducts = (categoryId = null, minPrice = null, maxPrice = null, search = '') => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchFilteredProducts({
          categoryId,
          minPrice,
          maxPrice,
          limit: 100,
          search
        });
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [categoryId, minPrice, maxPrice, search]);

  return { products, loading };
};

export default useProducts;