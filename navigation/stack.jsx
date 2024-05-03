import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import IntroScreen from '../StackScreens/IntroScreen';
import SignUp from '../StackScreens/SignUp';
// import YourCart from './components/YourCart';


const Stack = createNativeStackNavigator();


const Stacks = () => {


    return (
        <>

            <Stack.Navigator>

                <Stack.Screen name={"SignUp"} component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name={"IntroScreen"} component={IntroScreen} options={{headerShown:false}}/>
            </Stack.Navigator>




        </>
    );
}



export default Stacks;
