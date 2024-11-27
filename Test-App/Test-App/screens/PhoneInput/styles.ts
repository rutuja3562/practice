//---------------------------------------------------------------------------------
/* File: /screens/phone-input/styles.ts */
//---------------------------------------------------------------------------------

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
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.White,
    // paddingHorizontal: Margin.InterElementsSpaceLarge,
  },

  welcomeImage: {
    width: 208,
    height: 208,
  },

  welcomeTextImage: {
    width: 184,
    height: 90,
    // marginTop: -18,
    position: "relative",
    bottom: Margin.InterElementsSpaceLarge,
  },

  shadowContainer: {
    width: "100%",
    backgroundColor: Color.White,
    justifyContent: "center",
    alignItems: "center",
  },

  getGoingText: {
    marginBottom: Margin.Gutter,
    fontSize: FontSize.Heading,
    fontFamily: Font.SemiBold,
  },

  loginText: {
    fontSize: FontSize.BodyCopy,
    fontFamily: Font.Regular,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: Margin.InterElementsSpaceLarge,
    justifyContent: "center",
    marginBottom: Margin.WidgetHeaderToWidgetElements,
  },

  countryCode: {
    backgroundColor: Color.VeryLightGrey,
    paddingHorizontal: Margin.InterElementsSpaceLarge,
    borderTopLeftRadius: BorderRadius.countryCodeBorderRadius,
    borderBottomLeftRadius: BorderRadius.countryCodeBorderRadius,
    justifyContent: "center",
    alignItems: "center",
    height: 52,
    borderColor: Color.VeryLightGrey,
    borderWidth: 1,
  },

  countryCodeText: {
    fontSize: FontSize.BodyCopy,
    color: Color.VeryDarkGrey,
  },

  input: {
    width: "85%",
    height: 52,
    // borderColor: Color.CheckBoxBorder,
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
    right: Margin.Gutter,
    bottom: Margin.WidgetToWidget,
  },

  errorText: {
    // color: Color.Red,
    marginTop: Margin.InterElementsSpaceSmall,
    marginBottom: Margin.WidgetHeaderToWidgetElements,
    textAlign: "left",
  },

  footerContainer: {
    width: "100%",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
  },

  helpText: {
    fontSize: FontSize.SmallCopy,
    // color: Color.HelpText,
    textAlign: "center",
    lineHeight: LineHeight.helpTextLineHeight,
    marginTop: Margin.InterElementsSpaceLarge,
  },

  linkText: {
    color: Color.Blue,
    fontFamily: Font.SemiBold,
    fontSize: FontSize.SmallCopy,
  },

  inputFocused: {
    borderColor: Color.Purple, // Border color when focused
  },
  btnContainer: {
    width: "100%",
  },
});
//---------------------------------------------------------------------------------
