import { Link } from "react-router-dom";
import Botones from "./Botones/Botones";
import styles from '../Nav/Nav.module.css';
import {  useState , useEffect } from "react";
import home from '../../assets/inicio.svg'
import atomo from '../../assets/atomo.svg'
import code from '../../assets/code.svg'

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
          <Link to="/MundoDev/articulos">Recursos</Link>
          <Link to="/MundoDev/info">Articulos</Link>
        </nav>


        <nav className={styles.navMobile}>
          <Link to="/MundoDev/">
            <img width='35px' src={home} alt="logo de home" />
          </Link>

          <Link to="/MundoDev/articulos">
          <img width='35px' src={code} alt="logo de code" />
          </Link>

          <Link to="/MundoDev/info">
           <img width='35px' src={atomo} alt="logo de atomo" />
          </Link>

        </nav>
        <Botones/>
      </header>
    )
}

export default Nav;