import UseHomeContext from './UseHomeContext';
import { SideBarElementType } from '../side-bar/SideBar.config';

const { folder } = SideBarElementType;

const UseSideBarHandler = () => {
  const { elements, onElementChangeHandler } = UseHomeContext();

  const updateActiveSideBarElements = (
    elements: SideBarElementItem[],
    elementId: string,
  ) => {
    return elements.map((element) => {
      if (element.id === elementId) element.active = !element.active;
      if (
        element.type === folder &&
        Array.isArray(element.children) &&
        element.children.length > 0
      ) {
        updateActiveSideBarElements(element.children, elementId);
      }
      return element;
    });
  };

  const onSideBarElementToggle = (elementId: string) => {
    onElementChangeHandler(updateActiveSideBarElements(elements, elementId));
  };

  return {
    onSideBarElementToggle,
  };
};

export default UseSideBarHandler;
