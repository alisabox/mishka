export interface Product {
  id: number | string;
  category: string,
  color: string,
  description: string,
  height: number,
  img: {
    name: string,
    alt: string,
  },
  isFeatured: boolean,
  isNewArrival: boolean,
  name: string,
  price: number,
  weight: number,
  diameter: number,
}