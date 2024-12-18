import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WrapperScreen from '@/components/WrapperScreen'
import AppBarBoarding from '@/components/Onboarding/AppBar'

const SignUp = () => {
  return (
    <WrapperScreen>
      <AppBarBoarding />
      <Text>SignUp</Text>
    </WrapperScreen>
  )
}

export default SignUp

const styles = StyleSheet.create({})