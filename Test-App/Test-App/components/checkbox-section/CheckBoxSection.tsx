import { View, Text } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "react-native-elements";
import { styles } from "./styles";

const CheckBoxSection = () => {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [jobsAndServices] = useState([
    "Cable Pulling",
    "Electrical Installations",
    "Mechanical Assembly",
    "Switchboard Assembly",
    "Testing Electrical Installation",
    "Lighting Install",
    "Electrical Panels",
    "Production Line Installation",
  ]);
  const handleCheck = (profession: string) => {
    if (checkedItems.includes(profession)) {
      setCheckedItems(checkedItems.filter((item) => item !== profession));
    } else {
      setCheckedItems([...checkedItems, profession]);
    }
  };
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Jobs & Services</Text>
      {jobsAndServices.map((job, index) => (
        <View key={index} style={styles.checkboxContainer}>
          <Text style={styles.checkboxLabel}>{job}</Text>
          <CheckBox
            checked={checkedItems.includes(job)}
            onPress={() => handleCheck(job)}
            containerStyle={styles.checkbox}
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="#FF7F50"
          />
        </View>
      ))}
    </View>
  );
};

export default CheckBoxSection;
