//---------------------------------------------------------------------------------
/* File: /components/large-button-one/styles.ts */
//---------------------------------------------------------------------------------
import { Color, Font, FontSize } from "@/assets/theme";
import { StyleSheet } from "react-native";

//---------------------------------------------------------------------------------

export const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: Color.White,
    // paddingVertical: 13,
    height: 52,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    // marginBottom: 15,
    shadowColor: Color.Purple,
    shadowOffset: { width: 0, height: 30 },
    shadowOpacity: 2.5,
    shadowRadius: 3.84,
    elevation: 25,
  },
  buttonText: {
    color: Color.Purple,
    fontFamily: Font.Regular,
    fontSize: FontSize.Font16,
  },
});

//---------------------------------------------------------------------------------
