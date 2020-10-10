import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MapContainer from "./components/MapContainer";
import SidebarContainer from "./components/SidebarContainer";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

const AppContainer = styled.div`
  position : relative
  text-align: center;
  width:100vw;
  height:100vh;
`;

function Main() {
  const [isDetail, setIsDetail] = useState(false);
  const [currentID, setCurrentID] = useState(0);

  let location = useLocation();

  useEffect(() => {
    console.log(location);
    const pathname = location.pathname;
    if(pathname === "/"){
      setCurrentID(null)
    }else{
      setCurrentID(pathname.substr(1))
    }
    
  }, [location]);

  return (
    <AppContainer>
      <MapContainer id={currentID} />
      <SidebarContainer />
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
