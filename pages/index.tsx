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
import SimpleDivider from "../components/separators/SimpleDivider";
import { GoMailRead } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ListGroup from "../components/cards/ListGroup";
import ListGroupItem from "../components/cards/ListGroupItem";

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
          <div className="container">
            <div className="position-relative">
              <div className="row pb-md-6 pb-lg-4">
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

              <div className="row position-md-absolute bottom-md-0 right-md-0 pointer-events-md-none">
                <div className="col-md-7"></div>
                <div className="col-12 col-md-5">
                  <p className="text-center text-md-right font-size-4 font-weight-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam feugiat efficitur vulputate. Vestibulum ac leo
                    turpis. Cras lobortis ipsum ut lacinia porttitor. In eu
                    condimentum est. Phasellus venenatis nec augue eget gravida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StickyNavbarWrapper>
          <div className="container">
            <StickyNavbar>
              <StickyNavbarButton href="#about" start="#about" end="#projects">
                About
              </StickyNavbarButton>
              <StickyNavbarButton
                href="#projects"
                start="#projects"
                end="#contact"
              >
                Projects
              </StickyNavbarButton>
              <StickyNavbarButton href="#contact" start="#contact" end="#end">
                Contact
              </StickyNavbarButton>
            </StickyNavbar>
          </div>
        </StickyNavbarWrapper>

        <SimpleDivider useContainer />

        <section className={classNames(styles["blue-background"], "pt-6 pb-6")}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 id="about" className="text-center mb-4">
                  About
                </h1>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p className="font-size-5 pb-4">
                  Proin orci odio, dapibus a tristique nec, consectetur eu
                  risus. Nunc vitae elit fermentum dui volutpat dapibus. Morbi
                  semper congue placerat. Donec sit amet leo lacus. Maecenas in
                  est eu urna molestie aliquet. Integer id dignissim purus. Sed
                  finibus lectus ligula, a commodo mauris molestie sed. Quisque
                  eu tristique dolor. Aliquam sit amet facilisis nisi, vitae
                  convallis nunc. Pellentesque pellentesque risus ullamcorper
                  enim hendrerit iaculis. Nullam tempor bibendum sem ac
                  eleifend. Mauris imperdiet aliquam mauris, vel fermentum
                  mauris sollicitudin iaculis. Sed sodales a tellus id egestas.
                  Quisque sit amet egestas arcu, nec tincidunt nibh. Fusce eu
                  tellus nec arcu ultricies laoreet. Fusce accumsan condimentum
                  velit, sed hendrerit justo dapibus sed.
                </p>
              </div>

              <div className="col-12">
                <HorizontalAccordion minHeight={250}>
                  <HorizontalItem
                    id="tab1"
                    title="Titulo 1"
                    backgroundSrc={test01}
                    backgroundPosition="center 20%"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc eleifend est at sem cursus, vitae fermentum massa
                      hendrerit.
                    </p>

                    <p>
                      Quisque tellus leo, sodales eu sollicitudin sit amet,
                      sollicitudin et dui. Morbi felis diam, varius id turpis
                      vitae, accumsan scelerisque lectus. Duis fringilla ut
                      purus quis mollis. Nunc ac scelerisque metus. Vivamus erat
                      purus, maximus sed libero sed, vehicula tincidunt quam.
                    </p>
                  </HorizontalItem>

                  <HorizontalItem
                    id="tab2"
                    title="Titulo 2"
                    backgroundSrc={test02}
                    backgroundPosition="center 80%"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc eleifend est at sem cursus, vitae fermentum massa
                      hendrerit.
                    </p>
                  </HorizontalItem>

                  <HorizontalItem
                    id="tab3"
                    title="Titulo 3"
                    backgroundSrc={test03}
                    backgroundPosition="center 80%"
                  >
                    Hola 3
                  </HorizontalItem>

                  <HorizontalItem
                    id="tab4"
                    title={
                      <>
                        Titulo 4 - <strong>TEST</strong>
                      </>
                    }
                    backgroundSrc={test04}
                    backgroundPosition="center 80%"
                  >
                    Hola 3
                  </HorizontalItem>
                </HorizontalAccordion>
              </div>
            </div>
          </div>
        </section>

        <SimpleDivider useContainer />

        <section className={classNames(styles["blue-background"], "pt-6 pb-6")}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 id="projects" className="text-center mb-4">
                  Projects
                </h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8">
                <p className="font-size-5 pb-4">
                  Proin orci odio, dapibus a tristique nec, consectetur eu
                  risus. Nunc vitae elit fermentum dui volutpat dapibus. Morbi
                  semper congue placerat. Donec sit amet leo lacus. Maecenas in
                  est eu urna molestie aliquet. Integer id dignissim purus. Sed
                  finibus lectus ligula, a commodo mauris molestie sed. Quisque
                  eu tristique dolor. Aliquam sit amet facilisis nisi, vitae
                  convallis nunc. Pellentesque pellentesque risus ullamcorper
                  enim hendrerit iaculis. Nullam tempor bibendum sem ac
                  eleifend. Mauris imperdiet aliquam mauris, vel fermentum
                  mauris sollicitudin iaculis. Sed sodales a tellus id egestas.
                  Quisque sit amet egestas arcu, nec tincidunt nibh. Fusce eu
                  tellus nec arcu ultricies laoreet. Fusce accumsan condimentum
                  velit, sed hendrerit justo dapibus sed.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <p className="font-size-5">
                  Proin orci odio, dapibus a tristique nec, consectetur eu
                  risus. Nunc vitae elit fermentum dui volutpat dapibus. Morbi
                  semper congue placerat. Donec sit amet leo lacus. Maecenas in
                  est eu urna molestie aliquet. Integer id dignissim purus. Sed
                  finibus lectus ligula, a commodo mauris molestie sed. Quisque
                  eu tristique dolor. Aliquam sit amet facilisis nisi, vitae
                  convallis nunc. Pellentesque pellentesque risus ullamcorper
                  enim hendrerit iaculis. Nullam tempor bibendum sem ac
                  eleifend. Mauris imperdiet aliquam mauris, vel fermentum
                  mauris sollicitudin iaculis. Sed sodales a tellus id egestas.
                  Quisque sit amet egestas arcu, nec tincidunt nibh. Fusce eu
                  tellus nec arcu ultricies laoreet. Fusce accumsan condimentum
                  velit, sed hendrerit justo dapibus sed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <SimpleDivider useContainer />

        <section
          className={classNames(styles["blue-background"], "pt-6 pb-7")}
          id="contact"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4 display-flex align-items-center">
                <div className="pt-md-4 pb-4 pr-md-3">
                  <h1 className="mb-3">Contact Me</h1>

                  <p className="font-size-5">
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
