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
  vendorOneContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    marginTop: -5,
    marginBottom: 10,
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
    width: "100%",
    marginBottom: 20,
  },
});
