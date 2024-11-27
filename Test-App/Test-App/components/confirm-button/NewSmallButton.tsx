import { Text, TouchableOpacity } from "react-native";
import React from "react";
// import AddRound from "@/assets/svg-icons/AddRound";
import { styles } from "./styles";

interface ConfirmButtonProps {
  icon?: React.ComponentType;
  buttonText: string;
  onButtonPress: () => void;
}

const ConfirmButton = ({
  icon: Icon,
  buttonText,
  onButtonPress,
}: ConfirmButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onButtonPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default ConfirmButton;
