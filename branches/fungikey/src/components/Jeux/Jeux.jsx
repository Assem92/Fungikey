import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

/**
 * @returns Une page principale de jeux
 */
export default function Jeux() {
  return (
    <>
      <Sidebar />
      <div className="container-identification">
        <h2>Jeu par famille</h2>
        <ul>
          <li>Réviser vos familles de champignons</li>
          <li>
            A partir des indices données, essayez de deviner la famille de
            champignons. Cliquez sur "réponse" pour vérifier!{" "}
          </li>
          <li>Cliquez sur "Recommencer" pour générer une autre question!</li>
        </ul>
        <h2>Jeu par champignons</h2>
        <ul>
          <li>Réviser vos champignons</li>
          <li>
            A partir des indices données, essayez de deviner le champignon.
            Cliquez sur "réponse" pour vérifier!{" "}
          </li>
          <li>Cliquez sur "Recommencer" pour générer une autre question!</li>
        </ul>
        <h2>4 Images 1 Mot</h2>
        <ul>
          <li>
            Parmi quatre images, choisissez l'image qui correspond au champignon
          </li>
          <li>Selon votre réponse, une nouvelle page s'affichera!</li>
        </ul>
        <h2>Memory Cards</h2>
        <ul>
          <li>Touver le 2 cartes qui se ressemblent</li>
          <li>Touver le 2 cartes qui se ressemblent</li>
        </ul>

        <Link to="/">
          <button className="button-retour">Retour</button>
        </Link>
      </div>
    </>
  );
}
