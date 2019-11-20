import React from 'react';
import { View } from 'react-native';
import Reminder from './reminder';

const ReminderList = ({ reminders, deleteReminder, toggleCompleted, type }) => {
    const getVisibleReminders = (reminders, type) => {
        switch(type) {
            case 'All':
                return reminders
            case 'Completed':
                return reminders.filter((t) => t.completed)
            case 'Active':
                return reminders.filter((t) => !t.completed)
        }
    }

    reminders = getVisibleReminders(reminders, type)
    reminders = reminders.map((reminder, i) => {
        return (
            <Reminder
                deleteReminder={deleteReminder}
                toggleCompleted={toggleCompleted}
                key={i}
                reminder={reminder} />
        )
    })
    return (
        <View>
            {reminders}
        </View>
    )
}

export default ReminderList