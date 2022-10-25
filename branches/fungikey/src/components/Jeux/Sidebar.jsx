import React from 'react'
import { Nav, Navbar, Container, Offcanvas} from 'react-bootstrap'

/**
 * @returns La barre de navigation s'ouvrant sur le côté droit
 * Librarie: React-Bootstrap
 */
export default function Sidebar() {
  return (
    <Navbar className="color-nav" expand={false}>
      <Container fluid>
      <Navbar.Brand href="/Jeux">
      <img
          alt=""
          src="/images/icons/60.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        <span className="sidebar-title">Jeux</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
        Image
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Jeux</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link href="/Jeu1">Jeu par famille</Nav.Link>
        <Nav.Link href="/Jeu3">Jeu par champignons</Nav.Link>
        <Nav.Link href="/Jeu2">4 images 1 mot</Nav.Link>
         


        </Nav>
        
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
  )
}
