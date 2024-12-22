type SideBarElementItem = {
  id: string;
  title: string;
  type: ElementItemType;
  active: boolean;
  children?: SideBarElementItem[];
};

type ElementItemType = 'image' | 'doc' | 'folder';
