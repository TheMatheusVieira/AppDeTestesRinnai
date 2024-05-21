import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicial from '../app-teste/Inicial/Inicial';
import Home from '../app-teste/Home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Inicial'>
    
        <Stack.Screen name='Inicial' component={Inicial} />
        <Stack.Screen name='Home' component={Home} />
  
        </Stack.Navigator>
      </NavigationContainer>
);
}
