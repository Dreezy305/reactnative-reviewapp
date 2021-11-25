import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/drawer";
import { useFonts } from "expo-font";

export default function App() {
  const fontsLoaded = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return <AppLoading />;
  }
}
