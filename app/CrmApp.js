
import React from 'react';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginPage from './views/LoginPage';
import MainPage from './views/MainPage';


// 配置页面
const pages = {
  login: {
    screen: LoginPage,
  },
  main: {
    screen: MainPage,
  },
}

const AppIndex = createStackNavigator(
  {
    ...pages
  },
  {
    initialRouteName: 'login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
      },
      headerTitleContainerStyle,
    },
  }
);

const headerTitleContainerStyle =
  Platform.OS === 'android'
    ? {
      left: 0,
    }
    : {};


const AppContainer = createAppContainer(AppIndex);
export default AppContainer;