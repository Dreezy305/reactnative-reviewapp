import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Navigator from "./routes/homeStack";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/home";

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);

  return <Navigator />;
}
