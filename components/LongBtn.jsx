import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";


const LongBtn = ({label}) => {
    return (
        <View >
            <TouchableOpacity>
                <View style={styles.signUpBtn}>
                    <Text style={{ color: '#ffffff', fontSize: 18 }}>{label}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default LongBtn;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink'
    },

    signUpBtn: {
        backgroundColor: 'red',
        marginTop: 30,
        height: 50,
        borderRadius: 4,
        backgroundColor: '#000000',
        alignItems: 'center', justifyContent: 'center'
      }
})