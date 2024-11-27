//---------------------------------------------------------------------------------
// File: /components/header-one/HeaderOne.tsx
//---------------------------------------------------------------------------------

import { useNavigation, useRouter } from "expo-router";
import { styles } from "./styles";
import { Text, TouchableOpacity, View } from "react-native";
// @ts-ignore
import BackIcon from "@/assets/svg-icons/BackIcon";
import { Styles } from "@/assets/theme";

//---------------------------------------------------------------------------------

function HeaderOne({
  title,
  setAuthClientState,
  stateToUpdate,
  onRightIconPress,
  onLeftIconPress,
}: {
  title?: string;
  setAuthClientState?: any;
  stateToUpdate?: any;
  onRightIconPress?: () => void;
  onLeftIconPress: () => void;
}) {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <View style={[styles.header]}>
      <TouchableOpacity
        style={styles.backArrow}
        onPress={() => onLeftIconPress()}
      >
        <BackIcon />
      </TouchableOpacity>
      {title && (
        <TouchableOpacity style={styles.skipButton} onPress={onRightIconPress}>
          <Text style={styles.title}>{title ?? ""}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

//---------------------------------------------------------------------------------

export default HeaderOne;

//---------------------------------------------------------------------------------
