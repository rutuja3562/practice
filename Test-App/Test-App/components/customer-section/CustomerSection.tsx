// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, TouchableOpacity } from "react-native";
// import { styles } from "./styles";
// import { SubHeader } from "../sub-header/SubHeader";
// import CircleWithPlusIcon from "@/assets/svg-icons/CircleWithPlusIcon";
// import { router } from "expo-router";
// import { Screens } from "@/utility-functions/types";
// import ArrowDown from "@/assets/svg-icons/ArrowDown";
// import { MaterialIcons } from "@expo/vector-icons";
// // ------------------------------------------------------------------------------------

// // commented by Rutuja 13 nov

// // import {
// //   generateRandomColor,
// //   getInitials,
// // } from "@/utility-functions/utilities";
// // import {
// //   fetchCustomers,
// //   useCustomersClientData_Authorised,
// //   useCustomersClientData_Ready,
// //   useIsCustomersClientState_Authorised,
// //   useIsCustomersClientState_Ready,
// //   useIsCustomersClientState_UnAuthorised,
// // } from "@/actors/customers-client";
// import LoadingSpinner from "../loading-spinner/LoadingSpinner";
// // import { useIsCustomerClientState_Authorised } from "@/actors/customer-client";
// import { Color, Styles } from "@/assets/theme";
// import ArrowUp from "@/assets/svg-icons/ArrowUp";
// import LargeButton from "../large-button/LargeButton";
// import SmallButtonOne from "../small-button-one/SmallButtonOne";
// import {
//   generateRandomColor,
//   getInitials,
// } from "@/utility-functions/utilities";

// type Customer = {
//   id: string;
//   name: string;
//   initial: string;
//   color?: string;
// };

// type MoreButton = {
//   id: string;
//   name: string;
//   initial: string;
//   isMore: boolean;
// };

// type CustomerItemType = Customer | MoreButton;

// const addInitialsAndColor = (customers: any[]) => {
//   return customers.map((customer) => {
//     return {
//       ...customer,
//       initial: getInitials(customer.name),
//       color: generateRandomColor(),
//     };
//   });
// };

// const CustomerItem = ({ id, name, initial, color }: Customer) => {
//   return (
//     <View style={[styles.avatarContainer]}>
//       <View
//         style={[
//           styles.avatar,
//           {
//             backgroundColor: color || Color.VeryLightGrey,
//             borderWidth: 1,
//             borderColor: Color.MediumGrey,
//           },
//         ]}
//       >
//         <Text style={styles.avatarText}>{initial}</Text>
//       </View>
//       <Text style={styles.customerName} numberOfLines={1}>
//         {name}
//       </Text>
//     </View>
//   );
// };

// const isMoreButton = (item: CustomerItemType): item is MoreButton => {
//   return (item as MoreButton).isMore !== undefined;
// };

// const CustomerSection = () => {
//   const [showAll, setShowAll] = useState(false);

//   const customersAuthorised = useIsCustomersClientState_Authorised();
//   const [allCustomers, setAllCustomers] = useState<Customer[]>([]);

//   const displayedCustomers = showAll ? allCustomers : allCustomers.slice(0, 9);

//   const customersWithMoreButton: CustomerItemType[] =
//     allCustomers.length > 9
//       ? [
//           ...displayedCustomers,
//           { id: "more", name: "More", initial: "More", isMore: true },
//         ]
//       : displayedCustomers;

//   useEffect(() => {
//     if (customersAuthorised) {
//       // console.log("customersAuthorised", customersAuthorised);
//       fetchCustomers("", "", 1, 10);
//     }
//   }, [customersAuthorised]);
//   // const customersReady = useIsCustomersClientState_Ready();

//   const customersReadyData = useCustomersClientData_Ready();

//   useEffect(() => {
//     // console.log("customersReady", customersReadyData);
//     if (customersReadyData)
//       setAllCustomers(
//         customersReadyData?.customers.map((customer: any) => {
//           return {
//             id: customer.id,
//             name: customer.name,
//             initial: getInitials(customer.name),
//             color: generateRandomColor(),
//           };
//         }) ?? []
//       );
//   }, [customersReadyData]);
//   if (!customersReadyData) return <LoadingSpinner />;
//   return (
//     <>
//       {allCustomers.length > 0 ? (
//         <View style={[styles.container]}>
//           <FlatList
//             data={customersWithMoreButton}
//             numColumns={5}
//             keyExtractor={(item) => item.id}
//             style={styles.flatList}
//             contentContainerStyle={styles.flatListContent}
//             renderItem={({ item }) =>
//               isMoreButton(item) ? (
//                 <TouchableOpacity
//                   style={styles.moreButtonContainer}
//                   onPress={() => setShowAll(!showAll)}
//                 >
//                   <View style={styles.moreAvatar}>
//                     {!showAll ? <ArrowDown /> : <ArrowUp />}
//                   </View>
//                   <Text style={styles.moreText}>
//                     {showAll ? "Less" : "More"}
//                   </Text>
//                 </TouchableOpacity>
//               ) : (
//                 <CustomerItem
//                   id={item?.id}
//                   name={item?.name}
//                   initial={item?.initial}
//                   color={item?.color}
//                 />
//               )
//             }
//           />
//         </View>
//       ) : (
//         <>
//           <View style={[styles.noCustomerButtonContainer]}>
//             <View style={[styles.noCustomerButtonInnerContainer]}>
//               <SmallButtonOne
//                 buttonText="Add Customers"
//                 onButtonPress={() => console.log("Button clicked")}
//               />
//             </View>
//           </View>
//         </>
//       )}
//     </>
//   );
// };

// export default CustomerSection;
