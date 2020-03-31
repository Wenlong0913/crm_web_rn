
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

function LoginPage(props) {
  const { navigation } = props;
  return (
    <SafeAreaView>
      <View>
        <Text onPress={() => { navigation.navigate('main') }}>登陆页面</Text>
      </View>
    </SafeAreaView>
  )
}
export default LoginPage;