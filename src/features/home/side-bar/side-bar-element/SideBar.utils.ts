import { SideBarElementType } from '../SideBar.config';

const { folder } = SideBarElementType;

export const sortSideBarElement = (
  elements: SideBarElementItem[],
): SideBarElementItem[] => {
  return elements
    .sort((a, b) => a?.title.localeCompare(b.title))
    .map((element) => {
      if (element.type === folder && Array.isArray(element.children)) {
        element.children = sortSideBarElement(element.children);
      }

      return element;
    });
};
