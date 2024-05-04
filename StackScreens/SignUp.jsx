import { StyleSheet, Text, View, Button, StatusBar, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import InputTextField from '../components/InputTextField'
import LongBtn from '../components/LongBtn'

const SignUp = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'}
        barStyle="dark-content"
        translucent={false} />
      <View style={{ backgroundColor: '#ffffff', flex: 1, margin: 8, borderRadius: 5, elevation: 10 }}>
        <View style={styles.bodyView}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../assests/images/logo.png')} style={{ height: 55, width: '40%', marginTop: 40, marginBottom: 40 }} />
          </View>
          <Text style={styles.textOne}>Create new account</Text>
          <InputTextField placeholder={'Email Address'} />
          <InputTextField placeholder={'Password'} />
          <InputTextField placeholder={'Confirm Password'} />
          <LongBtn label='Signup'/>

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
    paddingLeft: 20,
  },

  textOne: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 30, marginBottom: 30
  },



  
})