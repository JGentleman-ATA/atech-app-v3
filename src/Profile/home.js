import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Styles from '../styles';

class ProfileHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Profile",
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
                <Icon name="ios-menu" size={30} />
            </TouchableOpacity>
        ),

    })
    render() {
        return (
            <View style={Styles.container}>
                <Text>Profile Screen</Text>
                <Icon name="ios-contact" size={48} />
            </View>
        );
    }
}

export default ProfileHome;