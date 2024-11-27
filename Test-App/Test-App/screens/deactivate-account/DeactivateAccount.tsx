import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import DeleteButton from "@/components/delete-button/DeleteButton";
import LargeButton from "@/components/large-button/LargeButton";
import HeaderBackArrow from "@/components/header-back-arrow/HeaderBackArrow";
import { CustomDescription } from "@/components/custom-description/CustomDescription";
import { CustomTitle } from "@/components/custom-title/CustomTitle";
import { useRouter } from "expo-router";
// import {
//   deactivateAccount,
//   useIsAuthClientState_Authorised,
//   useIsAuthClientState_UnAuthorised,
// } from "@/actors/auth-client";
import { Screens } from "@/utility-functions/types";

export default function DeactivateAccountScreen() {
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
          <CustomTitle title="Deactivating your account is temporary" />
          <View style={styles.optionContainer}>
            <CustomDescription
              text="Your profile details will be hidden until you enable it back by
              logging back in."
            />
          </View>
          <View style={styles.optionContainer}>
            <Text style={styles.optionTitle}>
              Are you sure you want to proceed?
            </Text>
          </View>
          <View>
            <View style={styles.deactivateButton}>
              <LargeButton
                buttonText={"Deactivate Account"}
                // onButtonPress={() => deactivateAccount()}
                onButtonPress={() => console.log("button pressed")}
              />
            </View>
            <View style={styles.deleteButton}>
              <DeleteButton
                buttonText={"Cancel"}
                onButtonPress={() => router.push("/")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
