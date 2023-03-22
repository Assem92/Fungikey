import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import * as ioCons from "react-icons/io";
import { Modal, Image } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Card, CardContent } from "@mui/material";
import LeafIcon from "@mui/icons-material/LocalFlorist";
import ChatboxesIcon from "@mui/icons-material/Chat";
import RestaurantIcon from "@mui/icons-material/RestaurantMenu";
import MapIcon from "@mui/icons-material/Map";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CalendarMonthRounded } from "@mui/icons-material";
/**
 * @returns la page d'accueuil contenant le logo et le menu principal
 * @constant show, setShow: React state, pour la fenêtre modale
 * @constant setShow : React state, pour la fenêtre modale
 * @constant handleClose close: Lorsqu'on clique, cela ferme la fenêtre modale
 * @constant handleshow: Lorsqu'on clique sur le bouton avertissement, cela ouvre la fenêtre modale
 */
export default function Home() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const menuItems = [
    { name: "Identification", icon: <LeafIcon /> },
    { name: "Conseils", icon: <EmojiObjectsIcon /> },
    { name: "Forum", icon: <ChatboxesIcon /> },
    { name: "Jeux", icon: <SportsEsportsIcon /> },
    { name: "Recettes", icon: <RestaurantIcon /> },
    { name: "Carte", icon: <MapIcon /> },
    { name: "Shop", icon: <ShoppingCartIcon /> },
    { name: "Calendrier", icon: <CalendarMonthRounded /> },
  ];
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {menuItems.map((item, index) => (
            <Card
              key={index}
              sx={{
                width: "140px",
                margin: "10px",
                backgroundColor: "#356d62",
              }}
              variant="outlined"
            >
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <IconButton
                  sx={{ fontSize: "60px" }}
                  onClick={() => handleClick(`/${item.name.toLowerCase()}`)}
                >
                  {item.icon}
                </IconButton>{" "}
                <h4 style={{ color: "black" }}>{item.name}</h4>
              </CardContent>
            </Card>
          ))}
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
