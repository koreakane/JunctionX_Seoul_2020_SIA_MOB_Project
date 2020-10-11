import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useHistory } from "react-router-dom";

import MobListSingleBox from "./MobListSingleBox";

const MobListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 92px);
  padding-bottom: 0px;
  z-index: 10;

  position: absolute;
  top: 60px;


  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

function MobListContainer({ MobList, isDetail, currentID }) {
  let history = useHistory();
  const [fixedMobList, setFixedMobList] = useState(MobList);

  function handleClick(selectedID) {
    history.push(`/${selectedID}`);
  }

  useEffect(() => {
    if (isDetail) {
      setTimeout(() => setFixedMobList([MobList[currentID - 1]]), 700);
    } else {
      setTimeout(() => setFixedMobList(MobList), 700);
    }
  }, [isDetail]);

  return (
    <MobListDiv isDetail={isDetail}>
      {fixedMobList.map((val, index) => (
        <MobListSingleBox
          key={val.id}
          isDetail={isDetail}
          isExist={val.id == currentID}
          val={val}
          onClick={() => handleClick(val.id)}
        />
      ))}
    </MobListDiv>
  );
}

export default MobListContainer;
