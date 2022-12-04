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

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import recetteList from "../../assets/recette.json";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import {
  Nav,
  Navbar,
  Container,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div>
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

      <List dense={dense}>
        {recetteList.map((x) => (
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <ArrowForwardIosIcon />
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

      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Avatar with text and icon
            </Typography>
            <Demo>
              <List dense={dense}>
                {generate(
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <ArrowIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Single-line item"
                      secondary={secondary ? "Secondary text" : null}
                    />
                  </ListItem>
                )}
              </List>
            </Demo>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
