import { BorderRadius, Color, Font, FontSize, Margin } from "@/assets/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
    flex: 1,
    paddingTop: 30,
  },
  innerContainer: {
    marginHorizontal: 15,
  },
  headerContainer: { marginTop: 10 },
  titleContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.Heading,
    fontFamily: Font.SemiBold,
    color: Color.Black,
  },
  contentContainer: { marginTop: Margin.FirstElementFromHeader },
  listContainer: {
    marginVertical: 10,
  },
  itemContainer: {
    padding: 15,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
});
