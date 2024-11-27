//---------------------------------------------------------------------------------
// File: /components/large-button/LargeButton.tsx
//---------------------------------------------------------------------------------

import { styles } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";

//---------------------------------------------------------------------------------

function DeleteButton({
  onButtonPress,
  buttonText,
}: {
  onButtonPress: () => void;
  buttonText: string;
}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => onButtonPress()}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
}

//---------------------------------------------------------------------------------

export default DeleteButton;

//---------------------------------------------------------------------------------
