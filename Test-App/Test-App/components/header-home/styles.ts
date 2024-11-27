//---------------------------------------------------------------------------------
/* File: /components/header-one/styles.ts */
//---------------------------------------------------------------------------------

import { Color, FontSize } from "@/assets/theme";
import { StyleSheet } from "react-native";

//---------------------------------------------------------------------------------

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 16,
    width: "100%",
    paddingVertical: 5,
  },
  logo: { marginLeft: -13 },
  rightIconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

//---------------------------------------------------------------------------------
