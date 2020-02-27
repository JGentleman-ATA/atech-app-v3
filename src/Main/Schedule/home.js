import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Styles from '../../styles';
import Icon from '@expo/vector-icons/Ionicons';

class ScheduleHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Schedule",
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
                <Icon name="ios-menu" size={30} />
            </TouchableOpacity>
        )
    })

    render() {
        return (
            <View style={Styles.screenContainer}>
                <View style={Styles.scheduleTitle}>
                    <Text style={Styles.scheduleTitleText}>Normal</Text>
                </View>
                <View style={Styles.scheduleContent}>
                    <Text style={Styles.scheduleContextText}>Period 1: 7:25 - 8:07</Text>
                    <Text style={Styles.scheduleContextText}>Period 2: 8:11 - 8:58</Text>
                    <Text style={Styles.scheduleContextText}>Period 3: 9:02 - 9:44</Text>
                    <Text style={Styles.scheduleContextText}>Period 4: 9:48 - 10:30</Text>
                </View>
                <View style={Styles.scheduleTitle}>
                    <Text style={Styles.scheduleTitleText}>Block</Text>
                </View>
                <View style={Styles.scheduleContent}>

                </View>
            </View>
        );
    }

}

export default ScheduleHome;