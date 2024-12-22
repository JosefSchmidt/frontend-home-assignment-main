import { createContext } from 'react';

export type HomeContextType = {
  elements: SideBarElementItem[];
  onElementChangeHandler: (elements: SideBarElementItem[]) => void;
  selectedElement: SideBarElementItem | null;
  onSelectElementHandler: (element: SideBarElementItem) => void;
};

export const HomeContext = createContext<HomeContextType>({
  elements: [],
  onElementChangeHandler: (elements: SideBarElementItem[]) => {},
  selectedElement: null,
  onSelectElementHandler: (elementId: SideBarElementItem) => {},
});
