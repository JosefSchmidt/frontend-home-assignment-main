import React from 'react';
import './FileItem.css';
import FileItemBox from './file-item-box/FileItemBox';

const FileItem = ({ title }: SideBarElementItem) => {
  return (
    <div className="file-item-container">
      <FileItemBox initial={title ? title[0]?.toUpperCase() : ''} />
      <p className="file-title">{title}</p>
    </div>
  );
};

export default FileItem;
