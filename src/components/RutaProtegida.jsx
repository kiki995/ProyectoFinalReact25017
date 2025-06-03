import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

// Rutas públicas que no requieren login
const rutasPublicas = ["/", "/login", "/registro"];

export default function RutaProtegida({ children }) {
  const { token } = useAuth();
  const location = useLocation();

  if (rutasPublicas.includes(location.pathname)) {
    return children; // acceso libre
  }

  return token ? children : <Navigate to="/login" />;
}

export function PermissionRoute({ children, permiso }) {
  const { token, user } = useAuth();

  if (!token || !user) return <Navigate to="/login" />;
  if (!user.permisos?.includes(permiso)) return <Navigate to="/" />;

  return children;
}

export function RoleRoute({ children, roles }) {
  const { token, user } = useAuth();

  if (!token || !user) return <Navigate to="/login" />;
  if (!roles.includes(user.rol)) return <Navigate to="/" />;

  return children;
}
