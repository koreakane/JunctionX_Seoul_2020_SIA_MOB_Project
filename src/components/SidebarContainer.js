import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import MobListContainer from "./Side/MobListContainer";
import MobDetail from "./Side/MobDetail";

const Sidebar = styled.div`
  position: absolute;
  top: 70px;
  left: 24px;
  width: 20%;
  height: 90%;
  max-height: 90%;

  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const Title = styled.div`
  width: 100%;
  background-color: lightGray;
  margin-bottom: 50px;
`;

const MobList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function SidebarContainer() {
  return (
    <Sidebar>
      <Title>MOB</Title>
      <Switch>
        <Route exact path="/">
          <MobListContainer MobList={MobList} />
        </Route>
        <Route path="/:id">
          <MobDetail />
        </Route>
        <Route path="*">
          <div>nomatch</div>
        </Route>
      </Switch>
    </Sidebar>
  );
}

export default SidebarContainer;
