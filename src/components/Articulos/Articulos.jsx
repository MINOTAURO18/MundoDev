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

import frameB1 from '../../assets/django.svg' 
import frameB2 from '../../assets/express.svg' 
import frameB3 from '../../assets/flask.svg' 
import frameB4 from '../../assets/laravel.svg' 
import frameB5 from '../../assets/rails.svg' 
import frameB6 from '../../assets/sprint.svg' 



const Articulos = () => {
    const fron = [
      {
        image: fron1,
        title:'HTML',
        text: 'Es el lenguaje de marcado estándar para crear páginas web. Se utiliza para definir la estructura y el contenido de una página web.',
        url:'https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure'
      },

      {
        image: fron2,
        title:'CSS',
        text: 'Es un lenguaje de marcado estándar para definir la estructura y el contenido de una página web.',
        url:'https://developer.mozilla.org/es/docs/Web/CSS'
      },

      {
        image: fron3,
        title:'Javascript',
        text: 'Es un lenguaje de marcado estándar para definir la estructura y el contenido de una página web.',
        url:'https://developer.mozilla.org/es/docs/Web/JavaScript'
      },

      {
        image: fron4,
        title:'TypeScript',
        text: 'Es un lenguaje de marcado estándar para definir la estructura y el contenido de una página web.',
        url:'https://www.typescriptlang.org/docs/'
      },

      {
        image: fron5,
        title:'Dart',
        text: 'es un lenguaje de programación desarrollado por Google que se utiliza para crear aplicaciones web y móviles.',
        url:'https://dart.dev/guides'
      },

      {
        image: fron6,
        title:'WebAssembly',
        text: 'WebAssembly  es un lenguaje de bajo nivel que se utiliza para crear aplicaciones web de alto rendimiento, como videojuegos y aplicaciones multimedia.',
        url:'https://developer.mozilla.org/es/docs/WebAssembly'
      }
    ];


    const frame = [
      {
        image: frame1,
        title:'React',
        text: 'biblioteca de JavaScript desarrollada por Facebook que se utiliza para crear interfaces de usuario interactivas y dinámicas',
        url:'https://es.legacy.reactjs.org/docs/getting-started.html'
      },

      {
        image: frame2,
        title:'Angular',
        text: 'Angular es un framework de desarrollo de aplicaciones web de código abierto desarrollado por Google.',
        url:'https://docs.angular.lat/docs'
      },

      {
        image: frame3,
        title:'Vue',
        text: 'es un framework de JavaScript utilizado para construir interfaces de usuario y aplicaciones web de una sola página (SPA). ',
        url:'https://es.vuejs.org/v2/guide/'
      },

      {
        image: frame4,
        title:'Bootstrap',
        text: 'Bootstrap es un framework de diseño web desarrollado por Twitter. Se utiliza para construir rápidamente sitios web y aplicaciones web ',
        url:'https://getbootstrap.esdocu.com/'
      },

      {
        image: frame5,
        title:'Bulma',
        text: 'Bulma es un framework de diseño web basado en CSS que se utiliza para construir sitios web y aplicaciones web.',
        url:'https://bulma.io/documentation/'
      },

      {
        image: frame6,
        title:'Dojo Toolkit',
        text: 'es un framework de JavaScript utilizado para la creación de aplicaciones web complejas y ricas en funcionalidades. ',
        url:'https://dojotoolkit.org/documentation/'
      }
    ]

    const back = [
      {
        image: back1,
        title:'Python',
        text: 'Es un lenguaje de programación de alto nivel que se utiliza en diferentes áreas, como la ciencia de datos, la inteligencia artificial y el desarrollo web.',
        url:'https://docs.python.org/es/3/'
      },

      {
        image: back2,
        title:'Java',
        text: ' Es un lenguaje de programación de alto nivel orientado a objetos, con una sintaxis clara y sencilla.',
        url:'https://docs.oracle.com/en/java/'
      },

      {
        image: back3,
        title:'C++',
        text: 'C++ es un lenguaje de programación de alto nivel que se utiliza principalmente para desarrollar software de sistemas y aplicaciones de alto rendimiento.',
        url:'https://learn.microsoft.com/es-es/cpp/cpp/?view=msvc-170'
      },

      {
        image: back4,
        title:'Ruby',
        text: 'Es un lenguaje de programación de alto nivel y orientado a objetos que se utiliza principalmente en el desarrollo web.',
        url:'https://www.ruby-lang.org/es/documentation/'
      },

      {
        image: back5,
        title:'Node.js',
        text: 'Node.js es un entorno de ejecución de JavaScript del lado del servidor. Fue creado en 2009 por Ryan Dahl y se basa en el motor de JavaScript V8 ',
        url:'https://nodejs.org/es/docs'
      },

      {
        image: back6,
        title:'Kotlin',
        text: 'Es un lenguaje de programación de alto nivel que se ejecuta en la máquina virtual de Java.',
        url:'https://kotlinlang.org/docs/home.html'
      }
    ];

    const frameB = [
      {
        image: frameB1,
        title:'Django',
        text: ' es un framework de Python que se centra en la simplicidad y la rapidez de desarrollo.',
        url:'https://docs.djangoproject.com/es/4.1/'
      },

      {
        image: frameB2,
        title:'Express',
        text: 'es un framework de JavaScript que se utiliza para crear aplicaciones web y APIs. ',
        url:'https://expressjs.com/es/'
      },

      {
        image: frameB3,
        title:'Flask',
        text: 'en un framework simple y ágil. Es un micro-framework, un único archivo, un grupo de módulos. En vez de partir de un esqueleto o estructura.',
        url:'https://flask-es.readthedocs.io/'
      },

      {
        image: frameB4,
        title:'Laravel',
        text: 'es un framework de PHP que se utiliza para crear aplicaciones web y APIs. Es muy popular debido a su facilidad de uso. ',
        url:'https://laravel.com/docs/10.x/readme'
      },

      {
        image: frameB5,
        title:'Rails',
        text: 'es un framework de Ruby que se centra en la simplicidad y la rapidez de desarrollo. ',
        url:'https://guides.rubyonrails.org/'
      },

      {
        image: frameB6,
        title:'Sprint',
        text: 'es un framework de Java que permite crear aplicaciones de manera rápida y sencilla.',
        url:'https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/'
      }
    ];



  
    return(
      <main className={styles.articulos}>

        <section className={styles.intro}>
        
        <h2>Dinfruta de la mejor informacion</h2>
        <p>Disfruta del mejor contenido en esta sección, donde encontrarás las tecnologías más demandadas en el mundo de la tecnología de la información (TI). Además, encontrarás la documentación adecuada y sus respectivos enlaces para que puedas acceder a la información de manera rápida y fácil. Mantente actualizado en el mundo de la tecnología y aprovecha al máximo todas las oportunidades que ofrece.</p>
        </section>

        <section className={styles.fron}>
          <h2>Lenguajes Frontend</h2>
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
                    <div className={styles.info}><a target='_blanck' href={item.url}>Info</a></div>
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
                    <div className={styles.info}><a target='_blanck' href={fra.url}>Info</a></div>
                  </div>
                )
              })
            }
          </div>

        </section>



        <section className={styles.fron}>
        <h2>Lenguajes backend</h2>
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
                    <div className={styles.info}><a target='_blanck' href={back.url}>Info</a></div>
                  </div>
                )
              })
            }
          </div>  

        </section>


        <section className={styles.frame}>
          <h2>Frameworks y Librerias Backend</h2>

          <div className={styles.tecnoFron}>
            {
              frameB.map((frameB, index) => {
                return(
                  <div className={styles.frameItem} key={index}>
                    <img width='100px' src={frameB.image} alt={frameB.title} />
                    <div>
                    <h3>{frameB.title}</h3>
                    <p>{frameB.text}</p>
                    </div>
                    <div className={styles.info}><a target='_blanck' href={frameB.url}>Info</a></div>
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