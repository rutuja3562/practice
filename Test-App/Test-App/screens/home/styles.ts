//---------------------------------------------------------------------------------
/* File: /screens/home/styles.ts */
//---------------------------------------------------------------------------------

import { Color, Font, FontSize, Margin } from "@/assets/theme";
import { StyleSheet } from "react-native";

//---------------------------------------------------------------------------------

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Margin.ScreenLeftRightMargin,
    backgroundColor: Color.White,
    width: "100%",
  },
  innerContainer: {
    marginHorizontal: Margin.ScreenLeftRightMargin,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: FontSize.Heading,
    fontFamily: Font.SemiBold,
  },
  profileInfo: {},
  scrollViewStyle: {
    marginRight: -Margin.ScreenLeftRightMargin,
    marginLeft: -Margin.ScreenLeftRightMargin,
  },
  scrollViewContentContainerStyle: {
    paddingRight: Margin.ScreenLeftRightMargin,
    paddingLeft: Margin.ScreenLeftRightMargin,
  },
  // address: {
  //   fontFamily: "Medium",
  //   fontSize: 16,
  //   marginLeft: 5,
  // },
  jobsAreaSection: {
    // marginTop: -40,
    // position: "relative",
    // bottom: Margin.WidgetToWidget,
  },
  changeButton: {
    alignSelf: "flex-end",
  },
  profileCompletion: {
    height: 70,
    padding: 10,
  },
  section: {
    // marginBottom: Margin.InterElementsSpaceLarge,
    // position: "relative",
    // bottom: Margin.WidgetToWidget,
    // bottom: 10,
    // marginBottom: 10,
    // marginTop: 10,
  },
  statsItemContainer: {
    // marginBottom: Margin.InterElementsSpaceLarge,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    alignItems: "center",
    width: "23%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    justifyContent: "space-between",
  },
  checkboxLabel: {
    fontFamily: "ExtraLight",
    fontSize: 15,
  },
  addButton: {
    alignSelf: "flex-start",
    marginTop: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#007BFF",
    borderRadius: 5,
  },
  updateProfileItemText: {
    textAlign: "center",
    marginTop: 5,
  },
  updateProfileItemButtonContainer: {
    marginTop: 5,
  },
  checkbox: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    padding: 0,
    margin: 0,
  },
  verticalSpace: {
    marginTop: Margin.InterElementsSpaceLarge,
  },
  manageAccountSection: {
    marginTop: Margin.WidgetHeaderToWidgetElements,
  },
  referAndEarnSection: {
    marginTop: Margin.WidgetHeaderToWidgetElements,
  },
});

//---------------------------------------------------------------------------------
