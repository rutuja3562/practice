import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { styles } from "./styles";

const SectionContainer = ({
  children,
  sectionTitle,
}: {
  children: ReactNode;
  sectionTitle: string;
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{sectionTitle}</Text>
      {children}
    </View>
  );
};

export default SectionContainer;
