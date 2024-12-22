import React, { useEffect, useMemo, useState } from 'react';
import './Home.css';
import TopBar from './top-bar/TopBar';
import SideBar from './side-bar/SideBar';
import Main from './main/Main';
import { HomeContext, HomeContextType } from './Home.context';
import { sortSideBarElement } from './side-bar/side-bar-element/SideBar.utils';
import useHomeHandler from './hooks/UseHomeHandler';
import { formatData } from './Home.utils';

const Home = () => {
  const {
    elements,
    onElementChangeHandler,
    selectedElement,
    onSelectElementHandler,
  } = useHomeHandler();

  // Do not hesitate to refactor this effect or use a different library to retrieve data
  // it's only provided here as an example on how to fetch the data from the server
  useEffect(() => {
    fetch('http://localhost:8010/api/v1/tree')
      .then((r) => r.json())
      .then(({ data }) => {
        console.log(data);
        onElementChangeHandler(sortSideBarElement(formatData(data)));
      });
  }, []);

  const contextValue: HomeContextType = {
    elements,
    onElementChangeHandler,
    selectedElement,
    onSelectElementHandler,
  };

  return (
    <HomeContext.Provider value={contextValue}>
      <div className="home-container">
        <div className="home-wrapper">
          <TopBar />
          <div className="content-container">
            <SideBar className="side-bar" />
            <Main />
          </div>
        </div>
      </div>
    </HomeContext.Provider>
  );
};

export default Home;
