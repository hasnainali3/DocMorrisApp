import {useCartStore} from '../src/store/cartStore';

describe('Cart Store', () => {
  beforeEach(() => {
    useCartStore.getState().clearCart(); // reset state before each test
  });

  it('adds item to cart', () => {
    const item = {
      id: '1',
      name: 'Ibuprofen',
      price: 4.99,
      description: '',
      image: '',
    };
    useCartStore.getState().addToCart(item);

    const items = useCartStore.getState().cartItems;
    expect(items.length).toBe(1);
    expect(items[0].id).toBe('1');
  });

  it('removes item from cart', () => {
    const item = {
      id: '1',
      name: 'Ibuprofen',
      price: 4.99,
      description: '',
      image: '',
    };
    const {addToCart, removeFromCart} = useCartStore.getState();

    addToCart(item);
    removeFromCart('1');

    expect(useCartStore.getState().cartItems).toHaveLength(0);
  });

  it('clears cart', () => {
    useCartStore.getState().addToCart({
      id: '2',
      name: 'Vitamin C',
      price: 3.0,
      description: '',
      image: '',
    });
    useCartStore.getState().clearCart();

    expect(useCartStore.getState().cartItems).toHaveLength(0);
  });
});
