import { Link } from "react-router-dom";
import styles from "./styles/item.module.css";

const Item = ({ id, name, price, img }) => {
  return (
    <Link to={`/item/${id}`}>
      <div className={styles.cardProducto}>
        <div className={styles.productImage}>
          <img src={img} alt={name} />
        </div>
        <div>
          <div className={styles.description}>
            <p className={styles.nameProduct}>{name} </p>
            <p className={styles.priceProduct}>{`$${Number(
              price
            ).toLocaleString("es-ES")}`}</p>
            <span className={styles.learnDetail}>
              Ver más
              <img src="../assets/proximo.png" alt="Next Icon" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
