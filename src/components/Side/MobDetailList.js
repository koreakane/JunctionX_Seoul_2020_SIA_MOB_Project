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

const SliderDiv = styled.div`
  min-width: 200px;
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

const OptionBarSlider = ({ name, historySlider, handleChange }) => {
  function valuetext(value) {
    return `${value}년`;
  }

  function valueLabelFormat(value) {
    return historySlider.findIndex((mark) => mark.value === value) + 1;
  }

  return (
    <SliderDiv>
      <Slider
        defaultValue={historySlider[historySlider.length - 1].value}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="off"
        marks={historySlider}
        onChange={handleChange}
        min={1998}
        max={2020}
      />
    </SliderDiv>
  );
};

function MobDetailList({ val, option, setOption, isDetail }) {
  const { isImage, isSvgOn, historySlider, selectedHistory } = option;

  const handleChange = (event) => {
    setOption({ ...option, [event.target.name]: event.target.checked });
  };

  const handleChangeSlider = (event, val) => {
    const valIndex = historySlider.findIndex((mark) => mark.value === val);
    if (valIndex !== selectedHistory)
      setOption({ ...option, selectedHistory: valIndex });
  };

  return (
    <MobDetailDiv disappear={!isDetail}>
      <MobDetailInfoDiv>
        <TitleText fontWeight="bold">인원 정보</TitleText>
        <InfoSet title="전체 인원" value={val.susceptible} unit="명" />
        <InfoSet title="초기 감염 인원" value={val.infected} unit="명" />
        <Separator />
        <TitleText fontWeight="bold">모임 정보</TitleText>
        <InfoSet title="행동 면적" value={val.site_area} unit="㎡" />
        <InfoSet title="지속 시간" value={val.susceptible} unit="분" />
        <InfoSet title="외기 순환도" value={val.vent_rate} unit="%" />
        <ThanksText
          target="_blank"
          href="https://docs.google.com/spreadsheets/d/16K1OQkLD4BjgBdO8ePj6ytf-RpPMlJ6aXFg3PrIQBbQ/edit#gid=519189277"
        >
          Thanks to Jose L. Jimenez
        </ThanksText>
      </MobDetailInfoDiv>
      <MobDetailHistoryDiv>
        <TitleText fontWeight="bold">설정</TitleText>

        <InfoSet title="지도/위성사진">
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
        <InfoSet title="년도">
          <OptionBarSlider
            historySlider={historySlider}
            handleChange={handleChangeSlider}
          />
        </InfoSet>
      </MobDetailHistoryDiv>
      <MobDetailHistoryDiv>
        <TitleText fontWeight="bold">기록</TitleText>
      </MobDetailHistoryDiv>
    </MobDetailDiv>
  );
}

export default MobDetailList;
