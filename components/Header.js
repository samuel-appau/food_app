import React, { useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather, AntDesign,FontAwesome5 } from '@expo/vector-icons';


const Header = ({ title, navigation }) => {
 
  return (
    <View style={styles.container}>
     
        <View style={styles.header}>
          <TouchableOpacity
        
            style={{ padding: 5 }}
          >
            <Feather name="menu" size={25} color="#0f6abf" />
          </TouchableOpacity>
          <View>
            <Text style={{ color: '#0f6abf' }}>{title}</Text>
          </View>
          <TouchableOpacity
           
            style={{ padding: 5 }}
          >
          <FontAwesome5 name="user-circle" size={24} color="#0f6abf" />
            
          </TouchableOpacity>
        </View>
     
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
