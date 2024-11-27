import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Clipboard,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // for clipboard icon
import SmallButtonOne from "../small-button-one/SmallButtonOne";
import { BorderRadius, Color, Font, FontSize, Margin } from "@/assets/theme";
import ConfirmButton from "../confirm-button/NewSmallButton";
import CopyIcon from "@/assets/svg-icons/CopyIcon";

const ReferAndEarn = () => {
  const copyCode = () => {
    Clipboard.setString("3423J767");
    Alert.alert(
      "Code copied!",
      "Your referral code has been copied to the clipboard.",
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Invite friends to Task-e and get Rs 100 when your friend registers. They
        get Rs 25!
      </Text>
      <View style={styles.codeContainer}>
        <Text style={styles.codeText}>
          Copy your code <Text style={styles.boldCode}>3423J767</Text>
        </Text>
        <TouchableOpacity onPress={copyCode}>
          <CopyIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <ConfirmButton
          buttonText="Agree"
          onButtonPress={() => console.log("Click")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.White,
    borderRadius: BorderRadius.borderRadius,
  },
  description: {
    fontSize: FontSize.BodyCopy,
    color: Color.Black,
    fontFamily: Font.Regular,
    marginBottom: Margin.InterElementsSpaceLarge,
    marginTop: Margin.InterElementsSpaceSmall,
  },
  codeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Margin.InterElementsSpaceLarge,
  },
  codeText: {
    fontSize: FontSize.BodyCopy,
    color: Color.Black,
    fontFamily: Font.Regular,
    marginRight: Margin.InterElementsSpaceSmall,
  },
  boldCode: {
    fontFamily: Font.SemiBold,
    fontSize: FontSize.BodyCopy,
    color: Color.Black,
  },
  buttonContainer: {
    marginBottom: Margin.InterElementsSpaceLarge,
  },
});

export default ReferAndEarn;
