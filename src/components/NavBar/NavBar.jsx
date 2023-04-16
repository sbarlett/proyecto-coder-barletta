import { Link } from "react-router-dom";
import { CardWidget } from "../CardWidget/CardWidget";
import styles from "./styles/navbar.module.css";

export const NavBar = () => {
  return (
    <header className={styles.containerHeader}>
      <Link to={`/`}>
        <span>
          <img
            className={styles.logo}
            src="../assets/logo.jpg"
            alt="Moto logo"
          />
        </span>
      </Link>

      <nav>
        <ul className={styles.navBar}>
          <li>
            <Link to={`/category/3`}>
              <img
                className={styles.icons}
                src="../assets/Snaked.png"
                alt="Street Logo"
              />
              Street
            </Link>
          </li>
          <li>
            <Link to={`/category/2`}>
              <img
                className={styles.icons}
                src="../assets/deportiva.png"
                alt="Sport Logo"
              />
              Sport
            </Link>
          </li>
          <li>
            <Link to={`/category/1`}>
              <img
                className={styles.icons}
                src="../assets/cross.png"
                alt="Motocross Logo"
              />
              Motocross
            </Link>
          </li>
        </ul>
      </nav>
      <CardWidget shoppingNumer="0" />
    </header>
  );
};
