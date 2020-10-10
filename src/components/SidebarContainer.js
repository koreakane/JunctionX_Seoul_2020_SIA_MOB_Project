import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import MobTitle from "./Side/MobTitle";
import MobListContainer from "./Side/MobListContainer";
import MobDetail from "./Side/MobDetail";

const Sidebar = styled.div`
  position: absolute;
  top: 0px;
  left: 32px;

  width: 320px;
  height: 100%;
  max-height: 100%;
  padding-top: 32px;

  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MobList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function SidebarContainer({ id }) {
  return (
    <Sidebar>
      <MobTitle id={id} />
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
