import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
  Text,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  DrawerItems,
  DrawerActions,
  createDrawerNavigator,
} from 'react-navigation-drawer';
import IconIntroduce from './views/IconIntroduce';//图示介绍
import BasicData from './views/BasicData'; //基本资料
import CustomersBackground from './views/CustomersBackground'; //客户背景
import Gambling from './views/Gambling'//过往博彩
import Credit from './views/Credit'//信贷
import Schedule from './views/Schedule'//行程
import ShoppingRecord from './views/ShoppingRecord'//购物记录
import CustomerContact from './views/CustomerContact'//客户接触
import Appointment from './views/Appointment'//客户约见
import Dynamic from './views/Dynamic'//入场动态
import Courtesy from './views/Courtesy'//礼遇
import SessionAnalyse from './views/SessionAnalyse'//场次分析
import AccountAnalyse from './views/AccountAnalyse'//户口分析
import ConsumeAnalyse from './views/ConsumeAnalyse'//消费分析
import Achievement from './views/Achievement'//业绩
import Complaints from './views/Complaints'//投诉
import Demands from './views/Demands'//需求
import Opinion from './views/Opinion'//意见




// 侧边抽屉配置
const RouteConfigs = {
  drawer1: {
    screen: BasicData,
    navigationOptions: {
      drawerLabel: '基本资料',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__profile.png')}
        />
      ),
    },
  },
  drawer2: {
    screen: CustomersBackground,
    navigationOptions: {
      drawerLabel: '客户背景',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__combined.png')}
        />
      ),
    },
  },
  drawer3: {
    screen: Gambling,
    navigationOptions: {
      drawerLabel: '过往博彩经验',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__count.png')}
        />
      ),
    },
  },
  drawer4: {
    screen: Credit,
    navigationOptions: {
      drawerLabel: '信贷',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__credit.png')}
        />
      ),
    },
  },
  drawer5: {
    screen: Schedule,
    navigationOptions: {
      drawerLabel: '行程',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__schedule.png')}
        />
      ),
    },
  },
  drawer6: {
    screen: ShoppingRecord,
    navigationOptions: {
      drawerLabel: '购物记录',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__shoppingrecord.png')}
        />
      ),
    },
  },
  drawer7: {
    screen:CustomerContact ,
    navigationOptions: {
      drawerLabel: '客户接触',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__customer_contact.png')}
        />
      ),
    },
  },
  drawer8: {
    screen: Appointment,
    navigationOptions: {
      drawerLabel: '客户约见',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__Appointment.png')}
        />
      ),
    },
  },
  drawer9: {
    screen: Dynamic,
    navigationOptions: {
      drawerLabel: '入场动态',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__entre.png')}
        />
      ),
    },
  },
  drawer10: {
    screen: Courtesy,
    navigationOptions: {
      drawerLabel: '礼遇',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_module_present_20X20select.png')}
        />
      ),
    },
  },
  drawer11: {
    screen: SessionAnalyse,
    navigationOptions: {
      drawerLabel: '场次分析',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__exit.png')}
        />
      ),
    },
  },
  drawer12: {
    screen: AccountAnalyse,
    navigationOptions: {
      drawerLabel: '户口分析',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__data.png')}
        />
      ),
    },
  },
  drawer13: {
    screen: ConsumeAnalyse,
    navigationOptions: {
      drawerLabel: '消费分析',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__consume.png')}
        />
      ),
    },
  },
  drawer14: {
    screen: Achievement,
    navigationOptions: {
      drawerLabel: '业绩',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__achievement.png')}
        />
      ),
    },
  },
  drawer15: {
    screen: Complaints,
    navigationOptions: {
      drawerLabel: '投诉',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__complaints.png')}
        />
      ),
    },
  },
  drawer16: {
    screen: Demands,
    navigationOptions: {
      drawerLabel: '需求',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__demands.png')}
        />
      ),
    },
  },
  drawer17: {
    screen: Opinion,
    navigationOptions: {
      drawerLabel: '需求',
      drawerIcon: (
        <Image
          source={require('./imgs/sidebarIcon/crm_rncrm_module__opinion.png')}
        />
      ),
    },
  },
};
const DrawerNavigatorConfig = {
  animationEnabled: true,
  initialRouteName: 'drawer1',
  contentComponent: props => (
    <ScrollView>
      <SafeAreaView forceInset>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  ),
  drawerPosition: 'left', // 抽屉在左边还是右边
  contentOptions: {
    activeTintColor: 'yellow', //选中item状态的文字颜色；
    activeBackgroundColor: 'red', //选中item的背景色；
    // inactiveTintColor:"green",//未选中item状态的文字颜色；
    // inactiveBackgroundColor:"cyan",//未选中item的背景色；
    labelStyle: {
      //定义item文字的样式；
      fontSize: 16,
    },
    iconContainerStyle: {
      //定义item图标容器的样式；
      opacity: 1,
    },
    itemStyle: {
      //定义item的样式；
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
DrawerStack.navigationOptions = ({navigation}) => {
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
    headerRight: _ => (
      <View>
        <TouchableHighlight
          style={{ marginRight: 10 }}
          onPress={() => {
            navigation.navigate('iconIntroduce')
          }}>
          <View>
            <Image source={require('./imgs/crm_rncrm_module__intro.png')} />
          </View>
        </TouchableHighlight>
      </View>
    ),
  };
};

// navigation 配置跳转
const pages = {
  // 图示介绍
  iconIntroduce:{
    screen: IconIntroduce,
  },
  drawer1: {
    screen: DrawerStack,
  },
  basicData: {
    screen: BasicData,
  },
  customersBackground: {
    screen: CustomersBackground,
  },
  gambling:{
    screen:Gambling
  },
  Credit:{
    screen:Credit
  },
  Schedule:{
    screen:Schedule
  },
  ShoppingRecord:{
    screen:ShoppingRecord
  },
  CustomerContact:{
    screen:CustomerContact
  },
  Appointment:{
    screen:Appointment
  },
  Dynamic:{
    screen:Dynamic
  },
  Courtesy:{
    screen:Courtesy
  },
  SessionAnalyse:{
    screen:SessionAnalyse
  },
  AccountAnalyse:{
    screen:AccountAnalyse
  },
  ConsumeAnalyse:{
    screen:ConsumeAnalyse
  },
  Achievement:{
    screen:Achievement
  },
  Complaints:{
    screen:Complaints
  },
  Demands:{
    screen:Demands
  },
  Opinion:{
    screen:Opinion
  }
};

const AppIndex = createStackNavigator(
  {
    ...pages,
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
  },
);
const AppContainer = createAppContainer(AppIndex);

export default AppContainer;
