import React from "react";
import { styles } from "./style";
import { Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { SubHeader } from "../sub-header/SubHeader";
import { Color, Styles } from "@/assets/theme";

export const CalendarSection = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.header}></View>
      <Calendar
        current={"2024-12-01"}
        markedDates={{
          "2024-12-06": {
            selected: true,
            marked: true,
            selectedColor: "#87CEFA", // Light blue for selected dates
          },
          "2024-12-09": {
            selected: true,
            marked: true,
            selectedColor: "#87CEFA",
          },
          "2024-12-23": {
            selected: true,
            marked: true,
            selectedColor: "#FFA07A", // Light orange for the other selected date
          },
        }}
        theme={{
          backgroundColor: Color.White,
          calendarBackground: Color.White,
          textSectionTitleColor: "#B6C1CD",
          selectedDayBackgroundColor: "#87CEFA", // Same as marked dates
          selectedDayTextColor: "#FFFFFF",
          todayTextColor: "#87CEFA",
          dayTextColor: "#2D4150",
          textDisabledColor: "#D9E1E8",
          arrowColor: "#000000", // Color for arrows
          monthTextColor: "#000000",
          indicatorColor: "#000000",
          textDayFontWeight: "500",
          textMonthFontWeight: "700",
          textDayHeaderFontWeight: "600",
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
        }}
        style={styles.calendar}
      />
    </View>
  );
};
