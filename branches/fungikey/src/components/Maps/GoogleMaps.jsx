import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import { Navbar, Container } from "react-bootstrap";
import "./GoogleMaps.css";
import { useTheme } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Popover from "@mui/material/Popover";
//import { Box } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Popup from "./Popup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

export function GoogleMaps({ google, locations }) {
  const [userLocation, setUserLocation] = useState({});
  const [points, setPoints] = useState([]);
  const [locationFetched, setLocationFetched] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const [showInfoWindow, setInfoWindowFlag] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setLocationFetched(true);
        },
        (error) => console.log(error)
      );
    }
  }, []);

  useEffect(() => {
    if (locationFetched) {
      fetch(`/api/closest-points/${userLocation.lat}/${userLocation.lng}`)
        .then((response) => response.json())
        .then((data) => {
          setPoints(data);
        })
        .catch((error) => console.log("fffffff" + error));
    }
  }, [locationFetched]);

  console.log(userLocation);
  console.log(`/api/closest-points/${userLocation?.lat}/${userLocation?.lng}`);

  console.log(points);

  //get champi types
  const [champiTypes, setChampiTypes] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    fetch("/api/champi-types")
      .then((res) => res.json())
      .then((data) => setChampiTypes(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {
    fetch("/api/location", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        latitude: userLocation.lat,
        longitude: userLocation.lng,
        type: selectedOption,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Location saved:", data);
        handleClose();
      })
      .catch((error) => {
        console.error("Error saving location:", error);
      });
  };

  const onMarkerClick = (marker) => {
    setSelectedMarker(marker);
    setInfoWindowFlag(true);
  };

  return (
    <div>
      <Navbar className="color-nav" expand={false}>
        <Container fluid>
          <Navbar.Brand href="/map">
            <img
              alt=""
              src="/images/icons/60.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <span className="sidebar-title">Map</span>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div>
        <Map
          className="map"
          google={google}
          containerStyle={{
            position: "static",
            width: "100%",
            height: "100%",
          }}
          style={mapStyles}
          center={userLocation}
          initialCenter={userLocation}
          zoom={18}
          disableDefaultUI={true}
        >
          {points?.length ?? 0
            ? points?.map((point) => (
                <Marker
                  key={point.id}
                  position={{
                    lat: parseFloat(point?.latitude),
                    lng: parseFloat(point?.longitude),
                  }}
                  onClick={() => onMarkerClick(point)}
                />
              ))
            : null}

          {selectedMarker && (
            <InfoWindow
              visible={showInfoWindow}
              position={{
                lat: parseFloat(selectedMarker.latitude),
                lng: parseFloat(selectedMarker.longitude),
              }}
              onCloseClick={() => {
                setInfoWindowFlag(false);
                setSelectedMarker(null);
              }}
            >
              <div>
                <h4>Type: {selectedMarker?.type}</h4>
                <p>Latitude: {selectedMarker?.latitude}</p>
                <p>Longitude: {selectedMarker?.longitude}</p>
              </div>
            </InfoWindow>
          )}

          {userLocation.lat && (
            <Marker
              position={userLocation}
              icon={{
                url: "/images/icons/userlocation.png",
                scaledSize: new google.maps.Size(30, 30),
              }}
            />
          )}
        </Map>
      </div>
      <Fab sx={fabStyle} color="primary" aria-label="add" onClick={handleClick}>
        <AddIcon />
      </Fab>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography>Latitude: {userLocation.lat}</Typography>
          <Typography>Longitude: {userLocation.lng}</Typography>
          <Select
            label="Select an option"
            value={selectedOption}
            onChange={handleSelect}
          >
            {champiTypes.map((type) => (
              <MenuItem value={type} key={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Popover>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDyHuTxfsAQIv8KRc4llJwR_-kEGUY4_bc",
})(GoogleMaps);
