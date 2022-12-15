import type { NextPage } from "next";
import Head from "next/head";
import SimpleDivider from "../components/separators/SimpleDivider";
import ProjectsView from "../views/Home/ProjectsView";
import AboutView from "../views/Home/AboutView";
import ContactView from "../views/Home/ContactView";
import IntroductionView from "../views/Home/IntroductionView";
import StickyNavbarWrapper from "../components/navigation/StickyNavbarWrapper";
import StickyNavbar from "../components/navigation/StickyNavbar";
import StickyNavbarButton from "../components/navigation/StickyNavbarButton";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portafolio de Carlos Peña</title>
      </Head>

      <main className="blue-background">
        <IntroductionView />

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

        <AboutView />

        <SimpleDivider useContainer />

        <ProjectsView />

        {/* <SimpleDivider useContainer /> */}

        <ContactView />

        <div id="end"></div>
      </main>
    </>
  );
};

export default Home;
