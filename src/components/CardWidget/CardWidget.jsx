import { useContext } from "react";
import styles from "./styles/card-widget.module.css";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

export const CardWidget = () => {
  const { carrito } = useContext(CarritoContext);

  const totalCount = carrito.reduce((total, item) => (total += item.count), 0);

  return (
    <div className={styles.shoppingContainer}>
      <Link className={styles.cartDetail} to="/cart">
        <div>
          <img
            className={styles.shoppingCart}
            src="https://samsungbr.vtexassets.com/arquivos/iconcart2021.svg"
            alt="Carrito"
          />
        </div>
        <div>
          <p className={styles.shopNumber}>{totalCount}</p>
        </div>
      </Link>
    </div>
  );
};
