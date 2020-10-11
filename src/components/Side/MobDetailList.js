import React from "react";
import styled, { keyframes, css } from "styled-components";
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";

const slideDown = keyframes`
  from {
    transform: translateY(-90vh);
    opacity : 0%;
    display:none;
  }
  30%{
    transform: translateY(-90vh);
    opacity : 0%;
    display:none;
  }
  to {
    transform: translateY(0px);
    opacity : 100%;
    display:flex;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(0px);
    opacity : 100%;
    display:flex;
  }
  to {
    transform: translateY(-90vh);
    opacity : 0%;
    display:none;
  }
`;

const MobDetailDiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 11;

  animation-duration: 1.2s;
  animation-timing-function: ease-in;
  animation-name: ${slideDown};
  animation-fill-mode: forwards;

  ${(props) =>
    props.disappear &&
    css`
      animation-name: ${slideUp};
    `}
`;

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
  align-items: center;
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

  margin-bottom: 20px;
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

const InfoSet = ({ title, value, unit, children }) => {
  return (
    <InfoSetDiv>
      <TitleText color=" #697077">{title}</TitleText>
      <InfoSetSubDiv>
        {children ? (
          children
        ) : (
          <TitleText>
            {value}
            {unit}
          </TitleText>
        )}
      </InfoSetSubDiv>
    </InfoSetDiv>
  );
};

const OptionBarSwitch = ({ name, singleOption, handleChange }) => {
  return (
    <Switch
      checked={singleOption}
      onChange={handleChange}
      name={name}
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
};

const HistoryButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  background-color: transparent;

  cursor: pointer;
`;

const HistoryDate = styled.h4`
  font-family: Spoqa Han Sans;
  font-style: normal;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: -0.04em;

  font-weight: normal;
  color: ${(props) => (props.isSelected ? "#343A3F" : "#878D96")};
`;

const OptionBarHistory = ({
  date,
  index,
  isSelected,
  handleChangeHistory,
}) => {
  return (
    <HistoryButton
      isSelected={isSelected}
      onClick={() => handleChangeHistory(index)}
    >
      <HistoryDate isSelected={isSelected}>{date}</HistoryDate>
    </HistoryButton>
  );
};

function MobDetailList({ val, option, setOption, isDetail, MobImage }) {
  const { isImage, isSvgOn, selectedHistory } = option;

  const handleChange = (event) => {
    setOption({ ...option, [event.target.name]: event.target.checked });
  };

  const handleChangeHistory = (val) => {
    setOption({ ...option, selectedHistory: val });
  };

  return (
    <MobDetailDiv disappear={!isDetail}>
      <MobDetailInfoDiv>
        <TitleText fontWeight="bold">Crowd Info</TitleText>
        <InfoSet title="Total" value={val.susceptible} unit="people" />
        <InfoSet
          title="Early Infection"
          value={val.infected}
          unit="people"
        />
        <Separator />
        <TitleText fontWeight="bold">Mass Info</TitleText>
        <InfoSet title="Action Area" value={val.site_area} unit="㎡" />
        <InfoSet title="Duration" value={val.duration} unit="min" />
        <InfoSet
          title="External Air Circulation"
          value={val.vent_rate}
          unit="%"
        />
        <ThanksText
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/16K1OQkLD4BjgBdO8ePj6ytf-RpPMlJ6aXFg3PrIQBbQ/edit#gid=519189277"
        >
          Thanks to Jose L. Jimenez
        </ThanksText>
      </MobDetailInfoDiv>
      <MobDetailHistoryDiv>
        <TitleText fontWeight="bold">Option</TitleText>

        <InfoSet title="Map/Satelite">
          <OptionBarSwitch
            name="isImage"
            singleOption={isImage}
            handleChange={handleChange}
          />
        </InfoSet>
        <InfoSet title="SVG">
          <OptionBarSwitch
            name="isSvgOn"
            singleOption={isSvgOn}
            handleChange={handleChange}
          />
        </InfoSet>
      </MobDetailHistoryDiv>
      {MobImage ? (
        <MobDetailHistoryDiv>
          <TitleText fontWeight="bold">History</TitleText>
          {MobImage.images.map((val, index) => (
            <OptionBarHistory
              key={index}
              index={index}
              date={val.date}
              handleChangeHistory={handleChangeHistory}
              isSelected={index === selectedHistory}
            />
          ))}
        </MobDetailHistoryDiv>
      ) : null}
    </MobDetailDiv>
  );
}

export default MobDetailList;
