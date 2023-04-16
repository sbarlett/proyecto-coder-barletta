import { products } from "../api/products";

export const getProduct = (id) => {
  return new Promise((resolve) => {
    const product = products.find((item) => item.id === id);
    setTimeout(() => {
      resolve(product);
    }, 100);
  });
};

export const getAllProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 100);
  });
};

export const getProductsCategory = (idCategory) => {
  return new Promise( resolve => {
      setTimeout( ()=> {
          const productosCategoria = products.filter(prod => prod.category === idCategory);
          resolve(productosCategoria);
      },100)
  })
}
