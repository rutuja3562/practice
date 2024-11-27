//---------------------------------------------------------------------------------
/* File: /components/header-one/styles.ts */
//---------------------------------------------------------------------------------

import { Color, FontSize } from "@/assets/theme";
import { StyleSheet } from "react-native";

//---------------------------------------------------------------------------------

export const styles = StyleSheet.create({
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: "Bold",
    fontSize: 18,
    color: "#01406C",
    marginBottom: 8,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    alignItems: "center",
    width: "23%",
  },
  updateProfileItemText: {
    textAlign: "center",
    marginTop: 5,
  },
  updateProfileItemButtonContainer: {
    marginTop: 5,
  },
});

//---------------------------------------------------------------------------------
