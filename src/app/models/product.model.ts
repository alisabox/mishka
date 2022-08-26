export interface Product {
  id: number | string;
  category: string,
  color: string,
  description: string,
  height: number,
  img: {
    name: string,
    alt: string,
    url: {
      desktop: string,
      'desktop@2': string,
      mobile: string,
      'mobile@2': string,
      'tablet': string,
      'tablet@2': string,
    }
  },
  isFeatured: boolean,
  isNewArrival: boolean,
  name: string,
  price: number,
  weight: number,
  diameter: number,
}