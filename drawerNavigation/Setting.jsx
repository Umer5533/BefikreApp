import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Settings = () =>{
    return(
        <View style={styles.container}>
            <Text>Setting Screen</Text>
        </View>
    )
}

export default Settings;


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray'
    }
})