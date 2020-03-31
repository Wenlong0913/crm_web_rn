
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  NativeModules,
  TouchableHighlight,
  Platform,
} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { DrawerItems, DrawerActions, createDrawerNavigator } from 'react-navigation-drawer';

import LoginPage from './views/LoginPage';
import MainPage from './views/MainPage';

const CustomDrawerContentComponent = props => {
  const { navigation } = props;
  return (
    <ScrollView>
      {/* <SafeAreaView
        style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never' }}
      > */}
      <View>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
          <Image source={require('./imgs/crm_module_btn_sunpeople.png')} />
        </TouchableOpacity>
      </View>
      <DrawerItems {...props} />
      {/* </SafeAreaView> */}
    </ScrollView>
  );
};
// 侧边栏
const RouteConfigs = {
  page1: {
    screen: LoginPage,
    navigationOptions: {
      drawerLabel: 'page1',
      drawerIcon: (
        <Image source={require('./imgs/crm_module_btn_sunpeople.png')} />
      ),
    },
  },
  page2: {
    screen: MainPage,
    navigationOptions: {
      drawerLabel: 'page2',
      drawerIcon: (
        <Image source={require('./imgs/crm_module_btn_sunpeople.png')} />
      ),
    },
  },

};
const DrawerNavigatorConfig = {
  animationEnabled: true,
  initialRouteName: 'page1',
  contentComponent: CustomDrawerContentComponent,
  // drawerWidth:Dimensions.get('window').width *0.9, // 抽屉宽
  drawerPosition: 'left', // 抽屉在左边还是右边
  contentOptions: {
    labelStyle: {
      fontSize: 16,
      color: 'rgb(104, 38, 38)',
    },
    activeBackgroundColor: '#fff',
    iconContainerStyle: {
      opacity: 1,
    },
    itemStyle: {
      borderBottomWidth: 0.5,
      borderBottomColor: 'rgb(237, 226, 226)',
    },
  },
};

const DrawerStack = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
DrawerStack.navigationOptions = ({navigation, screenProps}) => {
  return {
    title: 'CRM',
    headerTruncatedBackTitle: 'CRM',
    tabBarOptions: {
      activeBackgroundColor: '#fff',
    },
    headerLeft: (
      <View>
        <TouchableHighlight
          onPress={() => {
            navigation.goBack();
          }}>
           <Image source={require('./imgs/crm_module_btn_sunpeople.png')} />
        </TouchableHighlight>
      </View>
    ),
  };
};

// 配置页面
const pages = {
  login: {
    screen: LoginPage,
  },
  main: {
    screen: MainPage,
  },
  left: {
    screen: DrawerStack,
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
    },
  }
);



const AppContainer = createAppContainer(AppIndex);
export default AppContainer;