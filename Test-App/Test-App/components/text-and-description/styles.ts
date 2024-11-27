import { Color, Font, FontSize, Margin } from "@/assets/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topText: {
    marginBottom: Margin.Gutter,
    fontSize: FontSize.Heading,
    fontFamily: Font.SemiBold,
  },

  bottomText: {
    fontSize: FontSize.BodyCopy,
    fontFamily: Font.Regular,
  },
});
