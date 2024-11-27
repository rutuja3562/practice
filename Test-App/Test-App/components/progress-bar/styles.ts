//---------------------------------------------------------------------------------
/* File: /components/header-one/styles.ts */
//---------------------------------------------------------------------------------

import { Color, FontSize } from "@/assets/theme";
import { StyleSheet } from "react-native";

//---------------------------------------------------------------------------------

export const styles = StyleSheet.create({
  profileCompletion: {
    height: 70,
    padding: 10,
  },
  completionText: {
    color: "black",
    fontFamily: "Regular",
    paddingTop: 5,
  },
  userIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressBar: {
    height: 3,
    backgroundColor: "#EEE",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 15,
  },
  progress: {
    width: `${20}%`,
    height: "100%",
    backgroundColor: "#FB6D49",
  },
});

//---------------------------------------------------------------------------------
