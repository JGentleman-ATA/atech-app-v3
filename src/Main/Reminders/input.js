import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../../styles';

const Input = ({ inputValue, inputChange }) => (
    <View style={styles.remindersInputContainer}>
        <TextInput
            value={inputValue}
            style={styles.remindersInput}
            placeholder='What needs to be done?'
            placeholderTextColor='gray'
            selectionColor='purple'
            onChangeText={inputChange} />
    </View>
)

export default Input