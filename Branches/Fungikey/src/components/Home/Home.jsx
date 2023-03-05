import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as ioCons from "react-icons/io";
import { Modal, Image } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
/**
 * @returns la page d'accueuil contenant le logo et le menu principal
 * @constant show, setShow: React state, pour la fenêtre modale
 * @constant setShow : React state, pour la fenêtre modale
 * @constant handleClose close: Lorsqu'on clique, cela ferme la fenêtre modale
 * @constant handleshow: Lorsqu'on clique sur le bouton avertissement, cela ouvre la fenêtre modale
 */
export default function Home() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <br />
      <br />
      <br />
      <Image
        fluid
        src="/fungikeyLogo.png"
        alt="logo"
        style={{ width: "70vw" }}
      ></Image>
      <br />
      <br />

      <div className="container">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Attention!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Cette application ne remplace pas l'avis d'un expert. Risque
            d'intoxication sévère.
            <br />
            <a href="https://www.anses.fr/fr/content/la-saison-des-champignons-en-avance-cette-année-soyez-vigilant-face-aux-risques-d">
              Site de l'Anses
            </a>
          </Modal.Body>
        </Modal>
        <div className="d-grid gap-2">
          <Link to="/Identification">
            <button className="button-main">Identification</button>
          </Link>

          <Link to="/Conseils">
            <button className="button-main"> Conseils </button>
          </Link>
          <Link to="/Forum">
            <button className="button-main"> Forum </button>
          </Link>
          <Link to="/Jeux">
            <button className="button-main"> Jeux </button>
          </Link>
          <Link to="/Recette">
            <button className="button-main"> Recettes </button>
          </Link>
          <Link to="/map">
            <button className="button-main"> Carte </button>
          </Link>

          <button className="button-main" onClick={handleShow}>
            <ioCons.IoIosWarning /> Avertissement
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton edge="end" aria-label="delete">
          <FacebookIcon
            color="primary"
            onClick={() =>
              window.open("https://www.facebook.com/fungikey", "_blank")
            }
          />
        </IconButton>
        <IconButton edge="end" aria-label="delete">
          <InstagramIcon
            color="secondary"
            onClick={() =>
              window.open("https://instagram.com/fungikey", "_blank")
            }
          />
        </IconButton>
        <IconButton edge="end" aria-label="delete">
          <TwitterIcon
            color="primary"
            onClick={() =>
              window.open("https://www.youtube.com/fungikey", "_blank")
            }
          />
        </IconButton>
        <IconButton edge="end" aria-label="delete">
          <YouTubeIcon
            sx={{ color: "red" }}
            onClick={() => window.open("https://www.youtube.com/", "_blank")}
          />
        </IconButton>
      </div>
    </>
  );
}
