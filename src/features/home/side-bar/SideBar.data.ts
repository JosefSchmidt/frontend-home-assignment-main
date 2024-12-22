import { SideBarElementType } from './SideBar.config';

const { folder, file } = SideBarElementType;

export const SideBarMockData: SideBarElementItem[] = [
  {
    id: 1,
    title: 'Documents',
    type: folder,
    active: false,
    children: [
      {
        id: 2,
        title: 'Folder 2',
        type: folder,
        active: false,
        children: [
          {
            id: 6,
            title: 'Image 1.jpg',
            active: false,
            type: file,
          },
          {
            id: 3,
            title: 'Document 1.doc',
            active: false,
            type: file,
          },
          {
            id: 4,
            title: 'Folder 2-2',
            active: false,
            type: folder,
            children: [],
          },
          {
            id: 5,
            title: 'Folder 2-1',
            active: false,
            type: folder,
            children: [],
          },
        ],
      },
      {
        id: 1,
        title: 'Folder 1',
        active: false,
        type: folder,
        children: [],
      },
    ],
  },
];
