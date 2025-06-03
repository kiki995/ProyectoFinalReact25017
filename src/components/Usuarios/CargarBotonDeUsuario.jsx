import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Button } from 'react-bootstrap';


const CargarBotonDeUsuario = () => {
  const { loadUser } = useContext(UserContext);

  return (
    <div className="text-center mt-3">
      <Button variant="primary" onClick={loadUser}>
        Cargar nuevo usuario
      </Button>
    </div>
  );
};

export default CargarBotonDeUsuario;
