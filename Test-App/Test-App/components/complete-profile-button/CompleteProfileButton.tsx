import { View, Text } from "react-native";
import React from "react";
import LocationIcon from "@/assets/svg-icons/LocationIcon";
import SmallButtonOne from "../small-button-one/SmallButtonOne";
import { styles } from "./styles";
import { ProfileClientData_Ready } from "@/actors/profile-client";
import { useRouter } from "expo-router";
import { Screens } from "@/utility-functions/types";

const CompleteProfileButton = ({ data }: { data: ProfileClientData_Ready }) => {
  const router = useRouter();

  return (
    <View style={[styles.container]}>
      <View style={[styles.container]}>
        {/* <LocationIcon /> */}
        <Text style={styles.address}>Complete your profile</Text>
      </View>
      <SmallButtonOne
        buttonText="Complete Profile"
        onButtonPress={() =>
          router.push({
            pathname: Screens.CompleteProfile,
            params: { data: JSON.stringify(data) },
          })
        }
      />
    </View>
  );
};

export default CompleteProfileButton;
