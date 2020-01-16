import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from '@expo/vector-icons/Ionicons';
import Floor1Screen from './Floor 1';
import Floor2Screen from './Floor 2';
import Ionicons from '@expo/vector-icons/Ionicons';

const MapTabs = createBottomTabNavigator(
    {
        Floor1: Floor1Screen,
        Floor2: Floor2Screen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Floor1') {
                    iconName = `ios-browsers`
                } else if (routeName === 'Floor2') {
                    iconName = `ios-browsers`
                }

                return <IconComponent name={iconName} size={17} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'purple',
            inactiveTintColor: 'gray',
        },
    },
);

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ MapTabs }, { headerMode: "none" });