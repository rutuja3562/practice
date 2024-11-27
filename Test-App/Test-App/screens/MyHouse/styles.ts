//---------------------------------------------------------------------------------
// File: /screens/ServiceRequest/styles.ts
//---------------------------------------------------------------------------------

import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f9f9f9",
  },
  scrollContainer: {
    flex: 1,
    marginTop: 30,
  },
  header: {
    marginTop: 30,
    paddingVertical: 5,
  },
  myHouseContainer: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  myHouseContent: {
    height: 400,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  pickerContainer: {
    marginBottom: 20,
    marginTop: 8,
  },
  text: {
    fontSize: 16,
  },
  headingText: {
    fontSize: 22,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    // borderTopWidth: 1,
    // borderColor: "#ccc",
  },
});
