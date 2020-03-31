
import React from 'react';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import LoginPage from './views/LoginPage'
import MainPage from './views/MainPage'

const AppIndex = createStackNavigator({
  login: {
    screen: LoginPage,
  },
  main: {
    screen: MainPage,
  },

}, {
  initialRouteName: 'login',

});
const AppContainer = createAppContainer(AppIndex);
export default AppContainer;