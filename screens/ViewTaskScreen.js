import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

const ViewTaskScreen = () => {
    return (
        <View>
            <Header title="MelloTasks" />
            <Text>ViewTaskScreen</Text>
        </View>
    );
};

export default ViewTaskScreen;

const styles = StyleSheet.create({});
