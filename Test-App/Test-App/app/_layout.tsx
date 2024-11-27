import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Screens } from "@/utility-functions/types";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Black: require("../assets/fonts/PublicSans-Black.ttf"),
    BlackItalic: require("../assets/fonts/PublicSans-BlackItalic.ttf"),
    Bold: require("../assets/fonts/PublicSans-Bold.ttf"),
    BoldItalic: require("../assets/fonts/PublicSans-BoldItalic.ttf"),
    ExtraBold: require("../assets/fonts/PublicSans-ExtraBold.ttf"),
    ExtraBoldItalic: require("../assets/fonts/PublicSans-ExtraBoldItalic.ttf"),
    ExtraLight: require("../assets/fonts/PublicSans-ExtraLight.ttf"),
    ExtraLightItalic: require("../assets/fonts/PublicSans-ExtraLightItalic.ttf"),
    Italic: require("../assets/fonts/PublicSans-Italic.ttf"),
    Light: require("../assets/fonts/PublicSans-Light.ttf"),
    LightItalic: require("../assets/fonts/PublicSans-LightItalic.ttf"),
    Medium: require("../assets/fonts/PublicSans-Medium.ttf"),
    MediumItalic: require("../assets/fonts/PublicSans-MediumItalic.ttf"),
    Regular: require("../assets/fonts/PublicSans-Regular.ttf"),
    SemiBold: require("../assets/fonts/PublicSans-SemiBold.ttf"),
    SemiBoldItalic: require("../assets/fonts/PublicSans-SemiBoldItalic.ttf"),
    Thin: require("../assets/fonts/PublicSans-Thin.ttf"),
    ThinItalic: require("../assets/fonts/PublicSans-ThinItalic.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        <Stack.Screen name={Screens.Home} options={{ headerShown: false }} />
        <Stack.Screen name={Screens.NotFound} />
        <Stack.Screen
          name={Screens.OtpScreen}
          options={{ headerShown: false }}
        />
      </Stack>
    </ThemeProvider>
  );
}
