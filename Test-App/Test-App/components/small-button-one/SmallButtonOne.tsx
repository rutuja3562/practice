import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
// import AddRound from "@/assets/svg-icons/AddRound";
import { styles } from "./styles";
// import { Styles } from "@/screens/sign-in/delete";

interface SmallButtonOneProps {
  icon?: React.ComponentType;
  buttonText: string;
  onButtonPress: () => void;
}

const SmallButtonOne = ({
  icon: Icon,
  buttonText,
  onButtonPress,
}: SmallButtonOneProps) => {
  return (
    <TouchableOpacity style={[styles.button]} onPress={onButtonPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default SmallButtonOne;
