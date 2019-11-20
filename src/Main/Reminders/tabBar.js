import React from 'react';
import { View } from 'react-native';
import TabBarItem from './tabBarItem';
import styles from '../../styles';

const TabBar = ({ setType, type }) => (
    <View style={styles.remindersTabBarContainer}>
        <TabBarItem type={type} title='Active'
            setType={() => setType('Active')} />
        <TabBarItem type={type} title='All'
            setType={() => setType('All')} />
        <TabBarItem type={type} title='Completed'
            setType={() => setType('Completed')} />
    </View>
)

export default TabBar