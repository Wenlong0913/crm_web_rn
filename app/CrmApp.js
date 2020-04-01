
import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { DrawerItems, DrawerActions, createDrawerNavigator } from 'react-navigation-drawer';

import LoginPage from './views/LoginPage';
import MainPage from './views/MainPage';

// 侧边抽屉配置
const RouteConfigs = {
  drawer1: {
    screen: LoginPage,
    navigationOptions: {
      drawerLabel: '抽屉1',
      drawerIcon: (
        <Image source={require('./imgs/crm_module_btn_sunpeople.png')} />
      ),
    },
  },
  drawer2: {
    screen: MainPage,
    navigationOptions: {
      drawerLabel: '抽屉2',
      drawerIcon: (
        <Image source={require('./imgs/crm_module_btn_sunpeople.png')} />
      ),
    },
  },

};
const DrawerNavigatorConfig = {
  animationEnabled: true,
  initialRouteName: 'drawer1',
  contentComponent: (props) => (
    <ScrollView>
      <SafeAreaView forceInset>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  ),
  drawerPosition: 'left', // 抽屉在左边还是右边
  contentOptions: {
    activeTintColor: "yellow",//选中item状态的文字颜色；
    activeBackgroundColor: "red",//选中item的背景色；
    // inactiveTintColor:"green",//未选中item状态的文字颜色；
    // inactiveBackgroundColor:"cyan",//未选中item的背景色；
    labelStyle: {//定义item文字的样式；
      fontSize: 16,
    },
    iconContainerStyle: {//定义item图标容器的样式；
      opacity: 1,
    },
    itemStyle: {//定义item的样式；
      borderBottomWidth: 0.5,
      borderBottomColor: 'rgb(237, 226, 226)',
    },
  },
};
// 抽屉创建
const DrawerStack = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
// 进入之后 title 显示的是 抽屉的配置 head title 配置
// toggleDrawer 切换
// closeDrawer 关闭
// openDrawer 打开
DrawerStack.navigationOptions = ({ navigation }) => {
  return {
    title: 'CRM-WEB-APP',
    // headerTruncatedBackTitle: 'CRM',
    tabBarOptions: {
      activeBackgroundColor: 'red',
    },
    headerLeft: _ => (
      <View>
        <TouchableHighlight
        style={{marginLeft: 10}}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}>
          <Image source={require('./imgs/crm_rncrm_module__filter.png')} />
        </TouchableHighlight>
      </View>
    ),
  };
};

// navigation 配置跳转
const pages = {
  login: {
    screen: LoginPage,
  },
  main: {
    screen: MainPage,
  },
  drawer1: {
    screen: DrawerStack,
  },

}

const AppIndex = createStackNavigator(
  {
    ...pages
  },
  {
    initialRouteName: 'drawer1',
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
    },
  }
);
const AppContainer = createAppContainer(AppIndex);


export default AppContainer;