import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from '@expo/vector-icons/Ionicons';
import MapScreen from './Map';
import NewsScreen from './News';
import RemindersScreen from './Reminders';

const MainTabs = createBottomTabNavigator({
    News: {
        screen: NewsScreen,
        navigationOptions: {
            title: "News",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-paper"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Map: {
        screen: MapScreen,
        navigationOptions: {
            title: "Map",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-map"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Reminders: {
        screen: RemindersScreen,
        navigationOptions: {
            tabBarLabel: "Reminders",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-list-box"
                    size={17}
                    color={tintColor} />
            )
        }
    }
});

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ MainTabs }, { headerMode: "none" });