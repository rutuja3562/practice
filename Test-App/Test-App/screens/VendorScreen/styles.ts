// //---------------------------------------------------------------------------------
// // File: /screens/VendorScreen/styles.ts
// //---------------------------------------------------------------------------------

import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

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
  serviceContainer: {
    marginTop: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 10,
  },
  picker: {
    height: 50,
    width: width - 30,
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
    width: "100%",
  },
});
