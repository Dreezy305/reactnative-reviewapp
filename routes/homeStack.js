import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetail from "../screens/reviewDetail";

const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetail: {
    screen: ReviewDetail,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
