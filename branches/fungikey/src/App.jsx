import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Identification from "./components/Identification/Identification";
import IdentificatorMain from "./components/Identification/identificator/IdentificatorMain";
import IdentificatorComp from "./components/Identification/identificator/IdentificatorComp";
import IdentificationPics from "./components/Identification/IdentificationPics";

import Conseils from "./components/Conseils/Conseils";

import Jeu1 from "./components/JeuParFamille/Jeu1";
import Jeu3 from "./components/JeuParChampi/Jeu3";
import Jeu2 from "./components/Jeu2/Jeu2";
import Jeux from "./components/Jeux/Jeux";
import HymenoTubes from "./components/Identification/HymenoTubes";
import HymenoAutre from "./components/Identification/HymenoAutre";
import HymenoInterne from "./components/Identification/HymenoInterne";
import HymenoExterne from "./components/Identification/HymenoExterne";
import CouleurSpore from "./components/Identification/CouleurSpore";
import HymenoLames from "./components/Identification/HymenoLames";
import GoogleMaps from "./components/Maps/GoogleMaps";
import Recette from "./components/Recette/Recette";
import RecetteCard from "./components/Recette/RecetteCard";
import Incorrect from "./components/Jeu2/Incorrect";
import Correct from "./components/Jeu2/Correct";
import Forum from "./components/Forum/Forum";

import "./css/App.css";
import "./css/index.css";

/**
 * @returns l'application, contient toutes les routes pour naviguer le site
 */
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Identification" element={<Identification />} />
        <Route path="/IdentificationPics" element={<IdentificationPics />} />

        <Route path="/HymenoTubes" element={<HymenoTubes />} />
        <Route path="/HymenoAutre" element={<HymenoAutre />} />
        <Route path="/CouleurSpore" element={<CouleurSpore />} />
        <Route path="/HymenoInterne" element={<HymenoInterne />} />
        <Route path="/HymenoExterne" element={<HymenoExterne />} />
        <Route path="/HymenoLames" element={<HymenoLames />} />
        <Route path="/IdentificatorMain" element={<IdentificatorMain />} />
        <Route path="/IdentificatorComp" element={<IdentificatorComp />} />
        <Route path="/Forum" element={<Forum />} />

        <Route path="/Conseils" element={<Conseils />}></Route>

        <Route path="/Jeu1" element={<Jeu1 />} />
        <Route path="/Jeu2" element={<Jeu2 />} />
        <Route path="/Jeu3" element={<Jeu3 />} />
        <Route path="/Jeux" element={<Jeux />} />

        <Route path="/map" element={<GoogleMaps />} />
        <Route path="/Recette" element={<Recette />} />
        <Route path="/Recette/:id" element={<RecetteCard />} />

        <Route path="/Incorrect" element={<Incorrect />} />
        <Route path="/Correct" element={<Correct />} />
      </Routes>
    </div>
  );
}
