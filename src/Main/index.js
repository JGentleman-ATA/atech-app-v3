import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import MapScreen from './Map';
import NewsScreen from './News';
import RemindersScreen from './Reminders';
import Ionicons from '@expo/vector-icons/Ionicons';

const MainTabs = createBottomTabNavigator(
    {
        News: NewsScreen,
        Map: MapScreen,
        Reminders: RemindersScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons
                let iconName;
                if (routeName === 'News') {
                    iconName = `ios-paper`
                } else if (routeName === 'Map') {
                    iconName = `ios-map`
                } else if (routeName === 'Reminders') {
                    iconName = `ios-list-box`
                }

                return <IconComponent name={iconName} size={17} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'purple',
            inactiveTintColor: 'gray',
        },
    }
);

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ MainTabs }, { headerMode: "none" });