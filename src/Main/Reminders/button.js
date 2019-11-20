import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styles from '../../styles';

const Button = ({ submitReminder }) => (
    <View style={styles.remindersButtonContainer}>
        <TouchableHighlight
            underlayColor='#efefef'
            style={styles.remindersButton}
            onPress={submitReminder}>
            <Text style={styles.remindersSubmit}>
                Submit
            </Text>
        </TouchableHighlight>
    </View>
)

export default Button