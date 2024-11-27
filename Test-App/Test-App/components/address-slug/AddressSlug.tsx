import { View, Text } from "react-native";
import React from "react";
import LocationIcon from "@/assets/svg-icons/LocationIcon";
import SmallButtonOne from "../small-button-one/SmallButtonOne";
import { styles } from "./styles";

const AddressSlug = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.container]}>
        <LocationIcon />
        <Text style={styles.address}>115, Sagar Bhavan Lohar Chawl, Y...</Text>
      </View>
      <SmallButtonOne
        buttonText="Change"
        onButtonPress={() => console.log("Button pressed")}
      />
    </View>
  );
};

export default AddressSlug;
