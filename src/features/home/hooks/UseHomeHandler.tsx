import { useState } from 'react';
import useHomeContext from './UseHomeContext';

const UseHomeHandler = () => {
  const { elements: contextElements } = useHomeContext();
  const [selectedElement, setSelectedElement] =
    useState<null | SideBarElementItem>(null);

  const [elements, setElements] = useState(contextElements);

  const onElementChangeHandler = (newElements: SideBarElementItem[]) => {
    setElements(newElements);
  };

  const onSelectElementHandler = (element: SideBarElementItem) => {
    setSelectedElement(element);
  };

  return {
    elements,
    selectedElement,
    onElementChangeHandler,
    onSelectElementHandler,
  };
};

export default UseHomeHandler;
