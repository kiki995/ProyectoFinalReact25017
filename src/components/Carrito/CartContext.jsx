import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cargar carrito desde localStorage al iniciar
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  });

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Persistir carrito en localStorage y calcular totales
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
      
      const newTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      const newTotalPrice = cart.reduce(
        (sum, item) => sum + (Number(item.price) * Number(item.quantity)), 
        0
      );
      
      setTotalItems(newTotalItems);
      setTotalPrice(parseFloat(newTotalPrice.toFixed(2)));
    } catch (error) {
      console.error("Error updating cart totals:", error);
    }
  }, [cart]);

  // Agregar producto al carrito con validación
  const addToCart = (product) => {
    if (!product || !product.id) {
      console.error("Invalid product:", product);
      return;
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      
      return [...prevCart, { 
        ...product, 
        quantity: 1,
        price: Number(product.price) || 0
      }];
    });
  };

  // Eliminar producto del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  // Actualizar cantidad con validación
  const updateQuantity = (id, newQuantity) => {
    const quantity = Number(newQuantity);
    
    if (isNaN(quantity) || quantity < 1) {
      removeFromCart(id);
      return;
    }

    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      totalItems, 
      totalPrice, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};