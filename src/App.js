import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Icon from '@expo/vector-icons/Ionicons';
import Main from './Main';
import Profile from './Profile';
import Settings from './Settings';

const DrawerNavigator = createDrawerNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => <Icon name="ios-home" size={20} />,
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile',
      drawerIcon: ({ tintColor }) => <Icon name="ios-contact" size={20} />,
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: 'Settings',
      drawerIcon: ({ tintColor }) => <Icon name="ios-cog" size={20} />,
    }
  }
});

export default createAppContainer(DrawerNavigator);