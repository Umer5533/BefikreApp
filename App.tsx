
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/tab';
import React from 'react';
import { Screen } from 'react-native-screens';
import Home from './tabNavigation/Home';

const Stack = createNativeStackNavigator();


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,

} from 'react-native';
import IntroScreen from './StackScreens/IntroScreen';
import OTPScreen from './StackScreens/OTPScreen';



const App = () => {


  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name={"IntroScreen"} component={IntroScreen}/>
        <Stack.Screen name={"OTPScreen"} component={OTPScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
