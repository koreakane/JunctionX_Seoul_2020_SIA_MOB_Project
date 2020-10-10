import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MobListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;

  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MobListSingleBox = styled.div`
  width: 100%;
  height: 100px;
  background-color: lightGray;
`;

function MobListContainer({ MobList }) {
  return (
    <MobListDiv>
      {MobList.map((val, index) => (
        <Link
          key={val}
          style={{ width: "100%", marginBottom: "20px" }}
          to={`/${val}`}
        >
          <MobListSingleBox>{index + 1}</MobListSingleBox>
        </Link>
      ))}
    </MobListDiv>
  );
}

export default MobListContainer;
