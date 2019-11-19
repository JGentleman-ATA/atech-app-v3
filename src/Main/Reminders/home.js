import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Styles from '../../styles';
<<<<<<< HEAD
import Heading from './heading';
=======
import styles from '../../styles';
>>>>>>> da0107f64a1f65b5afdcb8358d926f16bd39f8b2

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
<<<<<<< HEAD
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
=======

    };

    render() {
        return (
            <View style={styles.remindersContainer}>
                <ScrollView keyboardShouldPersistTaps='always'
                            style={styles.remindersContent}>
                    <View style={styles.remindersHeader}>
                        <Text style={styles.remindersHeaderText}>
                            Reminders
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder='What needs to be done?'
                            placeholderTextColor='blue'
                            selectionColor='blue' />
                    </View>
>>>>>>> da0107f64a1f65b5afdcb8358d926f16bd39f8b2
                </ScrollView>
            </View>
        );
    }
}

export default RemindersHome;