import {useProductStore} from '../src/store/productStore';
import {act} from '@testing-library/react-native';

describe('Product Store', () => {
  it('filters products by search term', () => {
    act(() => {
      useProductStore.getState().setSearchQuery('ibu');
    });

    const results = useProductStore.getState().filteredProducts();
    expect(results.some(p => p.name.toLowerCase().includes('ibu'))).toBe(true);
  });
});
