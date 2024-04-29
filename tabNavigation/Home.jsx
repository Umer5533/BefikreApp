import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet, StatusBar, ScrollView, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from "react-native";

import ElevatedCards from "../components/ElevatedCards";
import YourCart from "../components/YourCart";

const Home = (props) => {
    // const handleIconPress = () => {
    //     navigation.navigate("YourCart"); 
    // };
    return (
        <>
            <StatusBar backgroundColor={'white'}
                barStyle="dark-content"
                translucent={false} />
            <View style={styles.mainContainer}>

                <View style={styles.mainFirstChild}>
                    <KeyboardAvoidingView behavior="height" enabled={false}>

                        <View style={{ flexDirection: "row" }}>
                            <TextInput style={styles.inputbox} />
                            <TouchableOpacity onPress={() => props.navigation.navigate('YourCart')}>
                                <Image source={require('../assests/icons/cart.png')} style={{ width: 50, height: 50, marginTop: 20, marginRight: 12, marginLeft: 12, tintColor: '#626567' }} />
                            </TouchableOpacity>
                            {/* <Button onPress={() => navigation.navigate('YourCart')}/> */}

                        </View>
                    </KeyboardAvoidingView>
                    {/* <ElevatedCards/> */}
                </View>





                {/* <View style={styles.mainSecondChild} >
                  
                </View> */}
            </View>
        </>
    )
}

export default Home;


const styles = StyleSheet.create({

    inputbox: {
        flex: 1,
        fontSize: 20,
        backgroundColor: '#F2F4F4',
        marginLeft: 12,
        // marginRight: 70,
        marginTop: 20,
        borderRadius: 4
        // height: 40
    },

    mainContainer: {
        flex: 1,
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white'

    },

    mainFirstChild: {
        backgroundColor: 'white',
        height: 100,
        // borderBottomRightRadius: 24,
        // borderBottomLeftRadius: 24,
        elevation: 10
    },

    mainSecondChild: {
        backgroundColor: '#000000',
        height: '12%',
        borderRadius: 20,
        margin: '2%'
    }

})