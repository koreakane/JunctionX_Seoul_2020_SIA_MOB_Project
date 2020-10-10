import React from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";

import MobTitle from "./Side/MobTitle";
import MobListContainer from "./Side/MobListContainer";
import MobDetail from "./Side/MobDetail";

const Sidebar = styled.div`
  position: absolute;
  top: 0px;
  left: 32px;

  z-index : 100;

  width: 320px;
  height: 100%;
  max-height: 100%;
  padding-top: 32px;

  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function SidebarContainer({ MobList, isDetail, id, option, setOption }) {
  return (
    <Sidebar>
      <MobTitle isDetail={isDetail} />

      <TransitionGroup component={null}>
        <Transition appear={true} timeout={{ enter: 750, exit: 150 }}>
          <Switch>
            <Route exact path="/">
              <MobListContainer MobList={MobList} />
            </Route>

            <Route
              path="/:id"
              render={() =>
                MobList ? (
                  <MobDetail
                    MobList={MobList}
                    option={option}
                    setOption={setOption}
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
        </Transition>
      </TransitionGroup>
    </Sidebar>
  );
}

export default SidebarContainer;
