import { Pressable, PressableProps, StyleProp, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

type ButtonType = {
  children: string,
  onPress?: () => void,
  styles?: StyleProp<PressableProps>,
  type?: string,
}

const ButtonPrimary = ({ children, onPress, styles, type = "primary" }: ButtonType) => {
  console.log(type)
  return (
    <Pressable style={[stylebtn.btn, type == "primary" ? stylebtn.primary : stylebtn.white, styles]} onPress={onPress}>
      <Text style={[stylebtn.text, type == "primary" ? stylebtn.textPrimary : stylebtn.textSecondary]}>
        {children}
      </Text>
    </Pressable>
  )
}

export default ButtonPrimary

const stylebtn = StyleSheet.create({
  btn: {
    paddingVertical: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.green.dark,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  primary: {
    backgroundColor: Colors.green.dark,
  },
  white: {
    backgroundColor: Colors.primary.white,
  },
  textPrimary: {
    color: Colors.primary.white,
  },
  textSecondary: {
    color: Colors.green.dark,
  }
})