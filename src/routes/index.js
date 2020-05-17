import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../screens/Home';
import Details from '../screens/Details';

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerTintColor: '#cecece',
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Pokédex', headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{title: 'Detalhes'}}
      />
    </Stack.Navigator>
  );
}
