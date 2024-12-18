import ButtonPrimary from "@/components/Btn/ButtonPrimary";
import AppBar from "@/components/Onboarding/AppBar";
import Sliders from "@/components/Onboarding/Sliders";
import WrapperScreen from "@/components/WrapperScreen";
import Colors from "@/constants/Colors";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router"


export default function Index() {
  return (
    <WrapperScreen>
      <AppBar />
      <View style={styles.container}>
        <Sliders />
        <View style={styles.buttonContainer}>
          <ButtonPrimary onPress={() => router.push('/auth/signin')}>
            Masuk
          </ButtonPrimary>
          <ButtonPrimary type="border">
            Belum ada akun ?, Daftar dulu
          </ButtonPrimary>
          <Text style={{
            fontSize: 14,
          }}>
            Dengan masuk atau mendaftar, kamu menyetujui
            Ketentuan layanan dan Kebijakan privasi.
          </Text>
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
