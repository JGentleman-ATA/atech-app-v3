import React from 'react';
import { View } from 'react-native';
import Reminder from './reminder';

const ReminderList = ({ reminders, deleteReminder, toggleComplete, type }) => {
    const getVisibleReminders = (reminders, type) => {
        switch(type) {
            case 'All':
                return reminders
            case 'Complete':
                return reminders.filter((t) => t.complete)
            case 'Active':
                return reminders.filter((t) => !t.complete)
        }
    }

    reminders = getVisibleReminders(reminders, type)
    reminders = reminders.map((reminder, i) => {
        return (
            <Reminder
                deleteReminder={deleteReminder}
                toggleComplete={toggleComplete}
                key={i}
                reminder={reminder} />
        )
    })
    return (
        <View>
            {todos}
        </View>
    )
}

export default ReminderList