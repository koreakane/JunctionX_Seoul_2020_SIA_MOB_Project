import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import MobListSingleBox from "./MobListSingleBox";

const MobListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: calc(100vh - 92px);
  padding-bottom: 37px;

  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

function MobListContainer({ MobList }) {
  return (
    <MobListDiv>
      {MobList.map((val, index) => (
        <Link
          key={val.id}
          style={{ width: "100%", marginBottom: "20px" }}
          to={`/${val.id}`}
        >
          <MobListSingleBox val={val} />
        </Link>
      ))}
    </MobListDiv>
  );
}

export default MobListContainer;
