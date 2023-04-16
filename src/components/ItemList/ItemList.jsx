import React from "react";
import Item from "../Item/Item";
import styles from './styles/product-list.module.css';


const ItemList = ({ product }) => {
  return (
    <>
      <div className={styles.productList}>
        {product.map((prod) => {
          return <Item key={prod.id} {...prod} />;
        })}
      </div>
    </>
  );
};

export default ItemList;
