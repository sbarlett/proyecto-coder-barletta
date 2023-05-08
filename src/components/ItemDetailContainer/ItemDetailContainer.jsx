import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../service/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    const newDoc = doc(db, "products", idItem);

    getDoc(newDoc)
      .then((res) => {
        const data = res.data();
        const newProduct = { id: res.id, ...data };
        setProduct(newProduct);
      })
      .catch((err) => console.log(err));
  }, [idItem]);

  return <ItemDetail {...product} />;
};
