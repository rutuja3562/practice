//---------------------------------------------------------------------------------
/* File: /components/large-button/styles.ts */
//---------------------------------------------------------------------------------

import { Color, FontSize } from "@/assets/theme";
import { Font } from "@/constants/FontTypes";
import { StyleSheet } from "react-native";

//---------------------------------------------------------------------------------

export const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF7F50",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    width: "85%",
    // marginTop: 57,
    marginBottom: 15,
    paddingVertical: 20,
  },
  buttonText: {
    color: Color.offWhite,
    fontFamily: Font.Bold,
    fontSize: FontSize.Font15,
  },
});

//---------------------------------------------------------------------------------
