import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null); // { nombre, rol, permisos }

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (username, password) => {
    if (username === "admin" && password === "1234") {
      const fakeToken = "dG9rZW5GYWxzbzEyMzQ=";
      const userData = {
        nombre: "Cristian",
        Apellido:"Miranda",
        rol: "DESAROLLADOR",
        permisos: ["VER_USUARIOS", "EDITAR_PRODUCTOS", "VER_REPORTES"]
      };
      setToken(fakeToken);
      setUser(userData);
      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    }

    if (username === "cliente" && password === "1234") {
      const fakeToken = "Y2xpZW50ZVRva2Vu";
      const userData = {
        nombre: "cliente",
        rol: "CLIENTE",
        permisos: ["VER_PRODUCTOS"]
      };
      setToken(fakeToken);
      setUser(userData);
      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify(userData));
      return true;
    }

    return false;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
