import React from 'react';
import {render, fireEvent} from '../test-utils.tsx';
import {ProductListItem} from '../src/components/ProductListItem';

describe('ProductListItem', () => {
  it('calls onPress when tapped', () => {
    const onPressMock = jest.fn();

    const {getByText} = render(
      <ProductListItem
        name="Ibuprofen"
        price={4.99}
        image=""
        onPress={onPressMock}
      />,
    );

    fireEvent.press(getByText('Ibuprofen'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
