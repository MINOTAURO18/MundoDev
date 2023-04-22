import styles from '../Articulos/Articulos.module.css'
import fron1 from '../../assets/html.svg'
import fron2 from '../../assets/css.svg'
import fron3 from '../../assets/js.svg'
import fron4 from '../../assets/typ.svg'
import fron5 from '../../assets/dart.svg'
import fron6 from '../../assets/webassembly.svg'

const Articulos = () => {
    const fron = [
      {
        image: fron1,
        title:'HTML',
        text: 'Es el lenguaje de marcado estándar para crear páginas web. Se utiliza para definir la estructura y el contenido de una página web.'
      },

      {
        image: fron2,
        title:'CSS',
        text: 'Es un lenguaje de marcado estándar para definir la estructura y el contenido de una página web.'
      },

      {
        image: fron3,
        title:'Javascript',
        text: 'Es un lenguaje de marcado estándar para definir la estructura y el contenido de una página web.'
      },

      {
        image: fron4,
        title:'TypeScript',
        text: 'Es un lenguaje de marcado estándar para definir la estructura y el contenido de una página web.'
      },

      {
        image: fron5,
        title:'Dart',
        text: 'es un lenguaje de programación desarrollado por Google que se utiliza para crear aplicaciones web y móviles.'
      },

      {
        image: fron6,
        title:'WebAssembly',
        text: 'WebAssembly  es un lenguaje de bajo nivel que se utiliza para crear aplicaciones web de alto rendimiento, como videojuegos y aplicaciones multimedia.'
      }
    ];
  
    return(
      <main className={styles.articulos}>

        <section className={styles.intro}>
        
        <h2>Dinfruta de la mejor informacion</h2>
        <p>Disfruta del mejor contenido en esta sección, donde encontrarás las tecnologías más demandadas en el mundo de la tecnología de la información (TI). Además, encontrarás la documentación adecuada y sus respectivos enlaces para que puedas acceder a la información de manera rápida y fácil. Mantente actualizado en el mundo de la tecnología y aprovecha al máximo todas las oportunidades que ofrece.</p>
        </section>

        <section className={styles.fron}>
          <h2>lenguajes del frontend</h2>
          <div className={styles.tecnoFron}>

            {
              fron.map((item, index) => {
                return(
                  <div className={styles.fronItem} key={index}>
                    <img width='100px' src={item.image} alt={item.title} />
                    <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    </div>
                    <div>Info</div>
                  </div>
                )
              })
            }

          </div>

        </section>


      </main>
    )
}

export default Articulos;