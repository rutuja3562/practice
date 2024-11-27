import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MenuItemIcon from "@/assets/svg-icons/MenuItemIcon";
import ArrowRight from "@/assets/svg-icons/ArrowRight";
import { Color, Font, FontSize, Margin } from "@/assets/theme";

const AccountCards = ({
  title,
  onButtonPress,
}: {
  title: string;
  onButtonPress?: () => void;
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        onButtonPress ? onButtonPress() : console.log("button pressed")
      }
    >
      <View style={styles.iconContainer}>
        <MenuItemIcon />
      </View>
      <Text style={styles.text}>{title}</Text>
      <ArrowRight />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Margin.InterElementsSpaceSmall,
    backgroundColor: Color.White,
    justifyContent: "space-between",
  },
  iconContainer: {
    marginRight: Margin.InterElementsSpaceSmall,
  },
  text: {
    flex: 1,
    fontSize: FontSize.BodyCopy,
    fontFamily: Font.Regular,
    color: "#000",
  },
});

export default AccountCards;
