import styles from '../Inicio/Inicio.module.css'
const Inicio = () => {
    return(
      <section className={styles.inicio}>
        <article className={styles.bloqueOne}>
          <h1><span>MundoDev</span> tu fuente de información mas confiable</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptas in nam obcaecati odio labore </p>
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
      <h4><span>></span> Install https://MundoDev/insatll.sh | sh</h4>
      <h4><span>$</span> curl -L https://fly.io/install.sh | sh</h4>
      <h4 className={styles.eli}>vacio</h4>
      <h4><span>></span> Ship a Docker image</h4>
      <h4><span>$</span> MundoDevtl deploy</h4>
      <h4 className={styles.eli}>vacio</h4>
      <h4><span>></span> Run ir on three Continents</h4>
      <h4><span>$</span> MundoDevtl regions add ams hkg sjc</h4>
    </div>

  </div>
      </section>
    )
}

export default Inicio;