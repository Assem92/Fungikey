import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//import recetteList from "../../assets/recette.json";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const navigate = useNavigate();

  const [recetteList, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/recette/")
      .then((res) => res.json())
      .then((recetteList) => setData(recetteList));
  }, []);

  console.log(recetteList);

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div>
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
        <List dense={dense}>
          {recetteList?.map((x) => (
            <ListItem
              key={x.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <ArrowForwardIosIcon
                    onClick={() => navigate("/Recette/" + x.id)}
                  />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <RestaurantIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={x.name}
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItem>
          ))}
        </List>
        <Link to="/">
          <button className="button-retour">Retour</button>
        </Link>
      </div>
    </div>
  );
}
