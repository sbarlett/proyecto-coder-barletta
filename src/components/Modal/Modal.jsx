import { useState } from "react";
import styles from "./styles/modal.module.css";
import { Link } from "react-router-dom";

export const Modal = ({ img, name, price, count, modalActive }) => {
  const [modal, setModal] = useState(modalActive);

  const handleModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className={modal ? styles.modal : styles.modalHidden}>
        <div className={styles.modalHeader}>
          <img src="../assets/check.png" alt="Check Icon" />
          <div className={styles.modalMessagge}>
            <p>Producto añadido correctamente a su carrito de compra</p>
            <img
              onClick={handleModal}
              src="../assets/cruz.png"
              alt="Exit Icon"
            />
          </div>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.imageModal}>
            <img src={img} alt={name} />
          </div>
          <div className={styles.modalDescription}>
            <p className={styles.modalName}>{name}</p>
            <div className={styles.containerPrice}>
              <span>x</span>
              <p className={styles.modalCount}>{count}</p>
              <p className={styles.modalPrice}>{`$${Number(
                price
              ).toLocaleString("es-ES")} `}</p>
            </div>
          </div>
        </div>
        <div className={styles.modalButtons}>
          <Link className={styles.linkCompra} to="/cart">
            Ir a pagar
          </Link>
          <Link className={styles.linkCompra} to="/">
            Continuar comprando
          </Link>
        </div>
      </div>
    </>
  );
};
