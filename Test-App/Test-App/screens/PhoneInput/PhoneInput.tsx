import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "./styles";
// @ts-ignore
import welcomeImage from "../../assets/images/HERO-IMAGE.png";
// @ts-ignore
import welcomeTextImage from "../../assets/images/task-e.pn";
import LargeButton from "../../components/large-button/LargeButton";
// import { sendOtp } from "@/actors/auth-client";
import CloseIcon from "@/assets/svg-icons/CloseIcon";
import CustomPhoneInput from "@/components/custom-phone-input/CustomPhoneInput";
import TextAndDescription from "@/components/text-and-description/TextAndDescription";
import { Styles } from "@/assets/theme";
// @ts-ignore
import splashNoBg from "@/assets/images/splash-no-bg.png";

const phoneValidationSchema = Yup.object().shape({
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number is not valid")
    .required("Phone number is required"),
});

const PhoneInput = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSignIn = (values: { phone: string }) => {
    console.log("Values", values.phone);
    // sendOtp(values.phone);
  };

  return (
    <Formik
      initialValues={{ phone: "8075720035" }}
      validationSchema={phoneValidationSchema}
      onSubmit={handleSignIn}
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
        const handleClearPhone = () => {
          setFieldValue("phone", "");
          setErrorMessage("");
        };

        // Function to handle input change
        const handlePhoneChange = (text: string) => {
          setFieldValue("phone", text);

          if (text.length === 10) {
            setErrorMessage("");
          } else {
            setErrorMessage("");
          }
        };

        // Function to handle button press
        const handleButtonPress = () => {
          if (values.phone.length === 0) {
            setErrorMessage("Phone number is required.");
          } else if (values.phone.length < 10) {
            setErrorMessage("Phone number is not valid.");
          } else {
            setErrorMessage("");
            handleSubmit();
          }
        };

        return (
          <View style={[Styles.screen]}>
            <View style={styles.container}>
              <Image source={welcomeImage} style={styles.welcomeImage} />
              <Image source={splashNoBg} style={styles.welcomeTextImage} />
              <View style={styles.shadowContainer}>
                <TextAndDescription
                  topText="Get Going"
                  bottomText="Login or signup"
                />
                <CustomPhoneInput
                  phoneValue={values.phone}
                  onPhoneChange={handlePhoneChange}
                  onPhoneBlur={handleBlur("phone")}
                  clearPhone={handleClearPhone}
                  errorMessage={
                    errors.phone && touched.phone ? errors.phone : ""
                  }
                />

                {errorMessage ? (
                  <Text style={styles.errorText}>{errorMessage}</Text>
                ) : null}
              </View>
              <View style={styles.footerContainer}>
                {/* <TouchableOpacity
                onPress={handleButtonPress}
                style={styles.btnContainer}
                activeOpacity={1}
              > */}
                <LargeButton
                  buttonText="Continue"
                  onButtonPress={handleButtonPress}
                  // characterLength={values.phone.length}
                  // requiredLength={10}
                  disabled={values.phone.length !== 10}
                />
                {/* </TouchableOpacity> */}

                <Text style={styles.helpText}>
                  By clicking, I accept the <Text></Text>
                  <Text style={styles.linkText}>Terms & Conditions</Text> &{" "}
                  <Text></Text>
                  <Text style={styles.linkText}>Privacy Policy</Text>.
                </Text>
              </View>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default PhoneInput;
