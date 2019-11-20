import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from '../../styles';

const ReminderButton = ({ onPress, completed, name }) => (
    <TouchableHighlight
        onPress={onPress}
        underlayColor='#efefef'
        style={styles.remindersTodoButton}>
        <Text style={[
            styles.remindersTodoText,
            completed ? styles.remindersCompleted : null,
            name === 'Delete' ? styles.remindersDeleteButton : null ]}
        >
            {name}
        </Text>
    </TouchableHighlight>
)

export default ReminderButton