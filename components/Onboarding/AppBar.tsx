import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, useNavigation } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const AppBar = () => {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack()

  return (
    <View style={styles.container}>
      <View style={styles.logoBar}>
        {
          canGoBack ? (
            <Pressable onPress={() => router.back()}>
              <MaterialIcons name='arrow-back' size={28} />
            </Pressable>
          ) : null}
        <Image source={require('@/assets/logo/gojek-text.png')} />
      </View>
      {

        canGoBack ?
          <MaterialIcons name='info' size={28} color={Colors.grey.base} />
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
