import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Category = () =>{
    return(
        <View style={styles.container}>
            <Text>Caries</Text>
            <Button title="Click Here"
                    onPress={()=>alert("button clicked!")}></Button>
        </View>
    )
}

export default Category;


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    }
})