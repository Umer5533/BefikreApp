import React, { Component } from "react";
import { View, Text, Button, StyleSheet, StatusBar,ScrollView } from "react-native";
import ElevatedCards from "../components/ElevatedCards";


const Home = () => {
    return (
        <>
            <StatusBar backgroundColor={'gray'}
                barStyle="light-content"
                translucent={false} />
            <View style={styles.mainContainer}>
           
                <View style={styles.mainFirstChild}>
                <ElevatedCards/>
                </View>
              
                
                  
                  

                {/* <View style={styles.mainSecondChild} >
                  
                </View> */}
            </View>
        </>
    )
}

export default Home;


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white'

    },

    mainFirstChild: {
        backgroundColor: 'gray',
        height: '38%',
        borderBottomRightRadius: 24,
        borderBottomLeftRadius: 24
    },

    mainSecondChild: {
        backgroundColor: '#000000',
        height: '12%',
        borderRadius: 20,
        margin: '2%'
    }

})