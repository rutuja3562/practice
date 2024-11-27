import { View, Text, ImageBackground } from "react-native";
import React from "react";
import ProfileRoundIcon from "@/assets/svg-icons/ProfileRoundIcon";
import { styles } from "./styles";

const ProgressBar = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/home/slider-background.png")}
      style={styles.profileCompletion}
      resizeMode="contain"
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            marginTop: 8,
            marginRight: 8,
          }}
        >
          <ProfileRoundIcon />
        </View>
        <View style={[{ width: "85%" }]}>
          <View style={styles.progressBar}>
            <View style={styles.progress}></View>
          </View>
          <Text style={[styles.completionText]}>Profile: 20% Completed</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProgressBar;
