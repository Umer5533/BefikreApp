import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Shope = () =>{
    return(
        <View style={styles.container}>
            <Text>Shope</Text>
            <Button title="Click Here"
                    onPress={()=>alert("button clicked!")}></Button>
        </View>
    )
}

export default Shope;


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'brown'
    }
})