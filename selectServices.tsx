import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import LargeButton from "../large-button/LargeButton";
import { styles } from "./styles";
import HeaderOne from "../header-one/HeaderOne";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  ProfileCompletionScreenParams,
  ProfileCompletionScreens,
} from "@/utility-functions/types";
import { unload, updateServices } from "@/actors/profile-client";
import { Color } from "@/assets/theme";
import CustomCheckBox from "../custom-check-box/CustomCheckBox";
import { router } from "expo-router";

type Service = {
  id: string;
  name: string;
  parentServiceId: string | null;
};

type TransformedService = {
  parent: { id: string; name: string; isParent: true };
  children: { id: string; name: string; isParent: false }[];
};

export default function SelectService({
  data,
  screen,
  setScreen,
}: ProfileCompletionScreenParams) {
  const [checkedParents, setCheckedParents] = useState<string[]>([]);
  const [checkedChildren, setCheckedChildren] = useState<string[]>([]);
  const [transformedServices, setTransformedServices] =
    useState<TransformedService[]>();

  const handleParentCheck = (parent: { id: string; name: string }) => {
    if (checkedParents.includes(parent.id)) {
      setCheckedParents(checkedParents.filter((id) => id !== parent.id));
      const updatedCheckedChildren = checkedChildren.filter((childId) => {
        const parentService = transformedServices?.find(
          (ts) => ts.parent.id === parent.id
        );
        return !parentService?.children.some((child) => child.id === childId);
      });
      setCheckedChildren(updatedCheckedChildren);
    } else {
      setCheckedParents([...checkedParents, parent.id]);
      const parentService = transformedServices?.find(
        (ts) => ts.parent.id === parent.id
      );
      const newCheckedChildren =
        parentService?.children.map((child) => child.id) || [];
      setCheckedChildren([...checkedChildren, ...newCheckedChildren]);
    }
  };
  const handleChildCheck = (child: { id: string; name: string }) => {
    if (checkedChildren.includes(child.id)) {
      setCheckedChildren(checkedChildren.filter((id) => id !== child.id));
      const parentService = transformedServices?.find((ts) =>
        ts.children.some((c) => c.id === child.id)
      );
      if (parentService) {
        const allChildrenChecked = parentService.children.every((c) =>
          checkedChildren.includes(c.id)
        );
        if (!allChildrenChecked) {
          setCheckedParents(
            checkedParents.filter((id) => id !== parentService.parent.id)
          );
        }
      }
    } else {
      setCheckedChildren([...checkedChildren, child.id]);
      const parentService = transformedServices?.find((ts) =>
        ts.children.some((c) => c.id === child.id)
      );
      if (parentService) {
        const allChildrenChecked = parentService.children.every((c) =>
          checkedChildren.includes(c.id)
        );
        if (allChildrenChecked) {
          setCheckedParents([...checkedParents, parentService.parent.id]);
        }
      }
    }
  };

  const transformServices = (services: Service[]): TransformedService[] => {
    const grouped: { [key: string]: TransformedService } = {};

    services.forEach((service) => {
      if (service.parentServiceId === null) {
        grouped[service.id] = {
          parent: { id: service.id, name: service.name, isParent: true },
          children: [],
        };
      } else {
        if (grouped[service.parentServiceId]) {
          grouped[service.parentServiceId].children.push({
            id: service.id,
            name: service.name,
            isParent: false,
          });
        }
      }
    });
    return Object.values(grouped);
  };

  const skipButtonPress = () => {
    setScreen(ProfileCompletionScreens.UploadKYCDocuments);
  };
  useEffect(() => {
    if (data.meta.services) {
      const transformed = transformServices(data.meta.services as Service[]);
      setTransformedServices(transformed);
    }
    if (data.userDetails.vendorServices) {
      const initialCheckedParents: string[] = [];
      const initialCheckedChildren: string[] = [];

      data.userDetails.vendorServices.forEach((service: any) => {
        const isParent = data.meta.services?.find(
          (s: any) => s.id === service.serviceId && s.parentServiceId === null
        );

        if (isParent) {
          initialCheckedParents.push(service.serviceId);
        } else {
          initialCheckedChildren.push(service.serviceId);
          const parent = data.meta.services?.find(
            (s: any) => s.id === service.parentServiceId
          );
          if (parent && !initialCheckedParents.includes(parent.id)) {
            const siblings = data.meta.services?.filter(
              (s: any) => s.parentServiceId === parent.id
            );
            const allSiblingsSelected = siblings?.every((sibling: any) =>
              data.userDetails.vendorServices.some(
                (vs: any) => vs.serviceId === sibling.id
              )
            );
            if (allSiblingsSelected) {
              initialCheckedParents.push(parent.id);
            }
          }
        }
      });

      setCheckedParents(initialCheckedParents);
      setCheckedChildren(initialCheckedChildren);
    }
  }, [data.meta.services, data.userDetails.vendorServices]);

  useEffect(() => {
    return () => {
      unload();
    };
  }, [data.userDetails.vendorServices]);

  const renderCustomCheckbox = (checked: boolean, onPress: () => void) => (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.customCheckbox,
        {
          backgroundColor: checked ? Color.Purple : Color.Purple,
          borderColor: checked ? Color.Purple : Color.LightGrey,
          borderWidth: 1,
        },
      ]}
    >
      {checked && <Icon name="check" size={20} color="#fff" />}
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.headerContainer}>
        <HeaderOne
          title="Skip"
          onLeftIconPress={() => router.push("/")}
          onRightIconPress={skipButtonPress}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Select an option</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat
          condimentum vehicula.
        </Text>
        <ScrollView
          style={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {transformedServices?.map((item, index) => (
            <View key={index}>
              <View style={styles.checkboxContainer}>
                <Text style={styles.checkboxTextParent}>
                  {item.parent.name}
                </Text>
                <CustomCheckBox
                  checked={
                    checkedParents.includes(item.parent.id)
                    // transformedServices
                    //   ? !!transformedServices[0].parent.id
                    // : checkedParents.includes(item.parent.id)
                  }
                  onPress={() => handleParentCheck(item.parent)}
                />
              </View>
              <View style={styles.childContainer}>
                {item.children?.map((c, idx) => (
                  <View
                    key={idx}
                    style={[
                      styles.checkboxChildContainer,
                      styles.childCheckbox,
                    ]}
                  >
                    <Text style={styles.checkboxText}>{c.name}</Text>
                    <CustomCheckBox
                      checked={
                        checkedChildren.includes(c.id)
                        // transformedServices
                        //   ? !!transformedServices[1].children[index].id
                        //   : checkedChildren.includes(c.id)
                      }
                      onPress={() => handleChildCheck(c)}
                    />
                  </View>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
        {checkedChildren.length > 0 && (
          <View
            style={{ display: "flex", alignItems: "center", marginBottom: 45 }}
          >
            <LargeButton
              buttonText={"Continue"}
              onButtonPress={() => {
                updateServices([
                  ...checkedParents.map((id) => ({ id, name: "" })),
                  ...checkedChildren.map((id) => ({ id, name: "" })),
                ]);
                setScreen(ProfileCompletionScreens.UploadKYCDocuments);
              }}
            />
          </View>
        )}
      </View>
    </>
  );
}
