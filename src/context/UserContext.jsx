import { createContext, useState, useEffect } from 'react';
import { fetchRandomUser } from '../services/api';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loadUser = async () => {
    const randomUser = await fetchRandomUser();
    setUser(randomUser);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loadUser }}>
      {children}
    </UserContext.Provider>
  );
};
