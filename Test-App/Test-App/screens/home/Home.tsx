import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AddressSlug from "@/components/address-slug/AddressSlug";
import ProgressBar from "@/components/progress-bar/ProgressBar";
import UpdateProfileSection from "@/components/update-profile-section/UpdateProfileSection";
import CheckBoxSection from "@/components/checkbox-section/CheckBoxSection";
import NoContentSection from "@/components/no-content-section/NoContentSection";
import PaymentManagementMenuItem from "@/components/payment-management-menu-item/PaymentManagementMenuItem";
// import { styles } from "./styles";
import SectionContainer from "@/components/section-container/SectionContainer";
// import {
//   loadProfile,
//   unload,
//   useIsProfileClientState_Authorised,
//   useProfileClientData_Ready,
// } from "@/actors/profile-client";
import LoadingSpinner from "@/components/loading-spinner/LoadingSpinner";
// import { deactivateAccount, deleteAccount, logout } from "@/actors/auth-client";
import ProfileSectionWihProgressBar from "@/components/ProfileSectionWihProgressBar/ProfileSectionWihProgressBar";
import StatsItem from "@/components/stats-item/StatsItem";
// import CustomerSection from "@/components/customer-section/CustomerSection";
import { CalendarSection } from "@/components/calendar-section/CalendarSection";
import { SubHeader } from "@/components/sub-header/SubHeader";
import DefaultUserIcon from "@/assets/svg-icons/DefaultUserIcon";
import CircleWithPlusIcon from "@/assets/svg-icons/CircleWithPlusIcon";
import CardItem from "@/components/card-item/CardItem";
import AccountCards from "@/components/accout-cards/AccountCards";
import ReferAndEarn from "@/components/rafer-and-earn/RaferAndEarn";
import { router } from "expo-router";
import { Screens } from "@/utility-functions/types";
import HeaderHome from "@/components/header-home/HeaderHome";
import { Styles } from "@/assets/theme";
import JobsInYourAreaSection from "@/components/jobs-in-your-area-section/JobsInYourAreaSection";
import { styles } from "./styles";

const Home = () => {
  console.log(">>> Reached home");
  // const profileReadyData = useProfileClientData_Ready();
  // const profileAuthorised = useIsProfileClientState_Authorised();

  // useEffect(() => {
  //   if (profileAuthorised) {
  //     loadProfile();
  //   }
  // }, [profileAuthorised]);

  // useEffect(() => {
  //   console.log(">>> Reached unmount");
  //   return () => {
  //     unload();
  //   };
  // }, []);

  // if (!profileReadyData) return <LoadingSpinner />;

  return (
    <View style={[Styles.screen]}>
      {/* <View style={styles.container}> */}
      <HeaderHome />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[Styles.scrollViewStyle]}
        contentContainerStyle={[Styles.scrollViewContentContainerStyle]}
      >
        <View
          style={[
            styles.profileInfo,
            // { marginBottom: -15, paddingBottom: 15, overflow: "visible" },
          ]}
        >
          <View style={[styles.profileInfo]}>
            {/* <ProfileSectionWihProgressBar data={profileReadyData} /> */}
          </View>
        </View>
        <View style={[styles.jobsAreaSection]}>
          {/* <JobsInYourAreaSection data={profileReadyData} /> */}
        </View>
        <View style={styles.section}>
          <View style={styles.statsItemContainer}>
            <StatsItem number="2467" text="electrician jobs assigned" />
            <StatsItem number="2343" text="requests for electricians" />
          </View>
        </View>
        <View style={styles.verticalSpace}>
          <SubHeader
            title="Customer"
            iconComponent={<CircleWithPlusIcon />}
            onButtonPress={
              () => {}
              //  router.push(Screens.ManageCustomers as any)
            }
          />
        </View>
        {/* <CustomerSection /> */}
        <View style={styles.verticalSpace}>
          <SubHeader
            title="Calendar"
            iconComponent={<CircleWithPlusIcon />}
            onButtonPress={
              () => {}
              // router.push(Screens.SelectSchedule as any)
            }
          />
          <CalendarSection />
        </View>
        <View style={styles.verticalSpace}>
          <SubHeader
            title="Quotations"
            iconComponent={<CircleWithPlusIcon />}
            onButtonPress={
              () => {}
              // router.push(Screens.SelectCustomer as any)
            }
          />
          <CardItem
            cardTitle="AM2007010"
            cardInfo="Bifin 20 Sep 2024"
            cardRhsText="₹ 1200"
          />
          <CardItem
            cardTitle="AM2007010"
            cardInfo="Bifin 20 Sep 2024"
            cardRhsText="₹ 1200"
          />
          <CardItem
            cardTitle="AM2007010"
            cardInfo="Bifin 20 Sep 2024"
            cardRhsText="₹ 1200"
          />
        </View>
        <View style={styles.verticalSpace}>
          <SubHeader
            title="Invoices"
            iconComponent={<CircleWithPlusIcon />}
            onButtonPress={
              () => {}
              // router.push(Screens.SelectInvoiceCustomer as any)
            }
          />
          <CardItem
            cardTitle="AM2007010"
            cardInfo="Bifin 20 Sep 2024"
            cardRhsText="₹ 1200"
          />
          <CardItem
            cardTitle="AM2007010"
            cardInfo="Bifin 20 Sep 2024"
            cardRhsText="₹ 1200"
          />
          <CardItem
            cardTitle="AM2007010"
            cardInfo="Bifin 20 Sep 2024"
            cardRhsText="₹ 1200"
          />
        </View>
        <View style={styles.manageAccountSection}>
          <SubHeader title="Manage Account" />
          <AccountCards title={"Setup payment"} />
          <AccountCards title={"Profile management"} />
          <AccountCards title={"See transaction history"} />
          <AccountCards title={"Settings"} />
          <AccountCards title={"Help"} />
          <AccountCards
            title={"Log out"}
            onButtonPress={
              () => {}
              // logout()
            }
          />
          <AccountCards
            title={"Deactivate account"}
            onButtonPress={
              () => {}
              //  router.push(Screens.DeactivateAccount as any)
            }
          />
          <AccountCards
            title={"Delete account"}
            onButtonPress={
              () => {}
              // router.push(Screens.DeleteAccount as any)
            }
          />
        </View>
        <View style={styles.referAndEarnSection}>
          <SubHeader title="Refer and earn" />
          <ReferAndEarn />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
