import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "./styles";
// @ts-ignore
import welcomeImage from "../../assets/images/HERO-IMAGE.png";
// @ts-ignore
import splashNoBg from "../../assets/images/splash-no-bg.png";
// @ts-ignore
import welcomeTextImage from "../../assets/images/task-e.png";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import LargeButton from "../../components/large-button/LargeButton";
// import {
//   AuthClientStates,
//   cancelLoginOtp,
//   cancelRegisterOtp,
//   useAuthClientData_UnAuthorised,
//   useAuthClientState,
//   validateLoginOtp,
//   validateRegisterOtp,
// } from "@/actors/auth-client";
import HeaderBackArrow from "@/components/header-back-arrow/HeaderBackArrow";
import TextAndDescription from "@/components/text-and-description/TextAndDescription";
import { Styles } from "@/assets/theme";
import HeaderOne from "@/components/header-one/HeaderOne";

const otpValidationSchema = Yup.object().shape({
  otp: Yup.string()
    .length(6, "OTP must be exactly 6 digits")
    .required("OTP is required"),
});

const OtpInput = () => {
  // const unAuthorisedData = useAuthClientData_UnAuthorised();
  // const authClientState = useAuthClientState();

  const CELL_COUNT = 6;
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [otpValidationError, setOtpValidationError] = useState<string>("");

  const handleVerify = async (values: { otp: string }) => {
    // try {
    //   if (authClientState.state === AuthClientStates.WaitForRegisterOtp) {
    //     validateRegisterOtp((unAuthorisedData as any)?.phone, values.otp);
    //   }
    //   if (authClientState.state === AuthClientStates.WaitForLoginOtp) {
    //     validateLoginOtp((unAuthorisedData as any)?.phone, values.otp);
    //   }
    // } catch (error) {
    //   if (error instanceof Yup.ValidationError) {
    //     console.log("Validation Error:", error.message);
    //     setOtpValidationError(error.message);
    //   } else {
    //     console.log("Unexpected Error:", error);
    //     setOtpValidationError(error as string);
    //   }
    // }
  };

  const resendOTP = async () => {
    alert("Under construction 🛠️");
  };

  // const onBackPress = () => {
  //   if (authClientState.state === AuthClientStates.WaitForRegisterOtp) {
  //     cancelRegisterOtp();
  //   }
  //   if (authClientState.state === AuthClientStates.WaitForLoginOtp) {
  //     cancelLoginOtp();
  //   }
  //   // cancelRegisterOtp();
  // };

  return (
    <Formik
      initialValues={{ otp: "454545" }}
      validationSchema={otpValidationSchema}
      onSubmit={handleVerify}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => {
        const ref = useBlurOnFulfill({
          value: values.otp,
          cellCount: CELL_COUNT,
        });
        const [props, getCellOnLayoutHandler] = useClearByFocusCell({
          value: values.otp,
          setValue: (otp: string) => {
            setFieldValue("otp", otp);
            if (otp.length < CELL_COUNT) {
              setOtpValidationError("");
            }
          },
        });

        // Function to handle button press
        const handleButtonPress = () => {
          if (values.otp.length === 0) {
            setOtpValidationError("OTP is required.");
          } else if (values.otp.length < CELL_COUNT) {
            setOtpValidationError("OTP must be exactly 6 digits.");
          } else {
            setOtpValidationError("");
            handleSubmit();
          }
        };

        return (
          <View style={[Styles.screen]}>
            <View style={styles.container}>
              {/* <View style={styles.headerContainer}>
                <HeaderBackArrow onBackPress={onBackPress} />
              </View> */}
              <View style={[styles.headerContainer]}>
                <HeaderOne
                  onLeftIconPress={
                    () => {}
                    // authClientState.state ===
                    // AuthClientStates.WaitForRegisterOtp
                    //   ? cancelRegisterOtp()
                    //   : cancelLoginOtp()
                  }
                />
              </View>
              <View style={styles.imageContainer}>
                <Image source={welcomeImage} style={styles.welcomeImage} />
                <Image source={splashNoBg} style={styles.welcomeTextImage} />
              </View>
              <View style={styles.containerShadow}>
                <TextAndDescription
                  topText="Verify OTP"
                  bottomText="OTP sent"
                  // {`OTP sent to your number +91 ${
                  //   (unAuthorisedData as any)?.phone
                  // }`}
                />
                <View style={styles.otpCont}>
                  <CodeField
                    ref={ref}
                    {...props}
                    value={values.otp}
                    onChangeText={handleChange("otp")}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.otpContainer}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                      <View
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}
                      >
                        <Text style={styles.cellText}>
                          {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                      </View>
                    )}
                  />
                </View>
                {errors.otp && touched.otp && (
                  <Text style={styles.errorText}>{errors.otp}</Text>
                )}
                {otpValidationError && (
                  <Text style={styles.errorText}>{errors.otp}</Text>
                )}
                <View style={styles.footerContainer}>
                  {/* <TouchableOpacity
                  onPress={handleButtonPress}
                  style={styles.btnContainer}
                  activeOpacity={1}
                > */}
                  <LargeButton
                    onButtonPress={handleButtonPress}
                    buttonText="Continue"
                    // characterLength={values.otp.length}
                    // requiredLength={CELL_COUNT}
                    disabled={values.otp.length !== CELL_COUNT}
                  />
                  {/* </TouchableOpacity> */}

                  <TouchableOpacity onPress={resendOTP}>
                    <Text
                      style={{ fontSize: 12, marginRight: 5, marginTop: 15 }}
                    >
                      Didn’t receive OTP Code?
                      <Text> </Text>
                      <Text style={styles.signUpText}>Resend Code</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default OtpInput;
