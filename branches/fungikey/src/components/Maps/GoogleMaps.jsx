import React from "react";
import { Link } from "react-router-dom";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

/**
 * @returns Une page principale de jeux
 *
 */

const mapStyles = {
  width: "100%",
  height: "100%",
};

export function GoogleMaps({ google, locations = [] }) {
  return (
    <Map
      google={google}
      containerStyle={{
        position: "static",
        width: "100%",
        height: "100%",
      }}
      style={{
        width: "100%",
        height: "100%",
      }}
      center={locations[0]}
      initialCenter={locations[0]}
      zoom={locations.length === 1 ? 18 : 13}
      disableDefaultUI={true}
    >
      {locations.map((coords) => (
        <Marker position={coords} />
      ))}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDyHuTxfsAQIv8KRc4llJwR_-kEGUY4_bc",
})(GoogleMaps);
