import Colors from "@/constants/Colors";
import { TileCountryType } from "@/data/code-country";
import { Image, Pressable, Text } from "react-native";
import { StyleSheet, View } from "react-native"

const TileCountry = ({ country, onSelect }: { country: TileCountryType, onSelect: (country: TileCountryType) => void }) => {
  return <Pressable style={styles.container} onPress={() => onSelect(country)}>
    <View style={styles.flagTitle}>
      <Image source={country.image} />
      <Text style={styles.countryText}>{country.country}</Text>
    </View>
    <View>
      <Text style={styles.codeCountry}>
        {country.code}
      </Text>
    </View>
  </Pressable>
}

export default TileCountry;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flagTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  countryText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  codeCountry: {
    fontSize: 18,
    fontWeight: "semibold",
    color: Colors.grey.darkGrey,
  }
})
