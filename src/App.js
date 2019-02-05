/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import { StyleSheet } from 'react-native';
 import {
   createSwitchNavigator,
   createAppContainer,
   createDrawerNavigator,
   createBottomTabNavigator,
   createStackNavigator
 } from "react-navigation";
 import { HomeScreen } from './containers/HomeScreen';
 import { AuthenticationScreen } from './containers/AuthenticationScreen';
 import { HomeTab } from './containers/TabNavigation/HomeTab';
 import { FavouritesTab } from './containers/TabNavigation/FavouritesTab';
 import { NotificationsTab } from './containers/TabNavigation/NotificationsTab';
 import { ProfileTab } from './containers/TabNavigation/ProfileTab';
 import { StoriesTab } from './containers/TabNavigation/StoriesTab';
 import { DetailScreen } from './containers/DetailScreen';
 import Icon from 'react-native-vector-icons/Ionicons';

 /**
 * - AppSwitchNavigator
 *    - AuthenticationScreen
 *      - Login Button
 *    - HomeScreen - HomeScreenTabNavigator
 *      - Tab 1 - HomeStack
 *      - Tab 2 - FavouritesStack
 *      - Tab 3 - NotificationsStack
 *      - Tab 4 - ProfileStack
 *    - Any files you don't want to be a part of the Tab Navigator can go here.
 */

 export default class App extends React.Component {
   render() {
     return <AppContainer />;
   }
 }

 const HomeStack = createStackNavigator(
   {
     Home: {
       screen: HomeTab,
     },
     Details: {
       screen: DetailScreen
     }
   },
   {
     defaultNavigationOptions: {
       gesturesEnabled: false
     }
   }
 );

 const HomeScreenTabNavigator = createBottomTabNavigator(
   {
     Home: {
       screen: HomeStack,
       navigationOptions: ({ navigation }) => {
         return {
           tabBarLabel: 'Home',
           tabBarIcon: ({ tintColor }) => (<Icon name="md-home" style={{ color: tintColor }} size={28} />)
         }
       }
     },
     Favourites: {
       screen: FavouritesTab,
       navigationOptions: ({ navigation }) => {
         return {
           tabBarLabel: 'Favourites',
           tabBarIcon: ({ tintColor }) => (<Icon name="md-heart" style={{ color: tintColor }} size={28} />)
         }
       }
     },
     Stories: {
       screen: StoriesTab,
       navigationOptions: ({ navigation }) => {
         return {
           tabBarLabel: 'Stories',
           tabBarIcon: ({ tintColor }) => (<Icon name="md-add-circle" style={{ color: tintColor }} size={28} />)
         }
       }
     },
     Notifications: {
       screen: NotificationsTab,
       navigationOptions: ({ navigation }) => {
         return {
           tabBarLabel: 'Notifications',
           tabBarIcon: ({ tintColor }) => (<Icon name="md-notifications" style={{ color: tintColor }} size={28} />)
         }
       }
     },
     Profile: {
       screen: ProfileTab,
       navigationOptions: ({ navigation }) => {
         return {
           tabBarLabel: 'Profile',
           tabBarIcon: ({ tintColor }) => (<Icon name="md-person" style={{ color: tintColor }} size={28} />)
         }
       }
     }
   },
   {
     tabBarOptions: {
       showLabel: false,
       showIcon: true
     }
   }
 );

 const AppSwitchNavigator = createSwitchNavigator(
   {
     Authentication: { screen: AuthenticationScreen },
     Home: { screen: HomeScreenTabNavigator }
   },
   {
     initialRouteName: "Authentication"
   }
 );

const AppContainer = createAppContainer(AppSwitchNavigator);
