//---------------------------------------------------------------------------------
// File: /screens/ServiceScreen/ServiceScreen.tsx
//---------------------------------------------------------------------------------

import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import SmallButtonOne from "@/components/SmallButtonOne/SmallButtonOne";
import { Ionicons } from "@expo/vector-icons";

// Define the type for the data items
interface ServiceData {
  name: string;
  rate: string;
}

const ServiceScreen: React.FC = () => {
  // Data array with type annotation
  const data1: ServiceData[] = [
    { name: "Amount", rate: "10000" },
    { name: "CGST", rate: "500" },
    { name: "SGST", rate: "500" },
    { name: "Discount", rate: "0" },
    { name: "Total", rate: "11000" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.servicesContainer}>
          <View style={styles.servicesContent}>
            {/* <Text>Quotation No: A0001</Text> */}
            <View style={styles.itemBox}>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>Item1</Text>
              {data1.map((item) => (
                <View key={item.name} style={styles.item}>
                  <View style={styles.column}>
                    <Text>{item.name}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text>{item.rate}</Text>
                  </View>
                </View>
              ))}
            </View>

            <View style={styles.itemBox}>
              <Text style={{ fontSize: 16, fontWeight: "700" }}>
                Billing Information
              </Text>
              {data1.map((item) => (
                <View key={item.name} style={styles.item}>
                  <View style={styles.column}>
                    <Text>{item.name}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text>{item.rate}</Text>
                  </View>
                </View>
              ))}
            </View>
            <Text style={{ fontSize: 16, fontWeight: "700" }}>
              Notes/Comments
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <SmallButtonOne buttonText="Rate" onButtonPress={() => {}} />
        <SmallButtonOne buttonText="Pay" onButtonPress={() => {}} />
      </View>
    </View>
  );
};

export default ServiceScreen;
