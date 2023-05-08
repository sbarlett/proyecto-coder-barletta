import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const addProdCarrito = (item, count) => {
    if (!validateProductCarrito(item.id)) {
      setCarrito((prevState) => [...prevState, { item, count }]);
    } else {
      setCarrito((prevState) =>
        prevState.map((prod) =>
          prod.item.id === item.id
            ? { ...prod, count: (prod.count += count) }
            : prod
        )
      );
    }
  };

  const deleteProdCarrito = (id) => {
    const updateCarrito = carrito.filter((prod) => prod.item.id !== id);
    return setCarrito(updateCarrito);
  };

  const vaciarCarrito = () => {
    return setCarrito([]);
  };

  const validateProductCarrito = (id) => {
    return carrito.some((prod) => prod.item.id === id);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, addProdCarrito, deleteProdCarrito, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
