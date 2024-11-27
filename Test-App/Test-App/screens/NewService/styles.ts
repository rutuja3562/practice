//---------------------------------------------------------------------------------
// File: /screens/NewService/styles.ts
//---------------------------------------------------------------------------------

import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f9f9f9",
    width: "99%",
    margin: "auto",
  },
  scrollContainer: {
    flex: 1,
    marginTop: 30,
  },
  header: {
    marginTop: 30,
    paddingVertical: 5,
  },
  newServices: {
    marginTop: 10,
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
    justifyContent: "center",
    paddingVertical: 16,
    width: "100%",
  },
  picker: {
    height: 50,
    width: "100%",
    marginVertical: 10,
  },
  selectServicesContainer: {
    paddingVertical: 10,
  },
  selectItemsContainer: {
    paddingVertical: 10,
  },
  selectDatesContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  calendar: {
    width: "100%",
    margin: "auto",
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "#eee",
    height: 350,
    marginTop: 15,
  },
});
