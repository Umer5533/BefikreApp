import { StyleSheet, Text, View, Button, StatusBar, Image, TextInput} from 'react-native'
import React from 'react'

const SignUp = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'}
        barStyle="dark-content"
        translucent={false} />
      <View style={{ backgroundColor: '#ffffff', flex: 1, margin: 8, borderRadius: 5, elevation: 10 }}>
        <View style={styles.bodyView}>
          <Image source={require('../assests/images/logo.png')} style={{height:40, width: 140, marginTop: 40, marginBottom: 40}}/>
          <Text style={styles.textOne}>Create new account</Text>
          <TextInput placeholder='Email Address' style={{...styles.inputField, ...{fontSize: 16}}}/>
          <TextInput placeholder='Password' style={{...styles.inputField, ...{fontSize: 16}}}/>
          <TextInput placeholder='Confirm Password' style={{...styles.inputField, ...{fontSize: 16}}}/>
        
        </View>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#034543'
    backgroundColor: '#ffffff'
  },

  bodyView: {
    flex: 1,
    paddingRight: 20,
    paddingLeft: 20
  },

  textOne: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 30, marginBottom: 30
  },

  inputField:{
    borderBottomWidth: 0.5,
    height: 40,
    fontSize: 14,
    // borderBottomColor: '#000000
    marginBottom: 24
  },

  textTwo: {
    color: 'brown',
    fontSize: 20
  },

  btn:{backgroundColor: 'red',
marginTop: 30}
})