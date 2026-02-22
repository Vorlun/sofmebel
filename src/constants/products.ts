export interface Product {
  name: string;
  price: string;
  image: string;
}

export const FEATURED_PRODUCTS: Product[] = [
  {
    name: 'Qora divan',
    price: '$250',
    image: '/images/real/product-sofa.jpg'
  },
  {
    name: 'Qora stul',
    price: '$100',
    image: '/images/real/product-chair.jpg'
  },
  {
    name: 'Yumshoq kreslo',
    price: '$170',
    image: '/images/real/product-armchair.jpg'
  }
];