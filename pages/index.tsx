import classNames from "classnames";
import type { NextPage } from "next";
import Head from "next/head";
import HorizontalAccordion from "../components/accordions/HorizontalAccordion";
import HorizontalItem from "../components/accordions/HorizontalItem";
import StickyNavbar from "../components/navigation/StickyNavbar";
import StickyNavbarButton from "../components/navigation/StickyNavbarButton";
import StickyNavbarWrapper from "../components/navigation/StickyNavbarWrapper";
import styles from "../styles/Home.module.scss";
import TerrainCanvas from "../three/terrain/TerrainCanvas";
import test01 from "../public/images/test-01.jpg";
import test02 from "../public/images/test-02.jpg";
import test03 from "../public/images/test-03.jpg";
import test04 from "../public/images/test-04.jpg";
import test05 from "../public/images/test-05.jpg";
import SimpleDivider from "../components/separators/SimpleDivider";
import { GoMailRead } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ListGroup from "../components/cards/ListGroup";
import ListGroupItem from "../components/cards/ListGroupItem";
import ProjectSection from "../components/projects/ProjectSection";
import ParallaxDiv from "../components/animations/ParallaxDiv";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles["blue-background"]}>
        <section className={classNames(styles["terrain-section"], "pb-5")}>
          <ParallaxDiv startPosition={0} viewportStart={0} viewportEnd={0}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <h1 className="text-center mb-0 pt-2 pt-md-4 font-size-2 font-size-md-1">
                    Mi Portafolio
                  </h1>
                </div>
              </div>

              <div className="position-relative">
                <div className="row pb-md-6 pb-lg-2">
                  <div className="col-12 col-md-10">
                    <div className={styles["terrain-canvas-parent"]}>
                      <TerrainCanvas
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="position-md-absolute bottom-md-0 right-md-0 width-md-50">
                  <div className="text-center text-md-right font-weight-light">
                    <p className="font-size-4 mb-1">
                      ¡Presione y arrastre el mapa para girarlo!
                    </p>
                    <p className="font-size-5 color-light-gray">
                      Este modelo es generado, animado y renderizado de forma
                      procedimental (procedural) en tiempo real usando
                      JavaScript y{" "}
                      <a
                        href="https://threejs.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Three.js
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxDiv>
        </section>

        <StickyNavbarWrapper>
          <div className="container">
            <StickyNavbar>
              <StickyNavbarButton href="#about" start="#about" end="#projects">
                Acerca
              </StickyNavbarButton>
              <StickyNavbarButton
                href="#projects"
                start="#projects"
                end="#contact"
              >
                Proyectos
              </StickyNavbarButton>
              <StickyNavbarButton href="#contact" start="#contact" end="#end">
                Contáctame
              </StickyNavbarButton>
            </StickyNavbar>
          </div>
        </StickyNavbarWrapper>

        <SimpleDivider useContainer />

        <section className={classNames(styles["blue-background"], "pt-6 pb-6")}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 id="about" className="h1 text-center mb-4">
                  ¿Quién soy?
                </h2>
              </div>
            </div>

            <div className="row">
              <div className="col color-light-gray">
                <p className="font-size-5 pb-4">
                  Soy <strong>Carlos Peña</strong>, desarrollador web
                  especializado principalmente en el Front-End. ¡Desarrollé este
                  sitio para demostrar mis habilidades y los proyectos en los
                  que he trabajado! Puede presionar las siguientes tarjetas para
                  ver una lista de las tecnologías que manejo.
                </p>
              </div>

              <div className="col-12">
                <HorizontalAccordion minHeight={250}>
                  <HorizontalItem
                    id="tab1"
                    title={<span className="font-weight-bold">Front-End</span>}
                    backgroundSrc={test01}
                    backgroundPosition="center 20%"
                    isDefault={true}
                  >
                    <div className="font-size-5">
                      <h3 className="h4 text-center">Front-End</h3>

                      <p>
                        ¡Aplicaciones modernas desarrolladas tomando en cuenta
                        el rendimiento y el SEO con server side rendering!
                      </p>

                      <ul>
                        <li>HTML</li>
                        <li>CSS/SASS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>React Native</li>
                        <li>GraphQL</li>
                        <li>Vue 2</li>
                      </ul>
                    </div>
                  </HorizontalItem>

                  <HorizontalItem
                    id="tab2"
                    title={<span className="font-weight-bold">Back-End</span>}
                    backgroundSrc={test02}
                    backgroundPosition="center 80%"
                  >
                    <div className="font-size-5">
                      <h3 className="h4 text-center">Back-End</h3>

                      <p>
                        Desarrollo de APIs REST utilizando las siguientes
                        herramientas:
                      </p>

                      <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Nest.js</li>
                        <li>Prisma (ORM)</li>
                        <li>Sequelize (ORM)</li>
                        <li>Laravel</li>
                        <li>WordPress (headless)</li>
                        <li>Heroku</li>
                      </ul>
                    </div>
                  </HorizontalItem>

                  <HorizontalItem
                    id="tab3"
                    title={<span className="font-weight-bold">3D</span>}
                    backgroundSrc={test03}
                    backgroundPosition="center 80%"
                  >
                    <div className="font-size-5">
                      <h3 className="h4 text-center">3D</h3>

                      <p>
                        Modelado 3D y ¡Fundamento de desarrollo de videojuegos!
                      </p>

                      <ul>
                        <li>Blender</li>
                        <li>Substance Painter (básico)</li>
                        <li>Modelado 3D</li>
                        <li>Texturizado 3D</li>
                        <li>Unity</li>
                      </ul>
                    </div>
                  </HorizontalItem>

                  <HorizontalItem
                    id="tab4"
                    title={<span className="font-weight-bold">Extras</span>}
                    backgroundSrc={test04}
                    backgroundPosition="center 80%"
                  >
                    <div className="font-size-5">
                      <h3 className="h4 text-center">Extras</h3>

                      <ul>
                        <li>C#</li>
                        <li>Arduino y Electrónica Básica</li>
                        <li>Git</li>
                        <li>Scrum</li>
                      </ul>
                    </div>
                  </HorizontalItem>
                </HorizontalAccordion>
              </div>
            </div>
          </div>
        </section>

        <SimpleDivider useContainer />

        <section className={classNames(styles["blue-background"], "pt-6")}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 id="projects" className="h1 text-center mb-5">
                  Proyectos
                </h2>
              </div>
            </div>

            <ProjectSection
              title="This is the title of a project"
              imageSrc={test05}
              imageAlt="project 1"
            >
              <p className="font-size-5">
                Proin orci odio, dapibus a tristique nec, consectetur eu risus.
                Nunc vitae elit fermentum dui volutpat dapibus. Morbi semper
                congue placerat. Donec sit amet leo lacus. Maecenas in est eu
                urna molestie aliquet. Integer id dignissim purus. Sed finibus
                lectus ligula, a commodo mauris molestie sed. Quisque eu
                tristique dolor. Aliquam sit amet facilisis nisi, vitae
                convallis nunc. Pellentesque pellentesque risus ullamcorper enim
                hendrerit iaculis. Nullam tempor bibendum sem ac eleifend.
                Mauris imperdiet aliquam mauris, vel fermentum mauris
                sollicitudin iaculis. Sed sodales a tellus id egestas. Quisque
                sit amet egestas arcu, nec tincidunt nibh. Fusce eu tellus nec
                arcu ultricies laoreet. Fusce accumsan condimentum velit, sed
                hendrerit justo dapibus sed.
              </p>
            </ProjectSection>

            <ProjectSection
              title="This is the title of a project"
              imageSrc={test02}
              imageAlt="project 2"
              invert={true}
            >
              <p className="font-size-5">
                Proin orci odio, dapibus a tristique nec, consectetur eu risus.
                Nunc vitae elit fermentum dui volutpat dapibus. Morbi semper
                congue placerat. Donec sit amet leo lacus. Maecenas in est eu
                urna molestie aliquet. Integer id dignissim purus. Sed finibus
                lectus ligula, a commodo mauris molestie sed. Quisque eu
                tristique dolor. Aliquam sit amet facilisis nisi, vitae
                convallis nunc. Pellentesque pellentesque risus ullamcorper enim
                hendrerit iaculis. Nullam tempor bibendum sem ac eleifend.
                Mauris imperdiet aliquam mauris, vel fermentum mauris
                sollicitudin iaculis. Sed sodales a tellus id egestas. Quisque
                sit amet egestas arcu, nec tincidunt nibh. Fusce eu tellus nec
                arcu ultricies laoreet. Fusce accumsan condimentum velit, sed
                hendrerit justo dapibus sed.
              </p>
            </ProjectSection>

            <ProjectSection
              title="This is the title of a project"
              imageSrc={test03}
              imageAlt="project 3"
            >
              <p className="font-size-5">
                Proin orci odio, dapibus a tristique nec, consectetur eu risus.
                Nunc vitae elit fermentum dui volutpat dapibus. Morbi semper
                congue placerat. Donec sit amet leo lacus. Maecenas in est eu
                urna molestie aliquet. Integer id dignissim purus. Sed finibus
                lectus ligula, a commodo mauris molestie sed. Quisque eu
                tristique dolor. Aliquam sit amet facilisis nisi, vitae
                convallis nunc. Pellentesque pellentesque risus ullamcorper enim
                hendrerit iaculis. Nullam tempor bibendum sem ac eleifend.
                Mauris imperdiet aliquam mauris, vel fermentum mauris
                sollicitudin iaculis. Sed sodales a tellus id egestas. Quisque
                sit amet egestas arcu, nec tincidunt nibh. Fusce eu tellus nec
                arcu ultricies laoreet. Fusce accumsan condimentum velit, sed
                hendrerit justo dapibus sed.
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

        <SimpleDivider useContainer />

        <section
          className={classNames(styles["blue-background"], "pt-6 pb-4")}
          id="contact"
          style={{ minHeight: "60vh" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4 display-flex align-items-center">
                <div className="pt-md-4 pb-4 pr-md-3">
                  <h2 className="h1 mb-3">Contáctame</h2>

                  <p className="font-size-5 color-light-gray">
                    Proin orci odio, dapibus a tristique nec, consectetur eu
                    risus. Nunc vitae elit fermentum dui volutpat dapibus. Morbi
                    semper congue placerat.
                  </p>
                </div>
              </div>
              <div className="col-md-1 display-flex justify-content-center">
                {/* <SimpleDivider direction="vertical" /> */}
              </div>
              <div className="col">
                <ListGroup>
                  <ListGroupItem className={styles["contact-list-item"]}>
                    <GoMailRead />
                    <div>
                      <h3>Mail</h3>
                      <a href="mailto:test@gmail.com">test@gmail.com</a>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className={styles["contact-list-item"]}>
                    <FaLinkedin />
                    <div>
                      <h3>Linkedin</h3>
                      <a href="https://www.linkedin.com/in/carlo697/">
                        Carlos Peña
                      </a>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className={styles["contact-list-item"]}>
                    <FaGithub />
                    <div>
                      <h3>Github</h3>
                      <a href="https://github.com/carlo697">carlo697</a>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </div>
          </div>
        </section>

        <div id="end"></div>
      </main>
    </>
  );
};

export default Home;
