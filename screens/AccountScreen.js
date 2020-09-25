import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

const AccountScreen = () => {
    return (
        <View>
            <Header title="MelloTasks" />
            <Text>AccountScreen</Text>
        </View>
    );
};

export default AccountScreen;

const styles = StyleSheet.create({});
