import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import LargeButton from "@/components/LargeButton/LargeButton";
import CloseIcons from "@/assets/svg-icons/CloseIcon";
import { Formik } from "formik";
import * as Yup from "yup";

const AddVendorOne = () => {
  const handleSignIn = (values: { phone: string }) => {
    console.log("Values", values.phone);
    // sendOtp(values.phone);
  };

  const phoneValidationSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number is not valid")
      .required("Phone number is required"),
  });

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
      }) => (
        <View style={styles.container}>
          <ScrollView style={styles.scrollContainer}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => {}}>
                <CloseIcons />
              </TouchableOpacity>
            </View>
            <View style={styles.vendorOneContainer}>
              <Text style={{ marginBottom: 10 }}>Mobile number</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                placeholderTextColor="#000"
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
              />
              {errors.phone && touched.phone && (
                <Text style={styles.errorText}>{errors.phone}</Text>
              )}
            </View>
          </ScrollView>
          <View style={styles.buttonContainer}>
            <LargeButton buttonText="Continue" onButtonPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  );
};

export default AddVendorOne;
