import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import AppLogo from "@/assets/svg-icons/AppLogo";
import HamBurgerIcon from "@/assets/svg-icons/HamBurgerIcon";
import BellIcon from "@/assets/svg-icons/BellIcon";
import { styles } from "./styles";
// import { logout } from "@/actors/auth-client";
import BellIconWithNotification from "@/assets/svg-icons/BellIconWithNotification";
import MenuIcon from "@/assets/svg-icons/MenuIcon";
import { Screens } from "@/utility-functions/types";
// import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import NotificationRedMark from "@/assets/svg-icons/NotificationRedMark";
// @ts-ignore
import splashNoBg from "@/assets/images/splash-no-bg.png";

const HeaderHome = () => {
  const router = useRouter();
  // const [isNotificationRead, setIsNotificationRead] = useState(true);
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        {/* <AppLogo /> */}
        <Image source={splashNoBg} style={{ width: 112, height: 55 }} />
      </View>
      <View style={styles.rightIconContainer}>
        <TouchableOpacity
          onPress={
            () => {}
            // router.push(Screens.Notifications as any)
          }
        >
          {/* <NotificationRedMark /> */}
          <BellIconWithNotification />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Under construction 🛠️")}>
          <View style={{ paddingLeft: 7 }}>
            <MenuIcon />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderHome;
