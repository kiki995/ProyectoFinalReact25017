export async function fetchProducts(categoryId = null, limit = 100, offset = 0) {
  let url = `https://api.escuelajs.co/api/v1/products?limit=${limit}&offset=${offset}`;
  
  if (categoryId) {
    url += `&categoryId=${categoryId}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Re-lanzamos el error para manejo externo
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
