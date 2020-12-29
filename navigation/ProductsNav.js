import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductsDetailsScreen from '../screens/shop/ProductDetailsScreen';
const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Products"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Products"
        component={ProductsOverviewScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductsDetailsScreen}
        initialParams={{ user: 'me' }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
