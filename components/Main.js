import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// store
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/actions/index'

//components
import FeedScreen from '../components/main/Feed'

const Tab = createBottomTabNavigator()

export class Main extends Component {
    
    componentDidMount(){
        this.props.fetchUser()
    }

    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Feed" component={FeedScreen}></Tab.Screen>
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchToProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
