import {
  BorderRadius,
  ButtonShadow,
  Color,
  Font,
  FontSize,
  Margin,
} from "@/assets/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.White,
    // padding: 20,
    width: "100%",
    marginBottom: Margin.WidgetToWidget,
  },
  profileContainer: {
    width: "100%",
    backgroundColor: Color.White,
    // borderRadius: 15,
    // padding: 20,
  },
  greetingTextDiv: {
    marginTop: Margin.InterElementsSpaceLarge,
  },
  greetingText: {
    fontSize: FontSize.BodyCopy,
    color: Color.DarkGrey,
    fontFamily: Font.Regular,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: -Margin.InterElementsSpaceLarge,
  },

  userProfile: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    // marginRight: Margin.InterElementsSpaceSmall,
    marginRight: 0,
    borderRadius: 20, // Added to make it a circle
    backgroundColor: Color.LightPurple,
    marginBottom: Margin.InterElementsSpaceLarge,
  },
  completeProfileText: {
    fontSize: FontSize.Heading,
    fontFamily: Font.SemiBold,
    color: Color.Purple,
  },
  progressBar: {
    height: 8,
    marginVertical: Margin.InterElementsSpaceSmall,
    borderRadius: BorderRadius.progressBarBorderRadius,
  },
  progressStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Margin.InterElementsSpaceSmall,
    // marginBottom: Margin.commonHigherMarginBetweenElements,
  },
  buttonContainer: {
    // marginBottom: 40,
  },
  percentageText: {
    fontSize: FontSize.BodyCopy,
    fontFamily: Font.Regular,
    color: Color.VeryDarkGrey,
    // marginBottom: 20,
  },
  shadowStyle: {
    //   shadowColor: Color.DarkGrey, // Color of the shadow
    //   shadowOffset: {
    //     width: 0, // No horizontal offset
    //     height: 3, // Vertical offset
    //   },
    //   shadowOpacity: 0.2, // Opacity of the shadow
    //   shadowRadius: 4, // Blur radius
    //   elevation: 5, // For Android shadow
    // },
    shadowColor: Color.Purple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: BorderRadius.CommonBorderRadius,
    elevation: ButtonShadow.elevation,
    // overflow: "visible", // Ensure shadow is not cut off
  },
});
