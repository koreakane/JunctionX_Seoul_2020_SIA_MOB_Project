import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import { GoogleMap, Marker } from "@react-google-maps/api";
import { useHistory } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const initialCenter = {
  lat: 37.5665,
  lng: 126.978,
};

const options = {
  disableDefaultUI: true,
  mapTypeId: "hybrid",
};

const MapContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  transition:  opacity 700ms;


  ${(props) =>
    props.isImage
      ? css`
          opacity: 0;
          z-index: 0;
        `
      : css`
          opacity: 1;
          z-index: 1;
        `}
`;

function MapContainer({ id, MobList, isImage }) {
  let history = useHistory();

  const [center, setCenter] = useState(initialCenter);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    if (!id) {
      setZoom(8);
    } else {
      setCenter({
        lat: Number(MobList[id - 1].latitude),
        lng: Number(MobList[id - 1].longitude),
      });

      setZoom(13);
    }
  }, [id]);

  function clickMarker(index) {
    history.push(`/${index + 1}`);
  }

  return (
    <MapContainerDiv isImage={isImage}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        mapTypeId="satellite"
        options={options}
      >
        {MobList.map((val, index) => (
          <Marker
            key={val.id}
            position={{
              lat: Number(val.latitude),
              lng: Number(val.longitude),
            }}
            onClick={() => clickMarker(index)}
          />
        ))}
      </GoogleMap>
    </MapContainerDiv>
  );
}

export default MapContainer;
