import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./components/Carrito/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Header />
          <AppRoutes />
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
