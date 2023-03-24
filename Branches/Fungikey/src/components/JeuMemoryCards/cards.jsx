import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import "./file.css";

import CustomNavbar from "../utilities/NavBar/CustomNavbar";

function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/imgMemoryGame/cepe.png", stat: "" },
      { id: 1, img: "/imgMemoryGame/cepe.png", stat: "" },
      { id: 2, img: "/imgMemoryGame/Amanite.png", stat: "" },
      { id: 2, img: "/imgMemoryGame/Amanite.png", stat: "" },
      { id: 3, img: "/imgMemoryGame/oreades.png", stat: "" },
      { id: 3, img: "/imgMemoryGame/oreades.png", stat: "" },
      { id: 4, img: "/imgMemoryGame/mouton.png", stat: "" },
      { id: 4, img: "/imgMemoryGame/mouton.png", stat: "" },
      { id: 5, img: "/imgMemoryGame/rose.png", stat: "" },
      { id: 5, img: "/imgMemoryGame/rose.png", stat: "" },
      { id: 6, img: "/imgMemoryGame/coulemelle.png", stat: "" },
      { id: 6, img: "/imgMemoryGame/coulemelle.png", stat: "" },
      { id: 7, img: "/imgMemoryGame/girolle.png", stat: "" },
      { id: 7, img: "/imgMemoryGame/girolle.png", stat: "" },
      { id: 8, img: "/imgMemoryGame/coprin.png", stat: "" },
      { id: 8, img: "/imgMemoryGame/coprin.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div>
      {" "}
      <CustomNavbar title="Jeu carte de memoire" link="/JeuMemoryCards" />{" "}
      <div className="containers">
        {items.map((item, index) => (
          <Card key={index} item={item} id={index} handleClick={handleClick} />
        ))}
        <Link to="/">
          <button className="button-retour">Retour</button>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
