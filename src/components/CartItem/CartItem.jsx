import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import styles from "./styles/cartitem.module.css";

const CartItem = ({ item, count, img }) => {
  const { deleteProdCarrito } = useContext(CarritoContext);

  return (
    <>
      <div className={styles.shopDetail}>
        <div className={styles.imageDetail}>
          <img src={item.img} alt="Iconos imagen" />
        </div>

        <div>
          <h3 className={styles.titleProduct}> {item.name} </h3>
        </div>
        <div className={styles.containerDetail}>
          <p className={styles.textDetail}>x{count} </p>
        </div>
        <div>
          <p className={styles.textDetail}>
            ${Number(item.price).toLocaleString("es-ES")}
          </p>
        </div>
        <div>
          <button
            className={styles.buttonDelete}
            onClick={() => deleteProdCarrito(item.id)}
          >
            <img
              className={styles.deleteIcon}
              src="../assets/eliminar.png"
              alt="Delete Icon"
            />
          </button>
        </div>
      </div>
      <hr className={styles.lineSlim} />
    </>
  );
};

export default CartItem;
