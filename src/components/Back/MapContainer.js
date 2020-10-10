import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 37.5665,
  lng: 126.978,
};

const options = {
  disableDefaultUI: true,
};

function MapContainer() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCpvhi1qnRrQDxMFJ692rwasvzMYXsjC-o">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        mapTypeId="satellite"
        options={options}
      ></GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
