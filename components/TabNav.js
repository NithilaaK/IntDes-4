import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';

export const TabNav = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      tabBarIcon: <Icon name="home" type="antdesign"/>,
      tabBarLabel: "Home"
    }
  }
})