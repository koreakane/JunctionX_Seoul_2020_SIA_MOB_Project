import React from "react";
import styled, { css } from "styled-components";

const ImageContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  transition: opacity 700ms;

  ${(props) =>
    props.isImage
      ? css`
          opacity: 1;
          z-index: 1;
        `
      : css`
          opacity: 0;
          z-index: 0;
        `}
`;

const SingleImageDiv = styled.img`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  transition: opacity 700ms;


  ${(props) =>
    props.isSelectedImage
      ? css`
          opacity: 1;
          z-index: 1;
        `
      : css`
          opacity: 0;
          z-index: 0;
        `}
`;

function ImageContainer({ isImage, isSvgOn, MobImage, selectedHistory }) {
  const { images, svg } = MobImage;

  return (
    <ImageContainerDiv isImage={isImage}>
      {images.map((val, index) => (
        <SingleImageDiv
          key={index}
          src={val.image}
          isSelectedImage={index === selectedHistory}
        />
      ))}
    </ImageContainerDiv>
  );
}

export default ImageContainer;
