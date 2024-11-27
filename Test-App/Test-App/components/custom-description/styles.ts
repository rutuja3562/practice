//---------------------------------------------------------------------------------
/* File: /screens/enter-pincode/styles.ts */
//---------------------------------------------------------------------------------

import {
  Color,
  Font,
  FontSize,
  Margin,
  // subtitleAndContentGap,
  // titleAndSubtitleGap,
} from "@/assets/theme";
import { StyleSheet } from "react-native";

//---------------------------------------------------------------------------------

export const styles = StyleSheet.create({
  customDescriptionContainer: {
    width: "100%",
    // marginTop: titleAndSubtitleGap.marginTop,
    // marginBottom: Margin.WidgetHeaderToWidgetElements,
  },
  headingText: {
    fontSize: FontSize.Heading,
    fontFamily: Font.SemiBold,
    marginBottom: 13,
    color: Color.VeryDarkGrey,
  },
  text: {
    fontSize: FontSize.BodyCopy,
    fontFamily: Font.Regular,
    // marginBottom: subtitleAndContentGap.marginBottom,
  },
});
