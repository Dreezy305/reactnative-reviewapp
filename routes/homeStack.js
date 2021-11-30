import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetail from "../screens/reviewDetail";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home screen",
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
