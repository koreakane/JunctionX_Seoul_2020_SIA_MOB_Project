import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 37.5665,
  lng: 126.978,
};

const Map = styled.div`
  width: 100%;
  height: 100%;
  background-color: skyblue;
  text-align: center;
`;

function MapContainer({ id }) {
  return (
    <Map>
      <LoadScript googleMapsApiKey="AIzaSyCpvhi1qnRrQDxMFJ692rwasvzMYXsjC-o">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          mapTypeId="satellite"
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </Map>
  );
}

export default MapContainer;
