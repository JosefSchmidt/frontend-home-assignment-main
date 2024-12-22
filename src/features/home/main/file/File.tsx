import React from 'react';
import './File.css';

const File = ({ title, type }: SideBarElementItem) => {
  return (
    <div>
      <h1>Preview</h1>
      <div className="file-container-content">
        <p>{`name: ${title}`}</p>
        <p>{`type: ${type}`}</p>
      </div>
    </div>
  );
};

export default File;
