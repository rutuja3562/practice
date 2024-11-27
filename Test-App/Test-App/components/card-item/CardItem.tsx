import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";
import { Styles } from "@/assets/theme";
const CardItem = ({
  cardTitle,
  cardInfo,
  cardRhsText,
}: {
  cardTitle: string;
  cardInfo: string;
  cardRhsText?: string;
}) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.row}>
        <Text style={styles.invoiceNumber}>{cardTitle}</Text>
        <Text style={styles.price}>{cardRhsText}</Text>
      </View>
      <Text style={styles.billingInfo}>{cardInfo}</Text>
    </View>
  );
};

export default CardItem;
