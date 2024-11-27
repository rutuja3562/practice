import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

const TextAndDescription = ({
  topText,
  bottomText,
}: {
  topText: string;
  bottomText: string;
}) => {
  return (
    <>
      <Text style={styles.topText}>{topText}</Text>
      <Text style={styles.bottomText}>{bottomText}</Text>
    </>
  );
};

export default TextAndDescription;
