import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // for the chat icon
import MassageBoxIcon from "@/assets/svg-icons/MassageBoxIcon";
import { Color, Font, FontSize, Margin } from "@/assets/theme";

interface StatsProps {
  number: string;
  text: string;
}

const StatsItem = ({ number, text }: StatsProps) => {
  return (
    <View style={styles.container}>
      <MassageBoxIcon />
      <View style={styles.textContainer}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Margin.InterElementsSpaceSmall,
  },
  icon: {
    marginRight: Margin.InterElementsSpaceSmall,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginLeft: 7,
  },
  number: {
    fontFamily: Font.SemiBold,
    fontSize: FontSize.BodyCopy,
    color: Color.Black,
    marginRight: 5,
  },
  text: {
    fontFamily: Font.Regular,
    fontSize: FontSize.BodyCopy,
    color: Color.VeryDarkGrey,
  },
});

export default StatsItem;
