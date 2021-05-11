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
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
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
