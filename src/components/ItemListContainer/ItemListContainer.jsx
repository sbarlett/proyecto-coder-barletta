import styles from "./styles/list-item.module.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles.listContainer}>
      <p>{greeting}</p>
    </div>
  );
};
