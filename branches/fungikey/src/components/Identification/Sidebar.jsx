import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";

export default function Sidebar() {
  return (
    <Navbar className="color-nav" expand={false}>
      <Container fluid>
        <Navbar.Brand href="/Identification">
          <img
            alt=""
            src="/images/icons/60.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <span className="sidebar-title">Identification</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          Image
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Identification
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/IdentificatorMain">Identificator</Nav.Link>
              <Nav.Link href="/IdentificatorComp">
                Identificator complémentaire
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
