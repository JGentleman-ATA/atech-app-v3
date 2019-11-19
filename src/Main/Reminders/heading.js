import React from 'react'
import { View, Text } from 'react-native'
import Styles from '../../styles'

const Heading = () => (
    <View style={Styles.remindersHeader}>
        <Text style={Styles.remindresHeaderText}>
            Reminders
        </Text>
    </View>
)

export default Heading