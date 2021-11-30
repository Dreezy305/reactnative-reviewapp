import React from "react";
import Header from "../shared/header";
import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      headerTitle: () => <Header />,
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#eee",
      height: 60,
      paddingTop: 20,
    },
  },
});

export default AboutStack;
