import { StyleSheet } from "react-native";
// import { Font } from "../add-photo/theme";
import {
  BorderRadius,
  ButtonShadow,
  Color,
  Font,
  FontSize,
  Margin,
} from "@/assets/theme";

export const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 40,
    borderRadius: BorderRadius.CommonBorderRadius,
    borderColor: Color.Purple,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.Purple,
    // shadowColor: Color.Purple,
    // shadowOffset: { width: 0, height: 4 },
    // // shadowOpacity: 0.3,
    // shadowOpacity: 0.5,
    // shadowRadius: BorderRadius.CommonBorderRadius,
    // elevation: ButtonShadow.elevation,
    shadowColor: Color.Purple,
    shadowOffset: { width: 0, height: 10 }, // Reduced height for smoother shadow
    shadowOpacity: 10, // Lower opacity for a softer shadow
    shadowRadius: 8, // Increase radius for a smoother shadow spread
    elevation: 30,
  },
  buttonPressed: {
    backgroundColor: Color.Purple,
  },
  buttonText: {
    color: Color.White,
    textAlign: "center",
    fontFamily: Font.Regular,
    fontSize: FontSize.SmallCopy,
  },
  addRound: {
    marginRight: Margin.InterElementsSpaceSmall,
  },
});
