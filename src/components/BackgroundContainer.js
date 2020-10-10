import React, { useState, useCallback } from "react";
import styled from "styled-components";
import MapContainer from "./Back/MapContainer";
import ImageContainer from "./Back/ImageContainer";
import SVGContainer from "./Back/SVGContainer";

const BackgroundContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  text-align: center;
  position: relative;
`;

function BackgroundContainer({ id, MobList, MobImage, option }) {
  const { isImage, isSvgOn, historySlider, selectedHistory } = option;

  return (
    <BackgroundContainerDiv>
      <MapContainer isImage={isImage} id={id} MobList={MobList} />
      {MobImage ? (
        <ImageContainer
          isImage={isImage}
          historySlider={historySlider}
          MobImage={MobImage}
          selectedHistory={selectedHistory}
        />
      ) : null}
      {MobImage ? (
        <SVGContainer isSvgOn={isSvgOn} MobImage={MobImage} />
      ) : null}
    </BackgroundContainerDiv>
  );
}

export default BackgroundContainer;
