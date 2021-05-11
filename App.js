import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import firebase from "firebase";

// COMPONENT IMPORTS
import LandingScreeen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';

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
// INIT FIREBASE
const firebaseApp = firebase.initializeApp(firebaseConfig);

// CREATE STACK FOR NAVIGATION
const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount(){
    //Check if a user is logged in
    firebase.auth().onAuthStateChanged((user) => {
      if(!user){
        this.setState({
          loggedIn: false,
          loaded: false,
        });
      } else {
        console.log(user)
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;

    // NOT LOADED
    if(!loaded){
      return(
        <View style={{ flew: 1, justifyContent: 'center'}}>
          <Text>Loading</Text>
        </View>
      )
    }
    // NOT LOGGED IN
    if(!loggedIn){
      return (
        // ROUTING WITH REACT NAVIGATION AND REACT NAVIGATION STACK PACKAGES
        // DOCUMENTATION @https://reactnavigation.org/docs/getting-started AND @https://reactnavigation.org/docs/stack-navigator/
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreeen} options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
    // LOGGED IN
    return(
      <View style={{ flew: 1, justifyContent: 'center'}}>
        <Text>User is Logged In</Text>
      </View>
    )
  }
}

export default App
