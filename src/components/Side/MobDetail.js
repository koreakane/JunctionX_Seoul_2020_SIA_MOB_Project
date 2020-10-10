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

function MobDetail({ setCurrentID }) {
  let { id } = useParams();

  return (
    <MobDetailContainer>
      <MobListSingleBox isDetail={true} />
      <MobDetailList />
    </MobDetailContainer>
  );
}

export default MobDetail;
