import Colors from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const InputAuth = () => {

  return (
    <View style={styles.container}>

      {/* label */}
      <Text style={styles.label}>Phone number</Text>
      <View style={styles.inputPhone}>
        <Pressable style={styles.buttonCountry}>
          <MaterialIcons name="flag" size={28} />
          <MaterialIcons name="arrow-drop-down" size={28} />
        </Pressable>
        <TextInput placeholder="83xxxxx" style={{
          borderColor: Colors.green.dark,
          borderBottomWidth: 1,
          flex: 1
        }} keyboardType="phone-pad" />
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
})

export default InputAuth;
