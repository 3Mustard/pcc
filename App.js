import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as firebase from 'firebase';

// COMPONENT IMPORTS
import LandingScreeen from './components/auth/Landing';

// FIREBASE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyCQw_hQVsvw6djP7e5KuoylrPTt6iQGubQ",
  authDomain: "photocc-9d078.firebaseapp.com",
  projectId: "photocc-9d078",
  storageBucket: "photocc-9d078.appspot.com",
  messagingSenderId: "873101787172",
  appId: "1:873101787172:web:b6950a2a7fd16f680ed8b1",
  measurementId: "G-LHF4B3GGCF"
};
// RUN FIREBASE IF NOT RUNNING
if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
}
// CREATE STACK FOR NAVIGATION
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
