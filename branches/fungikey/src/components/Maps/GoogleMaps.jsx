import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { Navbar, Container } from "react-bootstrap";
import "./GoogleMaps.css";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export function GoogleMaps({ google, locations }) {
  const [userLocation, setUserLocation] = useState({});
  const [points, setPoints] = useState([]);
  const [locationFetched, setLocationFetched] = useState(false);

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
                />
              ))
            : null}
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
