import {
  BorderRadius,
  ButtonShadow,
  Color,
  Font,
  FontSize,
  Margin,
} from "@/assets/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: Color.White,
    // borderRadius: BorderRadius.borderRadius,
    // padding: Padding.containerPadding,
    // borderColor: Color.SoftGray,
    // borderWidth: 1,
    // marginVertical: 5,
    // shadowColor: Color.Purple,
    // shadowOffset: { width: 0, height: 30 },
    // shadowOpacity: 2.5,
    // shadowRadius: 3.84,
    // elevation: ButtonShadow.elevation,
    backgroundColor: Color.White,
    borderRadius: BorderRadius.borderRadius,
    padding: Margin.InterElementsSpaceLarge,
    borderColor: Color.VeryLightGrey,
    borderWidth: 1,
    marginVertical: 5,
    shadowColor: Color.Purple,
    // shadowOffset: { width: 0, height: 3 }, // Reduced height for smoother shadow
    // shadowOpacity: 0.2, // Lower opacity for a softer shadow
    // shadowRadius: 3, // Increase radius for a smoother shadow spread
    elevation: 6,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  invoiceNumber: {
    fontSize: FontSize.BodyCopy,
    fontFamily: Font.SemiBold,
    color: Color.Black,
  },
  price: {
    fontSize: FontSize.BodyCopy,
    fontFamily: Font.SemiBold,
    color: Color.Black,
  },
  billingInfo: {
    marginTop: Margin.InterElementsSpaceSmall,
    fontSize: FontSize.Regular,
    color: Color.DarkGrey,
    fontFamily: Font.Regular,
  },
});
