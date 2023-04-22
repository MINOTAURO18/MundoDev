import { Link } from "react-router-dom";
import Botones from "./Botones/Botones";
import styles from '../Nav/Nav.module.css';
import {  useState , useEffect } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return(
      <header className={scrolled ? styles.scrolled : ''}>
        <div className={styles.logo}>
          <h2>MundoDev</h2>
        </div>
        <nav className={styles.nav}>
          <Link to="/MundoDev/">Inicio</Link>
          <Link to="/MundoDev/articulos">Articulos</Link>
          <Link to="/MundoDev/info">Extras</Link>
          <Link to="/MundoDev/Contacto">Contacto</Link>
        </nav>

        <Botones/>
      </header>
    )
}

export default Nav;