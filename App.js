import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';

import LandingScreeen from './components/auth/landing';

const stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreeen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
