import React from 'react';
import './SideBarElement.css';
import { SideBarElementType } from '../SideBar.config';
import TriangleIcon from './triangle-icon/TriangleIcon';
import useHomeHandler from '../../hooks/UseSideBarHandler';
import UseHomeContext from '../../hooks/UseHomeContext';

const { folder } = SideBarElementType;

const SideBarElement = ({
  id,
  title,
  type,
  active,
  children,
  isChild = false,
}: SideBarElementItem & { isChild?: boolean }) => {
  const { onSideBarElementToggle } = useHomeHandler();
  const { onSelectElementHandler } = UseHomeContext();

  const onClickHandler = () => {
    onSideBarElementToggle(id);
    onSelectElementHandler({ id, title, type, children, active });
  };

  return (
    <div className={`element-container ${isChild ? 'element-child' : ''}`}>
      <div className="element-content-wrapper">
        {type === folder && <TriangleIcon isOpen={active} />}
        <button
          className={type !== folder ? 'file' : ''}
          onClick={onClickHandler}
        >
          {title}
        </button>
      </div>

      {active && type === SideBarElementType.folder && (
        <div className="elements-container">
          {children?.map((element) => (
            <SideBarElement {...element} key={element.id} isChild={true} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarElement;
