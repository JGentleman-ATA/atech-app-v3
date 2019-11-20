import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Styles from '../../styles';
import Button from './button';
import Input from './input';
import ReminderList from './reminderList';
import TabBar from './tabBar';

let reminderIndex = 0

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
            reminders: [],
            type: 'Active'
        }
        this.submitReminder = this.submitReminder.bind(this)
        this.toggleCompleted = this.toggleCompleted.bind(this)
        this.deleteReminder = this.deleteReminder.bind(this)
        this.setType = this.setType.bind(this)
    }

    inputChange(inputValue) {
        console.log(' Input Value: ' , inputValue)
        this.setState({ inputValue })
    }

    submitReminder() {
        if (this.state.inputValue.match(/^\s*$/)) {
            return
        }

        const reminder = {
            title: this.state.inputValue,
            reminderIndex,
            completed: false
        }

        reminderIndex++
        const reminders = [...this.state.reminders, reminder]
        this.setState({ reminders, inputValue: ''}, () => {
            console.log('State: ', this.state)
        })
    }

    deleteReminder(reminderIndex) {
        let { reminders } = this.state
        reminders = reminders.filter((reminder) => reminder.reminderIndex !== reminderIndex)
        this.setState({ reminders })
    }

    toggleCompleted(reminderIndex) {
        let reminders = this.state.reminders
        reminders.forEach((reminder) => {
            if (reminder.reminderIndex === reminderIndex) {
                reminder.completed = !reminder.completed
            }
        })
        this.setState({ reminders })
    }

    setType(type) {
        this.setState({ type })
    }

    render() {
        const { inputValue, reminders, type } = this.state
        return (
            <View style={Styles.remindersContainer}>
                <ScrollView
                    keyboardShouldPersistTaps='always'
                    style={Styles.remindersContent}>
                    <Input inputValue={inputValue} inputChange={(text) => this.inputChange(text)} />
                    <ReminderList
                        type={type}
                        toggleCompleted={this.toggleCompleted}
                        deleteReminder={this.deleteReminder}
                        reminders={reminders} />
                    <Button submitReminder={this.submitReminder} />
                </ScrollView>
                <TabBar type={type} setType={this.setType} />
            </View>
        );
    }
}

export default RemindersHome;