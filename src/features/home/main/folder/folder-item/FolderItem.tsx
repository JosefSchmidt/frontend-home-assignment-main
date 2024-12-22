import React from 'react';
import './FolderItem.css';
import FolderItemBox from './folder-item-box/FolderItemBox';
import UseHomeContext from '../../../hooks/UseHomeContext';
import useSideBarHandler from '../../../hooks/UseSideBarHandler';

const FolderItem = ({
  id,
  title,
  type,
  active,
  children,
}: SideBarElementItem) => {
  const { onSelectElementHandler } = UseHomeContext();
  const { onSideBarElementToggle } = useSideBarHandler();

  const onFolderClickHandler = () => {
    onSideBarElementToggle(id);
    onSelectElementHandler({ id, title, type, children, active });
  };

  return (
    <div className="folder-item-container" onClick={onFolderClickHandler}>
      <FolderItemBox />
      <p className="folder-title">{title}</p>
    </div>
  );
};

export default FolderItem;
