import { FaGithub } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import ProjectSection from "../../components/projects/ProjectSection";

import motivaMainPage from "../../public/images/motiva-main-page.jpg";
import motivaPatiensImplantOverview1 from "../../public/images/motiva-patients-implant-overview-1.jpg";
import motivaPatiensImplantOverview2 from "../../public/images/motiva-patients-implant-overview-2.jpg";
import motivaPatientsBreastCancerJourney from "../../public/images/motiva-patients-breast-cancer-journey.jpg";
import evolutionSimulation1 from "../../public/images/evolution-simulation-1.jpg";
import evolutionSimulation2 from "../../public/images/evolution-simulation-2.jpg";
import evolutionSimulation3 from "../../public/images/evolution-simulation-3.jpg";
import evolutionSimulation4 from "../../public/images/evolution-simulation-4.jpg";
import aulaVirtualPrincipal from "../../public/images/aula-virtual-principal.jpg";
import aulaVirtualNosotros from "../../public/images/aula-virtual-nosotros.jpg";
import aulaVirtualFuncionamiento from "../../public/images/aula-virtual-funcionamiento.jpg";
import aulaVirtualTanque from "../../public/images/aula-virtual-tanque.jpg";
import neatTimerAlarm from "../../public/images/neat-timer-alarm.jpg";
import neatTimerCountdown from "../../public/images/neat-timer-countdown.jpg";
import neatTimerStopwatch from "../../public/images/neat-timer-stopwatch.jpg";

const ProjectsView = () => {
  return (
    <>
      <section className="blue-background pt-6">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 id="projects" className="h1 text-center mb-0">
                Proyectos
              </h2>
            </div>
          </div>
        </div>

        <ProjectSection
          title="Motiva"
          websiteUrl="https://motiva.health/"
          images={[
            {
              alt: "screenshot of the evolution simulator",
              src: motivaMainPage,
            },
            {
              alt: "hla",
              src: motivaPatiensImplantOverview1,
            },
            {
              alt: "hla",
              src: motivaPatiensImplantOverview2,
            },
            {
              alt: "hla",
              src: motivaPatientsBreastCancerJourney,
            },
          ]}
        >
          <div>
            <p>
              Como empleado de{" "}
              <a
                href="https://qantamedia.com/"
                target="_blank"
                rel="noreferrer"
              >
                Qanta Media
              </a>{" "}
              y haciendo outsourcing para{" "}
              <a
                href="https://establishmentlabs.com/"
                target="_blank"
                rel="noreferrer"
              >
                Establishment Labs
              </a>
              , he trabajado con el sitio web principal de Motiva, realizando
              las siguientes labores:
            </p>

            <ul>
              <li>
                Mantener, desarrollar paginas y blogs (a base de los dise??os
                facilitados) en el Wordpress headless del sitio.
              </li>

              <li>
                Agregar a las p??ginas y blogs las traducciones suministradas.
              </li>

              <li>
                Corregir bugs y agregar caracter??sticas nuevas al c??digo
                Front-End escrito en Vue 2.
              </li>
            </ul>
          </div>
        </ProjectSection>

        <ProjectSection
          title="Simulador de Evoluci??n"
          invert={true}
          websiteUrl="https://evolution-simulation.netlify.app/"
          sourceCodeUrl="https://github.com/carlo697/js-biosim"
          images={[
            {
              alt: "screenshot of the evolution simulator",
              src: evolutionSimulation1,
            },
            {
              alt: "screenshot of the map of the evolution simulator",
              src: evolutionSimulation2,
            },
            {
              alt: "screenshot of the evolution simulator that shows the neural network of a creature",
              src: evolutionSimulation3,
            },
            {
              alt: 'screenshot of the evolution simulator that shows the "Stats" tab which contains a graph of survival rate over time',
              src: evolutionSimulation4,
            },
          ]}
        >
          <p>
            Este proyecto personal consiste en una simulaci??n de evoluci??n
            biol??gica dentro del navegador. La simulaci??n posee una cuadricula
            (el mapa) donde cada pixel de color representa a una criatura con
            una red neuronal de cerebro. Dicho cerebro le dice a la criatura en
            qu?? direcci??n moverse. En el mapa tambi??n hay obst??culos de color
            gris y una zona azul donde las criaturas pueden reproducirse. Las
            criaturas que entren a la zona azul sobrevivir??n y sus genes pasaran
            a la siguiente generaci??n.
          </p>

          <p>
            En la primera generaci??n las criaturas poseen un cerebro totalmente
            aleatorio, pero, con cada generaci??n se insertan mutaciones
            aleatorias. Gracias a la selecci??n natural, con cada generaci??n que
            pase las criaturas se volver??n cada vez m??s habilidosas para llegar
            a la zona azul y reproducirse.
          </p>

          <p>
            Inspirado por el video &quot;
            <a
              href="https://www.youtube.com/watch?v=N3tRFayqVtk"
              target="_blank"
              rel="noreferrer"
            >
              I programmed some creatures. They Evolved.
            </a>
            &quot; de{" "}
            <a
              href="https://github.com/davidrmiller"
              target="_blank"
              rel="noreferrer"
            >
              David R. Miller
            </a>
            .
          </p>
        </ProjectSection>

        <ProjectSection
          title="Aula Virtual de Instrumentaci??n"
          websiteUrl="https://caudal.netlify.app/"
          sourceCodeUrl="https://github.com/carlo697/modulo-caudal"
          images={[
            {
              alt: "Vista de la p??gina principal del aula virtual. Muestra un men?? de navegaci??n azul arriba y un tablero de control el??ctrico abajo",
              src: aulaVirtualPrincipal,
            },
            {
              alt: `Vista de la secci??n "NOSOTROS" del aula virtual. Muestra un texto indicando los autores del proyecto: Gil Danis, Morales Mar??a, S??nchez Richard, y Pe??a Carlos`,
              src: aulaVirtualNosotros,
            },
            {
              alt: `Vista de la secci??n "FUNCIONAMIENTO" del aula virtual. Muestra una tabla con los instrumentos presentes en el modulo. Cada fila de la tabla posee una foto del instrumento, una descripci??n corta, un bot??n "Leer m??s" y un bot??n "Ver"`,
              src: aulaVirtualFuncionamiento,
            },
            {
              alt: `Vista de surge cuando alguien hace clic en el bot??n "Leer m??s" de una fila en la secci??n "Funcionamiento"`,
              src: aulaVirtualTanque,
            },
          ]}
        >
          <p>
            Este proyecto es una p??gina web creada como aula virtual para los
            estudiantes de la{" "}
            <a
              href="https://uptvalencia.edu.ve/"
              target="_blank"
              rel="noreferrer"
            >
              UPTValencia
            </a>
            . La pagina muestra un tablero de control funcional y un proceso
            virtual que permiten realizar una serie de pr??cticas de laboratorio.
          </p>

          <p>
            Esta p??gina es producto de un proyecto universitario para obtener el
            t??tulo de T??cnico Superior Universitario en Instrumentaci??n y
            Control, en la{" "}
            <a
              href="https://uptvalencia.edu.ve/"
              target="_blank"
              rel="noreferrer"
            >
              Universidad Polit??cnica Territorial de Valencia
            </a>
            .
          </p>
        </ProjectSection>

        <ProjectSection
          title="Neat Timer"
          invert={true}
          websiteUrl="https://neat-timer.netlify.app/"
          sourceCodeUrl="https://github.com/carlo697/NeatTimer"
          images={[
            {
              alt: "P??gina ???Alarma??? de Neat Timer, que constituye la pagina principal del sitio. Muestra un cronometro con dos botones: uno para dividir el tiempo en vueltas y otro para pausar el tiempo.",
              src: neatTimerStopwatch,
            },
            {
              alt: "P??gina ???Cuenta regresiva??? de Neat Timer. Muestra un cronometro de cuenta regresiva con tres botones: editar, reiniciar y pausar.",
              src: neatTimerCountdown,
            },
            {
              alt: "P??gina ???Alarma??? de Neat Timer. Muestra una lista de alarmas configurables. Cada alarma posee un bot??n con forma de ???X??? para eliminarlas individualmente.",
              src: neatTimerAlarm,
            },
          ]}
        >
          <p>
            Esta aplicaci??n web contiene m??ltiples herramientas bastante ??tiles
            para medir el tiempo. Posee un cronometro, un reloj con la opci??n de
            obtener la hora en l??nea, un temporizador de cuenta regresiva y
            alarmas personalizables.
          </p>

          <p>
            Tanto el temporizador como las alarmas hacen uso de sonido y
            notificaciones de navegador para informar al usuario que el tiempo
            ha acabado.
          </p>
        </ProjectSection>
      </section>
    </>
  );
};

export default ProjectsView;
