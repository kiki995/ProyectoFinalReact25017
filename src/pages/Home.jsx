import React from 'react';
import ProductList from '../components/ProductList';
import { Carousel } from 'react-bootstrap'; // Importa Carousel


const Home = () => {
  const banners = [
    { id: 1, src: '/imagenes/banner1.jpg', alt: 'Banner 1' },
    { id: 2, src: '/imagenes/banner2.jpg', alt: 'Banner 2' },
    { id: 3, src: '/imagenes/banner3.jpg', alt: 'Banner 3' },
  ];
<Carousel controls indicators={false} interval={null} className="mb-4">
  <Carousel.Item>
    <ul className="sc-gbWDHf sc-bwGlVi iLfMZW bSkgZE">
      <li className="sc-gQSkpc sc-ivgJuh czplQI idYpAi">Item 1</li>
      <li className="sc-gQSkpc sc-ivgJuh czplQI idYpAi">Item 2</li>
      <li className="sc-gQSkpc sc-ivgJuh czplQI idYpAi">Item 3</li>
    </ul>
  </Carousel.Item>
<Carousel.Item>
    <ul className="sc-gbWDHf sc-bwGlVi iLfMZW bSkgZE">
      <li className="sc-gQSkpc sc-ivgJuh czplQI idYpAi">Item 4</li>
      <li className="sc-gQSkpc sc-ivgJuh czplQI idYpAi">Item 5</li>
    </ul>
  </Carousel.Item>
</Carousel>
  return (
    <>
      <div className="container">
        {/* Carousel de banners */}
        <Carousel className="mb-4">
          {banners.map((banner) => (
            <Carousel.Item key={banner.id}>
              <img
                className="d-block w-100"
                src={banner.src}
                alt={banner.alt}
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>       
        <ProductList />
      </div>

      {/* Mapa de la sucursal */}
      <div className="mt-5 animate-fade">

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
