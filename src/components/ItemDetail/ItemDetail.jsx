import { useContext, useState } from "react";
import styles from "./styles/item-detail.module.css";
import { CarritoContext } from "../../context/CarritoContext";
import { ItemCount } from "../ItemCount/ItemCount";
import { Modal } from "../Modal/Modal";

const ItemDetail = ({ id, price, name, img, description, stock }) => {
  const [addProducts, setAddProducts] = useState(0);
  const [modal, setModal] = useState(false);

  const { carrito, addProdCarrito } = useContext(CarritoContext);

  const handleCount = (count) => {
    setAddProducts(count);
    setModal(true);
    const product = {
      id,
      name,
      price,
      img,
    };
    addProdCarrito(product, count);
  };

  return (
    <div className={styles.contenedorItem}>
      <div className={styles.productDetail}>
        <div className={styles.descriptionDetail}>
          <h2 className={styles.productName}>{name}</h2>
          <p className={styles.productPrice}>
            {`$${Number(price).toLocaleString("es-ES")} `}
          </p>
          <hr className={styles.lineSlim} />
          <p className={styles.productDescription}>{description}</p>
          <hr className={styles.lineSlim} />

          <ItemCount initial={1} stock={stock} addProducts={handleCount} />
        </div>
        <div className={styles.imageDetail}>
          <img src={img} alt={name} />
        </div>
        {addProducts > 0 && modal
          ? carrito.map((prod) => {
              if (prod.item.id === id) {
                return (
                  <Modal
                    key={prod.item.id}
                    modalActive={modal}
                    img={prod.item.img}
                    name={prod.item.name}
                    price={prod.item.price}
                    count={prod.count}
                  />
                );
              }
            })
          : null}
      </div>
    </div>
  );
};

export default ItemDetail;
