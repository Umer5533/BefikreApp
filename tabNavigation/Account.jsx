import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Account = () =>{
    return(
        <View style={styles.container}>
            <Text>Account</Text>
            <Button title="Click Here"
                    onPress={()=>alert("button clicked!")}></Button>
        </View>
    )
}

export default Account;


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    }
})