import { View, Text } from "react-native";
import React from "react";
import UserProfileOutlineIcon from "@/assets/svg-icons/UserProfileOutlineIcon";
import SmallButtonOne from "../small-button-one/SmallButtonOne";
import { styles } from "./styles";
import CompleteProfileButton from "../complete-profile-button/CompleteProfileButton";
// import { ProfileClientData_Ready } from "@/actors/profile-client";

// const UpdateProfileSection = ({ data }: { data: ProfileClientData_Ready }) => {
const UpdateProfileSection = ({ data }: any) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Complete Profile</Text>
      <CompleteProfileButton data={data} />
      <View style={styles.iconRow}>
        {/* <View style={styles.iconContainer}>
          <UserProfileOutlineIcon />
          <Text style={styles.updateProfileItemText}>Personal Information</Text>
          <View style={styles.updateProfileItemButtonContainer}>
            <SmallButtonOne
              buttonText="Add"
              onButtonPress={() => console.log("Add button press")}
            />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <UserProfileOutlineIcon />
          <Text style={styles.updateProfileItemText}>
            Document Identification
          </Text>
          <View style={styles.updateProfileItemButtonContainer}>
            <SmallButtonOne
              buttonText="Add"
              onButtonPress={() => console.log("Add button press")}
            />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <UserProfileOutlineIcon />
          <Text style={styles.updateProfileItemText}>payment Preferences</Text>
          <View style={styles.updateProfileItemButtonContainer}>
            <SmallButtonOne
              buttonText="Add"
              onButtonPress={() => console.log("Add button press")}
            />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <UserProfileOutlineIcon />
          <Text style={styles.updateProfileItemText}>
            Mode of Transportation
          </Text>
          <View style={styles.updateProfileItemButtonContainer}>
            <SmallButtonOne
              buttonText="Add"
              onButtonPress={() => console.log("Add button press")}
            />
          </View>
        </View> */}
      </View>
    </View>
  );
};

export default UpdateProfileSection;
