import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/homeStack";
// import Home from "./screens/home";
import { useFonts } from "expo-font";

export default function App() {
  const fontsLoaded = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  // const Stack = createStackNavigator();

  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return <AppLoading />;
  }
}
