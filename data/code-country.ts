import { ImageSourcePropType } from "react-native";

type TileCountryType = {
  image: ImageSourcePropType,
  country: string,
  code: string,
}

const countryCodes: TileCountryType[] = [
  {
    image: require("@/assets/flag/indonesia.png"),
    country: "indonesia",
    code: "+62",
  },
  {
    image: require("@/assets/flag/vietnam.png"),
    country: "Vietnam",
    code: "+84",
  },
  {
    image: require("@/assets/flag/thailand.png"),
    country: "Thailand",
    code: "+66",
  },

  {
    image: require("@/assets/flag/afghanistan.png"),
    country: "Afghanistan",
    code: "+93",
  },

  {
    image: require("@/assets/flag/albania.png"),
    country: "Albania",
    code: "+355",
  },

  {
    image: require("@/assets/flag/algeria.png"),
    country: "Algeria",
    code: "+213",
  },

  {
    image: require("@/assets/flag/marshall-islands.png"),
    country: "American Samoa",
    code: "+1",
  },

  {
    image: require("@/assets/flag/moldova.png"),
    country: "Andorra",
    code: "+376",
  },
]

export {
  type TileCountryType,
  countryCodes,
}
