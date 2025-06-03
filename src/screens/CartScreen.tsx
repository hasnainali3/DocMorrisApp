import React from 'react';
import styled from 'styled-components/native';
import {useCartStore} from '../store/cartStore';
import {FlatList, Alert} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Container} from '../components/Container';
import {Typography} from '../components/Typography';
import {RootStackParamList} from '../navigation/types';

export const CartScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {cartItems, removeFromCart} = useCartStore();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id: string) => {
    Alert.alert('Remove Item', 'Are you sure you want to remove this item?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Remove', onPress: () => removeFromCart(id), style: 'destructive'},
    ]);
  };

  return (
    <Container>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        ListEmptyComponent={<EmptyText>Your cart is empty</EmptyText>}
        renderItem={({item}) => (
          <Item>
            <Info>
              <Typography variant="body.b1" color="text">
                {item.name}
              </Typography>
              <Price variant="body.b2">€{item.price.toFixed(2)}</Price>
            </Info>
            <Remove onPress={() => handleRemove(item.id)}>Remove</Remove>
          </Item>
        )}
      />
      {cartItems.length > 0 && (
        <Summary>
          <TotalText>Total: €{total.toFixed(2)}</TotalText>
          <CheckoutButton onPress={() => navigation.navigate('Checkout')}>
            <CheckoutText>Proceed to Checkout</CheckoutText>
          </CheckoutButton>
        </Summary>
      )}
    </Container>
  );
};

const Item = styled.View`
  background-color: white;
  border-radius: 12px;
  padding: ${({theme}) => theme.spacing.m}px;
  margin-bottom: ${({theme}) => theme.spacing.s}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.View``;

const Price = styled(Typography)(() => ({
  colo: 'grey',
  marginTop: 4,
}));

const Remove = styled.Text`
  color: red;
  font-weight: bold;
`;

const EmptyText = styled.Text`
  text-align: center;
  margin-top: 40px;
  color: grey;
`;

const Summary = styled.View`
  padding-top: ${({theme}) => theme.spacing.l}px;
  border-top-width: 1px;
  border-color: #ddd;
`;

const TotalText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: ${({theme}) => theme.spacing.s}px;
`;

const CheckoutButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.accent};
  padding: 16px;
  border-radius: 12px;
  align-items: center;
`;

const CheckoutText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
