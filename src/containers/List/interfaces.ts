export interface Img {
  path: string;
  extension: string;
}

export interface CreatorItem {
  name: string;
  resourceURI: string;
  role: string;
}

export interface Creator {
  collectionURI: string;
  available: Number;
  returned: Number;
  items: CreatorItem[]; 
}

export interface Comic {
  id: string;  
  thumbnail: Img;
  title: string;
  creators: Creator;
};
