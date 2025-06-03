import React from 'react';
import styled from 'styled-components/native';
import {Typography} from './Typography';

interface Props {
  name: string;
  price: number;
  image: string;
  onPress: () => void;
}

export const ProductListItem = ({name, price, image, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <ProductImage source={{uri: image}} />
      <Info>
        <Typography variant="body.b1" color="text">
          {name}
        </Typography>
        <Price variant="body.b2">€{price.toFixed(2)}</Price>
      </Info>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: ${({theme}) => theme.spacing.m}px;
  background-color: ${({theme}) => theme.colors.accent};
  margin-bottom: ${({theme}) => theme.spacing.s}px;
  border-radius: 12px;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 4px;
  elevation: 2;
  margin-horizontal: ${({theme}) => theme.spacing.m}px;
`;

const ProductImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

const Info = styled.View`
  margin-left: ${({theme}) => theme.spacing.m}px;
`;

const Price = styled(Typography)(() => ({
  colo: 'grey',
}));
