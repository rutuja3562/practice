// //---------------------------------------------------------------------------------
// // File: /screens/MyHouse/MyHouse.tsx
// //---------------------------------------------------------------------------------

import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  // Picker,
} from "react-native";
import { styles } from "./styles";
import SmallButtonOne from "@/components/SmallButtonOne/SmallButtonOne";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
// Data for places and services
const places = [
  { name: "Living Room", services: ["Fan", "Bulb", "AC", "TV"] },
  {
    name: "Kitchen",
    services: ["Fan", "Bulb", "Exhaust Fan", "Refrigerator", "Microwave Oven"],
  },
  { name: "Bedroom 1", services: ["Fan", "Bulb", "AC", "TV"] },
  { name: "Bedroom 2", services: ["Fan", "Bulb", "AC", "TV"] },
  { name: "Bathroom 1", services: ["Bulb", "Pipe"] },
  { name: "Bathroom 2", services: ["Bulb", "Pipe"] },
  { name: "Corridor", services: ["Bulb", "Door Bell"] },
];

const MyHouse = () => {
  const [selectedPlace, setSelectedPlace] = useState("Living Room");
  const [selectedService, setSelectedService] = useState("");

  const availableServices =
    places.find((place) => place.name === selectedPlace)?.services || [];

  const handlePlaceChange = (place: string) => {
    setSelectedPlace(place);
    setSelectedService("");
  };

  const handleServiceChange = (service: string) => {
    setSelectedService(service);
  };

  const handleEditPress = () => {
    console.log(`Edit service ${selectedService} in ${selectedPlace}`);
  };

  const handleAddPress = () => {
    console.log(`Add service ${selectedService} in ${selectedPlace}`);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.myHouseContainer}>
          <View style={styles.pickerContainer}>
            <Text>Select Place:</Text>
            <Picker
              selectedValue={selectedPlace}
              onValueChange={(itemValue) => handlePlaceChange(itemValue)}
            >
              {places.map((place) => (
                <Picker.Item
                  key={place.name}
                  label={place.name}
                  value={place.name}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.pickerContainer}>
            <Text>Select Service:</Text>
            <Picker
              selectedValue={selectedService}
              onValueChange={(itemValue) => handleServiceChange(itemValue)}
              enabled={availableServices.length > 0}
            >
              <Picker.Item label="Select a Service" value="" />
              {availableServices.map((service, index) => (
                <Picker.Item key={index} label={service} value={service} />
              ))}
            </Picker>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <SmallButtonOne buttonText="Edit" onButtonPress={handleEditPress} />
        <SmallButtonOne buttonText="Add" onButtonPress={handleAddPress} />
      </View>
    </View>
  );
};

export default MyHouse;
