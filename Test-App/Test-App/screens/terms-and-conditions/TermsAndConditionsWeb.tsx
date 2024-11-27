import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet, Text, View } from "react-native";
import HeaderOne from "@/components/header-one/HeaderOne";
import SmallButtonOne from "@/components/small-button-one/SmallButtonOne";
import ConfirmButton from "@/components/confirm-button/NewSmallButton";
// import {
//   cancelAcceptTerms,
//   createUser,
//   useAuthClientData_UnAuthorised,
// } from "@/actors/auth-client";
import { Color, Margin } from "@/assets/theme";

export default function TermsAndConditionsWeb() {
  // const unAuthorisedData = useAuthClientData_UnAuthorised();
  // const { phone, profession, pincode } = unAuthorisedData as any;
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <HeaderOne
          onLeftIconPress={
            () => {}
            // cancelAcceptTerms()
          }
        />
      </View>
      <WebView
        style={styles.webContainer}
        source={{ uri: "https://expo.dev/terms" }} // TODO: uri from config (Auth actor)
      />
      <View style={styles.buttonContainer}>
        <SmallButtonOne
          buttonText="Cancel"
          onButtonPress={
            () => {}
            // cancelAcceptTerms()
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.White,
  },
  HeaderContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginHorizontal: Margin.ScreenLeftRightMargin,
    // borderWidth: 1,
    // borderColor: "red",
    marginTop: 10,
    marginBottom: 30,
  },
  webContainer: { flex: 1 },
  webView: { flex: 1, backgroundColor: "yellow" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: Margin.ScreenLeftRightMargin,
    // paddingHorizontal: 1,
  },
});
