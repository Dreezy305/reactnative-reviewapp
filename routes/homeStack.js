import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetail from "../screens/reviewDetail";
import Header from "../shared/header";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation}) => {
      return  {
        headerTitle: () => <Header navigation={ navigation}/>
    },
    },
  },
  ReviewDetail: {
    screen: ReviewDetail,
    navigationOptions: {
      title: "Review Details",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#eee",
      height: 60,
    },
  },
});

export default HomeStack;
