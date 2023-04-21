import styles from '../Inicio/Inicio.module.css'
import mapa from '../../assets/mapa.webp'
const Inicio = () => {
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
  </main>
    )
}

export default Inicio;