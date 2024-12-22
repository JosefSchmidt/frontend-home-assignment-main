import React from 'react';
import "./FileItemBox.css"

const FileItemBox = ({ initial }: { initial: string }) => {
  return (
    <div className="file-box-item">
      <p>{initial}</p>
    </div>
  );
};

export default FileItemBox;
