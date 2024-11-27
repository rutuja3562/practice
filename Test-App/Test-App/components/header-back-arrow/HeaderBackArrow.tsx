import React from "react";
import { View, Pressable, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
// @ts-ignore
import BackIcon from "@/assets/svg-icons/BackIcon";
import { styles } from "./styles";
import { Styles } from "@/assets/theme";
// @ts-ignore
import ArrowWithoutPadding from "@/assets/svg-icons/ArrowWithoutPadding";

const HeaderBackArrow = ({ onBackPress }: { onBackPress: () => void }) => {
  const router = useRouter();

  return (
    <View style={[styles.header]}>
      <TouchableOpacity style={[]} onPress={onBackPress}>
        <View style={[]}>
          {/* <BackIcon /> */}
          <ArrowWithoutPadding />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBackArrow;
