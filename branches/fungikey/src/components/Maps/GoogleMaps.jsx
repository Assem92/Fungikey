import React, { useState, useEffect } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

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
    <Map
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
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDyHuTxfsAQIv8KRc4llJwR_-kEGUY4_bc",
})(GoogleMaps);
