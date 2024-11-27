import { Color, Font, FontSize, Margin } from "@/assets/theme";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    backgroundColor: Color.White,
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: Margin.InterElementsSpaceSmall,
    borderWidth: 1,
  },
  text: {
    fontSize: FontSize.BodyCopy,
    fontFamily: Font.Regular,
  },
  headingText: {
    fontSize: FontSize.Heading,
    paddingVertical: Margin.InterElementsSpaceSmall,
    // fontWeight: "bold",
    fontFamily: Font.SemiBold,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Margin.InterElementsSpaceLarge,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  webView: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
