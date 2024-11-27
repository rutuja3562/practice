//---------------------------------------------------------------------------------
// File: /screens/ServiceScreen/styles.ts
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
  servicesContainer: { marginTop: 10 },
  servicesContent: {
    height: 400,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
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
  },
  itemBox: {
    // backgroundColor: "yellow",
    marginVertical: 10,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
  },
});
