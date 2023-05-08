import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import styles from "./styles/list-item.module.css";
import { Banner } from "../Banner/Banner";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../service/firebase/config";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const products = idCategory
      ? query(collection(db, "products"), where("category", "==", idCategory))
      : collection(db, "products");

    getDocs(products)
      .then((res) => {
        const newProducts = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(newProducts);
      })
      .catch((err) => console.error(err));
  }, [idCategory]);

  return (
    <>
      {idCategory ? (
        <div className={styles.listContainer}>
          <ItemList product={products} />
        </div>
      ) : (
        <>
          <Banner />
          <div className={styles.questionPubliciti}>
            <h1>
              Live a magical experience with <br /> your devices.
            </h1>
          </div>
          <div className={styles.listContainer}>
            <ItemList product={products} />
          </div>
        </>
      )}
    </>
  );
};
