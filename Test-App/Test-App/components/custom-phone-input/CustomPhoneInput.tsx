import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import CloseIcon from "@/assets/svg-icons/CloseIcon";
import { styles } from "./styles";
import { BorderRadius, Color, Styles } from "@/assets/theme";

interface CustomPhoneInputProps {
  phoneValue: string;
  onPhoneChange: (value: string) => void;
  onPhoneBlur: (value?: string) => void;
  clearPhone: () => void;
  errorMessage?: string;
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({
  phoneValue,
  onPhoneChange,
  onPhoneBlur,
  clearPhone,
  errorMessage,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <View style={[styles.inputContainer]}>
        <View style={styles.countryCode}>
          <Text style={styles.countryCodeText}>+91</Text>
        </View>
        <TextInput
          style={[
            styles.input,
            isFocused && {
              borderColor: Color.Purple,
              borderLeftColor: Color.Purple,
              borderLeftWidth: 1,
              borderTopLeftRadius: BorderRadius.countryCodeBorderRadius,
              borderBottomLeftRadius: BorderRadius.countryCodeBorderRadius,
            },
          ]}
          placeholder="Enter 10 digit mobile number"
          maxLength={10}
          keyboardType="phone-pad"
          placeholderTextColor="#535252"
          onChangeText={onPhoneChange}
          onBlur={() => {
            setIsFocused(false);
            onPhoneBlur();
          }}
          onFocus={() => setIsFocused(true)}
          value={phoneValue}
        />
        {phoneValue.length > 0 ? (
          <CloseIcon style={styles.closeCircle} onPress={clearPhone} />
        ) : null}
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
    </>
  );
};

export default CustomPhoneInput;
