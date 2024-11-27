import React from "react";
import { Text, View } from "react-native";
import LargeButtonOne from "../large-button-one/LargeButtonOne";
import { styles } from "./styles";

export const CustomDescription = ({ text }: { text: string }) => {
  return (
    <View style={styles.customDescriptionContainer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
