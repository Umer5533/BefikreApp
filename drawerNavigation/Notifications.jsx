import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Notifications = () =>{
    return(
        <View style={styles.container}>
            <Text>Notifications Screen</Text>
        </View>
    )
}

export default Notifications;


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue'
    }
})