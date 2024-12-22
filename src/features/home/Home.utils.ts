import { APIElement } from './Home.type';

export const formatData = (data: APIElement[]): SideBarElementItem[] => {
  return data.map((element) => {
    const formattedElement: SideBarElementItem = {
      id: element.id,
      title: element.name,
      type: element.type,
      active: false,
    };

    if (Array.isArray(element?.children)) {
      formattedElement.children = formatData(element.children);
    }

    return formattedElement;
  });
};

