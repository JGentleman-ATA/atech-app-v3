import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Styles from '../../styles';
import Heading from './heading';
import Input from './input';

class RemindersHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Reminders",
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
                <Icon name="ios-menu" size={30} />
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

    inputChange(inputValue) {
        console.log(' Input Value: ' , inputValue)
        this.setState({ inputValue })
    }

    render() {
        const { inputValue } = this.state
        return (
            <View style={Styles.remindersContainer}>
                <ScrollView keyboardShouldPersistTaps='always'
                            style={Styles.remindersContent}>
                    <Input
                        inputValue={inputValue}
                        inputChange={(text) => this.inputChange(text)} />
                </ScrollView>
            </View>
        );
    }
}

export default RemindersHome;