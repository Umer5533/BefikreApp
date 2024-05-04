import React from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";


const InputTextField = ({placeholder}) =>{
    return(
        <View style={styles.container}>
           <TextInput placeholder={placeholder} style={{ ...styles.inputField, ...{ fontSize: 16 } }} />
        </View>
    )
}

export default InputTextField;


const styles = StyleSheet.create({
    container:{
     
    },

    inputField: {
      borderBottomWidth: 0.5,
      height: 40,
      fontSize: 14,
      // borderBottomColor: '#000000
      marginBottom: 24
    },
})