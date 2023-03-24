import styles from "./styles/card-widget.module.css";

export const CardWidget = ({ shoppingNumer }) => {
  return (
    <div className={styles.shoppingContainer}>
      <img
        className={styles.shoppingCart}
        src="https://samsungbr.vtexassets.com/arquivos/iconcart2021.svg"
        alt="Carrito"
      />
      <p className={styles.shopNumber}>{shoppingNumer}</p>
    </div>
  );
};
