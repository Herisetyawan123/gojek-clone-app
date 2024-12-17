import ButtonPrimary from "@/components/Btn/ButtonPrimary";
import AppBarBoarding from "@/components/Onboarding/AppBar";
import Sliders from "@/components/Onboarding/Sliders";
import WrapperScreen from "@/components/WrapperScreen";
import Colors from "@/constants/Colors";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <WrapperScreen>
      <AppBarBoarding />
      <View style={styles.container}>
        <Sliders />
        <View style={styles.buttonContainer}>
          <ButtonPrimary>
            Masuk
          </ButtonPrimary>
          <ButtonPrimary type="border">
            Belum ada akun ?, Daftar dulu
          </ButtonPrimary>
        </View>
      </View>
    </WrapperScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    height: "30%",
    gap: 10,
    // backgroundColor: Colors.primary.six,
  }
})
