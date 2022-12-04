import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";

/**
 * @returns Une page principale de jeux
 */
export default function RecetteCard() {
  let params = useParams();

  const [searchTerm, setSearchTerm] = useState("");

  const [dataa, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/recette/" + params.id)
      .then((res) => res.json())
      .then((dataa) => setData(dataa));
  }, []);

  console.log(dataa);

  return (
    <>
      <Navbar className="color-nav" expand={false}>
        <Container fluid>
          <Navbar.Brand href="/Recette">
            <img
              alt=""
              src="/images/icons/60.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <span className="sidebar-title">Recettes</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className="container-identification">
        <h2 className="h2-identification">{dataa?.name}</h2>
        <br></br>
        <h5>ingredients</h5>

        <ul>
          {dataa?.ingredients?.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
        <h5>instructions</h5>
        <p>{dataa?.instructions}</p>

        <Link to="/Recette">
          <button className="button-retour">Retour</button>
        </Link>
      </div>
    </>
  );
}
