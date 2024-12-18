import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WrapperScreen from '@/components/WrapperScreen'
import AppBar from '@/components/Onboarding/AppBar'

const SignUp = () => {
  return (
    <WrapperScreen>
      <AppBar />
      <Text>SignUp</Text>
    </WrapperScreen>
  )
}

export default SignUp

const styles = StyleSheet.create({})