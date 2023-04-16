import styles from './styles/item-detail.module.css';

const ItemDetail = ({price, name, img}) => {
    return (
      <div className={styles.contenedorItem}>
        <div className={styles.productDetail}>
          <h2 className={styles.productName}>{name}</h2>
          <p className={styles.productDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste reiciendis tempora unde! Quam commodi esse dicta odit nobis, enim, accusamus corrupti veritatis, excepturi aliquam laudantium? Veritatis ex sapiente deserunt.</p>
          <p className={styles.productPrice}>{price} </p>
        </div>
          <img src= {img} alt= {name} />
      </div>
    )
  }
  
  export default ItemDetail