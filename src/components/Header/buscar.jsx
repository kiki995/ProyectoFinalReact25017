import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchProducts } from '../../api/productApi'; // Asegurate de tener este path correcto
import ProductoCard from '../components/ProductoCard';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Buscar() {
  const query = useQuery().get('query') || '';
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      try {
        const todos = await fetchProducts();
        const filtrados = todos.filter(p =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
        );
        setProductos(filtrados);
      } catch (error) {
        console.error('Error:', error);
        setProductos([]);
      } finally {
        setLoading(false);
      }
    };
    cargar();
  }, [query]);

  return (
    <div className="container mt-4">
      <h2>Resultados para: "{query}"</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : productos.length > 0 ? (
        <div className="row">
          {productos.map(p => (
            <ProductoCard key={p.id} producto={p} />
          ))}
        </div>
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
}
