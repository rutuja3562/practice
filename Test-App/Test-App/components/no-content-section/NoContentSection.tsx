import { View, Text } from "react-native";
import React from "react";
import SmallButtonOne from "../small-button-one/SmallButtonOne";
import { styles } from "./styles";
import { useRouter } from "expo-router";
import { Screens } from "@/utility-functions/types";

const NoContentSection = ({ sectionTitle }: { sectionTitle: string }) => {
  const router = useRouter();
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.info}>{sectionTitle}</Text>
      <View style={styles.buttonContainer}>
        <SmallButtonOne
          buttonText={
            sectionTitle.startsWith("You currently have")
              ? "Manage Customers"
              : sectionTitle.startsWith("My Q")
                ? "Generate Quotation"
                : sectionTitle.startsWith("My I")
                  ? "Generate Invoice"
                  : "Add"
          }
          onButtonPress={
            () => {}
            // sectionTitle.startsWith("You currently have")
            //   ? router.push(Screens.ManageCustomers as any)
            //   : sectionTitle.startsWith("My Q")
            //     ? router.push(Screens.SelectCustomer as any)
            //     : sectionTitle.startsWith("My I")
            //       ? router.push(Screens.SelectInvoiceCustomer as any)
            //       : router.push(Screens.SelectSchedule as any)
          }
        />
      </View>
    </View>
  );
};

export default NoContentSection;
