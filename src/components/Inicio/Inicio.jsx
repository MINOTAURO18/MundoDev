import styles from '../Inicio/Inicio.module.css'
import mapa from '../../assets/mapa.webp'
import img0 from '../../assets/python.svg'
import img1 from '../../assets/js.svg'
import img2 from '../../assets/django.svg'
import img3 from '../../assets/react.svg'
import img4 from '../../assets/node.svg'
import img5 from '../../assets/psql.svg'
import img6 from '../../assets/rust.svg'
import img7 from '../../assets/docker.svg'
import img8 from '../../assets/typ.svg'
import img9 from '../../assets/crystal.svg'
import img10 from '../../assets/redux.svg'
import img11 from '../../assets/sass.svg'
import img12 from '../../assets/github.svg'
import img13 from '../../assets/instagram.svg'
import img14 from '../../assets/linkedin.svg'
import img15 from '../../assets/Twiter.svg'
import { Link } from 'react-router-dom'
const Inicio = () => {

  const tecnologias = [img0,img9,img10,img11, img1, img2, img3, img4, img5, img6, img7, img8];

  const redes = [img12,img13,img14,img15]


    return(
  <main>  
      <section className={styles.inicio}>
        <article className={styles.bloqueOne}>
          <h1><span>MundoDev</span> tu fuente de información mas confiable</h1>
          <p>en MundoDev se pueden encontrar recursos y artículos sobre una amplia variedad de lenguajes de programación y tecnologías.  </p>
          <a href="#">Explora Ya</a>
        </article>

  <div className={styles.padre}>
    <div className={styles.numeros}>
      <h4>1</h4>
      <h4>2</h4>
      <h4>3</h4>
      <h4>4</h4>
      <h4>5</h4>
      <h4>6</h4>
      <h4>7</h4>
      <h4>8</h4>
    </div>

    <div className={styles.code}>
      <h4><span>~</span> Install https://MundoDev/insatll.sh | sh</h4>
      <h4><span className={styles.dolar}>$</span> curl -L https://minotauro18.io/MundoDev/.sh | sh</h4>
      <h4 className={styles.eli}>vacio</h4>
      <h4><span>~</span> Ship a Docker image</h4>
      <h4><span className={styles.dolar}>$</span> MundoDevtl deploy</h4>
      <h4 className={styles.eli}>vacio</h4>
      <h4><span>~</span> Run ir on three Continents</h4>
      <h4><span className={styles.dolar}>$</span> MundoDevtl regions add ams hkg sjc</h4> 
    </div>

  </div>


  </section>



  <section className={styles.sobre}>
    <div className={styles.sobreN}>
    <h3>Distribuidores de Hardware</h3>
    <h2>Quienes somos</h2>
    <p>Nosotros somos una empresa especializada en la venta de cursos y hardware provenientes de diversas partes del mundo. Nos enfocamos en brindar soluciones y productos de calidad a nuestros clientes, con el objetivo de satisfacer sus necesidades y superar sus expectativas. Ya sea que estén buscando ampliar su conocimiento en un tema específico o adquirir equipos de última generación, estamos comprometidos en ofrecerles las mejores opciones y un servicio excepcional.</p>
     
    </div>

    <div className={styles.mapa}>
      <img src={mapa} alt="mapa" />

    </div>

  </section>


  <section className={styles.servicios}> 

    <div className={styles.cards}>

      <div className={styles.card}>
        <h3>CARACTERISTICAS</h3>
        <h2>Clústeres de PostgreSQL</h2>
        <p>Inicie clústeres de PostgreSQL de alta disponibilidad con un solo comando y una generosa capa gratuita. Crea réplicas de lectura en diferentes ciudades.</p>
        <Link to='/MundoDev/articulos'>
        <div>Leer más</div>
        </Link>
      </div>

      <div className={styles.card2}>
        <h3>FAVORITOS</h3>
        <span>
          <h2>CPU, memoria y almacenamiento al alcance de la mano</h2>
          <p>Proporcione exactamente lo que necesita para que sus aplicaciones funcionen. Paga solo por lo que usas.</p>
        </span>

        <span>
          <h2>Métricas y Alertas</h2>
          <p>La fontanería que necesitas para dormir por la noche. Bonitos gráficos para el café de la mañana.</p>
        </span>
      </div>

      <div className={styles.card3}>
        <h3>Más</h3>
      <span>
          <h2>Baterías incluidas Redes</h2>
          <p>Redes privadas de configuración cero y equilibrio de carga global.</p>
        </span>

        <span>
          <h2>SSL a cualquier escala</h2>
          <p>Agregue certificados para sus propios fines o un millón para sus clientes.</p>
        </span>

      </div>

    </div>

  </section>


  <section className={styles.tecno}> 

    <div className={styles.sobreTecno}>
      <h3>usamos los mejor</h3>
      <h2>Usa la tecnología que amas</h2>
      <p>en MundoDev puedes usar y aprender las tenconologias que mas te gustan</p>
      <Link to='/MundoDev/articulos'>
      <div>
        Leer mas 
      </div>
      </Link>
    </div>

    <div className={styles.tecno2}>

      {
        tecnologias.map((img, index) => {
          return(
            <div className={styles.tecnoImg} key={index}>
              <img width='65px' src={img} alt="tecnologia" />
            </div>
          )
        })
      }

    </div>

  </section>


  <section className={styles.footer}>

    <div className={styles.footer2}>

      <div>
        <h3>Contacto</h3>
        <span>Github</span>
        <span>Comunidad</span>
        <span>Linkedin</span>
      </div>

      <div>
        <h3>Contacto</h3>
        <span>Github</span>
        <span>Comunidad</span>
        <span>Linkedin</span>
      </div>

      <div>
        <h3>Compañia</h3>
        <span>Acerca de</span>
        <span>Precios</span>
        <span>Trabajos</span>
      </div>

      <div>
        <h3>Articulos</h3>
        <span>Blog</span>
        <span>Envios</span>
        <span>Rebajas</span>
      </div>

      <span>
        <h2>MundoDev</h2>
      </span>

    </div>

    <div className={styles.redes}>

      <span>Hecho por JAMY</span>

        {
          redes.map((img, index) => {
            return(
              <div className={styles.redesImg} key={index}>
                <img width='30px' src={img} alt="redes" />
              </div>
            )
          }) 
        }
        

    </div>

  </section>
  </main>
    )
}

export default Inicio;