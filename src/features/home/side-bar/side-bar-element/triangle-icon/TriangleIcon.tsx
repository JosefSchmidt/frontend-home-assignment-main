import React from 'react';
import './TriangleIcon.css';

const TriangleIcon = ({ isOpen }: { isOpen: boolean }) => {
  return <div className={isOpen ? 'triangle-open' : 'triangle-closed'}></div>;
};

export default TriangleIcon;
