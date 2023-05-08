import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import CartItem from "../CartItem/CartItem";
import styles from "./styles/cart.module.css";

const Cart = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);

  const totalCount = carrito.reduce((total, item) => (total += item.count), 0);
  const totalPrice = carrito.reduce(
    (total, product) => total + product.item.price * product.count,
    0
  );

  if (totalCount === 0) {
    return (
      <>
        <div className={styles.containerWithoutProduct}>
          <h1>No hay Productos en el carrito</h1>
          <Link to="/">Ver mas productos</Link>
        </div>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.detailContainer}>
          <li></li>
          <li>Product</li>
          <li>Cantidad</li>
          <li>Precio Unitario</li>
        </ul>
      </div>
      <hr className={styles.lineSlim} />
      {carrito.map((producto) => (
        <div className={styles.cartContainer} key={producto.item.id}>
          <CartItem key={producto.item.id} {...producto} />
        </div>
      ))}
      <button className={styles.buttonDelete} onClick={() => vaciarCarrito()}>
        <img src="../assets/borrar.png" alt="Delete carrito" />
      </button>
      <div className={styles.totalAmount}>
        <h3>Total</h3>
        <span>${Number(totalPrice).toLocaleString("es-ES")}</span>
      </div>
      <Link className={styles.buttonShopping} to="/checkout">
        Ir a pagar
      </Link>
    </div>
  );
};

export default Cart;
