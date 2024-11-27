import {
  BorderRadius,
  Color,
  Font,
  FontSize,
  Margin,
  // Padding,
} from "@/assets/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: "center",
    backgroundColor: Color.White,
  },

  jobsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: Margin.InterElementsSpaceLarge,
    marginTop: Margin.InterElementsSpaceLarge,
  },

  scrollViewStyle: {
    // marginBottom: -15,
    // marginTop: -15,
    // marginBottom: Margin.InterElementsSpaceSmall,
    position: "relative",
    bottom: Margin.InterElementsSpaceLarge,
  },

  scrollViewContentContainerStyle: {
    paddingBottom: Margin.InterElementsSpaceLarge,
    paddingTop: Margin.InterElementsSpaceLarge,
  },

  jobBox: {
    width: 120,
    height: 100,
    borderRadius: BorderRadius.commonHigherBorderRadius,
    padding: Margin.InterElementsSpaceLarge,
    alignItems: "center",
    justifyContent: "center",
    marginRight: Margin.InterElementsSpaceSmall,
    shadowColor: Color.Black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  addButton: {
    backgroundColor: Color.Orange,
    width: 120,
    height: 100,
    borderRadius: BorderRadius.commonHigherBorderRadius,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    alignSelf: "center", // Center the button below the job boxes
    // marginTop: 16,
  },
  switchReplacement: {
    backgroundColor: "#36C2F2",
  },
  cablePulling: {
    backgroundColor: "#4E9EF6",
  },
  socketReplacement: {
    backgroundColor: "#F8A488",
  },

  jobText: {
    color: Color.White,
    fontFamily: Font.SemiBold,
    fontSize: FontSize.Regular,
    textAlign: "center",
    marginTop: Margin.InterElementsSpaceSmall,
  },
});
