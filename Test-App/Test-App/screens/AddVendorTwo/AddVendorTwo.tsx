//---------------------------------------------------------------------------------
// File: /screens/AddVendorTwo/AddVendorTwo.tsx
//---------------------------------------------------------------------------------

import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import LargeButton from "@/components/LargeButton/LargeButton";
import { styles } from "./styles";
import CloseIcons from "@/assets/svg-icons/CloseIcon";
// @ts-ignore
import welcomeImage from "../../assets/images/default-user.png";

const AddVendorTwo = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <CloseIcons />
          </TouchableOpacity>
        </View>
        <View style={styles.vendorTwoContainer}>
          <View style={styles.vendorTwoContent}>
            <Image source={welcomeImage} style={styles.image} />
            <View style={styles.vendorTwoInfo}>
              <Text style={styles.text}>Name: abc</Text>
              <Text style={styles.text}>Phone: 9898989898</Text>
              <Text style={styles.text}>Profession: xyz</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <LargeButton buttonText="Continue" onButtonPress={() => {}} />
      </View>
    </View>
  );
};

export default AddVendorTwo;
