import React from 'react';

import HomeScreen from '@app/screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from '@app/screens/home/components/categories';
import CategoryScreen from '@app/screens/category';

export type NavigationScreens = {
  Home: undefined;
  Category: {name: string};
  Test: {id: number};
};

export const Stack = createNativeStackNavigator<NavigationScreens>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_left',
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Test" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
