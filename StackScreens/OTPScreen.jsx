import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const OTPScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Welcome to OTP Screen</Text>
      <Text style={styles.textTwo}>Decorate your home with us</Text>
      {/* <Button title='Next' onPress={()=> props.navigation.navigate('Tabs')}/> */}
      <Button style={{backgroundColor: "red" }} title='Next' onPress={()=> props.navigation.goBack()}/>
    </View>
  )
}

export default OTPScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#034543'
    },

    textOne:{
        fontSize:30,
        color: '#ffffff'
    },

    textTwo:{
        color: 'brown',
        fontSize: 20
    }
})