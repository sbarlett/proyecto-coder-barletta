import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllProducts, getProductsCategory } from "../../utils/getProducts";
import ItemList from "../ItemList/ItemList";
import styles from "./styles/list-item.module.css";
import { Banner } from "../Banner/Banner";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  const { idCategory } = useParams();

  useEffect(() => {
    const getListProducts = idCategory ? getProductsCategory : getAllProducts;
    getListProducts(idCategory)
      .then((res) => setProducts(res))
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
        <Banner/>
          <div className={styles.listContainer}>
            <ItemList product={products} />
          </div>
        </>
      )
      }
    </>
  );
};
