import { useState, useMemo } from "react";
import * as data from "../../assets/familleChampi.json";
import { Modal } from "react-bootstrap";
import React from "react";

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

  //get data from api
  const [FamilleChamiDATA, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/familleChampi")
      .then((res) => res.json())
      .then((FamilleChamiDATA) => setData(FamilleChamiDATA));
  }, []);
  console.log(FamilleChamiDATA);
  //

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
  }, [FamilleChamiDATA]);

  /**
   * @returns une carte/fiche contenant des indices sur le champignons à trouver, et un bouton de réponse qui montre la réponse dans une fenêtre modale
   */
  function getRandomMushroom() {
    return (
      <div className="card">
        <div className="card-front">
          <p>A quel groupe correspond ces clés? </p>

          <ul>
            <li>Commence par: {randomMushroom.nom_famille[0]}</li>
            <li>Type Champignon: {randomMushroom.type_champignon}</li>
            <li>Hymenophores: {randomMushroom.type_chapeau.hymenophores}</li>
            {randomMushroom.type_chapeau.type_lames ? (
              <li>Type lames: {randomMushroom.type_chapeau.type_lames}</li>
            ) : (
              ""
            )}
            {randomMushroom.type_chapeau.couleur_spores ? (
              <li>
                Couleur spores: {randomMushroom.type_chapeau.couleur_spores}
              </li>
            ) : (
              ""
            )}
            {randomMushroom.type_chapeau.stipe ? (
              <li>Stipe: {randomMushroom.type_chapeau.stipe}</li>
            ) : (
              ""
            )}
            {randomMushroom.type_chapeau.trame ? (
              <li>Trame: {randomMushroom.type_chapeau.trame}</li>
            ) : (
              ""
            )}
            {randomMushroom.type_chapeau.forme ? (
              <li>Forme: {randomMushroom.type_chapeau.forme}</li>
            ) : (
              ""
            )}
            {randomMushroom.type_chapeau.cuticule ? (
              <li>Forme: {randomMushroom.type_chapeau.cuticule}</li>
            ) : (
              ""
            )}
          </ul>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Réponse</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="card-back">
              <p>La réponse est:</p>
              <p>{randomMushroom.nom_famille}</p>
            </div>
          </Modal.Body>
        </Modal>

        <button className="button-retour" onClick={handleShow}>
          Réponse
        </button>
      </div>
    );
  }

  return <>{getRandomMushroom()}</>;
};
