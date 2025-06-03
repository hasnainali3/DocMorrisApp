import React, {useLayoutEffect} from 'react';
import styled, {useTheme} from 'styled-components/native';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import {useProductStore} from '../store/productStore';
import {ProductListItem} from '../components/ProductListItem';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {Container} from '../components/Container';
import {RootStackParamList} from '../navigation/types';

export const ProductSearchScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {filteredProducts, searchQuery, setSearchQuery} = useProductStore();
  const theme = useTheme();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CartButton onPress={() => navigation.navigate('Cart')}>
          <CartText>🛒</CartText>
        </CartButton>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('NFCScanner')}>
          <Text style={{fontSize: 18, marginLeft: 16}}>📷</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <SearchInput
        placeholder="Search products..."
        placeholderTextColor={theme.colors.text}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredProducts()}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductListItem
            name={item.name}
            price={item.price}
            image={item.image}
            onPress={() =>
              navigation.navigate('ProductDetail', {product: item})
            }
          />
        )}
      />
    </Container>
  );
};

const SearchInput = styled.TextInput`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: ${({theme}) => theme.spacing.m}px;
  background-color: white;
`;

const CartButton = styled.TouchableOpacity`
  margin-right: ${({theme}) => theme.spacing.m}px;
`;

const CartText = styled.Text`
  font-size: 20px;
`;
