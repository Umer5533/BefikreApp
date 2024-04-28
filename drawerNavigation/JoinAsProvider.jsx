import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const JoinAsProvider = () =>{
    return(
        <View style={styles.container}>
            <Text>Join as a service provider.</Text>
        </View>
    )
}

export default JoinAsProvider;


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    }
})