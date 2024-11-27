import { Color, Font, Margin } from "@/assets/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    paddingTop: 30,
  },
  innerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Margin.containerHorizontalMargin,
  },
  header: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    // marginBottom: 10,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    marginLeft: 8,
  },
  content: {
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontFamily: Font.SemiBold,
    marginBottom: 15,
  },
  optionContainer: {
    // marginBottom: 15,
  },
  optionTitle: {
    fontSize: 18,
    fontFamily: Font.SemiBold,
    marginBottom: 20,
  },
  optionDescription: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
  },
  deactivateButton: {
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  deactivateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  deleteButton: {
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
});
