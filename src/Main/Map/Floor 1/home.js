import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Styles from '../../../styles';

class Floor1Home extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Floor 1",
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
                <Text>Floor 1</Text>
                <Icon name="ios-browsers" size={48} />
            </View>
        );
    }
}

export default Floor1Home;