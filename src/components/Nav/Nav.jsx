import { Link } from "react-router-dom";
import Botones from "./Botones/Botones";
import styles from '../Nav/Nav.module.css';

const Nav = () => {
    return(
      <header className={styles.header}>
        <div className={styles.logo}>
          <h2>MundoDev</h2>
        </div>
        <nav className={styles.nav}>
          <Link to="/">Inicio</Link>
          <Link to="/articulos">articulos</Link>
          <Link to="/info">Info</Link>
          <Link to="/Contacto">Contacto</Link>
        </nav>

        <Botones/>
      </header>
    )
}

export default Nav;