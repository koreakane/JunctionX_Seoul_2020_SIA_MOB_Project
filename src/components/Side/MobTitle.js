import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.div`
  width: 320px;
  height: 48px;
  border-radius: 4px;

  margin-bottom: 11px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background: #343a3f;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.24);
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
  text-transform: uppercase;

  color: #ffffff;
`;

function MobTitle({ id }) {
  return (
    <Link to={`/`}>
      <Title>
        <BackButton>&lt;</BackButton>
        <TitleText>집단 감염 예상치</TitleText>
      </Title>
    </Link>
  );
}

export default MobTitle;
