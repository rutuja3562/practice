import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import SmallButtonOne from "@/components/SmallButtonOne/SmallButtonOne";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker"; // Picker for dropdown

const VendorScreen = () => {
  const [selectedService, setSelectedService] = useState("plumber");
  let serViceList = [
    { label: "Plumber", value: "plumber" },
    { label: "Electrician", value: "electrician" },
    { label: "Carpenter", valueL: "carpenter" },
    { label: "Painter", value: "painter" },
  ];
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Service Dropdown */}
        <View style={styles.serviceContainer}>
          <Text style={styles.headingText}>Select Service</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedService}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedService(itemValue)}
            >
              {serViceList.map((service) => (
                <Picker.Item label={service.label} value={service.value} />
              ))}
            </Picker>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <SmallButtonOne buttonText="My House" onButtonPress={() => {}} />
        <SmallButtonOne buttonText="New Request" onButtonPress={() => {}} />
      </View>
    </View>
  );
};

export default VendorScreen;
