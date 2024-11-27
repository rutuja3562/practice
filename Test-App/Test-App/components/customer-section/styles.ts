import { BorderRadius, Color, Font, FontSize, Margin } from "@/assets/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // backgroundColor: Color.White,
    width: "100%",
  },
  title: {
    fontSize: FontSize.BodyCopy,
    fontFamily: Font.SemiBold,
    // marginBottom: 15,
    color: Color.Black,
  },
  avatarContainer: {
    alignItems: "center",
    marginVertical: Margin.InterElementsSpaceSmall,
    // marginHorizontal: 1.5,
    // paddingHorizontal: 20,
    width: 67.2,
  },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: BorderRadius.commonLargeBorderRadius,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    color: Color.White,
    fontSize: FontSize.BodyCopy,
    fontFamily: Font.SemiBold,
  },
  customerName: {
    marginTop: 5,
    fontSize: FontSize.Regular,
    fontFamily: Font.Regular,
    color: Color.Black,
    textAlign: "center",
    width: 62,
  },
  flatList: {
    width: "100%",
    marginTop: -Margin.InterElementsSpaceSmall,
  },
  flatListContent: {
    justifyContent: "space-between",
    alignItems: "center",
  },

  moreButtonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 66,
    marginHorizontal: 4,
    marginVertical: Margin.InterElementsSpaceSmall,
  },
  moreAvatar: {
    width: 62,
    height: 62,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.VeryLightGrey,
    borderWidth: 1,
    borderColor: Color.LightGrey,
  },
  moreText: {
    marginTop: 5,
    fontSize: FontSize.Regular,
    fontFamily: Font.Regular,
    color: Color.Black,
    textAlign: "center",
    width: 62,
  },

  noCustomerButtonContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  noCustomerButtonInnerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
});
