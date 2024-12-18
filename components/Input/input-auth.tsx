import Colors from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import WrapperModal from "../Modal/WrapperModal";
import TileCountry from "../tile-country";
import { countryCodes, TileCountryType } from "@/data/code-country";

const InputAuth = () => {
  const [selectedCountry, setSelectedCountry] = useState<TileCountryType>(countryCodes[0]);
  const inputNumberRef = useRef<TextInput>(null);
  const [showReset, setShowReset] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onFocusInput = () => {
    setShowReset(!showReset)
  }

  const unFocusInput = () => {
    setShowReset(!showReset)
    inputNumberRef.current?.blur();
  }

  const onSelect = (country: TileCountryType) => {
    setModalVisible(false);
    setSelectedCountry(country)
  }

  return (
    <View style={styles.container}>

      {/* label */}
      <Text style={styles.label}>Phone number</Text>
      <View style={styles.inputPhone}>
        <Pressable style={styles.buttonCountry} onPress={() => setModalVisible(true)}>
          <Image source={selectedCountry.image} />
          <Text style={styles.codeCountry}>
            {selectedCountry.code}
          </Text>
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
      <WrapperModal show={modalVisible} toggle={() => setModalVisible(!modalVisible)}>
        <Text style={styles.titleModal}>Cari kode negara</Text>
        <View style={styles.searchContainer}>
          <MaterialIcons style={styles.iconSearch} name="search" size={28} />
          <TextInput style={styles.searchCountry} placeholder="ketik nama atau kode negara" />
        </View>
        <ScrollView style={{
          height: 500,
        }}>
          <Text style={styles.titlePopuler}>Negara populer</Text>
          {
            countryCodes.slice(0, 3).map((value, index) => (
              <TileCountry key={index} country={value} onSelect={onSelect} />
            ))
          }
          <Text style={styles.titlePopuler}>Semua Negara</Text>

          {
            countryCodes.slice(3, countryCodes.length).map((value, index) => (
              <TileCountry key={index} country={value} onSelect={onSelect} />
            ))
          }
        </ScrollView>
      </WrapperModal>
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
    gap: 10,
    color: Colors.grey.dark
  },
  codeCountry: {
    color: Colors.grey.darkGrey,
    fontWeight: "700",
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
  },
  titleModal: {
    fontSize: 25,
    fontWeight: "bold",
  },
  searchContainer: {
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    backgroundColor: Colors.grey.light,
  },
  searchCountry: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.grey.dark,
  },
  iconSearch: {
    color: Colors.grey.dark,
  },
  titlePopuler: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
  }
})

export default InputAuth;
