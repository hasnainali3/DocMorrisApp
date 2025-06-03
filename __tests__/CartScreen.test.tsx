import React from 'react';
import {render, fireEvent} from '../test-utils.tsx';
import {CartScreen} from '../src/screens/CartScreen';
import {useCartStore} from '../src/store/cartStore';
import {Alert} from 'react-native';

describe('CartScreen', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
    useCartStore.getState().addToCart({
      id: 'test1',
      name: 'TestMed',
      price: 10,
      description: '',
      image: '',
    });
  });

  it('renders cart item and removes it on confirmation', () => {
    const {getByText, queryByText} = render(<CartScreen />);

    // Ensure item is rendered
    expect(getByText('TestMed')).toBeTruthy();

    // Trigger removal (simulate user confirmation automatically)
    jest.spyOn(Alert, 'alert').mockImplementation((title, msg, buttons) => {
      // Simulate clicking "Remove"
      const removeBtn = buttons?.find(b => b.style === 'destructive');
      removeBtn?.onPress?.();
    });

    fireEvent.press(getByText('Remove'));

    // Now expect item to be gone
    expect(queryByText('TestMed')).toBeNull();
  });
});
