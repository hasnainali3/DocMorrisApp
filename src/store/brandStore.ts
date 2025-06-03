import {create} from 'zustand';
import {docMorrisTheme, euraponTheme} from '../theme/themes';

type Theme = typeof docMorrisTheme;

interface BrandStore {
  brand: 'docmorris' | 'eurapon';
  theme: Theme;
  switchBrand: (brand: 'docmorris' | 'eurapon') => void;
}

export const useBrandStore = create<BrandStore>(set => ({
  brand: 'docmorris',
  theme: docMorrisTheme,
  switchBrand: brand =>
    set({
      brand,
      theme: brand === 'docmorris' ? docMorrisTheme : euraponTheme,
    }),
}));
