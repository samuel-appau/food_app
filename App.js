import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import {
  Platform,

  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {StatusBar } from 'expo-status-bar'

import useCachedResources from './hooks/useCachedResources';
import MainApp from './navigation/MainApp';
import AuthNavigator from './navigation/AuthNavigator';

export default function App(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        
            <NavigationContainer>
              {isLoggedIn ? (
             
                
                  <MainApp />
               
               
              ) : (
                <AuthNavigator />
              )}
            </NavigationContainer>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: Math.round(Dimensions.get('window').height),
  },
});
