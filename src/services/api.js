const BASE_URL = 'https://api.escuelajs.co/api/v1';

export async function fetchProducts(categoryId = null, limit = 100, offset = 0) {
  let url = `${BASE_URL}/products?limit=${limit}&offset=${offset}`;
  
  if (categoryId) {
    url += `&categoryId=${categoryId}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}



// Función única para filtrado (con filtrado en cliente para precios)
export async function fetchFilteredProducts({ categoryId = null, minPrice = null, maxPrice = null, limit = 100, search = '' }) {
  let url = `${BASE_URL}/products?limit=${limit}`;
  if (categoryId) url += `&categoryId=${categoryId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    let data = await response.json();

    // Filtrado en cliente
    if (minPrice !== null) data = data.filter(p => p.price >= minPrice);
    if (maxPrice !== null) data = data.filter(p => p.price <= maxPrice);
    if (search) data = data.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

    return data;
  } catch (error) {
    console.error('Error fetching filtered products:', error);
    throw error;
  }
}


// Función para obtener todas las categorías (ya la tienes)
export async function fetchCategories() {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories');
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

export async function fetchProductsFiltered({ categoryId = null, minPrice = null, maxPrice = null }) {
  let url = 'https://api.escuelajs.co/api/v1/products?limit=100&offset=0';

  if (categoryId) url += `&categoryId=${categoryId}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Error al obtener productos filtrados');
    let data = await res.json();

    // Filtrado manual por precio
    if (minPrice !== null) data = data.filter(p => p.price >= minPrice);
    if (maxPrice !== null) data = data.filter(p => p.price <= maxPrice);

    return data;
  } catch (error) {
    console.error('Error filtrando productos:', error);
    throw error;
  }
}



// Nueva función para obtener categoría por ID
export async function fetchCategoryById(id) {
  try {
    const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching category ${id}:`, error);
    throw error;
  }
}

export async function fetchRandomUser() {
  const res = await fetch('https://randomuser.me/api/');
  if (!res.ok) throw new Error('Error al cargar usuario');
  const data = await res.json();
  return data.results[0];
}