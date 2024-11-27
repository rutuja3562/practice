import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import LargeButton from "@/components/LargeButton/LargeButton";
import { Ionicons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";

type MarkedDates = {
  [key: string]: {
    selected?: boolean;
    customStyles?: {
      container?: object;
      text?: object;
    };
  };
};

const NewService = () => {
  const [selectedService, setSelectedService] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedDates, setSelectedDates] = useState<MarkedDates>({});

  const services = ["Plumber", "Electrician", "Cleaner"];
  const items = ["Pipe", "Wire", "Detergent"];

  const handleDayPress = (day: any) => {
    const dateString = day.dateString;

    setSelectedDates({
      [dateString]: {
        selected: true,
        customStyles: {
          container: {
            borderRadius: 0,
            borderWidth: 1,
            borderColor: "transparent",
            width: 52,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginTop: -11,
            marginBottom: -11,
          },
          text: {
            color: "white",
          },
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.newServices}>
          <View style={styles.selectServicesContainer}>
            <Text style={styles.text}>Select Service</Text>
            <Picker
              selectedValue={selectedService}
              onValueChange={(itemValue) => setSelectedService(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Service" value="" />
              {services.map((service) => (
                <Picker.Item label={service} value={service} key={service} />
              ))}
            </Picker>
          </View>
          <View style={styles.selectItemsContainer}>
            <Text style={styles.text}>Select Item</Text>
            <Picker
              selectedValue={selectedItem}
              onValueChange={(itemValue) => setSelectedItem(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Item" value="" />
              {items.map((item) => (
                <Picker.Item label={item} value={item} key={item} />
              ))}
            </Picker>
          </View>
          <View style={styles.selectDatesContainer}>
            <Text style={styles.text}>Select Date</Text>
            <Calendar
              current={new Date().toISOString().split("T")[0]}
              monthFormat={"yyyy MMMM"}
              markingType={"custom"}
              markedDates={selectedDates}
              onDayPress={handleDayPress}
              style={styles.calendar}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <LargeButton buttonText="Add" onButtonPress={() => {}} />
      </View>
    </View>
  );
};

export default NewService;
