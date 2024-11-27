import { StyleSheet } from "react-native";
import { Color, Font, FontSize } from "@/assets/theme";

export const styles = StyleSheet.create({
  button: {
    width: 130, // 25% bigger
    height: 40,
    borderRadius: 10, // 25% bigger
    borderColor: Color.Purple,
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
    color: Color.Purple,
    textAlign: "center",
    fontFamily: Font.SemiBold,
    fontSize: FontSize.SmallCopy,
    // marginLeft: 5,
  },
  addRound: {
    // marginRight: 5,
  },
});
