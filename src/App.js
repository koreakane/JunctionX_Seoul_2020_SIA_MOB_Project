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
    historySlider: [],
    selectedHistory: null,
  });

  let location = useLocation();

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
        historySlider: MobImage.images
          .map((val, index) => ({
            value: Number(val.date.substring(0, 4)),
            label: val.date.substring(0, 4),
          }))
          .reverse(),
        selectedHistory: 0,
      });
    }
  }, [MobImage]);

  useEffect(() => {
    console.log("option");
    console.log(option);
  }, [option]);

  //
  if (mobListLoading) return <AppContainer>로딩중..</AppContainer>;
  if (mobListError)
    return <AppContainer>에러가 발생했습니다</AppContainer>;
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
        id={currentID}
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
