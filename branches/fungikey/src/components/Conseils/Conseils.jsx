import React from "react";
import { Link } from "react-router-dom";
import JSONDATA from "../../assets/champi.json";
import { useState } from "react";
import { Card } from "react-bootstrap";
import * as ioCons from "react-icons/io";

/**
 * @returns La partie "Conseil" composée de fiches de champignons avec description, et conseils de préparation. Les fiches sont générées à parti de la base de données json des champignons
 * @constant searchTerm Constante {string} pour le mot écris dans la barre de recherche avec useState
 * @constant setSearchTerm Constante {string} pour le mot écris dans la barre de recherche avec useState
 */
export default function Conseils() {
  const [searchTerm, setSearchTerm] = useState("");

  const [dataa, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((dataa) => setData(dataa));
  }, []);

  console.log(dataa);

  return (
    <div>
      <div className="conseil-bar">
        <span className="conseil-title">Conseils Champignons</span>
      </div>

      <div className="container-identification">
        <Link to="/">
          <button className="button-retour">Retour</button>
        </Link>

        <div>
          <input
            className="input"
            type="text"
            placeholder="--Select--"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          ></input>
        </div>

        <p className="titres">Liste des champignons</p>

        {dataa
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.nom
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(searchTerm.toLowerCase()) ||
              val.nomlatin.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map(
            ({
              nom,
              nomlatin,
              toxic,
              famille,
              image,
              conseils,
              comestible,
              description,
            }) => (
              <div>
                <Card style={{ overflow: "auto", width: "100%" }}>
                  <Card.Img variant="top" src={image} />

                  <Card.Body>
                    <Card.Title className="card">{nom}</Card.Title>

                    <Card.Text>
                      <p className="latin">{nomlatin}</p>

                      <p>Famille: {famille} </p>

                      <p>Toxique: {toxic ? "Oui" : "Non"}</p>

                      <p>Comestible:{comestible ? "Oui" : "Non"}</p>

                      <p className="description"> Description: {description}</p>

                      <p>
                        {toxic
                          ? ""
                          : "Conseils de cueillette et de préparation: " +
                            conseils}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>

                <br />
              </div>
            )
          )}
        <div>
          <p>Sources : </p>

          <a
            href="https://www.guidedeschampignons.com/tous-les-champignons/"
            target="_blank"
          >
            Le guide des champignons
          </a>
          <br />
          <a
            href="https://fr.vikidia.org/wiki/Cat%C3%A9gorie:Champignon"
            target="_blank"
          >
            Vikidia
          </a>
          <br />
          <a
            href="https://www.chasseursdechampignons.com/blog/comment-trouver-des-champignons/"
            target="_blank"
          >
            Chasseurs des champignons
          </a>
          <br />
          <a href="https://www.dinosoria.com/champignon.html" target="_blank">
            Dinosoria
          </a>
        </div>
      </div>
    </div>
  );
}
