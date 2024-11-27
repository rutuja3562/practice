import { View, Text } from "react-native";
import React from "react";
import PhoneInput from "@/screens/PhoneInput/PhoneInput";
// import Home from "@/screens/Home/Home";
import VendorScreen from "@/screens/VendorScreen/VendorScreen";
import ServiceScreen from "@/screens/ServiceScreen/ServiceScreen";
import AddVenderOne from "@/screens/AddVendorOne/AddVendorOne";
import NewService from "@/screens/NewService/NewService";
import AddVendorTwo from "@/screens/AddVendorTwo/AddVendorTwo";
import MyHouse from "@/screens/MyHouse/MyHouse";
import OtpInput from "@/screens/otp-input/OtpInput";
import TermsAndConditionsWeb from "@/screens/terms-and-conditions/TermsAndConditionsWeb";
// import Home from "@/screens/Home/Home";
import DeactivateAccount from "@/screens/deactivate-account/DeactivateAccount";
import DeleteAccount from "@/screens/delete-account/DeleteAccount";
import Notification from "@/screens/notifications-screen/NotificationScreen";
import Home from "@/screens/home/Home";

const index = () => {
  return (
    <>
      {/* <DeactivateAccount /> */}
      {/* <DeleteAccount /> */}
      {/* <Notification /> */}

      {/* <PhoneInput /> */}
      {/* <OtpInput /> */}
      {/* <TermsAndConditionsWeb /> */}
      <Home />
      {/* <VendorScreen /> */}
      {/* <MyHouse /> */}
      {/* <ServiceScreen /> */}
      {/* <AddVenderOne /> */}
      {/* <AddVendorTwo /> */}
      {/* <NewService /> */}
    </>
  );
};

export default index;
