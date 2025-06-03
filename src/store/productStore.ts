import {create} from 'zustand';
import {products} from '../mock/products';

type Product = (typeof products)[0];

interface ProductStore {
  products: Product[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredProducts: () => Product[];
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products,
  searchQuery: '',
  setSearchQuery: query => set({searchQuery: query}),
  filteredProducts: () => {
    const {searchQuery, products} = get();
    const lower = searchQuery.toLowerCase();

    return products.filter(p => p.name.toLowerCase().includes(lower));
  },
}));
