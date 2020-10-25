import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

const SettingsScreen = () => {
    return (
        <View>
            <Header title="Settings" />
            <Text>SettingsScreen</Text>
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
