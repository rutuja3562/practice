import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useRouter } from "expo-router";
// import HeaderHome from "@/components/header-home/HeaderHome";
import HeaderOne from "@/components/header-one/HeaderOne";
import { CustomTitle } from "@/components/custom-title/CustomTitle";
import { Screens } from "@/utility-functions/types";
// import {
//   clearNotifications,
//   loadNotifications,
//   unloadNotifications,
//   updateReadState,
//   useIsNotificationsClientState_Authorised,
//   useNotificationsClientData,
//   useNotificationsClientState,
// } from "@/actors/notifications-client";
import LoadingSpinner from "@/components/loading-spinner/LoadingSpinner";
import ConfirmButton from "@/components/confirm-button/NewSmallButton";
import { isStateChangeFrom } from "@/utils/modulo-utils";
// const handleChangeNotificationStatus = (id: string) => {
//   console.log("id", id);
//   updateReadState([id], "read", "read", 1, 10);
// };
const renderItem = ({ item }: { item: { id: string; text: string } }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() =>
          // handleChangeNotificationStatus(item.id)
          {}
        }
      >
        <Text style={styles.itemText}>{item?.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const NotificationScreen = () => {
  const router = useRouter();
  // const [allNotifications, setAllNotifications] = useState([]);
  // const notificationsAuthorised = useIsNotificationsClientState_Authorised();
  // // alert("notificationsAuthorised..." + notificationsAuthorised);
  // const notificationReadyData = useNotificationsClientData();
  // // alert("notificationReadyData..." + JSON.stringify(notificationReadyData));

  // const notificationsClientState = useNotificationsClientState();

  // alert(
  //   "notificationsClientState..." + JSON.stringify(notificationsClientState)
  // );

  // const reachedReadyState = isStateChangeFrom(
  //   notificationsClientState.previousState
  // )
  //   .to(notificationsClientState.state)
  //   .equals("authorised")
  //   .to("ready");

  // alert("reachedReadyState..." + reachedReadyState);
  // useEffect(() => {
  //   if (notificationsAuthorised) {
  //     // alert("notificationsAuthorised..." + notificationsAuthorised);
  //     loadNotifications("", "", 1, 10);
  //   }
  // }, [notificationsAuthorised]);

  // useEffect(() => {
  //   return () => {
  //     unloadNotifications();
  //   };
  // }, []);

  // useEffect(() => {
  //   if (notificationReadyData) {
  //     setAllNotifications(notificationReadyData.notifications);
  //   }
  // }, [notificationReadyData]);

  // if (!notificationReadyData) return <LoadingSpinner />;

  const notifications = [
    {
      id: "n1",
      type: "general",
      text: "Notification 1",
      data: {},
      date: "2023-02-31",
      read: false,
    },
    {
      id: "n2",
      type: "milestone",
      text: "Notification 1",
      data: {},
      date: "2023-03-31",
      read: true,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <HeaderOne
            onLeftIconPress={() => {
              router.back();
            }}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Notifications</Text>
            <ConfirmButton
              buttonText="Clear Notifications"
              // onButtonPress={() => clearNotifications()}
              onButtonPress={() => console.log("Clear Notifications")}
            />
          </View>
          <View>
            <FlatList
              data={notifications}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.listContainer}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;
