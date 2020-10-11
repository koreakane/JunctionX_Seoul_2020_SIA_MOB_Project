import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";

import useAsync from "./components/hooks/useAsync";

import BackgroundContainer from "./components/BackgroundContainer";
import SidebarContainer from "./components/SidebarContainer";
import ModalContainer from "./components/ModalContainer";

const AppContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

async function getMobList() {
  const response = await axios.get("https://hnu-pioneer.cf/");
  return response.data;
}

async function getMobImage(id) {
  if (id) {
    const response = await axios.get(
      `https://hnu-pioneer.cf/area/${id}/images`
    );
    return response.data;
  }
}

function Main() {
  const [currentID, setCurrentID] = useState(null);
  const [isDetail, setIsDetail] = useState(false);
  const [option, setOption] = useState({
    isImage: false,
    isSvgOn: false,
    selectedHistory: null,
  });

  let location = useLocation();

  // useEffect(() => {
  //   Json.parse(window.localStorage.getItem("MobList"));
  // }, []);

  useEffect(() => {
    // console.log(location);
    const pathname = location.pathname;

    if (pathname.substr(1)) {
      setCurrentID(pathname.substr(1));
      setIsDetail(true);
    } else {
      setCurrentID(null);
      setIsDetail(false);
    }
  }, [location]);

  const [mobListState, mobListRefetch] = useAsync(getMobList, [], false);

  const {
    loading: mobListLoading,
    data: MobList,
    error: mobListError,
  } = mobListState;

  const [mobImageState, mobImageRefetch] = useAsync(
    () => getMobImage(currentID),
    [],
    true
  );

  const {
    loading: mobImageLoading,
    data: MobImage,
    error: mobImageError,
  } = mobImageState;

  useEffect(() => {
    console.log("currentID :" + currentID);
    if (currentID) {
      mobImageRefetch(currentID);
    } else {
      setOption({
        isImage: false,
        isSvgOn: false,
        selectedHistory: null,
      });
    }
  }, [currentID]);

  useEffect(() => {
    console.log("isDetail :" + isDetail);
  }, [isDetail]);

  useEffect(() => {
    console.log("MobList");
    console.log(MobList);
    window.localStorage.setItem("MobList", JSON.stringify(MobList));
  }, [MobList]);

  useEffect(() => {
    console.log("MobImage");
    console.log(MobImage);
    if (MobImage) {
      setOption({
        ...option,
        selectedHistory: 0,
      });
    }
  }, [MobImage]);

  useEffect(() => {
    console.log("option");
    console.log(option);
  }, [option]);

  //
  if (mobListLoading) return <AppContainer>loading..</AppContainer>;
  if (mobListError) return <AppContainer>Error has occured.</AppContainer>;
  if (!MobList) return null;
  return (
    <AppContainer>
      <BackgroundContainer
        option={option}
        MobList={MobList}
        isDetail={isDetail}
        id={currentID}
        MobImage={MobImage}
      />
      <SidebarContainer
        option={option}
        setOption={setOption}
        MobList={MobList}
        isDetail={isDetail}
        currentID={currentID}
        MobImage={MobImage}
      />
      <ModalContainer />
    </AppContainer>
  );
}

function App() {
  return (
    <Router>
      <LoadScript googleMapsApiKey="AIzaSyCpvhi1qnRrQDxMFJ692rwasvzMYXsjC-o">
        <Main />
      </LoadScript>
    </Router>
  );
}

export default App;
