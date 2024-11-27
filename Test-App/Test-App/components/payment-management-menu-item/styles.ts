//---------------------------------------------------------------------------------
/* File: /components/header-one/styles.ts */
//---------------------------------------------------------------------------------

import { Color, FontSize } from "@/assets/theme";
import { StyleSheet } from "react-native";

//---------------------------------------------------------------------------------

export const styles = StyleSheet.create({
  touchableOpacityStyle: { marginTop: 3 },
  sectionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subContainer: { display: "flex", flexDirection: "row" },
  iconContainer: { marginTop: 3 },
  itemText: {
    fontFamily: "Medium",
    marginLeft: 5,
    fontSize: 15,
    color: "#003896",
  },
});

//---------------------------------------------------------------------------------
