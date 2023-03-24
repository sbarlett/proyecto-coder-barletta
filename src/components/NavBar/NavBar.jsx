import { Link } from "react-router-dom";
import { CardWidget } from "../CardWidget/CardWidget";
import styles from "./styles/navbar.module.css";

export const NavBar = () => {
  return (
    <header>
      <span>
        <img
          className={styles.logo}
          src="src/assets/logo.jpg"
          alt="Moto logo"
        />
      </span>

      <nav>
        <ul>
          <li>
            <img
              className={styles.icons}
              src="src/assets/Snaked.png"
              alt="Street Logo"
            />
            <Link to="/street">Street</Link>
          </li>
          <li>
            <img
              className={styles.icons}
              src="src/assets/deportiva.png"
              alt="Sport Logo"
            />
            <Link to="/sport">Sport</Link>
          </li>
          <li>
            <img
              className={styles.icons}
              src="src/assets/scooter.png"
              alt="Scooter Logo"
            />
            <Link to="/scooter">Scooter</Link>
          </li>
          <li>
            <img
              className={styles.icons}
              src="src/assets/cross.png"
              alt="Motocross Logo"
            />
            <Link to="/motocross">Motocross</Link>
          </li>
        </ul>
      </nav>
      <CardWidget shoppingNumer="0" />
    </header>
  );
};
