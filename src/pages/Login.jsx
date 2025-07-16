import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Alert, Card  } from 'react-bootstrap';
import { useAuth } from "../context/AuthContext";

export default function Login() {
  // Estado para almacenar el usuario y la contraseña
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => 
    {
    e.preventDefault();
    if (login(user, pass)) 
      {
      navigate("/Perfil");
    } else {
      setError("Usuario o contraseña inválidos");
    }
  };


  return (
    <Container className="mt-5" style={{ maxWidth: 400 }}>
      <h2>Iniciar sesión</h2>
      {error && <Alert variant="danger">{error}</Alert>}
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese usuario admin"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Group>


            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingrese contraseña 1234"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </Form.Group>

        <Button variant="primary" type="submit">Entrar</Button>


      </Form>
    </Container>
  );
}
