import { StyleSheet } from "react-native";
// import { Font } from "../add-photo/theme";
import { Color, FontSize } from "@/assets/theme";
import { Font } from "@/constants/FontTypes";

export const styles = StyleSheet.create({
  button: {
    width: 70 * 1.25, // 25% bigger
    borderRadius: 30 * 1.25, // 25% bigger
    borderColor: Color.Orange,
    borderWidth: 1,
    paddingVertical: 4 * 1.25, // 25% bigger
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 5,
    // marginRight: 5,
    // marginTop: 8,
  },
  buttonPressed: {
    backgroundColor: Color.Orange,
  },
  buttonText: {
    color: Color.Orange,
    textAlign: "center",
    fontFamily: Font.Medium,
    fontSize: FontSize.Font11,
    // marginLeft: 5,
  },
  addRound: {
    marginRight: 5,
  },
});
