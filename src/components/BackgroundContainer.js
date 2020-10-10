import React, { useState, useCallback } from "react";
import styled from "styled-components";
import MapContainer from "./Back/MapContainer";

const BackgroundContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: skyblue;
  text-align: center;
`;

function BackgroundContainer({ id }) {
  return (
    <BackgroundContainerDiv>
      <MapContainer />
    </BackgroundContainerDiv>
  );
}

export default BackgroundContainer;
