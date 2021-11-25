import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetail from "../screens/reviewDetail";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home screen",
      // headerStyle: {
      //   backgroundColor: "#eee",
      // },
    },
  },
  ReviewDetail: {
    screen: ReviewDetail,
    navigationOptions: {
      title: "Review Details",
      // headerStyle: {
      //   backgroundColor: "#f4511e",
      // },
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: {
      backgroundColor: "#eee",
    },
  },
});

export default createAppContainer(HomeStack);
