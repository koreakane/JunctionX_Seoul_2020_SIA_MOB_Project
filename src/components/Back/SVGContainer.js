import React from "react";
import styled, { css } from "styled-components";

const SingleSVG = styled.object`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  transition: opacity 700ms;

  ${(props) =>
    props.isSvgOn
      ? css`
          opacity: 1;
          z-index: 1;
        `
      : css`
          opacity: 0;
          z-index: 0;
        `}
`;

function SVGContainer({ isSvgOn, MobImage }) {
  const { svg } = MobImage;

  return <SingleSVG type="image/svg+xml" data={svg} isSvgOn={isSvgOn} />;
}

export default SVGContainer;
