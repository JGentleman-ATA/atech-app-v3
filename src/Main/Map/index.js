import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from '@expo/vector-icons/Ionicons';
import Floor1Screen from './Floor 1';
import Floor2Screen from './Floor 2';

const MapTabs = createBottomTabNavigator({
    Floor1: {
        screen: Floor1Screen,
        navigationOptions: {
            title: "Floor 1",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-browsers"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Floor2: {
        screen: Floor2Screen,
        navigationOptions: {
            title: "Floor 2",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="ios-browsers"
                    size={17}
                    color={tintColor} />
            )
        }
    }
});

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ MapTabs }, { headerMode: "none" });