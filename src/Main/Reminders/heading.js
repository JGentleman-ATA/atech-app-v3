import React from 'react'
import { View, Text } from 'react-native'
import Styles from '../../styles'

const Heading = () => (
    <View style={Styles.remindersHeader}>
        <Text style={Styles.remindersHeaderText}>
            Enter a Reminder!
        </Text>
    </View>
)

export default Heading