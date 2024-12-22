import React from 'react';
import './Main.css';
import useHomeContext from '../hooks/UseHomeContext';
import { SideBarElementType } from '../side-bar/SideBar.config';
import File from './file/File';
import Folder from './folder/Folder';

const { folder, doc, image } = SideBarElementType;

const Main = () => {
  const { selectedElement } = useHomeContext();

  return (
    <div className="content-wrapper">
      {!selectedElement && <h2>Nothing has been selected yet</h2>}
      {selectedElement && [doc, image].includes(selectedElement.type) && (
        <File {...selectedElement} />
      )}
      {selectedElement && [folder].includes(selectedElement.type) && (
        <Folder {...selectedElement} />
      )}
    </div>
  );
};

export default Main;
