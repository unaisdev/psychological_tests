import React from 'react';

import HomeScreen from '@app/screens/tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from '@app/screens/tabs/screens/categories';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {CategoriesIcon, HomeIcon} from '@app/constants/icons';
import CategoryScreen from '@app/screens/category';
import {Category, Test} from '@app/types';
import StartTestQuizzScreen from '@app/screens/test-quizz/screens/start';
import TestQuizzScreen from '@app/screens/test-quizz';
import ResultTestScreen from '@app/screens/test-quizz/screens/result';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';

export type NavigationStackScreens = {
  Tabs: undefined;
  Test: Test;
  StartTest: Test;
  ResultTest: {test: Test; selectedOptions: Float[]};
  Category: Category;
};

export type NavigationTabScreens = {
  Home: undefined;
  Categories: undefined;
};

const Stack = createNativeStackNavigator<NavigationStackScreens>();
const Tab = createMaterialBottomTabNavigator<NavigationTabScreens>();

const Tabs = () => {
  return (
    <Tab.Navigator
      barStyle={{marginVertical: -10, marginHorizontal: -24}}
      shifting>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <HomeIcon color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Group>
        <Tab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            tabBarIcon: ({focused, color}) => (
              <CategoriesIcon color={color} focused={focused} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
        }}>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StartTest"
          component={StartTestQuizzScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ResultTest" component={ResultTestScreen} />
        <Stack.Screen name="Test" component={TestQuizzScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
