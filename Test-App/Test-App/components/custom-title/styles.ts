//---------------------------------------------------------------------------------
/* File: /screens/enter-pincode/styles.ts */
//---------------------------------------------------------------------------------

import { Color, Font, FontSize, Margin } from "@/assets/theme";
import { StyleSheet } from "react-native";

//---------------------------------------------------------------------------------

export const styles = StyleSheet.create({
  customTitleContainer: {
    width: "100%",
    marginTop: Margin.WidgetHeaderToWidgetElements,
  },
  title: {
    fontSize: FontSize.Heading,
    fontFamily: Font.SemiBold,
    marginBottom: 20,
    color: Color.Black,
  },
});
