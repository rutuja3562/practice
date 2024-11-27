//---------------------------------------------------------------------------------
// File: /components/large-button/LargeButton.tsx
//---------------------------------------------------------------------------------

import { styles } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";

//---------------------------------------------------------------------------------

function LargeButton({
  onButtonPress,
  buttonText,
}: {
  onButtonPress: () => void;
  buttonText: string;
}) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onButtonPress()}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

//---------------------------------------------------------------------------------

export default LargeButton;

//---------------------------------------------------------------------------------
