import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native';

import firebase from 'firebase';

export class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            username: ''
        }
        // Bind function to component
        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp(){
        const { email, password, username } = this.state;
        // CREATE A USER WITH EMAIL/PASSWORD
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                // ADD USER TO FIRESTORE COLLECTION 'users' WHERE DOCUMENT = USER ID
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        username,
                        email
                    });
                console.log(response)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        return (
            <View>
                <TextInput 
                    placeholder="username"
                    onChangeText={(username) => this.setState({ username })}
                />
                <TextInput 
                    placeholder="email"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput 
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />

                <Button 
                    onPress={() => this.onSignUp()}
                    title="Sign Up"
                />
            </View>
        )
    }
}

export default Register
