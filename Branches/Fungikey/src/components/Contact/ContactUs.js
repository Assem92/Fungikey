import React from "react"; 
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { contactConfig } from "./option"


export default function ContactUs() {
  

  return (
      <Container>
     
        <Row className="mb-5 mt-5">
          <Col lg="8">
            <h1 className="display-5 mb-5">Contactez-nous</h1>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-5">Restez en contact</h3>
            <address>
              <strong>Adresse mail:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Téléphone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Nom" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Adresse mail"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Ecrivez votre message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="6" className="form-group">
                <Button className="btn btn-primary" type="submit" >Envoyer</Button>
                <Link to="/">
                <Button className="btn btn-retour" type="button"style={{width: "120px"}}> Retour </Button>
                </Link>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
  );
}
