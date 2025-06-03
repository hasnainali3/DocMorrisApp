import React from 'react';
import styled from 'styled-components/native';
import {useRoute} from '@react-navigation/native';
import {ProductDetailRouteProp} from '../navigation/types';
import {useCartStore} from '../store/cartStore';

export const ProductDetailScreen = () => {
  const {params} = useRoute<ProductDetailRouteProp>();
  const {product} = params;
  const addToCart = useCartStore(state => state.addToCart);

  return (
    <Container>
      <ProductImage source={{uri: product.image}} />
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
      <Price>€{product.price.toFixed(2)}</Price>
      <AddButton onPress={() => addToCart(product)}>
        <AddButtonText>Add to Cart</AddButtonText>
      </AddButton>
    </Container>
  );
};

const Container = styled.ScrollView`
  padding: ${({theme}) => theme.spacing.l}px;
  background-color: ${({theme}) => theme.colors.background};
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 16px;
  margin-bottom: ${({theme}) => theme.spacing.l}px;
`;

const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: ${({theme}) => theme.spacing.s}px;
`;

const Description = styled.Text`
  font-size: 16px;
  color: #555;
  margin-bottom: ${({theme}) => theme.spacing.s}px;
`;

const Price = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: ${({theme}) => theme.spacing.l}px;
`;

const AddButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  padding: 16px;
  border-radius: 12px;
  align-items: center;
`;

const AddButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
