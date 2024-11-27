import React from "react";
import { View, Text, ProgressBarAndroid } from "react-native";
import { useRouter } from "expo-router";
import { Screens } from "@/utility-functions/types";
import { styles } from "./styles";
import DefaultUserIcon from "@/assets/svg-icons/DefaultUserIcon";
// import { ProfileClientData_Ready } from "@/actors/profile-client";
import ConfirmButton from "../confirm-button/NewSmallButton";
import { Color, Styles } from "@/assets/theme";
import UserIcon from "@/assets/svg-icons/UserIcon";

const ProfileSectionWihProgressBar = ({
  data,
}: {
  data: any;
  // data: ProfileClientData_Ready;
}) => {
  const router = useRouter();
  return (
    <View style={[styles.container]}>
      <View style={styles.profileContainer}>
        <View style={styles.greetingTextDiv}>
          <Text style={styles.greetingText}>Hi, User</Text>
        </View>
        <View style={styles.header}>
          <Text style={[styles.completeProfileText, styles.shadowStyle]}>
            Complete your profile
          </Text>
          <View style={[styles.userProfile, styles.shadowStyle]}>
            {/* <DefaultUserIcon /> */}
            <UserIcon />
          </View>
        </View>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.2}
          color={Color.DarkGrey}
          style={styles.progressBar}
        />
        <View style={styles.progressStatus}>
          <Text style={styles.percentageText}>20% Completed</Text>
          <View style={styles.buttonContainer}>
            <ConfirmButton
              buttonText="Complete Profile"
              onButtonPress={
                () => {}
                // router.push({
                //   pathname: Screens.CompleteProfile as any,
                //   params: { data: JSON.stringify(data) },
                // })
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileSectionWihProgressBar;
