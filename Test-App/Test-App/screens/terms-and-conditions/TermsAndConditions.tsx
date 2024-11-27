// import {
//   cancelAcceptTerms,
//   createUser,
//   useAuthClientData_UnAuthorised,
// } from "@/actors/auth-client";
import ConfirmButton from "@/components/confirm-button/NewSmallButton";
import SmallButtonOne from "@/components/small-button-one/SmallButtonOne";
import React from "react";
import { View, Text, ScrollView, StyleSheet, Button } from "react-native";
import { styles } from "./styles";

const TermsAndConditions = () => {
  // const unAuthorisedData = useAuthClientData_UnAuthorised();
  // const { phone, profession, pincode } = unAuthorisedData as any;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.headingText}>Terms and condition</Text>
        <Text style={styles.text}>
          AGREEMENT TO TERMS These Terms and Conditions constitute a legally
          binding agreement made between you, whether personally or on behalf of
          an entity (“you”) and [business entity name] (“we,” “us” or “our”),
          concerning your access to and use of the [website name.com] website as
          well as any other media form, media channel, mobile website or mobile
          application related, linked, or otherwise connected thereto
          (collectively, the “Site”). You agree that by accessing the Site, you
          have read, understood, and agree to be bound by all of these Terms and
          Conditions. If you do not agree with all of these Terms and
          Conditions, then you are expressly prohibited from using the Site and
          you must discontinue use immediately. Supplemental terms and
          conditions or documents that may be posted on the Site from time to
          time are hereby expressly incorporated herein by reference. We reserve
          the right, in our sole discretion, to make changes or modifications to
          these Terms and Conditions at any time and for any reason. We will
          alert you about any changes by updating the “Last updated” date of
          these Terms and Conditions, and you waive any right to receive
          specific notice of each such change. It is your responsibility to
          periodically review these Terms and Conditions to stay informed of
          updates. You will be subject to, and will be deemed to have been made
          aware of and to have accepted, the changes in any revised Terms and
          Conditions by your continued use of the Site after the date such
          revised Terms and Conditions are posted. The information provided on
          the Site is not intended for distribution to or use by any person or
          entity in any jurisdiction or country where such distribution or use
          would be contrary to law or regulation or which would subject us to
          any registration requirement within such jurisdiction or country.
          Accordingly, those persons who choose to access the Site from other
          locations do so on their own initiative and are solely responsible for
          compliance with local laws, if and to the extent local laws are
          applicable. These terms and conditions were created by Termly’s Terms
          and Conditions Generator. Option 1: The Site is intended for users who
          are at least 18 years old. Persons under the age of 18 are not
          permitted to register for the Site. Option 2: [The Site is intended
          for users who are at least 13 years of age.] All users who are minors
          in the jurisdiction in which they reside (generally under the age of
          18) must have the permission of, and be directly supervised by, their
          parent or guardian to use the Site. If you are a minor, you must have
          your parent or guardian read and agree to these Terms and Conditions
          prior to you using the Site. INTELLECTUAL PROPERTY RIGHTS Unless
          otherwise indicated, the Site is our proprietary property and all
          source code, databases, functionality, software, website designs,
          audio, video, text, photographs, and graphics on the Site
          (collectively, the “Content”) and the trademarks, service marks, and
          logos contained therein (the “Marks”) are owned or controlled by us or
          licensed to us, and are protected by copyright and trademark laws and
          various other intellectual property rights and unfair competition laws
          of the United States, foreign jurisdictions, and international
          conventions. The Content and the Marks are provided on the Site “AS
          IS” for your information and personal use only. Except as expressly
          provided in these Terms and Conditions, no part of the Site and no
          Content or Marks may be copied, reproduced, aggregated, republished,
          uploaded, posted, publicly displayed, encoded, translated,
          transmitted, distributed, sold, licensed, or otherwise exploited for
          any commercial purpose whatsoever, without our express prior written
          permission. Provided that you are eligible to use the Site, you are
          granted a limited license to access and use the Site and to download
          or print a copy of any portion of the Content to which you have
          properly gained access solely for your personal, non-commercial use.
          We reserve all rights not expressly granted to you in and to the Site,
          the Content and the Marks. USER REPRESENTATIONS By using the Site, you
          represent and warrant that: [(1) all registration information you
          submit will be true, accurate, current, and complete; (2) you will
          maintain the accuracy of such information and promptly update such
          registration information as necessary;] (3) you have the legal
          capacity and you agree to comply with these Terms and Conditions; [(4)
          you are not under the age of 13;] (5) not a minor in the jurisdiction
          in which you reside [, or if a minor, you have received parental
          permission to use the Site]; (6) you will not access the Site through
          automated or non-human means, whether through a bot, script, or
          otherwise; (7) you will not use the Site for any illegal or
          unauthorized purpose; (8) your use of the Site will not violate any
          applicable law or regulation. If you provide any information that is
          untrue, inaccurate, not current, or incomplete, we have the right to
          suspend or terminate your account and refuse any and all current or
          future use of the Site (or any portion thereof). USER REGISTRATION You
          may be required to register with the Site. You agree to keep your
          password confidential and will be responsible for all use of your
          account and password. We reserve the right to remove, reclaim, or
          change a username you select if we determine, in our sole discretion,
          that such username is inappropriate, obscene, or otherwise
          objectionable. PROHIBITED ACTIVITIES You may not access or use the
          Site for any purpose other than that for which we make the Site
          available. The Site may not be used in connection with any commercial
          endeavors except those that are specifically endorsed or approved by
          us.
        </Text>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <SmallButtonOne
          buttonText="Cancel"
          onButtonPress={
            () => {}
            //  cancelAcceptTerms()
          }
        />
        <ConfirmButton
          buttonText="Agree"
          onButtonPress={
            () => {}
            // createUser(phone, profession, pincode)
          }
        />
      </View>
    </View>
  );
};

export default TermsAndConditions;
