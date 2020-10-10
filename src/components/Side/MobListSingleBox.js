import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const MobListSingleBoxDiv = styled.div`
  width: 100%;
  border-radius: ${(props) =>
    props.isDetail ? "4px 4px 0px 0px" : "4px"};

  padding: 16px;

  background-color: #343a3f;
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

function MobListSingleBox({ isDetail = false, val }) {
  return (
    <MobListSingleBoxDiv isDetail={isDetail}>
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
        예상 감염 인원
      </MobListSingleBoxText>
      <MobListSingleBoxText
        right
        fontSize="72px"
        fontWeight="bold"
        lineHeight="80px"
      >
        {val.pred_infected}명
      </MobListSingleBoxText>
    </MobListSingleBoxDiv>
  );
}

export default MobListSingleBox;
