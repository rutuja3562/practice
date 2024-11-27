//---------------------------------------------------------------------------------
/* File: /components/header-one/styles.ts */
//---------------------------------------------------------------------------------

import { Color, FontSize } from "@/assets/theme";
import { StyleSheet } from "react-native";

//---------------------------------------------------------------------------------

export const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  info: { fontFamily: "Regular" },
  buttonContainer: {
    marginTop: 10,
  },
});

//---------------------------------------------------------------------------------
