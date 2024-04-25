import {NavigationContainer} from '@react-navigation/native'
import Tabs from './navigation/tab';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




const App =()=> {
  

  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}



export default App;
