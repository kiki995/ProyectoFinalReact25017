import React from 'react';
import ProductList from './ProductList';

const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Todos los productos</h1>
        <ProductList />
      </div>

      {/* Mapa de la sucursal */}
      <div className="mt-5 animate-fade">
        <h3 className="mb-3 text-center">Nuestra Sucursal</h3>
        
        <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
          <iframe
            title="Ubicación sucursal"
            src="https://www.google.com/maps/embed?pb=!3m2!1ses-419!2sar!4v1748386602171!5m2!1ses-419!2sar!6m8!1m7!1sLhoqp9ue-_qp7Dxqdoo0tg!2m2!1d-34.52743360049048!2d-58.51777814771093!3f83.04895727299058!4f7.729792377118898!5f0.7820865974627469"
            
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Home;
