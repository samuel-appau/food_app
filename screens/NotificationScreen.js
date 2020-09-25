import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

const NotificationScreen = () => {
    return (
        <View>
            <Header title="MelloTasks" />
            <Text>NotificationScreen</Text>
        </View>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
