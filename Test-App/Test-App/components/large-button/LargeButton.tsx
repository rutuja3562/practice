import { Color } from "@/assets/theme";
import { styles } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";

function LargeButton({
  onButtonPress,
  buttonText,
  disabled,
}: {
  onButtonPress: () => void;
  buttonText: string;
  disabled?: boolean;
}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[
          styles.button,
          disabled ? styles.buttonInvalid : styles.buttonValid,
        ]}
        onPress={onButtonPress}
        disabled={disabled}
      >
        <Text
          style={[
            styles.buttonText,
            disabled ? styles.buttonTextDark : styles.buttonTextWhite,
          ]}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default LargeButton;
