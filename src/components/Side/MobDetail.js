import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const MobDetailContainer = styled.div`
  width: 100%;
  height: 800px;
  background-color: lightGray;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MobDetail({ setCurrentID }) {
  let { id } = useParams();

  return <MobDetailContainer>{id}</MobDetailContainer>;
}

export default MobDetail;
