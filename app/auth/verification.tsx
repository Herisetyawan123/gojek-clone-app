import AppBar from "@/components/Onboarding/AppBar"
import WrapperScreen from "@/components/WrapperScreen"
import Colors from "@/constants/Colors"
import { MaterialIcons } from "@expo/vector-icons"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"

const Verification = () => {
  return (
    <WrapperScreen>
      <AppBar withLogo={false} colorTheme="green" />
      <View style={styles.header}>
        <Text style={styles.titleVerification}>Verifikasi Login</Text>
        <Text style={styles.textParagraph}>Klik link sms yang baru aja kami kirim ke</Text>
        <Text style={styles.textParagraph}>+6283853797950 buat masuk ke akun mu</Text>
        <View style={styles.cardHeader}>
          <View style={styles.borderDash}>

            <View style={{
              position: "absolute",
              top: -5,
              right: 0,
              left: -14,
              bottom: 0,
              flexDirection: "column",
              justifyContent: "space-between",
            }}>
              <View style={styles.timeline}>
                <View style={styles.timelineTitle}>
                  <MaterialIcons name="access-time-filled" size={30} />
                  <Text style={styles.timelineText}>Mengirim link Login</Text>
                </View>

                <View style={styles.timelineIndicator}>
                  <ActivityIndicator />
                  <Text>00:40</Text>
                </View>
              </View>

              <View style={styles.timeline}>
                <View style={styles.timelineTitle}>
                  <MaterialIcons name="access-time-filled" size={30} />
                  <Text style={styles.timelineText}>Verifikasi link</Text>
                </View>

                <View style={styles.timelineIndicator}>
                  <ActivityIndicator />
                  <Text>00:40</Text>
                </View>
              </View>

              <View style={styles.timeline}>
                <View style={styles.timelineTitle}>
                  <MaterialIcons name="access-time-filled" size={30} />
                  <Text style={styles.timelineText}>Masuk akun</Text>
                </View>

                <View style={styles.timelineIndicator}>
                  <ActivityIndicator />
                  <Text>00:40</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </WrapperScreen>
  )
}

export default Verification;

const styles = StyleSheet.create({
  header: {
    position: "relative",
    backgroundColor: Colors.green.dark,
    padding: 20,
    height: 200,
  },
  titleVerification: {
    marginBottom: 20,
    fontSize: 24,
    color: Colors.primary.white,
    fontWeight: "bold"
  },
  textParagraph: {
    color: Colors.primary.white,
    fontSize: 16,
  },
  cardHeader: {
    position: "absolute",
    bottom: -120,
    backgroundColor: Colors.primary.white,
    padding: 20,
    width: "100%",
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  borderDash: {
    position: "relative",
    paddingHorizontal: 10,
    borderLeftColor: Colors.grey.base,
    borderStyle: "dashed",
    borderLeftWidth: 1,
    height: 130,
  },
  timeline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timelineText: {
    fontSize: 16,
    fontWeight: "800",
  },
  timelineIndicator: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  timelineTitle: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
});
