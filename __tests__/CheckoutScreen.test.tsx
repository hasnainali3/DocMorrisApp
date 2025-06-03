import React from 'react';
import {render, fireEvent} from '../test-utils.tsx';
import {CheckoutScreen} from '../src/screens/CheckoutScreen';
import {useCartStore} from '../src/store/cartStore';
import {Alert} from 'react-native';

jest.mock('@react-navigation/native', () => {
  const actual = jest.requireActual('@react-navigation/native');
  return {
    ...actual,
    useNavigation: () => ({
      reset: jest.fn(),
    }),
  };
});

describe('CheckoutScreen', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart();
    useCartStore.getState().addToCart({
      id: 'abc123',
      name: 'TestMed',
      price: 20.0,
      description: '',
      image: '',
    });
  });

  it('clears cart and navigates after placing order', () => {
    const alertSpy = jest
      .spyOn(Alert, 'alert')
      .mockImplementation((_title, _msg, buttons) => {
        // Simulate tapping the first (OK) button
        buttons?.[0]?.onPress?.();
      });

    const {getByText} = render(<CheckoutScreen />);

    expect(getByText('Total: €20.00')).toBeTruthy();

    fireEvent.press(getByText('Place Order'));

    expect(useCartStore.getState().cartItems).toHaveLength(0);
    expect(alertSpy).toHaveBeenCalledWith(
      'Success',
      'Your order has been placed!',
      expect.anything(),
    );

    alertSpy.mockRestore();
  });
});
