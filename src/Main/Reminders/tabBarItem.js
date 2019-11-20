import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from '../../styles';

const TabBarItem = ({ border, title, selected, setType, type }) => (
    <TouchableHighlight
        underlayColor='#efefef'
        onPress={setType}
        style={[
            styles.remindersItem, selected ? styles.remindersSelected : null,
            border ? styles.remindersBorder : null,
            type === title ? styles.remindersSelected : null ]}>
        <Text style={[ styles.remindersItemText, type === title ? styles.remindersBold : null ]}>
            {title}
        </Text>
    </TouchableHighlight>
)

export default TabBarItem