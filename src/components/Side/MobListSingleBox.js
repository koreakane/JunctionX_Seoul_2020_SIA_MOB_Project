import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

const slideLeft = keyframes`
  from {
    transform: translateX(0px);
    opacity : 100%;
    display : block;

  }
  to {
    transform: translateX(-480px);
    opacity : 0%;
    display:none;

  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(-480px);
    opacity : 0%;
    display:none;

  }
  to {
    transform: translateX(0px);
    opacity : 100%;
    display : block;
  }
`;

const MobListSingleBoxDiv = styled.div`
  width: 100%;
  border-radius: ${(props) =>
    props.isDetail ? "4px 4px 0px 0px" : "4px"};

  padding: 16px;
  margin-bottom ${(props) => (props.isDetail ? "20px" : "20px")}; 
  z-index: 10;

  background-color: #343a3f;
  cursor: pointer;

  transition-property : all;
  transition-duration : 0.7s;
  transition-timing-function: ease-in;

  animation-duration: 0.7s;
  animation-timing-function: ease-in;
  animation-name: ${slideRight};
  animation-fill-mode: forwards;

  ${(props) =>
    !props.isDetail ||
    (!props.isExist &&
      css`
        animation-name: ${slideLeft};
      `)}
`;

const MobListSingleBoxText = styled.div`
  width: 100%;
  color: ${(props) => props.color || "white"};

  ${(props) =>
    props.right
      ? css`
          text-align: right;
        `
      : css`
          text-align: left;
        `}

  font-size: ${(props) => props.fontSize || "12px"};
  font-weight: ${(props) => props.fontWeight || "normal"};

  font-family: Spoqa Han Sans;

  font-style: normal;
  margin-bottom: ${(props) => props.marginBottom || "0"};

  line-height: ${(props) => props.lineHeight || "0"};
  letter-spacing: -0.04em;
`;

function MobListSingleBox({ isExist, isDetail = false, val, onClick }) {
  return (
    <MobListSingleBoxDiv
      onClick={isDetail ? null : onClick}
      isDetail={isDetail}
      isExist={isExist}
    >
      <MobListSingleBoxText
        fontSize="17px"
        color="#26DDCD"
        fontWeight="bold"
        lineHeight="25px"
      >
        {val.name}
      </MobListSingleBoxText>
      <MobListSingleBoxText
        color="#A2A9B0"
        marginBottom="8px"
        lineHeight="18px"
      >
        {val.date}
      </MobListSingleBoxText>
      <MobListSingleBoxText
        right
        fontSize="17px"
        color="#A2A9B0"
        fontWeight="bold"
        lineHeight="25px"
      >
        Estimated Infections
      </MobListSingleBoxText>
      <MobListSingleBoxText
        right
        fontSize="72px"
        fontWeight="bold"
        lineHeight="80px"
      >
        {val.pred_infected}
      </MobListSingleBoxText>
    </MobListSingleBoxDiv>
  );
}

export default MobListSingleBox;
