import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Identification from "./components/Identification/Identification";
import Conseils from "./components/Conseils/Conseils";
import Jeux from "./components/Jeux/Jeux";
import "./css/App.css";

/**
 * @returns l'application, contient toutes les routes pour naviguer le site
 */
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Identification" element={<Identification />} />
        <Route path="/Conseils" element={<Conseils />}></Route>
        <Route path="/Jeux" element={<Jeux />} />
      </Routes>
    </div>
  );
}
