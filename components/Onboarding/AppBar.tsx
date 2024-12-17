import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppBarBoarding = () => {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo/gojek-text.png')} />
      <Image source={require('@/assets/logo/language.png')} />
    </View>
  )
}

export default AppBarBoarding

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  }
})