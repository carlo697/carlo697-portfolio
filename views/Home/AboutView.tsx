import HorizontalAccordion from "../../components/accordions/HorizontalAccordion";
import HorizontalItem from "../../components/accordions/HorizontalItem";
import test01 from "../../public/images/test-01.jpg";
import test02 from "../../public/images/test-02.jpg";
import test03 from "../../public/images/test-03.jpg";
import test04 from "../../public/images/test-04.jpg";

const AboutView = () => {
  return (
    <section className={"blue-background pt-6 pb-6"}>
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
              Soy <strong>Carlos Peña</strong>, desarrollador web especializado
              principalmente en el Front-End. ¡Desarrollé este sitio para
              demostrar mis habilidades y los proyectos en los que he trabajado!
              Puede presionar las siguientes tarjetas para ver una lista de las
              tecnologías que manejo.
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
                    ¡Aplicaciones modernas desarrolladas tomando en cuenta el
                    rendimiento y el SEO con server side rendering!
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

                  <p>Modelado 3D y ¡Fundamento de desarrollo de videojuegos!</p>

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
  );
};

export default AboutView;
