import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Search: undefined;
  ProductDetail: {product: Product};
  Cart: undefined;
  Checkout: undefined;
  QRScanner: undefined;
  NFCScanner: undefined;
  BrandSelector: undefined;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type ProductDetailRouteProp = RouteProp<
  RootStackParamList,
  'ProductDetail'
>;
