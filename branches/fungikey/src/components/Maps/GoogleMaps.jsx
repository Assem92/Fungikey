import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { Navbar, Container } from "react-bootstrap";
import "./GoogleMaps.css";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export function GoogleMaps({ google, locations = [] }) {
  const [userLocation, setUserLocation] = useState({});

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => console.log(error)
      );
    }
  }, []);

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
          {locations.map((coords) => (
            <Marker position={coords} />
          ))}
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
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDyHuTxfsAQIv8KRc4llJwR_-kEGUY4_bc",
})(GoogleMaps);
