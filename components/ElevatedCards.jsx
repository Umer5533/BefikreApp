import React from "react";
import { View, Text, Button, StyleSheet,ScrollView } from "react-native";

const ElevatedCards = () =>{
    return(
        <View style={styles.mainContainer}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
            <View style={[styles.Cards, styles.CardOne]}>

            </View>
            <View style={[styles.Cards, styles.CardOne]}>

            </View>
            <View style={[styles.Cards, styles.CardOne]}>

            </View>
            <View style={[styles.Cards, styles.CardOne]}>

            </View>
            <View style={[styles.Cards, styles.CardOne]}>

            </View>
            <View style={[styles.Cards, styles.CardSix]}>

            </View>

            <View style={styles.lastCard}>

            </View>
           </ScrollView>
        </View>
    )
}

export default ElevatedCards;


const styles = StyleSheet.create({
    mainContainer:{
        position: 'absolute',
        top: 210,
        // left: 10,
        // zIndex: 21
        // flex:1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'pink'
    },

    container:{
        paddingHorizontal: 16,
        
    },
    Cards: {
        height: 150,
        width:110,
        backgroundColor:'brown',
        marginRight: 8,
        borderRadius: 15
    },

    CardSix:{
        // height: 200
    },

    lastCard:{
        height: 150,
        width:24,
        backgroundColor:'transparent',
        borderRadius: 15
    }
})