import * as React from "react";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import CustomNavbar from "../utilities/NavBar/CustomNavbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//import recetteList from "../../assets/recette.json";

import RestaurantIcon from "@mui/icons-material/Restaurant";

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
      <CustomNavbar title="Recettes" link="/Recette" />

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
