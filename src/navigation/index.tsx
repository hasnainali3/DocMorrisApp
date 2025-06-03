import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductSearchScreen} from '../screens/ProductSearchScreen';
import {RootStackParamList} from './types';
import {ProductDetailScreen} from '../screens/ProductDetailScreen';
import {CartScreen} from '../screens/CartScreen';
import {CheckoutScreen} from '../screens/CheckoutScreen';
import {QRScannerScreen} from '../screens/QRScannerScreen';
import {NFCScannerScreen} from '../screens/NFCScannerScreen';
import {BrandSelectorScreen} from '../screens/BrandSelectorScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BrandSelector">
        <Stack.Screen name="Search" component={ProductSearchScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="QRScanner" component={QRScannerScreen} />
        <Stack.Screen name="NFCScanner" component={NFCScannerScreen} />
        <Stack.Screen
          name="BrandSelector"
          component={BrandSelectorScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
