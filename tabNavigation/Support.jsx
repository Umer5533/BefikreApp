import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Support = () =>{
    return(
        <View style={styles.container}>
            <Text>Support</Text>
            <Button title="Click Here"
                    onPress={()=>alert("button clicked!")}></Button>
        </View>
    )
}

export default Support;


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange'
    }
})