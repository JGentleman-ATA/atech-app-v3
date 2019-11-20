import React from 'react';
import { View, Text } from 'react-native';
import ReminderButton from './reminderButton';
import styles from '../../styles';

const Reminder = ({ reminder, toggleCompleted, deleteReminder }) => (
    <View style={styles.remindersTodoContainer}>
        <Text style={styles.remindersTodoText}>
            {reminder.title}
        </Text>
        <View style={styles.remindersButtons}>
            <ReminderButton
                name='Done'
                completed={reminder.completed}
                onPress={() => toggleCompleted(reminder.reminderIndex)} />
            <ReminderButton
                name='Delete'
                onPress={() => deleteReminder(reminder.reminderIndex)} />
        </View>
    </View>
)

export default Reminder