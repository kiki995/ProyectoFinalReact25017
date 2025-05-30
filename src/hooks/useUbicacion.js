import { useEffect, useState } from 'react';

const useUbicacion = () => {
  const [ubicacion, setUbicacion] = useState(null);

  useEffect(() => {
    const obtenerUbicacion = async () => {
      if (!navigator.geolocation) return;

      navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        const { latitude, longitude } = coords;
        const apiKey = import.meta.env.VITE_OPENCAGE_API_KEY;
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=es&pretty=1`;

        try {
          const response = await fetch(url);
          const data = await response.json();
          const components = data.results[0]?.components;
          console.log('OpenCage components:', components); // ✔️ Aquí va el log

          let ciudad =
            components.city ||
            components.town ||
            components.village ||
            components.county ||
            components.state_district ||
            components.state;

          if (ciudad === 'Buenos Aires') {
            ciudad = 'Capital Federal';
          }

          const pais = components.country || '';
          setUbicacion(`${ciudad}, ${pais}`);
        } catch (error) {
          console.error('Error al obtener la ubicación:', error);
        }
      });
    };

    obtenerUbicacion();
  }, []);

  return ubicacion;
};

export default useUbicacion;
