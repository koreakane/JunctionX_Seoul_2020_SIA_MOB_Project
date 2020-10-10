import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BackgroundContainer from "./components/BackgroundContainer";
import SidebarContainer from "./components/SidebarContainer";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

const AppContainer = styled.div`
  position: relative;
  text-align: center;
  width: 100vw;
  height: 100vh;
`;

function Main() {
  const [currentID, setCurrentID] = useState(null);
  const [MobList, setMobList] = useState([]);

  let location = useLocation();

  useEffect(() => {
    console.log(location);
    const pathname = location.pathname;
    if (pathname === "/") {
      setCurrentID(null);
    } else {
      setCurrentID(pathname.substr(1));
    }
  }, [location]);

  useEffect(() => {
    console.log("initial data download");
  }, []);

  return (
    <AppContainer>
      <BackgroundContainer id={currentID} />
      <SidebarContainer id={currentID} />
    </AppContainer>
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
