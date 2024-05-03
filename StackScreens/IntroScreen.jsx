import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const IntroScreen = (props) => {
    // setTimeout(()=>{
    //     props.navigation.navigate('SignUp')
    // }, 3000)
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Welcome to HomeX</Text>
      <Text style={styles.textTwo}>Decorate your home with us</Text>
      {/* <Button title='Next' onPress={()=> props.navigation.navigate('Tabs')}/> */}
      <Button  title='Next' onPress={()=> props.navigation.goBack()}/>
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
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