import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { contactConfig } from "./option";
import CustomNavbar from "../utilities/NavBar/CustomNavbar";

export default function ContactUs() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(event.target.elements.message.value);
    event.target.reset();
  }

  return (
    <div>
      {" "}
      <CustomNavbar title="Contactez-nous" link="/" />
      <Container>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-5">Restez en contact</h3>
            <div className="mt-5 center">
              <strong>Sommaire de votre message:</strong>
              <p>{message}</p>
            </div>
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
            <form onSubmit={handleSubmit} className="contact__form w-100">
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
                <Col lg="6" className="form-group d-flex">
                  <Button className="btn btn-primary mr-3" type="submit">
                    Envoyer
                  </Button>
                  <Link to="/">
                    <Button
                      className="btn btn-retour"
                      type="button"
                      style={{ width: "120px" }}
                    >
                      {" "}
                      Retour{" "}
                    </Button>
                  </Link>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
