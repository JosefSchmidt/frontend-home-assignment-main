import React from 'react';
import './SideBar.css';
import { SideBarMockData } from './SideBar.data';
import SideBarElement from './side-bar-element/SideBarElement';
import UseHomeContext from '../hooks/UseHomeContext';

type SideBarProps = {
  className: string;
};

const SideBar = ({ className }: SideBarProps) => {
  const { elements } = UseHomeContext();

  return (
    <div className={`${className} side-bar-container`}>
      {elements.map((element) => (
        <SideBarElement key={element.id} {...element} />
      ))}
    </div>
  );
};

export default SideBar;
