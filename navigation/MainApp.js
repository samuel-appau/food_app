/* eslint-disable react/display-name */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
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
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#0f6abf',
        inactiveTintColor: '#a9acb0',
        tabStyle: { backgroundColor: '#fff' },
        keyboardHidesTabBar: true,
      }}
    >
    <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="ios-home" size={25} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            
            <Ionicons name="ios-cart" size={25} color={color}/>
          
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons name="settings" size={25} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
export default MainApp;
