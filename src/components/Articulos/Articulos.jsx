import styles from '../Articulos/Articulos.module.css'
import fron1 from '../../assets/html.svg'
import fron2 from '../../assets/css.svg'
import fron3 from '../../assets/js.svg'
import fron4 from '../../assets/typ.svg'
import fron5 from '../../assets/dart.svg'
import fron6 from '../../assets/webassembly.svg'

import frame1 from '../../assets/react.svg' 
import frame2 from '../../assets/angular.svg' 
import frame3 from '../../assets/vue.svg' 
import frame4 from '../../assets/bootstrap.svg' 
import frame5 from '../../assets/bulma.svg' 
import frame6 from '../../assets/dojo.svg' 

import back1 from '../../assets/python.svg' 
import back2 from '../../assets/java.svg' 
import back3 from '../../assets/c.svg' 
import back4 from '../../assets/ruby.svg' 
import back5 from '../../assets/node.svg' 
import back6 from '../../assets/kotlin.svg' 



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


    const frame = [
      {
        image: frame1,
        title:'React',
        text: 'biblioteca de JavaScript desarrollada por Facebook que se utiliza para crear interfaces de usuario interactivas y dinámicas'
      },

      {
        image: frame2,
        title:'Angular',
        text: 'Angular es un framework de desarrollo de aplicaciones web de código abierto desarrollado por Google.'
      },

      {
        image: frame3,
        title:'Vue',
        text: 'es un framework de JavaScript utilizado para construir interfaces de usuario y aplicaciones web de una sola página (SPA). '
      },

      {
        image: frame4,
        title:'Bootstrap',
        text: 'Bootstrap es un framework de diseño web desarrollado por Twitter. Se utiliza para construir rápidamente sitios web y aplicaciones web '
      },

      {
        image: frame5,
        title:'Bulma',
        text: 'Bulma es un framework de diseño web basado en CSS que se utiliza para construir sitios web y aplicaciones web.'
      },

      {
        image: frame6,
        title:'Dojo Toolkit',
        text: 'es un framework de JavaScript utilizado para la creación de aplicaciones web complejas y ricas en funcionalidades. '
      }
    ]

    const back = [
      {
        image: back1,
        title:'Python',
        text: 'Es un lenguaje de programación de alto nivel que se utiliza en diferentes áreas, como la ciencia de datos, la inteligencia artificial y el desarrollo web.'
      },

      {
        image: back2,
        title:'Java',
        text: ' Es un lenguaje de programación de alto nivel orientado a objetos, con una sintaxis clara y sencilla.'
      },

      {
        image: back3,
        title:'C++',
        text: 'C++ es un lenguaje de programación de alto nivel que se utiliza principalmente para desarrollar software de sistemas y aplicaciones de alto rendimiento.'
      },

      {
        image: back4,
        title:'Ruby',
        text: 'Es un lenguaje de programación de alto nivel y orientado a objetos que se utiliza principalmente en el desarrollo web.'
      },

      {
        image: back5,
        title:'Node.js',
        text: 'Node.js es un entorno de ejecución de JavaScript del lado del servidor. Fue creado en 2009 por Ryan Dahl y se basa en el motor de JavaScript V8 '
      },

      {
        image: back6,
        title:'Kotlin',
        text: 'Es un lenguaje de programación de alto nivel que se ejecuta en la máquina virtual de Java.'
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
                    <div className={styles.info}><a href="#">Info</a></div>
                  </div>
                )
              })
            }

          </div>

        </section>


        <section className={styles.frame}>
        <h2>Frameworks y Librerias</h2>

        <div className={styles.tecnoFron}>
            {
              frame.map((fra, index) => {
                return(
                  <div className={styles.frameItem} key={index}>
                    <img width='100px' src={fra.image} alt={fra.title} />
                    <div>
                    <h3>{fra.title}</h3>
                    <p>{fra.text}</p>
                    </div>
                    <div className={styles.info}><a href="#">Info</a></div>
                  </div>
                )
              })
            }
          </div>

        </section>



        <section className={styles.fron}>
        <h2>Lenguajes del backend</h2>
          <div className={styles.tecnoFron}>
            {
              back.map((back, index) => {
                return(
                  <div className={styles.frameItem} key={index}>
                    <img width='100px' src={back.image} alt={back.title} />
                    <div>
                    <h3>{back.title}</h3>
                    <p>{back.text}</p>
                    </div>
                    <div className={styles.info}><a href="#">Info</a></div>
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