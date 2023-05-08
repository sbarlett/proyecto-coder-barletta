import { Link } from "react-router-dom";
import { CardWidget } from "../CardWidget/CardWidget";
import styles from "./styles/navbar.module.css";

export const NavBar = () => {
  return (
    <>
      <header className={styles.containerHeader}>
        <Link className={styles.logo} to={`/`}>
          <img src="../assets/sb.png" alt="Logo Icon" />
        </Link>

        <nav className={styles.navBar}>
          <ul>
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li>
              <Link to={`/category/3`}>Mac</Link>
            </li>
            <li>
              <Link to={`/category/2`}>SmartPhones</Link>
            </li>
            <li>
              <Link to={`/category/1`}>Airpods</Link>
            </li>
          </ul>
        </nav>

        <CardWidget />
      </header>
      <hr className={styles.lineSlim} />
    </>
  );
};
