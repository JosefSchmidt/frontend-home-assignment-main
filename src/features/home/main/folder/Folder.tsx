import React from 'react';
import './Folder.css';
import { SideBarElementType } from '../../side-bar/SideBar.config';
import FolderItem from './folder-item/FolderItem';
import FileItem from './file-item/FileItem';

const { folder, doc, image } = SideBarElementType;

const Folder = ({ children }: SideBarElementItem) => {
  return (
    <div className="folder-container">
      {children?.map((element) => {
        if (element.type === folder) return <FolderItem {...element} />;
        if ([doc, image].includes(element.type))
          return <FileItem {...element} />;
      })}
      {children.length === 0 && <h1>There are no elements to display</h1>}
    </div>
  );
};

export default Folder;
