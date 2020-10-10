import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import MobListSingleBox from "./MobListSingleBox";
import MobDetailList from "./MobDetailList";

const MobDetailContainer = styled.div`
  width: 100%;
  border-radius: 4px;

  background-color: transparent;
  margin-bottom: 20px;

  max-height: calc(100vh - 92px);
  padding-bottom: 37px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

function MobDetail({ MobList, option, setOption }) {
  let { id } = useParams();

  useEffect(() => {
    console.log(MobList[Number(id) - 1]);
  }, [MobList]);

  return (
    <MobDetailContainer>
      <MobListSingleBox val={MobList[Number(id) - 1]} isDetail={true} />
      {option.historySlider[0] ? (
        <MobDetailList
          option={option}
          setOption={setOption}
          val={MobList[Number(id) - 1]}
        />
      ) : null}
    </MobDetailContainer>
  );
}

export default MobDetail;
