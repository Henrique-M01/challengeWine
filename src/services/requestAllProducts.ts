import axios from 'axios';

export default async function getAllProducts() {
  const response = await axios.get('https://wine-back-test.herokuapp.com/products');

  const allProducts = await response.data;

  return allProducts;
}