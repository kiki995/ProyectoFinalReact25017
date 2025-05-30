export async function fetchProducts(category = null) {
  let url = 'https://fakestoreapi.com/products';
  if (category) {
    url = `https://fakestoreapi.com/products/category/${category}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error al cargar productos');
  }
  return await response.json();
}
