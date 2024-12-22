export type APIElement = {
  id: string;
  type: APIElementType;
  name: string;
  children?: APIElement[];
};

type APIElementType = 'image' | 'doc' | 'folder';
