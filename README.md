# TP React - Cristian Miranda

Trabajo práctico del curso de React. Este proyecto es un pequeño e-commerce que permite visualizar productos y manejarlos desde un carrito de compras. Se conecta a una API pública para obtener la información de los productos y usa rutas dinámicas y protegidas para navegar entre vistas.

## 🌐 TP Deployed

Acá podés ir viendo el progreso del proyecto desplegado:  
🔗 **[LiveProject](https://bellaclothes.netlify.app/)**  
Usuario:admin
Contraseña:1234

## 🛠️ Tecnologías

- React (con Vite)
- JavaScript (ES6+)
- React Router DOM  
- SweetAlert2  
- Bootstrap y React-Bootstrap  
- Font Awesome  
- API externa pública (sugerida por el curso)

## 📦 Funcionalidades

- ✅ Listado de productos  
- ✅ Filtrado de productos por categoría y nombre  
- ✅ Carrito de compras con persistencia  
- ✅ Conexión a API externa  
- ✅ Rutas protegidas y dinámicas  
- ✅ Login y control de sesión (si aplica)  
- ✅ Estilo responsive con Bootstrap  

# 🚀 Cómo iniciar el proyecto

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/kiki995/ProyectoFinalReact25017.git
2. Instalá las dependencias:  
npm install
npm install sweetalert2
npm install react-bootstrap bootstrap
npm install react-router-dom
npm install font-awesome
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core



3. Iniciá el proyecto en modo de desarrollo:  
npm run dev

# 🧪 En desarrollo  
Este proyecto se encuentra finalizado.

## Estructura del proyecto ➕  
/my-app/  
├── public/                 # Archivos estáticos (favicon, imágenes públicas, etc.)  
│   
├── src/                    # Código fuente principal  
│   ├── assets/             # Imágenes, fuentes, íconos  
│   ├── components/         # Componentes reutilizables (Navbar, Footer, etc.)  
│   ├── pages/              # Páginas completas (Home.jsx, Product.jsx, etc.)  
│   ├── context/            # Archivos de contexto (React Context API)  
│   ├── hooks/              # Custom hooks (useCart.js, useFetch.js, etc.)  
│   ├── styles/             # Archivos CSS o SCSS  
│   ├── services/           # Funciones para consumir APIs  
│   ├── App.jsx             # Componente raíz  
│   ├── main.jsx            # Punto de entrada (renderiza <App />)  
│   └── routes/             # Definición de rutas si usas React Router  
├── .gitignore  
├── eslint.config.js  
└── index.html  
├── package-lock.json  
├── package.json  
├── vite.config.js  
└── README.md  

## Guardar cambios ➕    
git commit -a  
git pull  
git push