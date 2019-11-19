import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Styles from '../../styles';
import Heading from './heading';

class RemindersHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Reminders",
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
                <Icon name="ios-menu" size={20} />
            </TouchableOpacity>
        ),

    });

    constructor() {
        super()
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All'
        }
    }

    render() {
        return (
            <View style={Styles.remindersContainer}>
                <ScrollView keyboardShouldPersistTaps='always'
                            style={Styles.remindersContent}>
                    <Heading />
                </ScrollView>
            </View>
        );
    }
}

export default RemindersHome;