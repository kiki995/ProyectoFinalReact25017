import React from 'react';
import UserCard from '../components/Usuarios/UserCard';
import CargarBotonDeUsuario from '../components/Usuarios/CargarBotonDeUsuario';
import { Container } from 'react-bootstrap';
import { UserProvider } from "../context/UserContext";


const Usuarios = () => {
  return (
    <UserProvider>
      <Container className="text-center mt-5">
        <h1>Usuario Aleatorio</h1>
        <UserCard />
        <CargarBotonDeUsuario />
      </Container>
    </UserProvider>
  );
};

export default Usuarios;
