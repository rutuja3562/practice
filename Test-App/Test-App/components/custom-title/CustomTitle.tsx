import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
// import { Styles } from "@/assets/theme";

export const CustomTitle = ({ title }: { title: string }) => {
  return (
    <View style={[styles.customTitleContainer]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
