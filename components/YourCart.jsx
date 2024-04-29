import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";


const YourCart = () =>{
    return(
        <View style={styles.container}>
            <Text>Your Cart</Text>
            <Button title="Click Here"
                    onPress={()=>alert("button clicked!")}></Button>
        </View>
    )
}

export default YourCart;


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    }
})