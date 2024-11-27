import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { CustomDescription } from "@/components/custom-description/CustomDescription";
import LargeButton from "@/components/large-button/LargeButton";
import DeleteButton from "@/components/delete-button/DeleteButton";
import HeaderBackArrow from "@/components/header-back-arrow/HeaderBackArrow";
import { CustomTitle } from "@/components/custom-title/CustomTitle";
// import {
//   deactivateAccount,
//   deleteAccount,
//   useIsAuthClientState_Authorised,
//   useIsAuthClientState_UnAuthorised,
// } from "@/actors/auth-client";
import { useRouter } from "expo-router";
import { Screens } from "@/utility-functions/types";

export default function DeleteAccountScreen() {
  // const isUnAuthorised = useIsAuthClientState_UnAuthorised();
  // const isAuthorised = useIsAuthClientState_Authorised();

  const router = useRouter();

  // useEffect(() => {
  //   if (isUnAuthorised) router.back();
  // }, [isUnAuthorised]);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <HeaderBackArrow onBackPress={() => router.back()} />
        </View>
        <View style={styles.content}>
          <CustomTitle title={"Deactivate your account instead of deleting?"} />
          <View style={styles.optionContainer}>
            <Text style={styles.optionTitle}>
              Deactivating your account is temporary
            </Text>
            <CustomDescription
              text={
                "Your profile details will be hidden until you enable it back by logging back in."
              }
            />
          </View>

          <View style={styles.optionContainer}>
            <Text style={styles.optionTitle}>
              Deleting your account is permanent
            </Text>
            <CustomDescription
              text="Your profile, wishes, events, friends etc. will be permanently
            deleted."
            />
          </View>
          <View>
            <View style={styles.deactivateButton}>
              <LargeButton
                buttonText={"Deactivate Account"}
                // onButtonPress={() =>
                //   router.push(Screens.DeactivateAccount as any)
                // }
                onButtonPress={() =>
                  console.log("Deactivate Account button pressed")
                }
              />
            </View>
            <View style={styles.deleteButton}>
              <DeleteButton
                buttonText={"Delete Account"}
                // onButtonPress={() => deleteAccount()}
                onButtonPress={() => console.log("Delete button pressed")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
