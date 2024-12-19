import { Image, Pressable, StyleSheet, Text, View, ViewProps } from 'react-native'
import React from 'react'
import { router, useNavigation } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const AppBar = ({ style, withLogo = true, colorTheme }: { style?: any, withLogo?: boolean, colorTheme?: string }) => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack()

  return (
    <View style={[styles.container, style, colorTheme == "green" ? {
      backgroundColor: Colors.green.dark,
    } : null]}>
      <View style={styles.logoBar}>
        {
          canGoBack ? (
            <Pressable onPress={() => router.back()}>
              <MaterialIcons name='arrow-back' style={colorTheme == "green" ? {
                color: Colors.primary.white,
              } : null} size={28} />
            </Pressable>
          ) : null}
        {
          withLogo ? (
            <Image source={require('@/assets/logo/gojek-text.png')} />
          ) : null
        }
      </View>
      {

        canGoBack ?
          <MaterialIcons name='info' size={28} color={colorTheme == "green" ? Colors.primary.white : Colors.grey.base} />
          : (
            <Image source={require('@/assets/logo/language.png')} />
          )
      }
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  logoBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  }
})
