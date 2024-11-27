import {
  BorderRadius,
  Color,
  Font,
  FontSize,
  LineHeight,
  Margin,
} from "@/assets/theme";
import { StyleSheet } from "react-native";

//---------------------------------------------------------------------------------
export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: Margin.InterElementsSpaceLarge,
    justifyContent: "center",
    marginBottom: Margin.WidgetHeaderToWidgetElements,
  },
  countryCode: {
    backgroundColor: Color.LightPurple,
    paddingHorizontal: Margin.InterElementsSpaceLarge,
    borderTopLeftRadius: BorderRadius.countryCodeBorderRadius,
    borderBottomLeftRadius: BorderRadius.countryCodeBorderRadius,
    justifyContent: "center",
    alignItems: "center",
    height: 52,
    borderColor: Color.LightGrey,
    borderWidth: 1,
  },
  countryCodeText: {
    fontSize: FontSize.BodyCopy,
    color: Color.VeryDarkGrey,
  },
  input: {
    width: "83.5%",
    height: 52,
    borderColor: Color.LightGrey, // Default border color
    borderWidth: 1,
    borderRadius: BorderRadius.countryCodeBorderRadius,
    paddingHorizontal: BorderRadius.countryCodeBorderRadius,
    borderLeftWidth: 0,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    fontSize: FontSize.BodyCopy,
    fontFamily: Font.Regular,
    backgroundColor: Color.VeryLightGrey,
    color: Color.Black,
  },
  closeCircle: {
    position: "absolute",
    right: Margin.InterElementsSpaceSmall,
  },
  errorText: {
    color: Color.Orange,
    marginTop: -10,
    marginBottom: Margin.WidgetHeaderToWidgetElements,
    textAlign: "left",
  },
});
