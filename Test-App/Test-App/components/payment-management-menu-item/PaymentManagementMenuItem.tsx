import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import TransactionIcon from "@/assets/svg-icons/TransactionIcon";
import RightArrowIcon from "@/assets/svg-icons/RightArrow";
import { styles } from "./styles";

const PaymentManagementMenuItem = ({ itemText }: { itemText: string }) => {
  return (
    <TouchableOpacity
      style={styles.touchableOpacityStyle}
      onPress={() => alert("Under construction 🛠️")}
    >
      <View style={styles.sectionContainer}>
        <View style={styles.subContainer}>
          <View style={styles.iconContainer}>
            <TransactionIcon />
          </View>
          <Text style={styles.itemText}>{itemText}</Text>
        </View>
        <View>
          <RightArrowIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentManagementMenuItem;
