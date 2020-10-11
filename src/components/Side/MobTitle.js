import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import LogoFile from "../../assets/mob_logo-02.svg";

const Title = styled.div`
  width: 320px;
  height: 48px;
  border-radius: 4px;

  margin-bottom: 11px;

  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #343a3f;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.24);
  overflow: hidden;
`;

const BackButton = styled.div`
  margin-left: 16px;

  font-family: Spoqa Han Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.04em;
  text-transform: uppercase;

  color: #26ddcd;
`;

const TitleText = styled.div`
  margin-left: 8px;

  font-family: Spoqa Han Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.04em;

  color: #ffffff;
`;

const Full = styled.div`
  width: 320px;
  height: 48px;

  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;

  ${(props) =>
    props.isDetail
      ? css`
          opacity: 1;
          transform: translateX(0px);
        `
      : css`
          opacity: 0;
          transform: translateX(320px);
        `}

  transition: opacity 700ms, transform 700ms ease-out;
`;

const Logo = styled.div`
  width: 320px;
  height: 48px;

  background: #343a3f;

  border-radius: 4px 0px 0px 4px;
  position: absolute;
  padding-right: 16px;

  ${(props) =>
    props.isDetail
      ? css`
          opacity: 0;
          transform: translateX(-320px);
        `
      : css`
          opacity: 1;
          transform: translateX(0px);
        `}

  transition: opacity 700ms, transform 700ms ease-out;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  width: 106px;
  height: 100%;

  background: #26ddcd;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoObject = styled.object`
  width: 80%;
`;

const LogoText = styled.div`
  font-family: Spoqa Han Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;

  text-align: right;
  letter-spacing: -0.04em;

  color: #a2a9b0;
`;

function MobTitle({ isDetail }) {
  return (
    <Link to={`/`}>
      <Title>
        <Full isDetail={isDetail}>
          <BackButton>&lt;</BackButton>
          <TitleText>Cluster Analysis</TitleText>
        </Full>
        <Logo isDetail={isDetail}>
          <LogoBox>
            <LogoObject type="image/svg+xml" data={LogoFile} />
          </LogoBox>
          <LogoText>Tracking Cluster Infection</LogoText>
        </Logo>
      </Title>
    </Link>
  );
}

export default MobTitle;
