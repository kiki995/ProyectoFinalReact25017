import { useState, useEffect } from 'react';
import { fetchCategories } from '../services/api';

const useCategorias = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [defaultCategory, setDefaultCategory] = useState(null);

  // Cargar todas las categorías al montar el componente
  useEffect(() => {
    const loadAllCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
        
        // Establecer categoría por defecto (Clothes si existe, sino la primera)
        const clothesCategory = categoriesData.find(
          cat => cat.name === 'Clothes' || cat.slug === 'clothes'
        );
        
        setDefaultCategory(clothesCategory || categoriesData[0] || null);
      } catch (err) {
        setError(`Error al cargar categorías: ${err.message}`);
        console.error('Error loading categories:', err);
      } finally {
        setLoading(false);
      }
    };

    loadAllCategories();
  }, []);

  return { 
    categories,           // Listado completo de categorías
    defaultCategory,      // Categoría por defecto (Clothes o primera)
    loading,              // Estado de carga
    error                 // Mensaje de error
  };
};

export default useCategorias;