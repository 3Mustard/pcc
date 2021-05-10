import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// COMPONENT IMPORTS
import LandingScreeen from './components/auth/Landing';

const Stack = createStackNavigator();
export default function App() {
  return (
    // ROUTING WITH REACT NAVIGATION AND REACT NAVIGATION STACK PACKAGES
    // DOCUMENTATION @https://reactnavigation.org/docs/getting-started AND @https://reactnavigation.org/docs/stack-navigator/
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreeen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
