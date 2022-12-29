import styles from "./ContactView.module.scss";
import { GoMailRead } from "react-icons/go";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import ListGroup from "../../components/cards/ListGroup";
import ListGroupItem from "../../components/cards/ListGroupItem";
import FadeParallax from "../../components/animations/FadeParallax";

const ContactView = () => {
  return (
    <section
      className="blue-background pt-6 pb-4"
      id="contact"
      style={{ minHeight: "60vh" }}
    >
      <div className="container">
        <FadeParallax>
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
                    <a href="mailto:carlos.07888@gmail.com">
                      carlos.07888@gmail.com
                    </a>
                  </div>
                </ListGroupItem>
                <ListGroupItem className={styles["contact-list-item"]}>
                  <FaLinkedin />
                  <div>
                    <h3>Linkedin</h3>
                    <a
                      href="https://www.linkedin.com/in/carlo697/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Carlos Peña
                    </a>
                  </div>
                </ListGroupItem>
                <ListGroupItem className={styles["contact-list-item"]}>
                  <FaGithub />
                  <div>
                    <h3>Github</h3>
                    <a
                      href="https://github.com/carlo697"
                      target="_blank"
                      rel="noreferrer"
                    >
                      carlo697
                    </a>
                  </div>
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
        </FadeParallax>
      </div>
    </section>
  );
};

export default ContactView;
