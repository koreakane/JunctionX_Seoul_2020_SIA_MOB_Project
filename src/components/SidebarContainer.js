import React, { useState } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";

import MobTitle from "./Side/MobTitle";
import MobListContainer from "./Side/MobListContainer";
import MobDetail from "./Side/MobDetail";

const Sidebar = styled.div`
  position: absolute;
  top: 0px;
  left: 32px;

  z-index: 100;

  width: 320px;
  height: 100%;
  max-height: 100%;
  padding-top: 32px;

  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SidebarInsideDiv = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

function SidebarContainer({
  MobList,
  isDetail,
  currentID,
  option,
  setOption,
  MobImage,
}) {
  return (
    <Sidebar>
      <SidebarInsideDiv>
        <MobTitle isDetail={isDetail} />
        <MobListContainer
          MobList={MobList}
          isDetail={isDetail}
          currentID={currentID}
        />
        <Switch>
          <Route exact path="/"></Route>
          <Route
            path="/:id"
            render={() =>
              MobList ? (
                <MobDetail
                  isDetail={isDetail}
                  MobList={MobList}
                  option={option}
                  setOption={setOption}
                  MobImage={MobImage}
                />
              ) : (
                <Redirect
                  to={{
                    pathname: "/",
                  }}
                />
              )
            }
          />
          <Route path="*">
            <div>nomatch</div>
          </Route>
        </Switch>
      </SidebarInsideDiv>
    </Sidebar>
  );
}

export default SidebarContainer;
