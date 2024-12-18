import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from '@/components/Onboarding/AppBar'
import WrapperScreen from '@/components/WrapperScreen'
import Colors from '@/constants/Colors'
import InputAuth from '@/components/Input/input-auth'
import ButtonPrimary from '@/components/Btn/ButtonPrimary'

const SignIn = () => {
  return (
    <WrapperScreen>
      <AppBar />
      <View style={styles.container}>
        <Text style={styles.textLogin}>Login</Text>
        <Text style={styles.textInformation}>Enter your registered phone number to log in</Text>
      </View>
      {/* Label Input Phone Number */}
      <InputAuth />
      <ButtonPrimary styles={styles.customButton}>
        Continue
      </ButtonPrimary>
    </WrapperScreen>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textLogin: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textInformation: {
    marginTop: 14,
    color: Colors.grey.darkGrey,
  },
  customButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  }
})
