import React from 'react';
import './FolderItem.css';
import FolderItemBox from './folder-item-box/FolderItemBox';

const FolderItem = ({ title }: SideBarElementItem) => {
  return (
    <div className="folder-item-container">
      <FolderItemBox />
      <p>{title}</p>
    </div>
  );
};

export default FolderItem;
