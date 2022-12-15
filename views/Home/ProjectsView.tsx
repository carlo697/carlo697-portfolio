import test03 from "../../public/images/test-03.jpg";
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
import { FaGithub } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import ProjectSection from "../../components/projects/ProjectSection";

const ProjectsView = () => {
  return (
    <>
      <section className="blue-background pt-6">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 id="projects" className="h1 text-center mb-5">
                Proyectos
              </h2>
            </div>
          </div>

          <ProjectSection
            title="Motiva"
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
            <div className="font-size-5">
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
                  Mantener, desarrollar paginas y blogs (a base de los diseños
                  facilitados) en el Wordpress headless del sitio.
                </li>

                <li>
                  Agregar a las páginas y blogs las traducciones suministradas.
                </li>

                <li>
                  Corregir bugs y agregar características nuevas al código
                  Front-End escrito en Vue 2.
                </li>
              </ul>
            </div>

            <div className="btn-group pt-3">
              <a
                href="https://motiva.health/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-icon-right"
              >
                ¡Visitar! <HiCursorClick />
              </a>
            </div>
          </ProjectSection>

          <ProjectSection
            title="Simulador de Evolución"
            invert={true}
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
            <p className="font-size-5">
              Este proyecto personal consiste en una simulación de evolución
              biológica dentro del navegador. La simulación posee una cuadricula
              (el mapa) donde cada pixel de color representa a una criatura con
              una red neuronal de cerebro. Dicho cerebro le dice a la criatura
              en qué dirección moverse. En el mapa también hay obstáculos de
              color gris y una zona azul donde las criaturas pueden
              reproducirse. Las criaturas que entren a la zona azul sobrevivirán
              y sus genes pasaran a la siguiente generación.
            </p>

            <p className="font-size-5">
              En la primera generación las criaturas poseen un cerebro
              totalmente aleatorio, pero, con cada generación se insertan
              mutaciones aleatorias. Gracias a la selección natural, con cada
              generación que pase las criaturas se volverán cada vez más
              habilidosas para llegar a la zona azul y reproducirse.
            </p>

            <p className="font-size-5">
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

            <div className="btn-group pt-3">
              <a
                href="https://evolution-simulation.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-icon-right"
              >
                ¡Visitar! <HiCursorClick />
              </a>

              <a
                href="https://github.com/carlo697/js-biosim"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark btn-icon-right"
              >
                Codigo Fuente <FaGithub />
              </a>
            </div>
          </ProjectSection>

          <ProjectSection
            title="Aula Virtual de Instrumentación"
            images={[
              {
                alt: "Vista de la página principal del aula virtual. Muestra un menú de navegación azul arriba y un tablero de control eléctrico abajo",
                src: aulaVirtualPrincipal,
              },
              {
                alt: `Vista de la sección "NOSOTROS" del aula virtual. Muestra un texto indicando los autores del proyecto: Gil Danis, Morales María, Sánchez Richard, y Peña Carlos`,
                src: aulaVirtualNosotros,
              },
              {
                alt: `Vista de la sección "FUNCIONAMIENTO" del aula virtual. Muestra una tabla con los instrumentos presentes en el modulo. Cada fila de la tabla posee una foto del instrumento, una descripción corta, un botón "Leer más" y un botón "Ver"`,
                src: aulaVirtualFuncionamiento,
              },
              {
                alt: `Vista de surge cuando alguien hace clic en el botón "Leer más" de una fila en la sección "Funcionamiento"`,
                src: aulaVirtualTanque,
              },
            ]}
          >
            <p className="font-size-5">
              Este proyecto es una página web creada como aula virtual para los
              estudiantes de la{" "}
              <a
                href="https://uptvalencia.edu.ve/"
                target="_blank"
                rel="noreferrer"
              >
                UPTValencia
              </a>
              . La pagina muestra un tablero de control funcional y un proceso
              virtual que permiten realizar una serie de prácticas de
              laboratorio.
            </p>

            <p className="font-size-5">
              Esta página es producto de un proyecto universitario para obtener
              el título de Técnico Superior Universitario en Instrumentación y
              Control, en la{" "}
              <a
                href="https://uptvalencia.edu.ve/"
                target="_blank"
                rel="noreferrer"
              >
                Universidad Politécnica Territorial de Valencia
              </a>
              .
            </p>

            <div className="btn-group pt-3">
              <a
                href="https://caudal.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-icon-right"
              >
                ¡Visitar! <HiCursorClick />
              </a>

              <a
                href="https://github.com/carlo697/modulo-caudal"
                target="_blank"
                rel="noreferrer"
                className="btn btn-dark btn-icon-right"
              >
                Codigo Fuente <FaGithub />
              </a>
            </div>
          </ProjectSection>

          <ProjectSection
            title="This is the title of a project"
            invert={true}
            images={[
              {
                alt: "project 3",
                src: test03,
              },
            ]}
          >
            <p className="font-size-5">
              Proin orci odio, dapibus a tristique nec, consectetur eu risus.
              Nunc vitae elit fermentum dui volutpat dapibus. Morbi semper
              congue placerat. Donec sit amet leo lacus. Maecenas in est eu urna
              molestie aliquet. Integer id dignissim purus. Sed finibus lectus
              ligula, a commodo mauris molestie sed. Quisque eu tristique dolor.
              Aliquam sit amet facilisis nisi, vitae convallis nunc.
              Pellentesque pellentesque risus ullamcorper enim hendrerit
              iaculis. Nullam tempor bibendum sem ac eleifend. Mauris imperdiet
              aliquam mauris, vel fermentum mauris sollicitudin iaculis. Sed
              sodales a tellus id egestas. Quisque sit amet egestas arcu, nec
              tincidunt nibh. Fusce eu tellus nec arcu ultricies laoreet. Fusce
              accumsan condimentum velit, sed hendrerit justo dapibus sed.
            </p>

            <p className="font-size-5">
              Nullam tempor bibendum sem ac eleifend. Mauris imperdiet aliquam
              mauris, vel fermentum mauris sollicitudin iaculis. Sed sodales a
              tellus id egestas. Quisque sit amet egestas arcu, nec tincidunt
              nibh. Fusce eu tellus nec arcu ultricies laoreet. Fusce accumsan
              condimentum velit, sed hendrerit justo dapibus sed.
            </p>
          </ProjectSection>
        </div>
      </section>
    </>
  );
};

export default ProjectsView;
