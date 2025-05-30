import { useEffect, useState } from 'react';
import tiendalogo from '../../assets/tiendalogo.png';

const API_KEY = '4977122e825e4291810c6dbc0a32f380';

const LogoConUbicacion = () => {
  const [ubicacion, setUbicacion] = useState('Obteniendo ubicación...');

  useEffect(() => {
    if (!navigator.geolocation) {
      setUbicacion('Geolocalización no soportada');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        try {
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`
          );
          const data = await response.json();

          if (data.results && data.results.length > 0) {
            const components = data.results[0].components;
            const city =
              components.city ||
              components.town ||
              components.village ||
              components.county ||
              components.state_district ||  // <-- agregado
              components.state ||            // <-- agregado
              null;

            if (city) {
              setUbicacion(city);
            } else {
              setUbicacion(data.results[0].formatted);
            }
          } else {
            setUbicacion(`Lat ${latitude.toFixed(2)}, Lng ${longitude.toFixed(2)}`);
          }
        } catch (error) {
          setUbicacion(`Lat ${latitude.toFixed(2)}, Lng ${longitude.toFixed(2)}`);
        }
      },
      () => setUbicacion('Ubicación no disponible')
    );
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <img src={tiendalogo} width="110" height="45" alt="logo" />
      <div style={{ color: '#aaa', fontSize: '0.8rem', marginTop: '4px' }}>
        {ubicacion}
      </div>
    </div>
  );
};

export default LogoConUbicacion;
