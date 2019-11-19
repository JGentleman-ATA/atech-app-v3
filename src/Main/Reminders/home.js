import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import Styles from '../../styles';
import styles from '../../styles';

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
                </ScrollView>
            </View>
        );
    }
}

export default RemindersHome;