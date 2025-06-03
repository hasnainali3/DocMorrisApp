import React from 'react';
import styled from 'styled-components/native';
import {useCartStore} from '../store/cartStore';
import {Alert, FlatList} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Container} from '../components/Container';
import {RootStackParamList} from '../navigation/types';

export const CheckoutScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {cartItems, clearCart} = useCartStore();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = () => {
    Alert.alert('Success', 'Your order has been placed!', [
      {
        text: 'OK',
        onPress: () => {
          clearCart();
          navigation.reset({
            index: 0,
            routes: [{name: 'Search'}],
          });
        },
      },
    ]);
  };

  return (
    <Container>
      <Title>Order Summary</Title>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Item>
            <Name>{item.name}</Name>
            <Price>€{item.price.toFixed(2)}</Price>
          </Item>
        )}
        ListEmptyComponent={<Empty>Your cart is empty.</Empty>}
      />
      <Summary>
        <Total>Total: €{total.toFixed(2)}</Total>
        <PlaceOrderButton onPress={handlePlaceOrder}>
          <PlaceOrderText>Place Order</PlaceOrderText>
        </PlaceOrderButton>
      </Summary>
    </Container>
  );
};

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: ${({theme}) => theme.spacing.m}px;
`;

const Item = styled.View`
  padding-vertical: 12px;
  border-bottom-width: 1px;
  border-color: #eee;
  flex-direction: row;
  justify-content: space-between;
`;

const Name = styled.Text`
  font-size: 16px;
`;

const Price = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const Empty = styled.Text`
  text-align: center;
  margin-top: 40px;
  color: grey;
`;

const Summary = styled.View`
  margin-top: auto;
  border-top-width: 1px;
  border-color: #ddd;
  padding-top: ${({theme}) => theme.spacing.m}px;
`;

const Total = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: ${({theme}) => theme.spacing.s}px;
`;

const PlaceOrderButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  padding: 16px;
  border-radius: 12px;
  align-items: center;
`;

const PlaceOrderText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
