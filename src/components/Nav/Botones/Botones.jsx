import { Link } from "react-router-dom";

import styles from '../Botones/Botones.module.css'
const Botones = () => {
    return(
      <div className={styles.btn}>
        <Link to='/MundoDev/formulario'>
          <div>ingresar</div>
        </Link>

       

        
      </div>
    )
}

export default Botones;