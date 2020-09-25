/* eslint-disable react/display-name */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import NotificationScreen from '../screens/NotificationScreen';
import TaskScreen from '../screens/TaskScreen';
import ViewTaskScreen from '../screens/ViewTaskScreen';
import SettingsScreen from '../screens/SettingsScreen'

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const MenuDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainApp} />
    </Drawer.Navigator>
  );
};



const MainApp = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Task"
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#a9acb0',
        tabStyle: { backgroundColor: '#0f6abf' },
        keyboardHidesTabBar: true,
      }}
    >
    <BottomTab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="view-dashboard-variant" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="bell" size={30} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="AddTask"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={50}
              color='#303030'
            />
          ),
          title: '',
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="account" size={30} color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="settings" size={30} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
export default MainApp;
