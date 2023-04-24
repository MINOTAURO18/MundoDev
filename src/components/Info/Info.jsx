import { useEffect } from 'react';
import styles from '../Info/Info.module.css'
import { useState } from 'react';
const Info = () => {
    const info = [
        {id:0,
            text :'El Centro de Investigación Langley de la NASA ha desarrollado dos herramientas para el diseño y análisis de revestimientos acústicos de motores turboventiladores. El primero es un enfoque estadístico para el diseño y evaluación de líneas de banda ancha. El segundo es un software gráfico para diseñar y analizar canales resonantes en revestimientos acústicos.'},

       {id:1, text: 'Los innovadores del Centro Espacial Johnson de la NASA han desarrollado un sistema de encendido de bobina en bujía para sistemas integrados de propulsión de ambiente de vacío térmico de oxígeno líquido (LOX)/metano líquido (LCH4) que operan en un ambiente de vacío térmico. La innovación ayudará a solucionar los problemas de descarga de corona y reducirá la masa total. La descarga de corona representa una región local que rodea un conductor de alto voltaje donde el aire ha sufrido una ruptura eléctrica y se ha vuelto conductor debido a la ionización, lo que permite que una carga se escape del conductor y cause un posible mal funcionamiento. La NASA trabajó con proveedores comerciales para modificar los sistemas de bujías automotrices de bobina en bujía listos para usar para usar con los encendedores LOX/LCH4.'},

        {id:2, text:'Esta tecnología es un nuevo tipo de diseño de pilones de aviones para el control del ruido. Un pilón conecta el motor al fuselaje de un avión. Este diseño utiliza el aire que pasa a través del pilón para interrumpir activamente la corriente de escape del motor a reacción después de que sale del motor, interrumpiendo y redistribuyendo las fuentes distribuidas axial y azimutal de ruido a reacción de la aeronave.'},

        {id:3, text:'A raíz de los desarrollos recientes que han reducido las contribuciones del ruido de los ventiladores y los jets al ruido general de los motores a reacción, los diseñadores de aeronaves están dirigiendo su atención hacia la reducción del ruido del núcleo del motor. Los innovadores de los Centros de Investigación Glenn y Langley de la NASA se están uniendo para desarrollar un revestimiento acústico compacto y liviano basado en materiales compuestos de matriz cerámica (CMC) de óxido/óxido. El revestimiento acústico CMC tiene canales de profundidad variable ajustados para reducir el ruido de amplio espectro en los motores a reacción subsónicos. El diseño de esos canales también se ha centrado en estructuras que minimizan el grosor total del revestimiento.'},

        {id:4, text:'Los innovadores del centro de investigación Glenn de la NASA han desarrollado un neumático innovador, no neumático y compatible. Esta innovación, llamada Superelastic Tire, se desarrolló para futuras misiones a la Luna y Marte, pero es una alternativa viable a los neumáticos aquí en la Tierra. Esta tecnología representa la última evolución del Spring Tire que fue inventado por la NASA Glenn y Goodyear e inspirado en los neumáticos lunares Apollo.'},

        {id:5, text:'Los datos de presión precisos y confiables son fundamentales para monitorear la salud del motor para la operación segura y eficiente de los motores de alto rendimiento. Los innovadores del Centro de Investigación Glenn de la NASA han desarrollado un sistema único de sensor de presión y temperatura que proporciona datos in situ en entornos operativos hostiles como la combustión. Aunque los sensores de presión de SiC actuales pueden operar a 800 °C dentro de las cámaras de combustión.'},

        {id:6, text:'Los innovadores del Centro de Investigación Glenn de la NASA han desarrollado un sistema de sensor de presión capacitivo empaquetado de última generación que proporciona adquisición de datos dinámicos in situ en entornos operativos hostiles. Diseñado para monitorear el estado del motor turboventilador, este sensor de presión se puede colocar directamente en el motor para un análisis de datos en tiempo real de alta precisión. Otra característica única de este sistema de diseño simple es que puede equiparse con una antena para transmitir datos de forma inalámbrica. Esta tecnología de detección inteligente se ha sometido a pruebas exhaustivas en entornos extremos y se espera que desempeñe un papel clave en el desarrollo de un conjunto de sistemas de seguimiento y mantenimiento de última generación. Este importante sistema de sensor y empaque puede proporcionar datos más precisos, mejorar el rendimiento,'},

        {id:7, text:'El Centro de Investigación Langley de la NASA ha desarrollado un actuador piezocompuesto de bloqueo automático. La naturaleza de autobloqueo de esta invención permite actuadores piezoeléctricos que no requieren un consumo de energía constante. Entre otras aplicaciones, la invención es muy adecuada para su uso en superficies de control aerodinámico y entradas de motor.'},

        {id:8, text:'La NASA ha desarrollado un método novedoso para hacer visibles los cambios de densidad en el aire que provocan un cambio en el índice de refracción de un vehículo aéreo. Estos cambios de densidad incluyen ondas de choque, vórtices, gases de escape del motor y estelas. La determinación de la ubicación y la fuerza de las ondas de choque y los vórtices es fundamental para comprender el flujo alrededor de una aeronave. Estas características son lo suficientemente fuertes como para afectar el entorno en el que habita el vehículo: por ejemplo, pueden causar arrastre y/o producir ruidos no deseados. El investigador debe ser capaz de predecir y mitigar los efectos de estas características de flujo. Esta invención es una técnica de visualización robusta que permitirá la medición de las fuerzas y posiciones de las ondas de choque provocadas por vehículos supersónicos. La técnica es aplicable a todos los regímenes de vuelo, sin embargo,'},

        {id:9,text:'Los innovadores del Centro de Investigación Glenn de la NASA han desarrollado una superaleación a base de níquel utilizando elementos de aleación específicos para inhibir la deformación perjudicial a temperaturas superiores a 700 °C. El impulso por la eficiencia energética en la generación de energía y la propulsión sitúa el desarrollo de materiales de alto rendimiento a la vanguardia de la ciencia de los materiales. La eficiencia del motor de turbina y la reducción de las emisiones de carbono están directamente relacionadas con la temperatura de funcionamiento del motor. Con el aumento de las temperaturas, los materiales comienzan a deformarse plásticamente bajo carga, un proceso conocido como fluencia, que establece límites severos en el rendimiento. '},

        {id:10,text:'El Centro de Investigación Ames de la NASA ofrece bajo licencia su tecnología patentada de análisis y perfilado de superficies 3-D ShuttleSCAN. Desarrollado originalmente para la inspección crítica en tiempo real de los daños en las losetas de protección térmica del transbordador espacial, este sistema avanzado se puede utilizar para una amplia gama de aplicaciones comerciales, desde el control de calidad del producto hasta la navegación autónoma. Impulsado por el procesador integrado Surface Profiling and Characterization Engine (SPACE), ShuttleSCAN proporciona análisis en tiempo real de superficies que van desde las más pequeñas (como placas de circuitos) hasta las más grandes (como paneles o carreteras).'},

        {id:11,text:'El Centro de Investigación Langley de la NASA, en colaboración con Boeing y Lockheed Martin, ha desarrollado un nuevo revestimiento acústico externo para la reducción del ruido de los aviones. Si bien el revestimiento acústico se puede colocar en cualquier superficie externa de la aeronave, una aplicación atractiva es la reducción del ruido del rotor abierto. Los fabricantes de fuselajes están considerando motores de rotor abierto para futuros diseños de aeronaves, ya que proporcionan ahorros significativos de combustible. Sin embargo, los motores de rotor abierto no tienen góndola y, por lo tanto, no permiten el uso de revestimientos de góndola convencionales para reducir el ruido. Esta tecnología coloca estratégicamente revestimientos acústicos en la superficie externa de la aeronave para reducir el ruido del motor.'},

       {id:12, text: 'l Centro de Vuelo Espacial Marshall de la NASA desarrolló la antorcha láser de mano, diseñada para soldar y soldar metales, para reparar las boquillas de los motores de los transbordadores espaciales difíciles de alcanzar. Incorpora varios controles manuales y lentes cambiantes para permitir que el operador ajuste la potencia de salida de los láseres en tiempo real. Los controles y las lentes están diseñados para aumentar la precisión, la portabilidad y la maniobrabilidad en comparación con los láseres automatizados existentes y las técnicas de soldadura tradicionales como el gas inerte de tungsteno (TIG) y el gas inerte metálico (MIG). o sistemas de soldadura por arco de tungsteno y gas (GTAW). Los sensores de proximidad con interruptores de apagado automático también garantizan un alto nivel de seguridad para el usuario.'},

        {id:13,text:'El Centro de Investigación Langley de la NASA ha desarrollado una tecnología que se proyecta para extender el área de flujo laminar sobre configuraciones de vuelo supersónico al retrasar la transición del flujo de la capa límite del estado laminar al turbulento. Esto controla el flujo laminar sobre los componentes de la estructura del avión, incluidas las alas, el empenaje, las góndolas del motor y la región de la nariz del fuselaje de un avión. Se puede utilizar en combinación con muchas de las técnicas existentes para el control de flujo laminar pasivo y activo, pero es particularmente adecuado para un diseño de flujo laminar natural supersónico en virtud de evitar el espacio, el peso, la complejidad del sistema y las penalizaciones de mantenimiento asociadas con control de flujo laminar basado en succión.'},

        {id:14,text:'Se ha diseñado un revestimiento acústico de profundidad variable y baja resistencia para reducir el ruido de los aviones. La tecnología se puede utilizar como un revestimiento de góndola de motor convencional o en las superficies externas de una aeronave para reducir la dispersión acústica. En comparación con los revestimientos convencionales, la tecnología proporciona un mayor rendimiento acústico de banda ancha con menos resistencia. Los revestimientos convencionales utilizan una hoja frontal perforada como la parte más externa del revestimiento expuesta al flujo. La hoja frontal perforada tiene una resistencia mayor que una superficie lisa, pero es necesaria para reducir el ruido. La innovación propuesta reduce el área abierta de la lámina frontal y, por lo tanto, reduce el arrastre del revestimiento, sin comprometer el rendimiento acústico.'},

        {id:15,text:'Los innovadores del Centro de Investigación Glenn de la NASA han desarrollado un sistema de gestión térmica ligero y fiable, tanto para sistemas de propulsión criogénicos como ambientales, que aumenta la eficiencia general del combustible de un 40 a un 60 por ciento. Los sistemas de propulsión de aeronaves convencionales luchan por mantener fríos los motores eléctricos y la electrónica de alta potencia sin recurrir a una masa y complejidad adicionales que anulan los beneficios de la propulsión eléctrica en las aeronaves. El sistema de gestión térmica de Glenn utiliza la energía normalmente desperdiciada de la propulsión del turboventilador para enfriar los equipos electrónicos y de potencia. El calor residual produce una onda acústica de alta intensidad, creada a partir del gradiente de temperatura entre los intercambiadores de calor frío y caliente.'},

        {id:16,text:'Las redes de sensores de la NASA pueden ser sistemas autónomos altamente distribuidos de sistemas que deben operar con un alto grado de confiabilidad. El sistema solar y las redes de exploración planetaria experimentan necesariamente largos retrasos en las comunicaciones con la Tierra. Las redes de exploración están parcial y ocasionalmente fuera de contacto con la Tierra y el control de la misión durante largos períodos de tiempo, y deben operar en condiciones ambientales dinámicas extremas. Debido a la complejidad de estos sistemas, así como a la naturaleza paralela y distribuida de las redes de exploración, las redes de exploración tienen un espacio de estado extremadamente grande y son imposibles de probar completamente usando las técnicas de prueba tradicionales. Cuantos más códigos o instrucciones se puedan generar automáticamente a partir de un modelo verificablemente correcto.'},

        {id:17,text:'Los innovadores del centro de investigación Glenn de la NASA han desarrollado un neumático innovador, no neumático y compatible. Esta innovación, llamada Superelastic Tire, se desarrolló para futuras misiones a la Luna y Marte, pero es una alternativa viable a los neumáticos aquí en la Tierra. Esta tecnología representa la última evolución del Spring Tire que fue inventado por la NASA Glenn y Goodyear e inspirado en los neumáticos lunares Apollo. El novedoso uso de aleaciones con memoria de forma capaces de soportar una gran tensión como componentes de soporte de carga, en lugar de los típicos materiales elásticos, da como resultado un neumático que puede soportar una deformación excesiva sin sufrir daños permanentes.'},

        {id:18, text:'Esta innovación del Centro de Investigación Glenn de la NASA es capaz de correlacionar dos señales analógicas mediante el uso de un front-end de acondicionamiento de señales basado en analógicas para limitar las señales analógicas a través de un umbral adaptativo en un flujo de bits binario. Luego, la correlación se realiza utilizando una función de calculadora de similitud de Hamming integrada en un correlacionador digital de un bit (OBDC). Al convertir la señal analógica en un flujo de bits, el cálculo de la función de correlación se simplifica y se necesitan menos recursos de hardware. Esta representación binaria permite que el hardware pase de un procesador de señal digital, donde las instrucciones se realizan en serie, a una lógica digital donde los cálculos se pueden realizar en paralelo, lo que acelera enormemente los cálculos.'},

        {id:19,text:'Los científicos del Centro de Investigación Glenn de la NASA han desarrollado formas novedosas de proteger los elementos combustibles utilizados en los motores de propulsión térmica nuclear (NTP) propulsados ​​por gas de hidrógeno caliente. Estos elementos combustibles a menudo cuentan con un sustrato a base de grafito (Gr), que puede reaccionar con el hidrógeno para formar metano y otros hidrocarburos, lo que lleva a un ataque corrosivo de hidrógeno caliente. Como resultado, el sustrato basado en Gr se erosiona con el tiempo, lo que afecta la neutrónica y el rendimiento del reactor y conduce a una parada prematura del motor NTP. '},

    ]

    const urls = [
        {
        id:0, url:'https://technology.nasa.gov/patent/LAR-TOPS-185'
        },

        {
        id:1, url:'https://technology.nasa.gov/patent/MSC-TOPS-105'
        },

        {
        id:2, url:'https://technology.nasa.gov/patent/LAR-TOPS-179'
        },

        {
        id:3, url:'https://technology.nasa.gov/patent/LEW-TOPS-61'
        },

        {
        id:4, url:'https://technology.nasa.gov/patent/LEW-TOPS-99'
        },

        {
        id:5, url:'https://technology.nasa.gov/patent/LEW-TOPS-156'
        },

        {
        id:6, url:'https://technology.nasa.gov/patent/LEW-TOPS-119'
        },

        {
        id:7, url:'https://technology.nasa.gov/patent/LAR-TOPS-208'
        },

        {
        id:8, url:'https://technology.nasa.gov/patent/TOP2-271'
        },

        {
        id:9, url:'https://technology.nasa.gov/patent/LEW-TOPS-152'
        },

        {
        id:10, url:'https://technology.nasa.gov/patent/TOP2-128'
        },

        {
        id:11, url:'https://technology.nasa.gov/patent/LAR-TOPS-152'
        },

        {
        id:12, url:'https://technology.nasa.gov/patent/MFS-TOPS-5'
        },

        {
        id:13, url:'https://technology.nasa.gov/patent/LAR-TOPS-311'
        },

        {
        id:14, url:'https://technology.nasa.gov/patent/LAR-TOPS-314'
        },

        {
        id:15, url:'https://technology.nasa.gov/patent/LEW-TOPS-110'
        },

        {
        id:16, url:'https://technology.nasa.gov/patent/GSC-TOPS-71'
        },

        {
        id:17, url:'https://technology.nasa.gov/patent/LEW-TOPS-99'
        },

        {
        id:18, url:'https://technology.nasa.gov/patent/LEW-TOPS-69'
        },

        {
        id:19, url:'https://technology.nasa.gov/patent/LEW-TOPS-51'
        },
    ]

   const [data, setData] = useState([]);

   useEffect(() => {
    async function soli (){
        const response = await fetch('https://api.nasa.gov/techtransfer/patent/?engine&api_key=f06ec9w0oeh6zshab8co214WNqsVcVDsFF9StkKY');
        const data = await response.json();
        setData(data.results);
    }
    soli();
   }, []);

    return (
        <section className={styles.articulos}>

            <div className={styles.cards}>

            {
                data.length != 0 
                ? data.splice(0,20).map((art,index) => {
                    return (
                        <div className={styles.card} key={index}>
                        <img width='500px' src={art[10]} alt="" />

                        <div className={styles.texto}>

                        <h3>Type: {art[5]}</h3>
                        <h2>{art[1]}</h2>
                        {
                          info.filter((inf) => inf.id == index).map((inf) => {
                            return <p key={index}>{inf.text}</p>
                          })
                        }
                        
                        {
                        urls.filter((ur) => ur.id == index).map((ur) => {
                            return <a target='_blanck' key={index} href={ur.url}>Info</a>
                        })
                        }

                        </div>
                        </div>
                    )
                }): "no hay resultados"
            }
            
            </div>
    </section>
  );
    
    
}

export default Info;