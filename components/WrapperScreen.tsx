import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const WrapperScreen = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default WrapperScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary.white,
    flex: 1,
  }
})