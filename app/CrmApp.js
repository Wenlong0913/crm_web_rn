
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import {
  createAppContainer,
} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import LoginPage from './views/LoginPage'
import MainPage from './views/MainPage'
// function AppIndex(props) {
//   const { pf } = props;
//   return (
//     <SafeAreaView>
//       <View>
//         <Text>当前模拟器  {pf.OS}</Text>
//       </View>
//     </SafeAreaView>
//   )
// }

// const AppIndex = createBottomTabNavigator({
//   login:{
//     screen: LoginPage,

//   },
//   main:{
//     screen: MainPage,
//   }
// },{
//   //设置TabNavigator的位置
//   tabBarPosition: 'bottom',
//   //是否在更改标签时显示动画
//   animationEnabled: true,
//   //是否允许在标签之间进行滑动
//   swipeEnabled: true,
//   //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
//   backBehavior: "none",
// })
const AppIndex = createStackNavigator({
  login: {
    screen: LoginPage,

  },
  main: {
    screen: MainPage,
  }
});
const AppContainer = createAppContainer(AppIndex);
export default AppContainer;