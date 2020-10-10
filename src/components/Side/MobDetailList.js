import React from "react";
import styled from "styled-components";

const MobDetailInfoDiv = styled.div`
  width: 100%;
  border-radius: 0px 0px 4px 4px;

  margin-bottom: 20px;
  padding: 16px;

  background: #f2f4f8;
  backdrop-filter: blur(32px);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TitleText = styled.h4`
  font-family: Spoqa Han Sans;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.04em;

  color: ${(props) => props.color || "#343A3F"};
`;

const InfoSetDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

const InfoSetSubDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;

  background: #000000;
  opacity: 0.08;

  margin-top: 20px;
  margin-bottom: 20px;
`;

const MobDetailHistoryDiv = styled.div`
  width: 100%;
  border-radius: 4px;

  padding: 16px;

  background: #f2f4f8;
  backdrop-filter: blur(32px);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ThanksText = styled.a`
  width: 100%;
  font-family: Spoqa Han Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.04em;
  color: #a2a9b0;
  margin-top: 16px;
`;

const InfoSet = ({ title, value, unit }) => {
  return (
    <InfoSetDiv>
      <TitleText color=" #697077">{title}</TitleText>
      <InfoSetSubDiv>
        <TitleText>
          {value}
          {unit}
        </TitleText>
      </InfoSetSubDiv>
    </InfoSetDiv>
  );
};

function MobDetailList() {
  return (
    <React.Fragment>
      <MobDetailInfoDiv>
        <TitleText fontWeight="bold">인원 정보</TitleText>
        <InfoSet title="전체 인원" value={117} unit="명" />
        <InfoSet title="초기 감염 인원" value={3} unit="명" />
        <Separator />
        <TitleText fontWeight="bold">모임 정보</TitleText>
        <InfoSet title="행동 면적" value={62} unit="m" />
        <InfoSet title="지속 시간" value={120} unit="분" />
        <InfoSet title="외기 순환도" value={100} unit="%" />
        <ThanksText
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/16K1OQkLD4BjgBdO8ePj6ytf-RpPMlJ6aXFg3PrIQBbQ/edit#gid=519189277"
        >
          Thanks to Jose L. Jimenez
        </ThanksText>
      </MobDetailInfoDiv>
      <MobDetailHistoryDiv>
        <TitleText fontWeight="bold">기록</TitleText>
      </MobDetailHistoryDiv>
    </React.Fragment>
  );
}

export default MobDetailList;
