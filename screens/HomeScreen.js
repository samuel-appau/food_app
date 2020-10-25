import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

const HomeScreen = () => {
    
    return (
        <View style={{flex:1}}>
            <Header title="Home" />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
   
});
