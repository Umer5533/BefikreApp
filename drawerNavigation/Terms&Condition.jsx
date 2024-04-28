import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TermsAndConditions = () =>{
    return(
        <View style={styles.container}>
            <Text>Terms and Conditions Screen</Text>
        </View>
    )
}

export default TermsAndConditions;


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#864092'
    }
})