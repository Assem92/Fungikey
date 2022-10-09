import React from 'react'
import { Nav, Navbar, Container, Offcanvas, NavDropdown} from 'react-bootstrap'

/**
 * @returns La barre de navigation s'ouvrant sur le côté droit
 * Librarie: React-Bootstrap
 */
export default function Sidebar() {
  return (
    <Navbar className="color-nav"  expand={false}>
      <Container fluid>
      <Navbar.Brand href="/Identification">
      <img
          alt=""
          src="/images/icons/60.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
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
        <Offcanvas.Title id="offcanvasNavbarLabel">Identification</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link href="/IdentificatorMain">Identificator</Nav.Link>
        <Nav.Link href="/IdentificatorComp">Identificator complémentaire</Nav.Link>
          <NavDropdown title="Champignons à chapeaux" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="/HymenoTubes">Hyménophores à tubes</NavDropdown.Item>
            <NavDropdown.Item href="/HymenoLames">Hyménophores à lames</NavDropdown.Item>
            <NavDropdown.Item href="/HymenoAutre">Autres types d'hyménophores</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/CouleurSpore">Par couleurs de spores</NavDropdown.Item>
          </NavDropdown>



          <NavDropdown title="Champignons à formes particulières" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="/HymenoExterne">Hyménophores externes sans chapeaux</NavDropdown.Item>
            <NavDropdown.Item href="/HymenoInterne">Hyménophores internes</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  )
}
