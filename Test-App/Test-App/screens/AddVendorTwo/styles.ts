// File: /screens/AddVendorTwo/styles.ts

import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f9f9f9",
  },
  scrollContainer: {
    flexGrow: 1,
    marginTop: 20,
  },
  header: {
    marginTop: 20,
    paddingVertical: 5,
    alignItems: "flex-end",
  },
  vendorTwoContainer: {
    marginTop: 30,
    marginBottom: 30,
    alignItems: "center",
  },
  vendorTwoContent: {
    width: "100%",
    maxWidth: 350,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    objectFit: "contain",
  },
  vendorTwoInfo: {
    // borderWidth: 1,
    // borderColor: "#d3d3d3",
    borderRadius: 10,
    padding: 15,
    width: "100%",
    // backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // padding: 16,
    width: "100%",
  },
});
