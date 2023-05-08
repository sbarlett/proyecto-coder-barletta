import { useContext, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../service/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { Input } from "../Input/Input";
import styles from "./styles/checkout.module.css";

const Checkout = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !lastName || !email || !emailConfirmation || !phone) {
      setError("Campo obligatorio");
      return;
    }
    if (email !== emailConfirmation) {
      setError("Las direcciones de email no coinciden");
      return;
    }

    const order = {
      items: carrito.map((prod) => ({
        key: prod.item.id,
        id: prod.item.id,
        name: prod.item.name,
        count: prod.count,
      })),
      total: carrito.reduce(
        (total, prod) => total + prod.item.price * prod.count,
        0
      ),
      name,
      lastName,
      phone,
      email,
    };

    addDoc(collection(db, "orders"), order)
      .then((docRef) => {
        setOrderId(docRef.id);
        vaciarCarrito();
        setName("");
        setLastName("");
        setEmail("");
        setEmail("");
        setEmailConfirmation("");
        setPhone("");
      })
      .catch((err) => {
        console.error(err);
        setError("No pudiste crear la orden");
      });
  };

  return (
    <>
      <div className={styles.containerCheckout}>
        <div className={styles.titleCheckout}>
          <h1>Compra Rápida</h1>
        </div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          {carrito.map((prod) => (
            <>
              <div key={prod.item.id}>
                <p>
                  {prod.item.name} x {prod.count}
                </p>
                <p>Total: ${Number(prod.item.price).toLocaleString("es-ES")}</p>
              </div>
              <hr />
            </>
          ))}
          <div className={styles.personalData}>
            Completar datos
            <img src="../assets/persona.png" alt="Data Icon" />
          </div>
          <div className={styles.inputStyle}>
            <label htmlFor="name">Nombre</label>
            <Input
              type="text"
              placeholder="Escriba su Nombre..."
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.inputStyle}>
            <label htmlFor="lastName">Apellido</label>
            <Input
              type="text"
              placeholder="Escriba su Apellido..."
              value={lastName}
              handleChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className={styles.inputStyle}>
            <label htmlFor="email">Email</label>
            <Input
              type="text"
              placeholder="Direccion de Email."
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputStyle}>
            <label htmlFor="emailConfirmation"> Repita su Email</label>
            <Input
              type="text"
              placeholder="Repita su direccion de Email."
              value={emailConfirmation}
              handleChange={(e) => setEmailConfirmation(e.target.value)}
            />
          </div>

          <div className={styles.inputStyle}>
            <label htmlFor="phone">Celular </label>
            <Input
              type="text"
              placeholder="Telefono"
              value={phone}
              handleChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button className={styles.buttonShop} type="submit">
            Comprar ahora
          </button>
        </form>
      </div>
      {orderId && (
        <div className={styles.finalShop}>
          <p>¡Gracias por tu compra! Tu numero de orden es {orderId}</p>
        </div>
      )}
    </>
  );
};

export default Checkout;
