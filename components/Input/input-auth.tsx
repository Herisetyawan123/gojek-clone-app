import Colors from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const InputAuth = () => {
  const inputNumberRef = useRef<TextInput>(null);
  const [showReset, setShowReset] = useState<boolean>(false);

  const onFocusInput = () => {
    setShowReset(!showReset)
  }

  const unFocusInput = () => {
    setShowReset(!showReset)
    inputNumberRef.current?.blur();
  }

  return (
    <View style={styles.container}>

      {/* label */}
      <Text style={styles.label}>Phone number</Text>
      <View style={styles.inputPhone}>
        <Pressable style={styles.buttonCountry}>
          <MaterialIcons name="flag" size={28} />
          <MaterialIcons name="arrow-drop-down" size={28} />
        </Pressable>
        <View style={styles.inputNumber}>
          <TextInput
            placeholder="83xxxxx"
            style={{
              flex: 1
            }}
            onFocus={onFocusInput}
            keyboardType="phone-pad"
            ref={inputNumberRef}
          />

          {
            showReset ? (
              <Pressable onPress={unFocusInput} style={styles.resetInput}>
                <MaterialIcons name="close" color={Colors.grey.light} size={18} />
              </Pressable>
            ) : null
          }
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    color: Colors.grey.darkGrey,
    fontSize: 12,
  },
  inputPhone: {
    marginTop: 20,
    flexDirection: "row"
  },
  buttonCountry: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: Colors.grey.dark
  },
  inputNumber: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.green.dark,
    borderBottomWidth: 1,

  },
  resetInput: {
    backgroundColor: Colors.grey.dark,
    borderRadius: 100,
    padding: 5,
  }
})

export default InputAuth;
