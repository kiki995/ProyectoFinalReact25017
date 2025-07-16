import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Carrito = ({ isOpen, onClose }) => {
  const { carrito, setCarrito } = useContext(CartContext);

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(producto => producto.id !== id));
  };

  const aumentarCantidad = (id) => {
    setCarrito(prev => prev.map(item => 
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    ));
  };

  const disminuirCantidad = (id) => {
    setCarrito(prev => prev.map(item => 
      item.id === id && item.cantidad > 1 ? 
        { ...item, cantidad: item.cantidad - 1 } : item
    ));
  };

  const total = carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);

  if (!isOpen) return null;

  return (
    <aside className={`checkout-side-menu box-border flex flex-col fixed right-0 top-0 h-full w-80 bg-white border border-black rounded-lg overflow-auto`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Mi pedido</h2>
        <div onClick={onClose} className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-black-500 animate-pulse">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd"></path>
          </svg>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {carrito.length === 0 ? (
          <div className="p-4 text-center">Tu carrito está vacío</div>
        ) : (
          carrito.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                  <img 
                    className="w-full h-full rounded-lg object-cover" 
                    src={item.images?.[0]} 
                    alt={item.title} 
                  />
                </figure>
                <div>
                  <p className="text-sm font-light">{item.title}</p>
                  <p className="text-lg font-medium">${item.price}</p>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => disminuirCantidad(item.id)}
                      className="bg-red-200 rounded-lg h-6 w-6 text-black-500 flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                    <div className="bg-gray-300 w-8 flex justify-center rounded-md">
                      <p className="select-none">{item.cantidad}</p>
                    </div>
                    <button 
                      onClick={() => aumentarCantidad(item.id)}
                      className="bg-green-200 rounded-lg h-6 w-6 text-black-500 flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => eliminarDelCarrito(item.id)}
                  className="h-6 w-6 text-black-500 cursor-pointer animate-pulse"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="checkout-section border-t border-gray-400 p-4 bg-white">
        <p className="mb-4">
          <span className="font-medium mr-4">Total:</span>
          <span className="text-lg font-bold">${total.toFixed(2)}</span>
        </p>
        <button className="w-full border border-gray-600 py-2 rounded-md text-white font-medium bg-black hover:bg-gray-900 active:bg-white active:text-black transition-colors">
          Verificar
        </button>
      </div>
    </aside>
  );
};

export default Carrito;