import { React, useState, useMemo } from "react";
import * as data from "../../assets/champi.json";
import { Modal, Card } from "react-bootstrap";

/**

 * @returns Un petit jeu qui affiche une question, avec bouton de réponse et score
 * La question est générée en prenant une famille de champignons aléatoirement dans la base de données.
 */

export const CardMushroom = () => {
  /**
   * @constant show Pour afficher la réponse, useState
   * @constant setShow Pour afficher la réponse, useState
   * @constant handleClose Change "setShow" en false pour fermer la réponse
   * @constant handleShow Change "setShow" en false pour afficher la réponse
   */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /**
   * @function useMemo Afin que le champignon tiré ne change pas à chaque changement d'état/rafraîchissement des pages
   * @constant randomMushroom un chapignon au hasard appartenant la base de données
   * @constant mushrooms on importe la base données comme une constante (liste)
   * @constant randomIndex une index au hasard de la liste de champignons
   * @returns un champignon au hasard
   */

  const randomMushroom = useMemo(() => {
    const mushrooms = data;
    const randomIndex = Math.floor(Math.random() * mushrooms.length);
    return mushrooms[randomIndex];
  }, []);

  /**
   * @returns une carte/fiche contenant des indices sur le champignons à trouver, et un bouton de réponse qui montre la répons edans une fenêtre modale
   */
  function getRandomMushroom() {
    return (
      <>
        <Card style={{ overflow: "auto", width: "100%" }}>
          <Card.Img variant="top" src={randomMushroom.image} />
          <Card.Body>
            <Card.Title> {randomMushroom.famille}</Card.Title>
            <Card.Text>
              <p>{randomMushroom.toxic ? "Toxique: oui" : ""}</p>
              <p>{randomMushroom.comestible ? "Comestible: oui" : ""}</p>
            </Card.Text>
            <button className="button-retour" onClick={handleShow}>
              Réponse
            </button>
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Réponse</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card-back">
              <p>La réponse est:</p>
              <p>{randomMushroom.nom}</p>
              <p className="latin">{randomMushroom.nomlatin}</p>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  return <>{getRandomMushroom()}</>;
};
