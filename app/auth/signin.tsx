import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBarBoarding from '@/components/Onboarding/AppBar'
import WrapperScreen from '@/components/WrapperScreen'

const SignIn = () => {
  return (
    <WrapperScreen>
      <AppBarBoarding />
      <Text>SignUp</Text>
    </WrapperScreen>
  )
}

export default SignIn

const styles = StyleSheet.create({})