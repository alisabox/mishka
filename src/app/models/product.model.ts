export interface Product {
  id: number | string;
  category: string,
  color: string,
  description: string,
  height: number,
  img: {
    name: string,
    alt: string,
    url: ImageUrlTypes,
  },
  isFeatured: boolean,
  isNewArrival: boolean,
  name: string,
  price: number,
  weight: number,
  diameter: number,
}

export interface ImageUrlTypes extends ImageUrl {
  desktop: string,
  desktopx2: string,
  mobile: string,
  mobilex2: string,
  tablet: string,
  tabletx2: string,
}

export interface ImageUrl {
  [key: string]: string,
}
