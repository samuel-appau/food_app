import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';

const CartScreen = () => {
    return (
        <View>
            <Header title="Cart" />
            <Text>CartScreen</Text>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({});
