//---------------------------------------------------------------------------------
/* File: /components/header-one/styles.ts */
//---------------------------------------------------------------------------------

import { Color, Font, FontSize } from "@/assets/theme";
import { StyleSheet } from "react-native";

//---------------------------------------------------------------------------------

export const styles = StyleSheet.create({
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: Font.SemiBold,
    fontSize: 18,
    color: "#01406C",
    marginBottom: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    justifyContent: "space-between",
  },
  checkboxLabel: {
    fontFamily: Font.Regular,
    fontSize: 15,
  },
  checkbox: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    padding: 0,
    margin: 0,
  },
});

//---------------------------------------------------------------------------------
