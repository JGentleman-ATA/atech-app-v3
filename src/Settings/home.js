import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Styles from '../styles';

class SettingsHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Settings",
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
                <Text>Settings Screen</Text>
                <Icon name="ios-cog" size={48} />
            </View>
        );
    }
}

export default SettingsHome;