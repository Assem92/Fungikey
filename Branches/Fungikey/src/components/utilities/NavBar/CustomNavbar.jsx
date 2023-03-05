import { Navbar, Container } from "react-bootstrap";

function CustomNavbar(props) {
  return (
    <Navbar className="color-nav" expand={false}>
      <Container fluid>
        <Navbar.Brand href={props.link}>
          <img
            alt=""
            src="Logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <span className="sidebar-title">{props.title}</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
export default CustomNavbar;
