import React from 'react';
import styled from 'styled-components/native';
import {useBrandStore} from '../store/brandStore';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Container} from '../components/Container';
import {RootStackParamList} from '../navigation/types';

export const BrandSelectorScreen = () => {
  const {switchBrand} = useBrandStore();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSelect = (brand: 'docmorris' | 'eurapon') => {
    switchBrand(brand);
    navigation.reset({
      index: 0,
      routes: [{name: 'Search'}],
    });
  };

  return (
    <BrandContainer>
      <Title>Select Your Pharmacy Brand</Title>

      <BrandButton
        onPress={() => handleSelect('docmorris')}
        brandColor="#00695c">
        <BrandText>DocMorris</BrandText>
      </BrandButton>

      <BrandButton onPress={() => handleSelect('eurapon')} brandColor="#0071ce">
        <BrandText>Eurapon</BrandText>
      </BrandButton>
    </BrandContainer>
  );
};

const BrandContainer = styled(Container)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: #f2f2f2;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
`;

const BrandButton = styled.TouchableOpacity<{brandColor: string}>`
  background-color: ${({brandColor}) => brandColor};
  padding: 16px 32px;
  margin-vertical: 12px;
  border-radius: 12px;
  width: 80%;
  align-items: center;
`;

const BrandText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
