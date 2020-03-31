
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

function LoginPage(props) {
  const { navigation } = props;
  return (
    <SafeAreaView>
      <View>
        <Text onPress={() => { navigation.navigate('main') }}>首页</Text>
      </View>
    </SafeAreaView>
  )
}
// LoginPage.navigationOptions = ({ navigation }) => {
//   return {
//     title: '首页',
//     headerLeft: _ =>{
//       return (
//         <View>
//         <TouchableHighlight
//           onPress={() => {
//             navigation.dispatch(DrawerActions.openDrawer());
//           }}>
//           <Image source={require('../../imgs/crm_module_btn_sunpeople.png')} />
//         </TouchableHighlight>
//       </View>
//       )
//     }
//   }
// };
export default LoginPage;