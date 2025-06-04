import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const { user } = useAuth(); // ← aquí obtenés el usuario

  return (
<div className="p-3 ms-2 mt-3">
  <h1 className="h3">Bienvenido</h1>
  <p className="lead mt-3 mb-2">
    <strong>{user?.nombre || 'Usuario'}</strong>
  </p>
  <p className="mb-1">
    ROL: <strong>{user?.rol || 'Usuario'}</strong>
  </p>
</div>

      
  );
};

export default Perfil;
