import { Link } from "react-router-dom";
import styles from "./styles/item.module.css";

const Item = ({ id, name, price, img }) => {
  return (
    <Link to={`/item/${id}`}>
      <div className={styles.cardProducto}>
        <img src={img} alt={name} />
        <p className={styles.nameProduct}>{name} </p>
        <p className={styles.priceProduct}>{price} </p>
      </div>
    </Link>
  );
};

export default Item;
